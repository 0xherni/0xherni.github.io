// Páginas de proyecto: idioma, barra de progreso de lectura y visor de imágenes

// Idioma: sigue el elegido en la home (localStorage 'lang'). El inglés es el
// texto del HTML; el español viene en window.PAGE_I18N.
const langButtons = document.querySelectorAll('.lang-btn');
const i18nEls = [...document.querySelectorAll('[data-i18n]')];
const englishHtml = new Map(i18nEls.map((el) => [el, el.innerHTML]));
const englishTitle = document.title;

const savedLang = () => {
  try {
    return localStorage.getItem('lang') || 'en';
  } catch {
    return 'en';
  }
};

const setLanguage = (lang) => {
  const dict = lang === 'es' ? window.PAGE_I18N?.es : null;
  i18nEls.forEach((el) => {
    el.innerHTML = dict?.[el.dataset.i18n] ?? englishHtml.get(el);
  });
  document.title = dict?.title ?? englishTitle;
  document.documentElement.lang = lang;
};

const markButtons = (lang) => {
  langButtons.forEach((btn) => {
    btn.classList.toggle('text-accent', btn.dataset.lang === lang);
    btn.classList.toggle('text-mute', btn.dataset.lang !== lang);
  });
};

const inViewport = (el) => {
  const r = el.getBoundingClientRect();
  return r.bottom > 0 && r.top < window.innerHeight && r.width > 0;
};

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    if (lang === document.documentElement.lang) return;
    try {
      localStorage.setItem('lang', lang);
    } catch {}
    markButtons(lang);
    window.langFade(i18nEls.filter(inViewport), () => setLanguage(lang));
  });
});

markButtons(savedLang());
setLanguage(savedLang());

const progressBar = document.querySelector('.scroll-progress');

const updateProgress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
};

window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();

// Visor: las capturas se abren en un recuadro en vez de en otra página
const shots = [...document.querySelectorAll('a.shot')];

const viewer = document.createElement('dialog');
viewer.className = 'viewer';
viewer.innerHTML = `
  <div class="viewer-frame">
    <span class="strip-corner tl"></span><span class="strip-corner tr"></span>
    <span class="strip-corner bl"></span><span class="strip-corner br"></span>
    <img class="viewer-img" alt="">
  </div>
  <div class="viewer-bar">
    <span class="viewer-count"></span>
    <p class="viewer-caption"></p>
    <div class="viewer-nav">
      <button type="button" class="viewer-btn" data-step="-1" aria-label="Previous image">←</button>
      <button type="button" class="viewer-btn" data-step="1" aria-label="Next image">→</button>
      <button type="button" class="viewer-btn viewer-close" aria-label="Close">✕</button>
    </div>
  </div>`;
document.body.append(viewer);

const viewerImg = viewer.querySelector('.viewer-img');
let current = 0;

const show = (index) => {
  current = (index + shots.length) % shots.length;
  const img = shots[current].querySelector('img');
  viewerImg.src = shots[current].href;
  viewerImg.alt = img.alt;
  viewer.querySelector('.viewer-count').textContent =
    `${String(current + 1).padStart(2, '0')} / ${String(shots.length).padStart(2, '0')}`;
  viewer.querySelector('.viewer-caption').textContent =
    shots[current].closest('figure')?.querySelector('figcaption')?.textContent ?? '';
};

shots.forEach((shot, i) => {
  shot.addEventListener('click', (e) => {
    e.preventDefault();
    show(i);
    viewer.showModal();
  });
});

viewer.querySelectorAll('[data-step]').forEach((btn) => {
  btn.addEventListener('click', () => show(current + Number(btn.dataset.step)));
});
viewer.querySelector('.viewer-close').addEventListener('click', () => viewer.close());

// Clic fuera de la imagen y de la barra cierra
viewer.addEventListener('click', (e) => {
  if (e.target === viewer) viewer.close();
});

viewer.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') show(current + 1);
  if (e.key === 'ArrowLeft') show(current - 1);
});
