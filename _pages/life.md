---
layout: archive
title: "大学生活"
permalink: /life/
author_profile: false
sidebar:
  nav: "docs"
classes: wide
header:
  overlay_color: "#333" # 顶部的深色背景
  text: "这里是我在大学期间的生活记录，包括社团活动、旅行见闻与摄影作品。" # ✅ 核心修改：文字移到了这里
  text_color: "#fff"    # 强制文字白色
---

<div class="life-grid-wrapper">
  {% assign entries = site.portfolio | reverse %}
  {% for post in entries %}
    {% include archive-single.html type="grid" teaser=post.header.teaser %}
  {% endfor %}
</div>