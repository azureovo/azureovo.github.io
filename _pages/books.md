---
permalink: /books/
title: "阅读"
author_profile: false
layout: single
---

<!-- ========== PASSWORD LOCK ========== -->
<div id="password-gate" class="pw-gate">
  <div class="pw-card">
    <div class="pw-icon">🔒</div>
    <h2 class="pw-title">私密内容</h2>
    <p class="pw-subtitle">请输入访问密码</p>
    <div class="pw-input-wrap">
      <input type="password" id="pw-input" class="pw-input" placeholder="输入密码..." autocomplete="off" onkeydown="if(event.key==='Enter')checkPw()">
      <button onclick="checkPw()" class="pw-btn">
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
    <p id="pw-error" class="pw-error" style="display:none;">密码错误，请重试</p>
  </div>
</div>

<!-- ========== BOOKS CONTENT (hidden by default) ========== -->
<div id="books-content" style="display:none;">

  <div class="books-hero">
    <div class="books-hero-inner">
      <h1 class="books-hero-title">📖 我的阅读与思考</h1>
      <a href="/" class="books-back-btn"><i class="fas fa-arrow-left"></i> 返回首页</a>
    </div>
  </div>

  <div class="books-grid">
    {% assign sorted_books = site.books | sort: 'date' | reverse %}
    {% for book in sorted_books %}
    <div class="book-card" onclick="window.open('{{ book.pdf }}','_blank')">
      <div class="book-card-icon">{{ book.icon }}</div>
      <div class="book-card-body">
        <span class="book-card-cat">{{ book.category }}</span>
        <h3 class="book-card-title">{{ book.title }}</h3>
        <p class="book-card-excerpt">{{ book.excerpt }}</p>
        <div class="book-card-footer">
          <span class="book-card-date"><i class="fas fa-calendar-alt"></i> {{ book.date | date: "%Y.%m.%d" }}</span>
          <span class="book-card-read">阅读 PDF <i class="fas fa-external-link-alt"></i></span>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>

</div>

<!-- ========== SCRIPT ========== -->
<script>
function checkPw(){var e=document.getElementById('pw-input').value;if(e==='123456'){document.getElementById('password-gate').style.display='none';document.getElementById('books-content').style.display='block';sessionStorage.setItem('books_auth','1');}else{var r=document.getElementById('pw-error');r.style.display='block';document.getElementById('pw-input').value='';document.getElementById('pw-input').focus();setTimeout(function(){r.style.display='none';},2000);}}
if(sessionStorage.getItem('books_auth')==='1'){document.getElementById('password-gate').style.display='none';document.getElementById('books-content').style.display='block';}
</script>

<!-- ========== STYLES ========== -->
<style>
/* ===== Password Gate ===== */
.pw-gate {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  padding: 2rem;
}

