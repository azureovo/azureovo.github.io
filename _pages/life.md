---
layout: archive
title: "大学生活"
permalink: /life/
author_profile: false
classes: wide
header:
  overlay_color: "#333"
  text: "这里是我在大学期间的生活记录，包括社团活动、旅行见闻与摄影作品。"
  text_color: "#fff"
---

<a href="/" class="back-to-home-btn">
  <i class="fas fa-arrow-left"></i> 返回首页
</a>

<style>
/* 返回键的独立样式 */
.back-to-home-btn {
    display: inline-flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 8px 16px;
    background-color: #f2f3f3; /* 浅灰背景 */
    color: #333 !important;
    border-radius: 20px;       /* 圆角胶囊状 */
    text-decoration: none !important;
    font-weight: bold;
    font-size: 0.95em;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: all 0.2s ease;
}

.back-to-home-btn:hover {
    background-color: #e0e0e0;
    transform: translateX(-3px); /* 悬停时微微向左动 */
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.back-to-home-btn i {
    margin-right: 8px;
}

/* 手机端特别优化：让它固定在屏幕左下角或更明显的位置 (可选) */
/* 这里保持在内容顶部，符合阅读习惯 */
</style>


<div class="life-grid-wrapper">
  {% assign entries = site.portfolio | reverse %}
  {% for post in entries %}
    {% include archive-life.html type="grid" teaser=post.header.teaser %}
  {% endfor %}
</div>