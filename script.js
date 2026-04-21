/* ═══════════════════════════════════════════════════════════
   NOO WORLD PLATFORMS — Shared Script
   ═══════════════════════════════════════════════════════════ */

(function () {
  const html     = document.documentElement;
  const themeBtn = document.getElementById('themeBtn');

  // Respect OS preference on first load
  if (!html.getAttribute('data-theme') || html.getAttribute('data-theme') === '') {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      html.setAttribute('data-theme', 'light');
    }
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      html.setAttribute('data-theme',
        html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
      );
    });
  }

  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
    });
  }

  // Mark active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html') ||
        (path === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();
