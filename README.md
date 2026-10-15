# Portfolio — Cybersecurity Analyst

Sitio estático de una sola página, sin build step. Tailwind CSS vía CDN, dark theme.

## Estructura

```
.
├── index.html              # Página única (hero, sobre mí, proyectos, skills, contacto)
├── assets/
│   ├── css/style.css        # Estilos adicionales (scroll suave, glow, selección)
│   └── js/main.js           # Año dinámico en el footer
└── README.md
```

## Cómo verlo localmente

Abrí `index.html` directamente en el navegador (doble clic) o servilo con un servidor local:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Luego entrá a `http://localhost:8000`.

## Pendientes antes de publicar

1. **Casos de estudio** — completar los textos e imágenes marcados con `EDITAR` en `proyectos/*.html`.

## Deploy en GitHub Pages

```bash
git init
git add .
git commit -m "Portfolio inicial"
git branch -M main
git remote add origin https://github.com/0xherni/<nombre-del-repo>.git
git push -u origin main
```

Luego, en **Settings → Pages** del repo, activar GitHub Pages apuntando a la rama `main` / carpeta raíz.
