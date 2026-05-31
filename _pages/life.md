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

<style>
/* Force override any theme grid conflicts */
.life-grid-wrapper {
  display: grid !important;
  grid-template-columns: repeat(2, 1fr) !important;
  gap: 30px !important;
  float: none !important;
  clear: both !important;
}
.life-grid-wrapper .grid__item {
  float: none !important;
  clear: none !important;
  width: 100% !important;
  min-width: 0 !important;
  margin: 0 !important;
}
@media screen and (max-width: 768px) {
  .life-grid-wrapper {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 10px !important;
    width: 100% !important;
  }
}
</style>

<a href="/" class="back-to-home-btn">
  <i class="fas fa-arrow-left"></i> 返回首页
</a>

<div class="life-grid-wrapper">
  {% assign entries = site.portfolio | reverse %}
  {% for post in entries %}
    {% include archive-life.html type="grid" teaser=post.header.teaser %}
  {% endfor %}
</div>