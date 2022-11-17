#!/bin/sh

chromium-browser --headless \
                 --disable-gpu \
                 --disable-software-rasterizer \
                 --disable-dev-shm-usage \
                 --no-sandbox \
                 --print-to-pdf="$GITHUB_WORKSPACE/git/resume/Jean-Denis Boivin - Résumé.pdf" \
                 --hide-scrollbars \
                 file://$GITHUB_WORKSPACE/git/resume/index.html
