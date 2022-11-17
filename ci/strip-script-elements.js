#!/usr/bin/env node
/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const indexFilePath = path.join(__dirname, '../git/resume/index.html');
console.log(`Loading HTML from ${indexFilePath}...`);
const indexHtml = fs.readFileSync(indexFilePath, 'utf8');

console.log('Stripping all Nuxt <script> elements...');
const $ = cheerio.load(indexHtml);
$('script:not(.do-not-strip)').remove();
$("link[as='script']:not(.do-not-strip)").remove();

console.log(`Overwriting ${indexFilePath}...`);
fs.writeFileSync(indexFilePath, $.html());
