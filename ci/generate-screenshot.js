#!/usr/bin/env node
/* eslint-disable prettier/prettier */

const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1200,
    height: 630,
    deviceScaleFactor: 1,
  });

  await page.goto(`file://${process.env.CI_PROJECT_DIR}/git/resume/index.html`, {
    waitUntil: 'networkidle0',
  });

  const screenshotPath = path.resolve(__dirname, '../git/resume/screenshot.png');
  // eslint-disable-next-line no-console
  console.log(`Writing screenshot to ${screenshotPath}`);
  await page.screenshot({ path: screenshotPath });

  browser.close();
})();
