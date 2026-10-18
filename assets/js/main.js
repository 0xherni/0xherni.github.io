document.getElementById('year').textContent = new Date().getFullYear();

const translations = {
  en: {
    'nav.about': '01. About',
    'nav.projects': '02. Projects',
    'nav.skills': '03. Skills',
    'nav.contact': '04. Contact',
    'hero.pitch': 'I defend critical systems by analyzing anomalous behavior, modeling threats, and automating detection with AI — before an attacker finds the crack.',
    'hero.cta.contact': 'Contact →',
    'hero.cta.github': 'View GitHub',
    'about.heading': '01 / About me',
    'about.body': 'Cybersecurity analyst based in Buenos Aires, focused on threat detection, security architecture, and incident response. I combine traditional security tooling with AI models to automate anomaly detection and accelerate threat hunting. I think like an attacker to design defenses that actually hold.',
    'projects.heading': '02 / Featured projects',
    'projects.card1.desc': 'AI-powered anomaly detection backend designed to identify atypical behavior in real-time data streams.',
    'projects.card2.desc': 'Research into MCP/AI security, focused on JWT authentication and secrets management.',
    'projects.cta': 'View full case →',
    'projects.next.status': 'In progress',
    'projects.next.title': 'Next case',
    'projects.next.cta': 'Follow on GitHub →',
    'skills.heading': '03 / Skills',
    'skills.cat.security.header': 'Security Engineering',
    'skills.cat.cloud.header': 'Cloud & Containers',
    'skills.cat.os.header': 'Operating Systems',
    'skills.cat.tools.header': 'Security Tools',
    'skills.cat.prog.header': 'Programming & Scripting',
    'skills.cat.other.header': 'Other Competencies',
    'skills.cat.ai.header': 'AI Applied to Security',
    'skills.cat.ai.body': 'Anomaly detection with ML models, MCP/AI pipeline hardening, prompt injection testing.',
    'skills.ai.1': 'Anomaly detection with ML models',
    'skills.ai.3': 'MCP/AI pipeline hardening',
    'skills.ai.5': 'Prompt injection testing',
    'contact.heading': '04 / Contact',
    'contact.phrases': ["Let's talk.", "Let's connect.", "Let's work together."],
    'contact.status': 'Available',
    'contact.sub.pre': 'Open to ',
    'contact.sub.em': 'security roles',
    'contact.sub.post': '.',
    'contact.copy': 'Copy',
    'contact.copied': 'Copied',
    'footer.backToTop': '↑ back to top',
  },
  es: {
    'nav.about': '01. Sobre mí',
    'nav.projects': '02. Proyectos',
    'nav.skills': '03. Skills',
    'nav.contact': '04. Contacto',
    'hero.pitch': 'Defiendo sistemas críticos analizando comportamiento anómalo, modelando amenazas y automatizando la detección con IA — antes de que el atacante encuentre la grieta.',
    'hero.cta.contact': 'Contacto →',
    'hero.cta.github': 'Ver GitHub',
    'about.heading': '01 / Sobre mí',
    'about.body': 'Analista de ciberseguridad con base en Buenos Aires, enfocado en detección de amenazas, arquitectura de seguridad y respuesta a incidentes. Combino herramientas tradicionales de seguridad con modelos de IA para automatizar la detección de anomalías y acelerar el threat hunting. Pienso como atacante para diseñar defensas que realmente resistan.',
    'projects.heading': '02 / Proyectos destacados',
    'projects.card1.desc': 'Backend de detección de anomalías con IA, orientado a identificar comportamiento atípico en flujos de datos en tiempo real.',
    'projects.card2.desc': 'Investigación en seguridad de protocolos MCP e IA, con foco en autenticación JWT y gestión segura de secrets.',
    'projects.cta': 'Ver caso completo →',
    'projects.next.status': 'En progreso',
    'projects.next.title': 'Próximo caso',
    'projects.next.cta': 'Seguir en GitHub →',
    'skills.heading': '03 / Habilidades',
    'skills.cat.security.header': 'Ingeniería de Seguridad',
    'skills.cat.cloud.header': 'Cloud y Contenedores',
    'skills.cat.os.header': 'Sistemas Operativos',
    'skills.cat.tools.header': 'Herramientas de Seguridad',
    'skills.cat.prog.header': 'Programación y Scripting',
    'skills.cat.other.header': 'Otras Competencias',
    'skills.cat.ai.header': 'IA Aplicada a Seguridad',
    'skills.cat.ai.body': 'Detección de anomalías con modelos de ML, hardening de pipelines MCP/IA, prompt injection testing.',
    'skills.ai.1': 'Detección de anomalías con modelos de ML',
    'skills.ai.3': 'Hardening de pipelines MCP/IA',
    'skills.ai.5': 'Prompt injection testing',
    'contact.heading': '04 / Contacto',
    'contact.phrases': ['Hablemos.', 'Conectemos.', 'Trabajemos juntos.'],
    'contact.status': 'Disponible',
    'contact.sub.pre': 'Abierto a ',
    'contact.sub.em': 'roles de seguridad',
    'contact.sub.post': '.',
    'contact.copy': 'Copiar',
    'contact.copied': 'Copiado',
    'footer.backToTop': '↑ volver arriba',
  },
};

