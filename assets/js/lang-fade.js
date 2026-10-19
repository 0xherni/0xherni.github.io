// Transición al cambiar de idioma: los textos se apagan con un blur leve,
// se reemplazan y vuelven a aparecer. Compartido por la home y los proyectos.
window.langFade = (candidates, swap) => {
  // Los textos ocultos por CSS (p. ej. hasta el hover) no se animan, para no hacerlos parpadear
  const targets = candidates.filter((el) => Number(getComputedStyle(el).opacity) > 0.05);
  const rest = targets.map((el) => getComputedStyle(el).opacity);
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !targets.length || !Element.prototype.animate) {
    swap();
    return;
  }

  const out = targets.map((el, i) => el.animate(
    { opacity: [rest[i], 0], filter: ['blur(0px)', 'blur(4px)'] },
    { duration: 140, easing: 'ease-in', fill: 'forwards' },
  ));

  let done = false;
  const swapIn = () => {
    if (done) return;
    done = true;
    swap();
    out.forEach((a) => a.cancel());
    targets.forEach((el, i) => el.animate(
      { opacity: [0, rest[i]], filter: ['blur(4px)', 'blur(0px)'] },
      { duration: 220, easing: 'ease-out' },
    ));
  };

  Promise.all(out.map((a) => a.finished)).then(swapIn, swapIn);
  // Respaldo: si la animación no avanza (p. ej. pestaña en segundo plano), cambia igual
  setTimeout(swapIn, 250);
};
