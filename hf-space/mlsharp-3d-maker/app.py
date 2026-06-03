import os
import shutil
import uuid
import threading
import asyncio
from concurrent.futures import ThreadPoolExecutor

from fastapi import FastAPI, UploadFile, File
from fastapi.responses import FileResponse, HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

# ================= 自动下载模型 =================
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ASSETS_DIR = os.path.join(BASE_DIR, "model_assets")
os.makedirs(ASSETS_DIR, exist_ok=True)
CHECKPOINT = os.path.join(ASSETS_DIR, "sharp_2572gikvuh.pt")

def download_model():
    """首次启动时从 HuggingFace 下载模型"""
    if os.path.exists(CHECKPOINT):
        print(f"✅ 模型已存在: {CHECKPOINT}")
        return
    print("📥 正在从 HuggingFace 下载模型 sharp_2572gikvuh.pt...")
    try:
        from huggingface_hub import hf_hub_download
        path = hf_hub_download(
            repo_id="apple/Sharp",
            filename="sharp_2572gikvuh.pt",
            local_dir=ASSETS_DIR,
            local_dir_use_symlinks=False,
        )
        print(f"✅ 模型下载完成: {path}")
    except Exception as e:
        print(f"⚠️ 自动下载失败: {e}")
        print("请手动下载 sharp_2572gikvuh.pt 到 model_assets/ 目录")

download_model()

# ================= 配置 =================
TEMP_DIR = os.path.join(BASE_DIR, "temp_workspace")
if os.path.exists(TEMP_DIR):
    try:
        shutil.rmtree(TEMP_DIR)
    except Exception:
        pass
os.makedirs(TEMP_DIR, exist_ok=True)

executor = ThreadPoolExecutor(max_workers=2)

# ================= FastAPI =================
app = FastAPI(title="MLSharp 3D Maker")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/files", StaticFiles(directory=TEMP_DIR), name="files")


@app.on_event("shutdown")
def shutdown():
    executor.shutdown(wait=True)


# ── 主页 ──
@app.get("/", response_class=HTMLResponse)
def index():
    return FileResponse(os.path.join(BASE_DIR, "viewer.html"))


# ── 从单一图片生成 3D ──
@app.post("/api/generate/image")
async def generate_from_image(file: UploadFile = File(...)):
    if not os.path.exists(CHECKPOINT):
        return JSONResponse({"error": "模型未就绪，请稍后再试"}, status_code=503)

    task_id = str(uuid.uuid4())[:8]
    task_dir = os.path.join(TEMP_DIR, task_id)
    os.makedirs(task_dir, exist_ok=True)

    input_path = os.path.join(task_dir, f"input_{file.filename}")
    with open(input_path, "wb") as f:
        f.write(await file.read())

    output_path = os.path.join(task_dir, "output")

    def run():
        import subprocess
        import sys
        cmd = [
            sys.executable, "-m", "sharp",
            "--checkpoint", CHECKPOINT,
            "--input", input_path,
            "--output", output_path,
            "--image",
        ]
        try:
            subprocess.run(cmd, check=True, timeout=300, capture_output=True, text=True)
        except Exception as e:
            print(f"❌ 任务 {task_id} 失败: {e}")

    executor.submit(run)
    return JSONResponse({"task_id": task_id, "status": "processing"})


# ── 查询结果 ──
@app.get("/api/result/{task_id}")
def get_result(task_id: str):
    task_dir = os.path.join(TEMP_DIR, task_id)
    output_glb = os.path.join(task_dir, "output.glb")
    output_ply = os.path.join(task_dir, "output.ply")

    for p in [output_glb, output_ply]:
        if os.path.exists(p):
            ext = os.path.splitext(p)[1]
            return FileResponse(p, media_type="application/octet-stream",
                               filename=f"sharp3d_{task_id}{ext}")

    return JSONResponse({"status": "processing"}, status_code=202)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=int(os.environ.get("PORT", 7860)))