const langButtons = document.querySelectorAll('.lang-btn');

const applyLanguage = (lang) => {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });

  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);

  langButtons.forEach((btn) => {
    btn.classList.toggle('text-accent', btn.dataset.lang === lang);
    btn.classList.toggle('text-mute', btn.dataset.lang !== lang);
  });
};

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

applyLanguage(localStorage.getItem('lang') || 'en');

const glitchChars = '░▒▓█▄▀■□▢▣Ã†‡•‰„…‹›ˆ˜šœžƒ¶§±∆∑∞≈¥¤';
const randomGlitchChar = () => glitchChars[Math.floor(Math.random() * glitchChars.length)];

const scrambleEl = document.getElementById('name-scramble');
if (scrambleEl) {
  const original = scrambleEl.dataset.text;
  const letterIndexes = [...original]
    .map((char, i) => (char.trim() ? i : null))
    .filter((i) => i !== null);

  const glitchOnce = () => {
    const i = letterIndexes[Math.floor(Math.random() * letterIndexes.length)];
    const randomChar = randomGlitchChar();
    const glitched = original.slice(0, i) + randomChar + original.slice(i + 1);

    scrambleEl.textContent = glitched;

    setTimeout(() => {
      scrambleEl.textContent = original;
    }, 150);
  };

  setInterval(glitchOnce, 900);
}

const progressBar = document.querySelector('.scroll-progress');
const parallaxEls = document.querySelectorAll('[data-parallax]');
const hero = document.getElementById('top');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

let ticking = false;

const onScroll = () => {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;

  // Solo mueve las capas mientras el hero está a la vista
  if (!reduceMotion.matches && y < hero.offsetHeight) {
    parallaxEls.forEach((el) => {
      el.style.transform = `translate3d(0, ${y * el.dataset.parallax}px, 0)`;
    });
  }

  ticking = false;
};

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(onScroll);
    ticking = true;
  }
}, { passive: true });

window.addEventListener('resize', onScroll);
onScroll();

