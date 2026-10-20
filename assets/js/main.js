document.getElementById('year').textContent = new Date().getFullYear();

const translations = {
  en: {
    'nav.about': '01. About',
    'nav.projects': '02. Projects',
    'nav.skills': '03. Skills',
    'nav.contact': '04. Contact',
    'hero.pitch': 'I defend critical systems by analyzing anomalous behavior, modeling threats, and automating detection with AI.',
    'hero.cta.contact': 'Contact →',
    'hero.cta.github': 'View GitHub',
    'about.heading': '01 / About me',
    'about.body': 'Cybersecurity analyst in Buenos Aires, working across threat detection, incident response, and security architecture. Day to day I live in the SOC — hunting threats, investigating incidents end to end, and building AI-assisted tooling to cut through alert noise. These days I’m especially drawn to projects where AI meets security — automating the repetitive work so analysts can focus on what actually matters.',
    'xp.heading': 'Experience',
    'xp.now': 'Current',
    'xp.1.dates': 'Mar 2023 — Present',
    'xp.1.type': 'Full-time · Remote',
    'xp.1.p1': 'Perform threat hunting activities across the entire environment.',
    'xp.1.p2': 'Monitor and investigate security alerts using SentinelOne, Darktrace and Elastic.',
    'xp.1.p3': 'Participate in purple teaming.',
    'xp.1.p4': 'Triage and respond to security incidents.',
    'xp.2.dates': 'Jul 2022 — Mar 2023 · 9 mos',
    'xp.2.type': 'Full-time · On-site',
    'xp.2.p1': 'Supported the implementation and configuration of Trend Micro security products.',
    'xp.2.p2': "Strengthened the company's cybersecurity infrastructure.",
    'xp.2.p3': 'Provided technical support and troubleshooting across the Trend Micro product suite.',
    'projects.heading': '02 / Featured projects',
    'projects.card0.desc': 'Windows desktop app that answers one question: is my PC clean or infected? It explains every finding in plain language.',
    'projects.card1.desc': 'Backend that uses an Isolation Forest and two agents to spot attacks in access logs and suggest allow, alert or block. Built for an interview challenge.',
    'projects.cta': 'View full case →',
    'skills.heading': '03 / Skills',
    'skills.cat.security.header': 'Security Engineering',
    'skills.cat.cloud.header': 'Cloud & Containers',
    'skills.cat.os.header': 'Operating Systems',
    'skills.cat.tools.header': 'Security Tools',
    'skills.cat.prog.header': 'Programming & Scripting',
    'skills.cat.other.header': 'Other Competencies',
    'skills.cat.ai.header': 'AI Applied to Security',
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
    'hero.pitch': 'Defiendo sistemas críticos analizando comportamiento anómalo, modelando amenazas y automatizando la detección con IA.',
    'hero.cta.contact': 'Contacto →',
    'hero.cta.github': 'Ver GitHub',
    'about.heading': '01 / Sobre mí',
    'about.body': 'Analista de ciberseguridad en Buenos Aires, trabajando en detección de amenazas, respuesta a incidentes y arquitectura de seguridad. En el día a día vivo en el SOC: hago threat hunting, investigo incidentes de punta a punta y construyo herramientas asistidas por IA para filtrar el ruido de las alertas. Hoy me atraen especialmente los proyectos donde la IA se cruza con la seguridad: automatizar el trabajo repetitivo para que los analistas puedan enfocarse en lo que realmente importa.',
    'xp.heading': 'Experiencia',
    'xp.now': 'Actual',
    'xp.1.dates': 'mar. 2023 — Actualidad',
    'xp.1.type': 'Tiempo completo · Remoto',
    'xp.1.p1': 'Realizo actividades de threat hunting en todo el entorno.',
    'xp.1.p2': 'Monitoreo e investigo alertas de seguridad con SentinelOne, Darktrace y Elastic.',
    'xp.1.p3': 'Participo en ejercicios de purple teaming.',
    'xp.1.p4': 'Hago triage y respondo a incidentes de seguridad.',
    'xp.2.dates': 'jul. 2022 — mar. 2023 · 9 meses',
    'xp.2.type': 'Tiempo completo · Presencial',
    'xp.2.p1': 'Acompañé la implementación y configuración de productos de seguridad de Trend Micro.',
    'xp.2.p2': 'Fortalecí la infraestructura de ciberseguridad de la empresa.',
    'xp.2.p3': 'Brindé soporte técnico y troubleshooting sobre toda la suite de productos de Trend Micro.',
    'projects.heading': '02 / Proyectos destacados',
    'projects.card0.desc': 'App de escritorio para Windows que responde una sola pregunta: ¿mi PC está limpia o infectada? Explica cada hallazgo en lenguaje simple.',
    'projects.card1.desc': 'Backend que usa un Isolation Forest y dos agentes para detectar ataques en access logs y sugerir permitir, alertar o bloquear. Hecho para un challenge de entrevista.',
    'projects.cta': 'Ver caso completo →',
    'skills.heading': '03 / Habilidades',
    'skills.cat.security.header': 'Ingeniería de Seguridad',
    'skills.cat.cloud.header': 'Cloud y Contenedores',
    'skills.cat.os.header': 'Sistemas Operativos',
    'skills.cat.tools.header': 'Herramientas de Seguridad',
    'skills.cat.prog.header': 'Programación y Scripting',
    'skills.cat.other.header': 'Otras Competencias',
    'skills.cat.ai.header': 'IA Aplicada a Seguridad',
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

const swapLanguage = (lang) => {
  const dict = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });

  document.documentElement.lang = lang;
  document.dispatchEvent(new CustomEvent('langchange'));
};

const applyLanguage = (lang, animate = false) => {
  if (!translations[lang]) return;
  localStorage.setItem('lang', lang);

  langButtons.forEach((btn) => {
    btn.classList.toggle('text-accent', btn.dataset.lang === lang);
    btn.classList.toggle('text-mute', btn.dataset.lang !== lang);
  });

  if (!animate) {
    swapLanguage(lang);
    return;
  }

  // Solo se animan los textos visibles; el resto cambia directo
  const visible = [...document.querySelectorAll('[data-i18n], .ct-phrase')].filter((el) => {
    const r = el.getBoundingClientRect();
    return r.bottom > 0 && r.top < window.innerHeight && r.width > 0;
  });
  window.langFade(visible, () => swapLanguage(lang));
};

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.dataset.lang !== document.documentElement.lang) applyLanguage(btn.dataset.lang, true);
  });
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

// ===== Scroll snap: secciones, tablero, skills, contacto y traza de fondo =====
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

  document.addEventListener('langchange', () => {
    phraseEl.textContent = currentPhrases()[phraseIndex];
    fitTitle();
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
