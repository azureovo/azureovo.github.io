---
layout: archive
title: "大学生活"
permalink: /life/
author_profile: false  # ❌ 关闭侧边栏，让页面更干净
sidebar:
  nav: "docs"          # 禁用默认侧边栏导航
classes: wide          # ✅ 启用宽屏模式
header:
  overlay_color: "#333" 
---

这里是我在大学期间的生活记录，包括社团活动、旅行见闻与摄影作品。

<div class="life-grid-wrapper">
  {% assign entries = site.portfolio | reverse %}
  {% for post in entries %}
    {% include archive-single.html type="grid" teaser=post.teaser %}
  {% endfor %}
</div>