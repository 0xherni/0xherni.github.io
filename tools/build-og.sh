#!/usr/bin/env bash
# Regenera las imágenes Open Graph (1200×630) desde tools/og-template.html.
# Uso: bash tools/build-og.sh   (necesita Edge o Chrome y Python con Pillow)
set -euo pipefail
cd "$(dirname "$0")/.."
BROWSER="${BROWSER:-/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe}"
ROOT="$(pwd -W 2>/dev/null || pwd)"
mkdir -p assets/img/og
for p in home demiurge anomaly; do
  "$BROWSER" --headless=new --disable-gpu --hide-scrollbars --virtual-time-budget=3000 \
    --window-size=1200,630 --screenshot="$ROOT/assets/img/og/$p.png" \
    "file:///$ROOT/tools/og-template.html?p=$p" 2>/dev/null
  python -c "from PIL import Image; Image.open('assets/img/og/$p.png').convert('RGB').save('assets/img/og/$p.jpg', quality=88, optimize=True)"
  rm "assets/img/og/$p.png"
done
ls -la assets/img/og
