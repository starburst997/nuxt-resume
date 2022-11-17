#!/bin/sh

chromium-browser --headless \
                 --disable-gpu \
                 --disable-software-rasterizer \
                 --disable-dev-shm-usage \
                 --no-sandbox \
                 --print-to-pdf="$CI_PROJECT_DIR/dist/Jean-Denis Boivin - Résumé.pdf" \
                 --hide-scrollbars \
                 file://$CI_PROJECT_DIR/dist/index.html