.pw-card {
  text-align: center;
  background: var(--bg-card, #fff);
  border: 1px solid var(--border-color, #e2e8f0);
  border-radius: 24px;
  padding: 3rem 2.5rem;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 10px 40px rgba(0,0,0,0.06), 0 0 60px rgba(99,102,241,0.06);
  animation: fadeInUp 0.6s ease-out both;
}

.pw-icon {
  font-size: 3em;
  margin-bottom: 0.5rem;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.pw-title {
  font-size: 1.4em;
  font-weight: 800;
  color: var(--text-primary, #0f172a);
  margin: 0 0 0.3em;
}

.pw-subtitle {
  font-size: 0.92em;
  color: var(--text-muted, #94a3b8);
  margin-bottom: 1.5em;
}

.pw-input-wrap {
  display: flex;
  gap: 8px;
  max-width: 280px;
  margin: 0 auto;
}

.pw-input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid var(--border-color, #e2e8f0);
  border-radius: 12px;
  font-size: 1em;
  font-family: var(--font-sans, 'Inter', sans-serif);
  outline: none;
  transition: border-color 0.2s;
  background: var(--bg-secondary, #f8fafc);
  color: var(--text-primary, #0f172a);
}

.pw-input:focus {
  border-color: var(--accent, #6366f1);
  box-shadow: 0 0 0 3px rgba(99,102,241,0.12);
}

.pw-btn {
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  font-size: 1em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  flex-shrink: 0;
}

.pw-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(99,102,241,0.35);
}

.pw-error {
  color: #ef4444;
  font-size: 0.85em;
  font-weight: 600;
  margin-top: 1em;
  animation: fadeInUp 0.3s ease-out;
}

/* ===== Books Hero ===== */
.books-hero {
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa);
  border-radius: 24px;
  padding: 3rem 2.5rem;
  margin-bottom: 2.5rem;
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.5s ease-out both;
}

.books-hero::before {
  content: '';
  position: absolute;
  top: -50%; right: -15%;
  width: 350px; height: 350px;
  background: rgba(255,255,255,0.07);
  border-radius: 50%;
  pointer-events: none;
}

.books-hero-inner {
  position: relative;
  z-index: 1;
  text-align: center;
}

.books-hero-title {
  font-size: 2em;
  font-weight: 900;
  color: white;
  margin: 0 0 0.5em;
}

.books-hero-sub {
  font-size: 0.95em;
  color: rgba(255,255,255,0.85);
  line-height: 1.7;
  margin-bottom: 1.2em;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
}

.books-back-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 20px;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 9999px;
  color: white !important;
  font-weight: 600;
  font-size: 0.88em;
  text-decoration: none !important;
  transition: all 0.2s;
}

.books-back-btn:hover {
  background: rgba(255,255,255,0.25);
  transform: translateX(-3px);
}

/* ===== Books Grid ===== */
.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.2rem;
}

/* ===== Book Card ===== */
.book-card {
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
  padding: 1.5rem;
  background: var(--bg-card, #fff);
  border-radius: 16px;
  border: 1px solid var(--border-color, #e2e8f0);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  animation: fadeInUp 0.6s ease-out both;
  position: relative;
  overflow: hidden;
}

.book-card::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 3px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  opacity: 0;
  transition: opacity 0.2s;
}

.book-card:nth-child(1) { animation-delay: 0.05s; }
.book-card:nth-child(2) { animation-delay: 0.12s; }
.book-card:nth-child(3) { animation-delay: 0.19s; }
.book-card:nth-child(4) { animation-delay: 0.26s; }

.book-card:hover {
  border-color: #c7d2fe;
  box-shadow: 0 12px 30px -8px rgba(0,0,0,0.1);
  transform: translateY(-4px);
}

.book-card:hover::before { opacity: 1; }

.book-card-icon {
  font-size: 2.2em;
  flex-shrink: 0;
  width: 56px; height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary, #f1f5f9);
  border-radius: 14px;
  border: 1px solid var(--border-color, #e2e8f0);
}

.book-card-body {
  flex: 1;
  min-width: 0;
}

.book-card-cat {
  display: inline-block;
  font-size: 0.75em;
  font-weight: 700;
  color: #6366f1;
  background: rgba(99,102,241,0.08);
  padding: 3px 10px;
  border-radius: 9999px;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.book-card-title {
  font-size: 1.05em;
  font-weight: 700;
  color: var(--text-primary, #0f172a);
  margin: 0 0 0.4rem;
  line-height: 1.4;
}

.book-card-excerpt {
  font-size: 0.87em;
  color: var(--text-secondary, #475569);
  line-height: 1.6;
  margin: 0 0 0.8rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.book-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.book-card-date {
  font-size: 0.78em;
  color: var(--text-muted, #94a3b8);
  font-family: 'JetBrains Mono', monospace;
}

.book-card-date i { margin-right: 4px; opacity: 0.6; }

.book-card-read {
  font-size: 0.8em;
  font-weight: 600;
  color: #6366f1;
  transition: all 0.2s;
}

.book-card:hover .book-card-read {
  color: #4f46e5;
  transform: translateX(2px);
}

.book-card-read i { margin-left: 4px; font-size: 0.8em; }

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .books-hero { padding: 2rem 1.5rem; border-radius: 16px; }
  .books-hero-title { font-size: 1.5em; }
  .books-grid { grid-template-columns: 1fr; }
  .pw-card { padding: 2rem 1.5rem; }
  .book-card { flex-direction: column; gap: 0.8rem; }
}
</style>
