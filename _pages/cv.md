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
* **中山大学** / 2027应届生 / 硕士
  * 专业：计算机技术
  * 方向：图形学
* **电子科技大学** / 2024应届生 / 本科
  * 专业：软件工程
  * 方向排名：**4** / 121（前 **3%** ）

工作经历
======
* **知名头部游戏公司（上海） / 用户体验及外部质量评估 / 2025年01月 – 2025年12月**
  * **产品验收与体验评估**：参与千万级用户规模产品的早期黑盒测试，从用户旅程即User Journey视角对核心功能逻辑、新手引导及UI交互进行全流程验收。
  * **痛点挖掘与反馈闭环**：不仅限于功能性Bug的发现，更侧重于输出定性体验报告，识别交互断点与逻辑冗余，协助产研团队优化产品易用性。
  * **质量风险与边缘测试**：在敏捷迭代流程中，针对特定业务场景执行高强度的边界测试，有效拦截上线前的体验降级风险。

论文相关
======
* **基于生成式先验的高保真3D逆向渲染框架 / 算法产品负责人 / CVPR2026在投**
  * **需求分析**：针对传统3D重建方案在高光复杂光照场景下材质丢失、伪影严重的痛点，定义了新一代物理感知的逆渲染产品路径。
  * **方案设计**：设计了包含混合可见性分解、生成式光照先验等模块的完整技术架构，成功解决了材质与光照解耦的难题。
  * **效果体现**：在基准数据集上进行测试，核心指标PSNR等不仅达到SOTA，且在视觉真实感上显著优于对比基线（如TensoIR等）。
  * **价值产出**：该方案支持实时渲染，大幅缩短了3D资产生产周期，为元宇宙/游戏资产自动化生成提供了可落地的光照技术。

项目相关
======
* **互联大师·工业智能网关及管理平台（从0到1全栈产品） / 产品设计师 & 项目管理 / 2023年08月 – 2023年12月**
  * **痛点分析**：通过调研工业现场，发现Modbus、Fins、PPI等异构协议无法互通，导致设备上云成本高昂。
  * **协议设计**：设计并定义了ICCP通用工控协议标准，实现了N种私有协议的统一映射，将协议转换复杂度O(N)，极大提升了系统的扩展性。完成整个PRD文件的撰写。
  * **产品架构**：协同规划了“边缘侧网关（树莓派）+ 云端管理平台（Web）+ 移动端上位机”的端到端产品架构，实现了设备远程监控、日志审计及黑名单安全管理功能。
  * **项目推进**：协调软硬件开发资源，还原真实工业场景进行压力测试，成功验证了方案的可行性并获得全国大学生计算机大赛国二。

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
