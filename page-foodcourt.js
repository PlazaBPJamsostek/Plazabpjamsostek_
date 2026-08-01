/* Foodcourt page */
(function () {
  const D = window.PlazaData;
  if (!D) return;
  const lang = () => (window.PlazaI18n ? window.PlazaI18n.current : 'id');

  /* ---- featured tenants (F&B tenants located at Foodcourt) ---- */
  const wrap = document.getElementById('featuredTenants');
  const cuisineMap = {
    'JAKOKI': 'Asian Fusion', 'Dapur Sedap NR': 'Nusantara', 'Mococo Cafe': 'Coffee & Dessert',
    'Soto Khas Bogor': 'Nusantara', 'Pawon Stories': 'Nusantara', 'Keday Nusantara': 'Nusantara',
    'Saudi Chicken': 'Middle Eastern & Fried Chicken', 'Sudo Brew': 'Coffee & Dessert',
    'Golden Black Coffee': 'Coffee & Dessert', 'Chaniago': 'Nusantara',
  };
  function renderTenants() {
    if (!wrap) return;
    const items = D.tenants.filter((t) => t.floor === 'Foodcourt');
    wrap.innerHTML = items
      .map(
        (t, i) => `
      <div class="tenant-mini reveal" style="--i:${i}">
        <div class="tm-icon">${t.name.charAt(0)}</div>
        <h5>${t.name}</h5>
        <span>${cuisineMap[t.name] || 'F&amp;B'}</span>
      </div>`
      )
      .join('');
    if (window.reobserveReveal) window.reobserveReveal();
  }
  renderTenants();
  document.addEventListener('plaza:langchange', renderTenants);

  /* ---- reviews (reuses carousel engine from main.js) ---- */
  const carousel = document.getElementById('reviewCarousel');
  if (carousel) {
    const track = carousel.querySelector('.carousel-track');
    let current = 0;
    function render() {
      track.innerHTML = D.foodcourtReviews
        .map(
          (rv, i) => `
        <div class="carousel-slide testi-slide${i === 0 ? ' active' : ''}">
          <svg class="quote-mark" viewBox="0 0 24 24" width="30" height="30"><path d="M7 9c-2 0-3 1.5-3 3.5S5 16 7 16c0 2-1 3-3 3v2c3 0 5-2 5-5V9H7Zm10 0c-2 0-3 1.5-3 3.5s1 3.5 3 3.5c0 2-1 3-3 3v2c3 0 5-2 5-5V9h-2Z" fill="currentColor"/></svg>
          <p class="testi-quote" style="font-size:17px;">${lang() === 'en' ? rv.quote_en : rv.quote_id}</p>
          <p class="testi-role">${lang() === 'en' ? rv.role_en : rv.role_id}</p>
        </div>`
        )
        .join('');
    }
    render();
    const slides = () => Array.from(track.querySelectorAll('.testi-slide'));
    function goTo(i) {
      const s = slides();
      if (!s.length) return;
      s[current] && s[current].classList.remove('active');
      current = (i + s.length) % s.length;
      s[current].classList.add('active');
    }
    const prev = carousel.querySelector('.carousel-prev');
    const next = carousel.querySelector('.carousel-next');
    if (prev) prev.addEventListener('click', () => goTo(current - 1));
    if (next) next.addEventListener('click', () => goTo(current + 1));
    let timer = setInterval(() => goTo(current + 1), 6000);
    carousel.addEventListener('mouseenter', () => clearInterval(timer));
    carousel.addEventListener('mouseleave', () => { timer = setInterval(() => goTo(current + 1), 6000); });
    document.addEventListener('plaza:langchange', () => { current = 0; render(); });
  }

  /* ---- lightbox for masonry gallery ---- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCap = document.getElementById('lightboxCap');
  document.querySelectorAll('[data-lightbox]').forEach((item) => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (!img || !lightbox) return;
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      if (lightboxCap) lightboxCap.textContent = img.alt;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.closest('.lightbox-close')) {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { lightbox.classList.remove('open'); document.body.style.overflow = ''; }
    });
  }
})();
