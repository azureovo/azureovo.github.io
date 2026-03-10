---
layout: archive
title: "简历"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}



<div class="profile-header" style="display: flex; gap: 40px; align-items: center; margin-bottom: 40px; flex-wrap: wrap;">
  
  <div class="profile-avatar" style="flex: 0 0 280px;">
    <img src="/images/profile.png" alt="张清安" style="box-shadow: 0 4px 9px rgba(0,0,0,0.1);">
  </div>

  <div class="profile-info" style="flex: 1; min-width: 250px;">
    <h1 style="margin-top: 0; margin-bottom: 0.1em; font-size: 2.8em; font-weight: 700; color: #222;">张清安</h1>
    
    <p style="font-size: 1.2em; color: #555; margin-bottom: 1em; font-weight: 500;">
      不想每次都在触底反弹，所以要时刻保持意识。
    </p>

    <div style="display: flex; flex-wrap: wrap; gap: 15px; font-size: 0.95em; color: #666; margin-bottom: 1.5em; line-height: 1.6; align-items: center;">
    
      <span style="display: flex; align-items: center; white-space: nowrap;">
        <i class="fas fa-map-marker-alt" style="margin-right: 6px;"></i> 广州＆深圳
      </span>
      
      <span style="color: #ddd;">|</span>

      <span style="display: flex; align-items: center; white-space: nowrap;">
        <i class="fas fa-phone" style="margin-right: 6px;"></i> +86 18150070267
      </span>
      
      <span style="color: #ddd;">|</span>

      <span style="display: flex; align-items: center; white-space: nowrap;">
        <i class="fab fa-weixin" style="margin-right: 6px;"></i> 18150070267
      </span>
      
      <span style="color: #ddd;">|</span>
      
      <span style="display: flex; align-items: center; white-space: nowrap;">
        <i class="fas fa-envelope" style="margin-right: 6px;"></i> 
        <a href="mailto:zhangqan@mail2.sysu.edu.cn" style="color: #555; text-decoration: none; border-bottom: 1px dotted #999;">zhangqan@mail2.sysu.edu.cn</a>
      </span>

    </div>

    <div style="font-size: 1.05em; line-height: 1.7; color: #333;">
      <p style="margin-bottom: 0.8em;">
        我是<a href="https://cse.sysu.edu.cn/" style="color: #0056b3;">中山大学计算机学院</a>（CSE）<a href="https://www.sysu-imsl.com/" style="color: #0056b3;">智能与多媒体科学实验室</a>（2027应届）硕士生，师从<a href="https://cse.sysu.edu.cn/teacher/GaoChengying" style="color: #0056b3;">高成英教授</a>。此前，我在<a href="https://sise.uestc.edu.cn/" style="color: #0056b3;">电子科技大学信软学院</a>完成了本科学业。我的研究兴趣主要集中在非受控极端场景物体三维重建、多模态幻觉缓解，等等。我同时有丰富的产品从事经验且热爱产品岗职，目前正在寻找AI产品相关岗位。
      </p>
    </div>
  </div>
</div>



## 🔥 Grad News

* **[2026.02]** 进入<a href="https://ieg.tencent.com/2023/index.html" style="color: #0056b3;">腾讯IEG</a>，开始技术产品工作！
* **[2025.12]** 给<a href="https://www.yuanshen.com/#/" style="color: #0056b3;">米哈游</a>外包产策一年了！
* **[2025.09]** 当上了中山大学计算机学院量子计算与软件所研究生第二党支部组织委员。
* **[2024.12]** 进入智能与多媒体科学实验室，开始学习三维重建相关内容。
* **[2024.09]** 保研至中山大学。

---

## 📝 Publications

{% for post in site.publications reversed %}
  {% include archive-publication.html %}
{% endfor %}

<div style="clear:both;"></div>

---

## 🎓 Education

{% include education-item.html
   logo="/images/中山大学-logo-2048px.png"
   institution="中山大学(SYSU)"
   title="计算机技术，硕士"
   date="2024 - 至今"
%}

{% include education-item.html
   logo="/images/电子科技大学-logo-2048px.png"
   institution="电子科技大学(UESTC)"
   title="软件工程，学士"
   date="2020 - 2024"
%}
---

## 💻 Experience


{% include experience-item.html
   logo="/images/tencent.png"
   role="技术产品"
   company="腾讯互娱(IEG)-服务拓展组"
   date="2026.02 - 至今"
   details="/files/成绩单.pdf"
%}

{% include experience-item.html
   logo="/images/mhylogo.png"
   role="产品体验分析与策略优化"
   company="米哈游(MiHoYo)-AI功能测试组"
   date="2025.06 - 2025.12"
   details="/files/成绩单.pdf"
%}

{% include experience-item.html
   logo="/images/航天科工logo.png"
   role="软件工程师"
   company="四川航天技术研究院(CASIC)"
   date="2023.05 - 2023.07"
   details="/files/成绩单.pdf"
%}

{% include experience-item.html
   logo="/images/天空logo黑色.png"
   role="游戏产策"
   company="数字天空(Digital Sky)"
   date="2021.09 - 2021.11"
   details="/files/成绩单.pdf"
%}

---

## 📸 University Life

我在电子科技大学信软学院读的软件工程专业，最终保研成绩为91.05分，专业排名5/121。“大学生活”专栏，记录我在电子科技大学一些组织活动，不全涵盖，只记录让我开心或有价值的内容。其他一些按钮记录我本科获奖情况。

<div style="display: flex; flex-wrap: wrap; gap: 15px; justify-content: center; margin-top: 25px;">
  
  <a href="/life/" class="btn btn-gray">
    ✨ 大学生活
  </a>

  <a href="/files/成绩单.pdf" target="_blank" class="btn btn-gray">
    📄 成绩单
  </a>
  
  <a href="/files/四六级成绩.pdf" target="_blank" class="btn btn-gray">
    ✏ 四六级
  </a>
  
  <a href="/files/比赛获奖.pdf" target="_blank" class="btn btn-gray">
    🏆 比赛获奖
  </a>
  
  <a href="/files/其他获奖及证书.pdf" target="_blank" class="btn btn-gray">
    📜 其他荣誉
  </a>

</div>

<style>
.btn-gray {
    /* 默认状态：深灰色背景 + 白色文字 */
    background-color: #555 !important;
    color: #fff !important;
    
    /* 统一的尺寸和形状 */
    padding: 10px 22px !important;
    font-size: 0.95em !important;
    border-radius: 30px !important; /* 胶囊圆角 */
    text-decoration: none !important;
    display: flex !important;
    align-items: center !important;
    border: none !important;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1) !important;
    transition: all 0.2s ease !important;
}

/* 鼠标悬停状态：变得更深一点，浮起 */
.btn-gray:hover {
    background-color: #333 !important; /* 悬停变黑灰 */
    transform: translateY(-2px);       /* 微微上浮 */
    box-shadow: 0 6px 12px rgba(0,0,0,0.2) !important;
}
</style>