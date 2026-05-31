---
layout: archive
title: ""
permalink: /3dscene/
author_profile: false
classes: wide
---

<!-- Hero Banner -->
<div class="gs-hero">
  <div class="gs-hero-content">
    <h1 class="gs-hero-title">🎬 3DGS研究</h1>
    <p class="gs-hero-subtitle">基于 3D Gaussian Splatting 技术的实时场景渲染与交互演示。<br>包含网页端与 Unity 引擎两种展示方式，及相关研究报告。</p>
    <a href="/" class="gs-hero-back">
      <i class="fas fa-arrow-left"></i> 返回首页
    </a>
  </div>
</div>

<!-- Hub Cards -->
<div class="gs-hub">
  <a href="/3dscene/web/" class="gs-card web">
    <div class="gs-card-icon">🌐</div>
    <div class="gs-card-title">网页展示</div>
    <div class="gs-card-desc">TriSplat Interactive Demo<br>浏览器内实时 3D 场景交互</div>
    <span class="gs-card-badge">Available</span>
  </a>

  <a href="/3dscene/unity/" class="gs-card unity">
    <div class="gs-card-icon">🎮</div>
    <div class="gs-card-title">Unity 展示</div>
    <div class="gs-card-desc">3DGS 在 Unity 引擎中的集成效果<br>游戏场景交互演示</div>
    <span class="gs-card-badge">Coming Soon</span>
  </a>

  <a href="/3dscene/research/" class="gs-card research">
    <div class="gs-card-icon">📄</div>
    <div class="gs-card-title">研究报告</div>
    <div class="gs-card-desc">3DGS 技术调研与实验报告<br>应用场景探索与分析</div>
    <span class="gs-card-badge">Coming Soon</span>
  </a>
</div>

<style>
/* ============================================================
   3DGS HUB PAGE — Premium Design
   ============================================================ */

/* Hero Banner (matching life page style) */
.gs-hero {
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4);
  border-radius: 24px;
  padding: 3rem 2.5rem;
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out both;
}

.gs-hero::before {
  content: '';
  position: absolute;
  top: -50%; right: -20%;
  width: 400px; height: 400px;
  background: rgba(255,255,255,0.08);
  border-radius: 50%;
  pointer-events: none;
}

.gs-hero::after {
  content: '';
  position: absolute;
  bottom: -30%; left: -10%;
  width: 300px; height: 300px;
  background: rgba(255,255,255,0.05);
  border-radius: 50%;
  pointer-events: none;
}

.gs-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.gs-hero-title {
  font-size: 2.2em;
  font-weight: 900;
  color: white;
  margin: 0 0 0.6em;
  letter-spacing: -0.02em;
}

.gs-hero-subtitle {
  font-size: 1em;
  color: rgba(255,255,255,0.85);
  line-height: 1.8;
  margin-bottom: 1.5em;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.gs-hero-back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 22px;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 9999px;
  color: white !important;
  font-weight: 600;
  font-size: 0.9em;
  text-decoration: none !important;
  transition: all 0.2s ease;
}

.gs-hero-back:hover {
  background: rgba(255,255,255,0.25);
  transform: translateX(-3px);
}

/* Hub Cards */
.gs-hub {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto;
}

.gs-card {
  flex: 1;
  min-width: 280px;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  background: var(--bg-card, #1a1d24);
  border: 1px solid var(--border-color, rgba(255,255,255,0.08));
  border-radius: 20px;
  text-decoration: none !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.gs-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.3s;
}

.gs-card.web::before {
  background: radial-gradient(circle at 50% 0%, rgba(92, 226, 199, 0.12), transparent 70%);
}
.gs-card.unity::before {
  background: radial-gradient(circle at 50% 0%, rgba(143, 182, 255, 0.12), transparent 70%);
}
.gs-card.research::before {
  background: radial-gradient(circle at 50% 0%, rgba(245, 158, 11, 0.12), transparent 70%);
}

.gs-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255,255,255,0.18);
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}
.gs-card:hover::before {
  opacity: 1;
}

.gs-card-icon {
  font-size: 3.5rem;
  margin-bottom: 1.2rem;
  transition: transform 0.3s;
}
.gs-card:hover .gs-card-icon {
  transform: scale(1.12);
}

.gs-card-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary, #fff);
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
}

.gs-card-desc {
  font-size: 0.9rem;
  color: var(--text-muted, rgba(255,255,255,0.5));
  text-align: center;
  line-height: 1.5;
}

.gs-card-badge {
  display: inline-block;
  margin-top: 1rem;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.gs-card.web .gs-card-badge {
  background: rgba(92, 226, 199, 0.15);
  color: #5ce2c7;
  border: 1px solid rgba(92, 226, 199, 0.25);
}
.gs-card.unity .gs-card-badge {
  background: rgba(143, 182, 255, 0.15);
  color: #8fb6ff;
  border: 1px solid rgba(143, 182, 255, 0.25);
}
.gs-card.research .gs-card-badge {
  background: rgba(245, 158, 11, 0.15);
  color: #f59e0b;
  border: 1px solid rgba(245, 158, 11, 0.25);
}

.gs-card.unity,
.gs-card.research {
  opacity: 0.55;
}
.gs-card.unity:hover,
.gs-card.research:hover {
  opacity: 0.75;
}

/* Animations */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .gs-card {
    background: #1a1d24;
    border-color: rgba(255,255,255,0.08);
  }
}

@media (max-width: 600px) {
  .gs-hero {
    padding: 2rem 1.5rem;
    border-radius: 16px;
    margin-bottom: 2rem;
  }
  .gs-hero-title {
    font-size: 1.6em;
  }
  .gs-hero-subtitle {
    font-size: 0.9em;
  }
  .gs-hub {
    gap: 1rem;
  }
  .gs-card {
    padding: 2rem 1.5rem;
  }
  .gs-card-icon {
    font-size: 2.5rem;
  }
  .gs-card-title {
    font-size: 1.2rem;
  }
}
</style>
