---
layout: archive
title: ""
permalink: /life/
author_profile: false
classes: wide
---

<!-- Hero Banner -->
<div class="life-hero">
  <div class="life-hero-content">
    <h1 class="life-hero-title">📸 大学时光</h1>
    <p class="life-hero-subtitle">这里是我在大学期间的生活记录，包括社团活动与组织经历。<br>不全涵盖，只记录让我开心或有价值的内容。</p>
    <a href="/" class="life-hero-back">
      <i class="fas fa-arrow-left"></i> 返回首页
    </a>
  </div>
</div>

<!-- Life Cards Grid -->
<div class="life-cards-grid">
  {% assign entries = site.portfolio | reverse %}
  {% for post in entries %}
    {% include archive-life.html type="grid" teaser=post.header.teaser %}
  {% endfor %}
</div>

<style>
/* ============================================================
   LIFE PAGE — Premium Design
   ============================================================ */

/* Hero Banner */
.life-hero {
  background: var(--accent-gradient);
  border-radius: var(--radius-2xl, 24px);
  padding: 3rem 2.5rem;
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out both;
}

.life-hero::before {
  content: '';
  position: absolute;
  top: -50%; right: -20%;
  width: 400px; height: 400px;
  background: rgba(255,255,255,0.08);
  border-radius: 50%;
  pointer-events: none;
}

.life-hero::after {
  content: '';
  position: absolute;
  bottom: -30%; left: -10%;
  width: 300px; height: 300px;
  background: rgba(255,255,255,0.05);
  border-radius: 50%;
  pointer-events: none;
}

.life-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.life-hero-title {
  font-size: 2.2em;
  font-weight: 900;
  color: white;
  margin: 0 0 0.6em;
  letter-spacing: -0.02em;
}

.life-hero-subtitle {
  font-size: 1em;
  color: rgba(255,255,255,0.85);
  line-height: 1.8;
  margin-bottom: 1.5em;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.life-hero-back {
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

.life-hero-back:hover {
  background: rgba(255,255,255,0.25);
  transform: translateX(-3px);
}

/* Cards Grid */
.life-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

/* Individual Life Card */
.life-card {
  background: var(--bg-card, #fff);
  border-radius: var(--radius-lg, 16px);
  border: 1px solid var(--border-color, #e2e8f0);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInUp 0.6s ease-out both;
  position: relative;
}

.life-card:nth-child(1) { animation-delay: 0.05s; }
.life-card:nth-child(2) { animation-delay: 0.1s; }
.life-card:nth-child(3) { animation-delay: 0.15s; }
.life-card:nth-child(4) { animation-delay: 0.2s; }
.life-card:nth-child(5) { animation-delay: 0.25s; }

.life-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--accent-gradient, linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa));
  opacity: 0;
  transition: opacity 0.2s ease;
}

.life-card:hover {
  border-color: var(--accent-lighter, #c7d2fe);
  box-shadow: 0 12px 30px -8px rgba(0,0,0,0.1), 0 0 0 1px rgba(99,102,241,0.05);
  transform: translateY(-5px);
}

.life-card:hover::before {
  opacity: 1;
}

/* Card Image */
.life-card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  background: var(--bg-secondary, #f1f5f9);
}

.life-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.life-card:hover .life-card-image img {
  transform: scale(1.06);
}

/* Card Body */
.life-card-body {
  padding: 1.4rem 1.5rem 1.5rem;
}

.life-card-title {
  font-size: 1.05em;
  font-weight: 700;
  color: var(--text-primary, #0f172a);
  margin: 0 0 0.5rem;
  line-height: 1.4;
}

.life-card-excerpt {
  font-size: 0.9em;
  color: var(--text-secondary, #475569);
  line-height: 1.6;
  margin: 0 0 0.8rem;
}

.life-card-date {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82em;
  font-weight: 600;
  color: var(--accent, #6366f1);
  background: rgba(99, 102, 241, 0.07);
  padding: 4px 12px;
  border-radius: 9999px;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
}

.life-card-date i {
  font-size: 0.85em;
  opacity: 0.7;
}

/* Responsive */
@media (max-width: 768px) {
  .life-hero {
    padding: 2rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: 16px;
  }
  .life-hero-title {
    font-size: 1.6em;
  }
  .life-cards-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .life-card-image {
    height: 180px;
  }
}

@media (max-width: 480px) {
  .life-hero {
    padding: 1.5rem 1.2rem;
    border-radius: 12px;
  }
  .life-hero-title {
    font-size: 1.4em;
  }
  .life-hero-subtitle {
    font-size: 0.9em;
  }
}
</style>
