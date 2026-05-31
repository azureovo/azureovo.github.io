/**
 * ═══════════════════════════════════════════
 *  ✨ SPARKLE FX — Premium Visual Effects v1.0
 *  Author: WorkBuddy for azureovo.github.io
 *  ═══════════════════════════════════════════
 *
 *  Effects included:
 *  ① Click Star Burst    — 鼠标点击星星爆发
 *  ② Cursor Particle Trail — 鼠标轨迹粒子拖尾
 *  ③ Hero Floating Sparkles — 首屏浮动光点
 *  ④ Button Ripple        — 按钮涟漪点击
 *  ⑤ Text Shimmer         — 文字流光动画
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────
     UTIL: Create DOM element helper
     ───────────────────────────────────────────── */
  function createEl(tag, cls) {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    return el;
  }

  /* ─────────────────────────────────────────────
     UTIL: Get accurate viewport-relative position
     Handles browser zoom, device pixel ratio, and
     CSS transform offsets gracefully.
     ───────────────────────────────────────────── */
  function getViewportPos(e) {
    const rect = (ParticleTrail.container || StarBurst.container || document.body).getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  /* Fallback for early calls before containers exist */
  function rawPos(e) {
    return { x: e.clientX, y: e.clientY };
  }

  /* ─────────────────────────────────────────────
     UTIL: Random in range
     ───────────────────────────────────────────── */
  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  /* ─────────────────────────────────────────────
     PALETTE — Vibrant sparkle colors
     ───────────────────────────────────────────── */
  const COLORS = [
    '#6366f1', // indigo
    '#8b5cf6', // violet
    '#ec4899', // pink
    '#06b6d4', // cyan
    '#10b981', // emerald
    '#f59e0b', // amber
    '#ef4444', // red
    '#a78bfa', // purple-light
  ];

  function randomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  }

  /* ================================================================
     ① CLICK STAR BURST — 鼠标点击产生星星爆发
     ================================================================ */
  const StarBurst = {
    container: null,

    init() {
      this.container = createEl('div', 'sparkle-starburst-layer');
      document.body.appendChild(this.container);
      document.addEventListener('click', this.handleClick.bind(this), { passive: true });
    },

    handleClick(e) {
      // Ignore clicks on interactive elements that already have their own feedback
      if (e.target.closest('a, button, input, textarea, select, .greedy-nav, .back-to-top, [role="button"]')) {
        return;
      }
      const pos = this.container ? getViewportPos(e) : rawPos(e);
      this.burst(pos.x, pos.y);
    },

    burst(x, y) {
      const count = rand(8, 14) | 0;
      for (let i = 0; i < count; i++) {
        this.createStar(x, y);
      }
    },

    createStar(x, y) {
      const star = createEl('span', 'sparkle-star');
      star.textContent = ['✦', '✧', '★', '☆', '✴', '·'][Math.floor(Math.random() * 6)];

      const size = rand(8, 20);
      const color = randomColor();
      const angle = rand(0, Math.PI * 2);
      const velocity = rand(60, 160);
      const life = rand(600, 1200);
      const decay = rand(0.92, 0.98);

      Object.assign(star.style, {
        left: x + 'px',
        top: y + 'px',
        fontSize: size + 'px',
        color: color,
        textShadow: `0 0 ${size}px ${color}, 0 0 ${size * 2}px ${color}40`,
        '--sb-angle': angle + 'rad',
        '--sb-velocity': velocity + 'px',
        '--sb-life': life + 'ms',
        '--sb-decay': decay,
      });

      this.container.appendChild(star);

      // Trigger animation
      requestAnimationFrame(() => star.classList.add('active'));

      setTimeout(() => {
        if (star.parentNode) star.remove();
      }, life + 100);
    },
  };

  /* ================================================================
     ② CURSOR PARTICLE TRAIL — 鼠标移动粒子拖尾
     ================================================================ */
  const ParticleTrail = {
    container: null,
    particles: [],
    lastX: 0,
    lastY: 0,
    ticking: false,
    throttle: 0,

    init() {
      this.container = createEl('div', 'sparkle-particle-trail');
      document.body.appendChild(this.container);

      // Only activate on desktop (not touch devices)
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        document.addEventListener('mousemove', this.onMove.bind(this), { passive: true });
      }
    },

    onMove(e) {
      const now = Date.now();
      if (now - this.throttle < 18) return; // ~55fps cap
      this.throttle = now;

      const pos = this.container ? getViewportPos(e) : rawPos(e);
      const dx = pos.x - this.lastX;
      const dy = pos.y - this.lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Only spawn when moving enough
      if (dist > 8) {
        this.spawn(pos.x, pos.y, Math.min(dist / 15, 3));
        this.lastX = pos.x;
        this.lastY = pos.y;
      }
    },

    spawn(x, y, intensity) {
      const p = createEl('span', 'sparkle-particle');

      const size = rand(3, 6) * intensity;
      const color = randomColor();
      const driftX = rand(-40, 40);
      const driftY = rand(-40, 40);
      const life = rand(400, 800);

      Object.assign(p.style, {
        left: x + 'px',
        top: y + 'px',
        width: size + 'px',
        height: size + 'px',
        backgroundColor: color,
        boxShadow: `0 0 ${size * 2}px ${color}80, 0 0 ${size * 4}px ${color}30`,
        '--pt-dx': driftX + 'px',
        '--pt-dy': driftY + 'px',
        '--pt-life': life + 'ms',
      });

      this.container.appendChild(p);
      requestAnimationFrame(() => p.classList.add('active'));

      setTimeout(() => {
        if (p.parentNode) p.remove();
      }, life + 50);
    },
  };

  /* ================================================================
     ③ HERO FLOATING SPARKLES — 首屏卡片内浮动光点
     ================================================================ */
  const FloatingSparkles = {
    container: null,
    sparkles: [],
    animId: null,

    init() {
      const hero = document.querySelector('.hero-profile');
      if (!hero) return;

      hero.style.position = 'relative';
      hero.style.overflow = 'hidden';

      this.container = createEl('div', 'sparkle-float-layer');
      hero.appendChild(this.container);

      // Create ~20 floating sparkles
      const count = window.innerWidth < 768 ? 10 : 22;
      for (let i = 0; i < count; i++) {
        this.createSparkle();
      }

      this.animate();
    },

    createSparkle() {
      const s = createEl('span', 'sparkle-float');

      const size = rand(3, 7);
      const color = randomColor();
      const x = rand(0, 100);
      const duration = rand(6, 14);
      const delay = rand(0, 8);
      const drift = rand(-30, 30);

      Object.assign(s.style, {
        left: x + '%',
        bottom: '-10px',
        width: size + 'px',
        height: size + 'px',
        backgroundColor: color,
        boxShadow: `0 0 ${size * 3}px ${color}90`,
        '--fs-duration': duration + 's',
        '--fs-delay': delay + 's',
        '--fs-drift': drift + 'px',
        '--fs-size': size + 'px',
      });

      this.container.appendChild(s);
    },

    animate() {
      // CSS animations handle the movement; we just need to keep the layer alive
      // This is intentionally minimal for performance
    },
  };

  /* ================================================================
     ④ BUTTON RIPPLE EFFECT — 按钮涟漪点击效果
     ================================================================ */
  const ButtonRipple = {
    init() {
      document.addEventListener('click', this.onClick.bind(this));
    },

    onClick(e) {
      const btn = e.target.closest(
        '.life-btn, .pub-link, .card-badge, .back-to-top, .back-to-home-btn'
      );
      if (!btn) return;

      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2.5;
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const ripple = createEl('span', 'sparkle-ripple');

      Object.assign(ripple.style, {
        width: size + 'px',
        height: size + 'px',
        left: x + 'px',
        top: y + 'px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(99,102,241,0.12) 60%, transparent 70%)',
      });

      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.appendChild(ripple);

      requestAnimationFrame(() => ripple.classList.add('active'));

      setTimeout(() => {
        if (ripple.parentNode) ripple.remove();
      }, 700);
    },
  };

  /* ================================================================
     ⑤ TEXT SHIMMER — 标题文字流光效果（通过 CSS class 触发）
     ================================================================ */
  const TextShimmer = {
    init() {
      const name = document.querySelector('.hero-name');
      if (name && !name.classList.contains('shimmer-ready')) {
        name.classList.add('shimmer-text', 'shimmer-ready');
      }

      // Section headings get subtle glow pulse
      document.querySelectorAll('.section-heading').forEach((el) => {
        el.classList.add('glow-pulse-ready');
      });
    },
  };

  /* ================================================================
     ⑥ SCROLL REVEAL ENHANCEMENT — 滚动显示增强（微光入场）
     ================================================================ */
  const ScrollRevealFX = {
    init() {
      const cards = document.querySelectorAll(
        '.news-timeline li, .edu-card, .exp-card, .pub-card, .stat-item'
      );

      cards.forEach((el) => {
        el.classList.add('fx-reveal');
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('fx-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
      );

      cards.forEach((el) => observer.observe(el));
    },
  };

  /* ================================================================
     INIT ALL EFFECTS
     ================================================================ */
  function initSparkleFX() {
    StarBurst.init();         // ① Click star burst
    ParticleTrail.init();     // ② Cursor particle trail
    FloatingSparkles.init();  // ③ Hero floating sparkles
    ButtonRipple.init();      // ④ Button ripple
    TextShimmer.init();       // ⑤ Text shimmer
    ScrollRevealFX.init();   // ⑥ Scroll reveal enhancement
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSparkleFX);
  } else {
    initSparkleFX();
  }
})();
