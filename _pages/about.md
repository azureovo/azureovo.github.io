---
permalink: /
title: "About Me"
excerpt: "About Me"
author_profile: false  # 👈 关键修改：设置为 false 以隐藏左侧侧边栏
redirect_from: 
  - /about/
  - /about.html
---

<div class="profile-header" style="display: flex; gap: 40px; align-items: flex-start; margin-bottom: 40px; flex-wrap: wrap;">
  
  <div class="profile-avatar" style="flex: 0 0 200px;">
    <img src="/images/profile.png" alt="张清安" style="width: 100%; border-radius: 10%; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
  </div>

  <div class="profile-info" style="flex: 1;">
    <h1 style="margin-top: 0; font-size: 2.5em; border-bottom: none;">张清安</h1>
    
    <p style="font-size: 1.1em; color: #555; margin-bottom: 1em;">
      <strong>一本正经，万事游戏。</strong>
    </p>

    <div style="font-size: 0.95em; line-height: 1.8;">
      <p style="margin: 0;"><i class="fas fa-map-marker-alt" style="width: 20px; text-align: center;"></i> 中国·广州</p>
      <p style="margin: 0;"><i class="fas fa-university" style="width: 20px; text-align: center;"></i> Uestc 👉 Sysu</p>
      <p style="margin: 0;"><i class="fas fa-envelope" style="width: 20px; text-align: center;"></i> <a href="mailto:zhangqan@mail2.sysu.edu.cn">zhangqan@mail2.sysu.edu.cn</a></p>
      <p style="margin: 0;"><i class="fab fa-github" style="width: 20px; text-align: center;"></i> <a href="https://github.com/azureovo">GitHub: azureovo</a></p>
    </div>

    <p style="margin-top: 1.5em;">
      我是中山大学计算机学院（CSE）的博士生（2025年转博），师从<a href="https://cse.sysu.edu.cn/teacher/GaoChengying">高成英教授</a>。此前，我在电子科技大学完成了本科学业。
    </p>
    <p>
      我的研究兴趣主要集中在**多模态大模型（Vision-Language Models）**、**多智能体系统（Multi-Agent Systems）**以及**模型幻觉（Hallucination）**的缓解。目前我正在进行关于 VLM 幻觉抑制的研究 (Project HERO)。
    </p>
  </div>
</div>

---

## 🔥 News

* **[2026.02]** 论文 *HERO: Hallucination-Entropy Regulated Optimization* 正在投稿 CVPR 2026。
* **[2025.12]** 此时我正在进行多模态多智能体系统的探索。
* **[2025.09]** 成为中山大学计算机学院博士研究生。

---

## 📝 Selected Publications

{% for post in site.publications reversed %}
  {% include archive-single.html type="list" %}
{% endfor %}

* **HERO: Hallucination-Entropy Regulated Optimization for Large Vision-Language Models** **Yang Xiongfeng**, et al.  
  *Under Review at CVPR 2026* [[PDF]](#) [[Code]](https://github.com/azureovo)

<div style="clear:both;"></div>

---

## 🎓 Education

* **Ph.D. in Computer Science**, Sun Yat-sen University (SYSU), 2025 - Present
* **M.S. in Computer Technology**, Sun Yat-sen University (SYSU), 2024 - 2025 (Transferred to Ph.D.)
* **B.E. in Software Engineering**, UESTC, 2020 - 2024

---

## 💻 Experience

* **User Experience Engineer**, Major Gaming Company (Shanghai), 2025.01 - 2025.12
* **Product Manager Intern**, HuiChuang Cultural Tourism, 2022.12 - 2023.04