// ===== Variante experimental: scroll snap (?snap) =====
if (document.documentElement.classList.contains('snap')) {
  const sections = [...document.querySelectorAll('body > section')];
  const navLinks = document.querySelectorAll('header nav a[data-i18n^="nav."]');

  const rail = document.createElement('nav');
  rail.className = 'snap-rail';
  rail.setAttribute('aria-label', 'Sections');

  sections.forEach((section, i) => {
    const index = String(i).padStart(2, '0');
    section.dataset.index = index;

    if (section.id !== 'top') {
      section.querySelectorAll(':scope > h2, :scope > .grid > *, :scope > .board > *, :scope > .skills-ix > *, :scope > .contact-ix > *').forEach((el, j) => {
        el.classList.add('reveal-item');
        el.style.setProperty('--i', j);
      });
    }

    const link = document.createElement('a');
    link.href = `#${section.id}`;
    link.innerHTML = `<span class="snap-rail-num">${index}</span><span class="snap-rail-line"></span>`;
    rail.append(link);
  });

  const hint = document.createElement('span');
  hint.className = 'snap-rail-hint';
  hint.textContent = 'j / k';
  rail.append(hint);

  const sweep = document.createElement('div');
  sweep.className = 'snap-sweep';
  sweep.setAttribute('aria-hidden', 'true');

  document.body.append(rail, sweep);

  // Descifra el título de izquierda a derecha, en el idioma activo
  const decrypt = (el) => {
    const start = performance.now();
    const step = (now) => {
      const target = translations[document.documentElement.lang]?.[el.dataset.i18n];
      if (!target) return;
      const progress = Math.min((now - start) / 600, 1);
      const revealed = Math.floor(target.length * progress);
      el.textContent = [...target]
        .map((char, i) => (i < revealed || !char.trim() ? char : randomGlitchChar()))
        .join('');
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  let active = null;

  const setActive = (section) => {
    if (section === active) return;
    const isFirst = active === null;

    active?.classList.remove('is-active');
    section.classList.add('is-active');
    active = section;

    rail.querySelectorAll('a').forEach((link) => {
      link.classList.toggle('is-active', link.hash === `#${section.id}`);
    });
    navLinks.forEach((link) => {
      link.classList.toggle('text-accent', link.hash === `#${section.id}`);
    });

    if (isFirst || reduceMotion.matches) return;

    sweep.classList.remove('is-running');
    void sweep.offsetWidth; // reinicia la animación
    sweep.classList.add('is-running');

    const heading = section.querySelector('h2[data-i18n]');
    if (heading) decrypt(heading);
  };

  // Activa la sección que cruza la franja central del viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(entry.target);
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  sections.forEach((section) => observer.observe(section));

  // Índice de skills: hover, foco o click activan el panel
  const ixTabs = [...document.querySelectorAll('.ix-tab')];

  const selectSkill = (tab) => {
    ixTabs.forEach((t) => {
      const isActive = t === tab;
      t.classList.toggle('is-active', isActive);
      t.setAttribute('aria-selected', isActive);
      const panel = document.getElementById(t.getAttribute('aria-controls'));
      panel.classList.toggle('is-active', isActive);
      panel.hidden = !isActive;
    });
  };

  ixTabs.forEach((tab, i) => {
    tab.addEventListener('mouseenter', () => selectSkill(tab));
    tab.addEventListener('click', () => selectSkill(tab));
    tab.addEventListener('keydown', (e) => {
      const dir = { ArrowDown: 1, ArrowUp: -1 }[e.key];
      if (!dir) return;
      e.preventDefault();
      const next = ixTabs[(i + dir + ixTabs.length) % ixTabs.length];
      next.focus();
      selectSkill(next);
    });
  });

  // Contacto: la frase rota y cada cambio se "acomoda" carácter por carácter
  const phraseEl = document.querySelector('.ct-phrase');
  const decodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#%&*+=/<>';
  const randomDecodeChar = () => decodeChars[Math.floor(Math.random() * decodeChars.length)];
  let phraseIndex = 0;

  const morphTo = (target) => {
    const from = phraseEl.textContent;
    const length = Math.max(from.length, target.length);
    const start = performance.now();
    const step = (now) => {
      const settled = Math.floor(length * Math.min((now - start) / 700, 1));
      let out = '';
      for (let i = 0; i < length; i++) {
        if (i < settled) out += target[i] ?? '';
        else if ((target[i] ?? ' ').trim()) out += randomDecodeChar();
        else out += target[i] ?? '';
      }
      phraseEl.textContent = out;
      if (settled < length) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const currentPhrases = () => translations[document.documentElement.lang]['contact.phrases'];

  // Tamaño del título: la frase más larga del idioma (más el cursor) entra en una línea
  const titleEl = document.querySelector('.ct-title');
  const fitTitle = () => {
    const probe = document.createElement('span');
    probe.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;font-size:100px';
    titleEl.append(probe);
    const widest = Math.max(...currentPhrases().map((phrase) => {
      probe.textContent = phrase;
      return probe.getBoundingClientRect().width;
    }));
    probe.remove();
    const cursorWidth = 55; // ancho + margen del cursor a 100px
    const size = Math.min(76, titleEl.parentElement.clientWidth / ((widest + cursorWidth) / 100));
    titleEl.style.fontSize = `${Math.floor(size)}px`;
  };

  setInterval(() => {
    if (reduceMotion.matches || active?.id !== 'contacto') return;
    phraseIndex = (phraseIndex + 1) % currentPhrases().length;
    morphTo(currentPhrases()[phraseIndex]);
  }, 3500);

  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      phraseEl.textContent = currentPhrases()[phraseIndex];
      fitTitle();
    });
  });
  phraseEl.textContent = currentPhrases()[phraseIndex];
  fitTitle();
  document.fonts.ready.then(fitTitle);
  window.addEventListener('resize', fitTitle);

  // Copiar email
  document.querySelectorAll('.ct-copy').forEach((btn) => {
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
      } catch {
        return;
      }
      const dict = translations[document.documentElement.lang];
      btn.textContent = dict['contact.copied'];
      btn.classList.add('is-done');
      setTimeout(() => {
        btn.textContent = translations[document.documentElement.lang]['contact.copy'];
        btn.classList.remove('is-done');
      }, 1500);
    });
  });

  // Fondo: una traza conecta un nodo por sección y se dibuja con el scroll
  const svgNS = 'http://www.w3.org/2000/svg';
  const nodes = [[40, 140], [910, 330], [45, 560], [905, 760], [40, 900]];
  const trace = document.createElement('div');
  trace.className = 'bg-trace';
  trace.setAttribute('aria-hidden', 'true');
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 1000 1000');
  svg.setAttribute('preserveAspectRatio', 'none');

  const d = nodes.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ');
  ['trace-base', 'trace-live'].forEach((cls) => {
    const path = document.createElementNS(svgNS, 'path');
    path.setAttribute('d', d);
    path.setAttribute('pathLength', '1');
    path.setAttribute('class', cls);
    svg.append(path);
  });
  trace.append(svg);

  const nodeEls = nodes.map(([x, y], i) => {
    const node = document.createElement('span');
    node.className = 'trace-node';
    node.style.left = `${x / 10}%`;
    node.style.top = `${y / 10}%`;
    node.dataset.label = String(i).padStart(2, '0');
    trace.append(node);
    return node;
  });
  document.body.prepend(trace);

  const livePath = svg.querySelector('.trace-live');
  let traceTicking = false;
  const drawTrace = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    livePath.style.strokeDashoffset = 1 - progress;
    nodeEls.forEach((node, i) => {
      node.classList.toggle('is-lit', progress >= i / (nodeEls.length - 1) - 0.02);
    });
    traceTicking = false;
  };
  window.addEventListener('scroll', () => {
    if (!traceTicking) {
      requestAnimationFrame(drawTrace);
      traceTicking = true;
    }
  }, { passive: true });
  window.addEventListener('resize', drawTrace);
  drawTrace();

  // Navegación tipo vim
  document.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey || e.target.closest('input, textarea')) return;
    const dir = { j: 1, k: -1 }[e.key];
    if (!dir || !active) return;
    sections[sections.indexOf(active) + dir]?.scrollIntoView({ behavior: 'smooth' });
  });
}
