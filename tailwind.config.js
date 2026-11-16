/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './proyectos/*.html', './assets/js/*.js'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0b',
        panel: '#111114',
        line: '#222226',
        mute: '#8a8a92',
        accent: '#ff3b3b',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
};
