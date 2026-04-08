---
layout: archive
title: "简历"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<!-- ========== NEWS ========== -->
<div class="section-heading">
  <span class="icon">🔥</span> 最新动态
</div>

<ul class="news-timeline">
  <li>
    <span class="news-date">2026.02</span>
    进入<a href="https://ieg.tencent.com/2023/index.html">腾讯IEG</a>，开始技术产品工作！
  </li>
  <li>
    <span class="news-date">2025.12</span>
    给<a href="https://www.yuanshen.com/#/">米哈游</a>外包产策一年了！
  </li>
  <li>
    <span class="news-date">2025.09</span>
    当上了中山大学计算机学院量子计算与软件所研究生第二党支部组织委员。
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
<div class="section-heading">
  <span class="icon">📝</span> 学术论文
</div>

{% for post in site.publications reversed %}
  {% include archive-publication.html %}
{% endfor %}

<div style="clear:both;"></div>

<div class="section-separator"></div>

<!-- ========== EDUCATION ========== -->
<div class="section-heading">
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
<div class="section-heading">
  <span class="icon">💼</span> 工作经历
</div>

{% include experience-item.html
   logo="/images/tencent.png"
   role="技术产品"
   company="腾讯互娱 (IEG) · 服务拓展组"
   date="2026.02 - 至今"
   details="/404code/"
%}

{% include experience-item.html
   logo="/images/mhylogo.png"
   role="产品体验分析与策略优化"
   company="米哈游 (MiHoYo) · AI功能测试组"
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
