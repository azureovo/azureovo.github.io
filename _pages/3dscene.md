---
layout: single
title: "3DGS场景展示"
permalink: /3dscene/
author_profile: false
classes: wide
header:
  overlay_color: "#0a0b0a"
  overlay_filter: "0.5"
---

<style>
  .gs-hub {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    padding: 3rem 1rem;
    max-width: 900px;
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
    background: linear-gradient(145deg, #1a1d24, #12151a);
    border: 1px solid rgba(255,255,255,0.08);
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
    color: #fff;
    margin-bottom: 0.5rem;
    letter-spacing: -0.01em;
  }

  .gs-card-desc {
    font-size: 0.9rem;
    color: rgba(255,255,255,0.5);
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

  .gs-card.unity {
    opacity: 0.55;
  }
  .gs-card.unity:hover {
    opacity: 0.75;
  }

  @media (max-width: 600px) {
    .gs-hub {
      padding: 1.5rem 0.5rem;
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

<div class="gs-hub">
  <a href="/3dscene/web/" class="gs-card web">
    <div class="gs-card-icon">🌐</div>
    <div class="gs-card-title">网页展示</div>
    <div class="gs-card-desc">TriSplat Interactive Demo<br>浏览器内实时 3D 场景驾驶</div>
    <span class="gs-card-badge">Available</span>
  </a>

  <a href="/3dscene/unity/" class="gs-card unity">
    <div class="gs-card-icon">🎮</div>
    <div class="gs-card-title">Unity 展示</div>
    <div class="gs-card-desc">3DGS 在 Unity 引擎中的集成效果<br>游戏场景交互演示</div>
    <span class="gs-card-badge">Coming Soon</span>
  </a>
</div>
