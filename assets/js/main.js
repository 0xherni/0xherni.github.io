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
    'skills.heading': '03 / Skills',
    'skills.cat.security.header': 'Security Engineering',
    'skills.cat.cloud.header': 'Cloud & Containers',
    'skills.cat.os.header': 'Operating Systems',
    'skills.cat.tools.header': 'Security Tools',
    'skills.cat.prog.header': 'Programming & Scripting',
    'skills.cat.other.header': 'Other Competencies',
    'skills.cat.ai.header': 'AI Applied to Security',
    'skills.cat.ai.body': 'Anomaly detection with ML models, LLM-assisted threat hunting, MCP/AI pipeline hardening, AI red teaming, prompt injection testing.',
    'contact.heading': '04 / Contact',
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
    'skills.heading': '03 / Habilidades',
    'skills.cat.security.header': 'Ingeniería de Seguridad',
    'skills.cat.cloud.header': 'Cloud y Contenedores',
    'skills.cat.os.header': 'Sistemas Operativos',
    'skills.cat.tools.header': 'Herramientas de Seguridad',
    'skills.cat.prog.header': 'Programación y Scripting',
    'skills.cat.other.header': 'Otras Competencias',
    'skills.cat.ai.header': 'IA Aplicada a Seguridad',
    'skills.cat.ai.body': 'Detección de anomalías con modelos de ML, threat hunting asistido por LLMs, hardening de pipelines MCP/IA, AI red teaming, prompt injection testing.',
    'contact.heading': '04 / Contacto',
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

const scrambleEl = document.getElementById('name-scramble');
if (scrambleEl) {
  const glitchChars = '░▒▓█▄▀■□▢▣Ã†‡•‰„…‹›ˆ˜šœžƒ¶§±∆∑∞≈¥¤';
  const original = scrambleEl.dataset.text;
  const letterIndexes = [...original]
    .map((char, i) => (char.trim() ? i : null))
    .filter((i) => i !== null);

  const glitchOnce = () => {
    const i = letterIndexes[Math.floor(Math.random() * letterIndexes.length)];
    const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
    const glitched = original.slice(0, i) + randomChar + original.slice(i + 1);

    scrambleEl.textContent = glitched;

    setTimeout(() => {
      scrambleEl.textContent = original;
    }, 150);
  };

  setInterval(glitchOnce, 900);
}
