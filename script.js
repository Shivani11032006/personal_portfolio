// Minimal interactivity: nav toggle, filters, contact form handler, year
document.addEventListener('DOMContentLoaded', function () {
  // year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // nav toggle for small screens
  const nav = document.getElementById('site-nav');
  const btn = document.getElementById('nav-toggle');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      const isVisible = nav.getAttribute('data-visible') === 'true';
      nav.style.display = isVisible ? 'none' : 'block';
      nav.setAttribute('data-visible', String(!isVisible));
      btn.setAttribute('aria-expanded', String(!isVisible));
    });
  }

  // project filters
  const filters = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('#projects-grid .card');
  filters.forEach(function (f) {
    f.addEventListener('click', function () {
      filters.forEach(function (x) { x.classList.remove('active'); });
      f.classList.add('active');
      const type = f.dataset.filter;
      cards.forEach(function (c) {
        c.style.display = (type === 'all' || c.dataset.type === type) ? '' : 'none';
      });
    });
  });

  // contact form (demo only)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // demo behaviour - replace with real integration
      alert('Thanks! This is a demo contact form.');
      form.reset();
    });
  }
});
