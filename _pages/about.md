---
permalink: /
title: "About Me"
excerpt: "About Me"
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---

<!-- ========== HERO PROFILE CARD ========== -->
<div class="hero-profile">
  
  <div class="hero-avatar">
    <img src="/images/profile.png" alt="张清安">
  </div>

  <div class="hero-info">
    <h1 class="hero-name">
      张清安
      <span class="hero-name-en">Qing'an Zhang</span>
    </h1>
    
    <p class="hero-tagline">不想每次都在触底反弹，所以要时刻保持意识。</p>

    <div class="hero-meta">
      <span class="hero-meta-item">
        <i class="fas fa-map-marker-alt"></i> 广州 & 深圳
      </span>
      <span class="hero-meta-item">
        <i class="fas fa-graduation-cap"></i> 中山大学 · 硕士在读
      </span>
      <a href="mailto:zhangqan@mail2.sysu.edu.cn" class="hero-meta-item">
        <i class="fas fa-envelope"></i> zhangqan@mail2.sysu.edu.cn
      </a>
      <a href="https://github.com/azureovo" class="hero-meta-item" target="_blank">
        <i class="fab fa-github"></i> azureovo
      </a>
    </div>

    <div class="hero-bio">
      <p>
        我是<a href="https://cse.sysu.edu.cn/">中山大学计算机学院</a>（CSE）2027应届硕士生。此前，我在<a href="https://sise.uestc.edu.cn/">电子科技大学信软学院</a>完成了本科学业。我的研究兴趣主要集中在非受控极端场景物体三维重建、多模态幻觉缓解等方向。我同时有丰富的产品从事经验且热爱产品岗职，目前正在寻找AI产品相关岗位。
      </p>
    </div>

    <div class="interest-tags">
      <span class="interest-tag"><span class="tag-icon">🔮</span> 三维重建</span>
      <span class="interest-tag"><span class="tag-icon">🧠</span> 多模态大模型</span>
      <span class="interest-tag"><span class="tag-icon">🎮</span> 游戏产品</span>
      <span class="interest-tag"><span class="tag-icon">🤖</span> AI 产品</span>
      <a href="/books/" class="interest-tag interest-tag--action"><span class="tag-icon">📖</span> 阅读 <i class="fas fa-arrow-right" style="font-size:0.7em; margin-left:2px; opacity:0.6;"></i></a>
    </div>
  </div>
</div>

<!-- ========== NEWS ========== -->
<div class="section-heading" id="news">
  <span class="icon">🔥</span> 最新动态
</div>

<ul class="news-timeline">
  <li>
    <span class="news-date">2026.06</span>
    进入<a href="https://www.bytedance.com/zh/">字节抖音</a>，开始暑期产品实习！
  </li>
  <li>
    <span class="news-date">2026.04</span>
    🎉 一作论文 <strong>IR-HGP</strong> 被 <strong>CVPR 2026</strong> 接收为 <span style="background:linear-gradient(135deg,#f59e0b,#ef4444);color:#fff;padding:2px 8px;border-radius:4px;font-weight:700;font-size:0.85em;">Highlight</span> ！
  </li>
  <li>
    <span class="news-date">2026.02</span>
    进入<a href="https://ieg.tencent.com/2023/index.html">腾讯IEG</a>，开始技术产品工作！
  </li>
  <li>
    <span class="news-date">2025.12</span>
    给<a href="https://www.yuanshen.com/#/">米哈游</a>外包产策半年了！
  </li>
  <li>
    <span class="news-date">2025.09</span>
    成为中山大学计算机学院量子计算与软件所研究生第二党支部组织委员。
  </li>
  <li>
    <span class="news-date">2024.12</span>
    进入智能与多媒体科学实验室，开始学习三维重建相关内容。
  </li>
  <li>
    <span class="news-date">2024.09</span>
    保研至中山大学。
  </li>
</ul>

<div class="section-separator"></div>

<!-- ========== PUBLICATIONS ========== -->
<div class="section-heading" id="publications">
  <span class="icon">📝</span> 学术论文
</div>

{% for post in site.publications reversed %}
  {% include archive-publication.html %}
{% endfor %}

<div style="clear:both;"></div>

<div class="section-separator"></div>

<!-- ========== EDUCATION ========== -->
<div class="section-heading" id="education">
  <span class="icon">🎓</span> 教育背景
</div>

{% include education-item.html
   logo="/images/中山大学-logo-2048px.png"
   institution="中山大学 (SYSU)"
   title="计算机技术 · 硕士"
   date="2024 - 至今"
%}

{% include education-item.html
   logo="/images/电子科技大学-logo-2048px.png"
   institution="电子科技大学 (UESTC)"
   title="软件工程 · 学士"
   date="2020 - 2024"
%}

<div class="section-separator"></div>

<!-- ========== EXPERIENCE ========== -->
<div class="section-heading" id="experience">
  <span class="icon">💼</span> 工作经历
</div>



{% include experience-item.html
   logo="/images/tencent.png"
   role="技术产品"
   company="腾讯IEG · 技术中台 · 服务拓展组"
   date="2026.02 - 2026.04"
   details="/404code/"
%}

{% include experience-item.html
   logo="/images/mhylogo.png"
   role="产品分析与策略优化"
   company="米哈游 · 在研游戏 · 功能测试组"
   date="2025.06 - 2025.12"
   details="/404code/"
%}

{% include experience-item.html
   logo="/images/航天科工logo.png"
   role="软件工程师"
   company="四川航天技术研究院 (CASIC)"
   date="2023.05 - 2023.07"
   details="/404code/"
%}

{% include experience-item.html
   logo="/images/天空logo黑色.png"
   role="游戏产策"
   company="数字天空 (Digital Sky)"
   date="2021.09 - 2021.11"
   details="/404code/"
%}

<div class="section-separator"></div>

<!-- ========== UNIVERSITY LIFE ========== -->
<div class="section-heading">
  <span class="icon">📸</span> 大学时光
</div>

<div class="life-description">
  我在电子科技大学信软学院读的软件工程专业，最终保研成绩为 <span class="highlight">91.05</span> 分，专业排名 <span class="highlight">5/121</span>。"大学生活"专栏记录了我在电子科技大学的一些组织活动，只记录让我开心或有价值的内容。
</div>

<div class="life-buttons">
  <a href="/life/" class="life-btn">
    ✨ 大学生活
  </a>
  <a href="/files/成绩单.pdf" target="_blank" class="life-btn secondary">
    📄 成绩单
  </a>
  <a href="/files/四六级成绩.pdf" target="_blank" class="life-btn secondary">
    ✏️ 四六级
  </a>
  <a href="/files/比赛获奖.pdf" target="_blank" class="life-btn secondary">
    🏆 比赛获奖
  </a>
  <a href="/files/其他获奖及证书.pdf" target="_blank" class="life-btn secondary">
    📜 其他荣誉
  </a>
</div>

<!-- ========== Sparkle FX Visual Effects ========== -->
<script src="{{ base_path }}/assets/js/sparkle-fx.js"></script>

<!-- ========== Back-to-top + Scroll Animation Script ========== -->
<button class="back-to-top" id="backToTop" onclick="window.scrollTo({top:0,behavior:'smooth'})">
  <i class="fas fa-arrow-up"></i>
</button>

<script>
// Back to top
const btn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  btn.classList.toggle('visible', window.scrollY > 400);
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// Navbar scroll effect
const masthead = document.querySelector('.masthead');
window.addEventListener('scroll', () => {
  if (masthead) masthead.classList.toggle('scrolled', window.scrollY > 20);
});
</script>
