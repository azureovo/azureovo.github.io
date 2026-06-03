FROM python:3.10-slim

RUN pip install --no-cache-dir \
    fastapi uvicorn python-multipart \
    huggingface_hub \
    torch torchvision --index-url https://download.pytorch.org/whl/cpu \
    git+https://github.com/apple/ml-sharp.git

RUN mkdir -p /app/model_assets
WORKDIR /app

COPY app.py viewer.html Watermark.png /app/

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "7860"]
