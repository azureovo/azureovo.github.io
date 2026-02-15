---
layout: archive
title: "大学生活"
permalink: /life/
author_profile: true
header:
  overlay_color: "#333" 
---

这里是我在大学期间的生活记录，包括社团活动、旅行见闻与摄影作品。

<div class="grid__wrapper">
  {% assign entries = site.portfolio | reverse %}
  {% for post in entries %}
    {% include archive-single.html type="grid" teaser=post.teaser %}
  {% endfor %}
</div>