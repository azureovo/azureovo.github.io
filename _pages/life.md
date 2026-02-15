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

<div class="life-grid-wrapper">
  {% assign entries = site.portfolio | reverse %}
  {% for post in entries %}
    {% include archive-life.html type="grid" teaser=post.header.teaser %}
  {% endfor %}
</div>