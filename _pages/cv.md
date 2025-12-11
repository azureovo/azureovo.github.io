---
layout: archive
title: "个人情况速览"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

教育经历
======
* **中山大学**, 2027应届生, 硕士
  * 专业：计算机技术
  * 方向：图形学
* **电子科技大学**, 2024应届生, 本科
  * 专业：软件工程
  * 方向排名：4/121（前3%）

工作经历
======
* **知名头部游戏公司（上海） / 产品体验顾问及外部质量分析 / 2024年06月 – 2024年12月**
  * **产品验收与体验评估**：参与千万级用户规模产品的早期黑盒测试，从用户旅程即User Journey视角对核心功能逻辑、新手引导及UI交互进行全流程验收。
  * **痛点挖掘与反馈闭环**：不仅限于功能性Bug的发现，更侧重于输出定性体验报告，识别交互断点与逻辑冗余，协助产研团队优化产品易用性。
  * **质量风险控制**：在敏捷迭代流程中，针对特定业务场景执行高强度的边界测试，有效拦截上线前的体验降级风险。

论文相关
======
* **基于生成式先验的高保真3D逆向渲染框架 / 3D＆AIGC算法研究 / CVPR2026在投**
  * **论文概述**：探索基于3DGS的下一代3D资产重建管线，旨在解决工业界在复杂光照环境下自动化建模的卡点问题。
  * **技术路线选择**：摒弃纯NeRF的高算力路径，采用“3DGS + 生成式模型”的轻量化组合，平衡了“重建质量”与“渲染速度”的核心矛盾，将训练时间控制在 1.5 小时内。
  * **模型鲁棒性提升**：针对“光照-材质”强耦合难题，利用预训练Diffusion Model的先验知识进行解耦，大幅降低了对输入数据量的依赖，提升了算法在真实场景的泛化性 。
  * **量化产出**： 相比基线模型（TensoIR, GS-IR等），在PSNR等指标上实现全面超越 ，证明了该技术路线在VR/AR内容生产中的商业潜力。

项目相关
======

Skills
======
* Skill 1
* Skill 2
  * Sub-skill 2.1
  * Sub-skill 2.2
  * Sub-skill 2.3
* Skill 3

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams
