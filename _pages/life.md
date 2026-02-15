---
layout: archive
title: "大学生活"
permalink: /life/
author_profile: true
header:
  overlay_color: "#333" # 顶部的背景色，你可以自己改
---

这里是我在大学期间的生活记录。

{% assign entries = site.portfolio | reverse %}
{% for post in entries %}
  {% include archive-single.html type="grid" teaser=post.teaser %}
{% endfor %}