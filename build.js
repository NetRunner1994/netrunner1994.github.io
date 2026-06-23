#!/usr/bin/env node
'use strict';

const fs   = require('fs');
const path = require('path');

const ROOT = __dirname;
const SRC  = path.join(ROOT, '_src');

const config      = JSON.parse(fs.readFileSync(path.join(SRC, 'config.json'), 'utf8'));
const navTemplate = fs.readFileSync(path.join(SRC, '_partials', 'nav.html'), 'utf8');
const ftrTemplate = fs.readFileSync(path.join(SRC, '_partials', 'footer.html'), 'utf8');

const PAGES = [
  { file: 'index.html',      active: 'INDEX'   },
  { file: 'upgrade.html',    active: 'UPGRADE' },
  { file: 'request.html',    active: 'CONTACT' },
  { file: 'build-quiz.html', active: 'QUIZ'    },
  { file: 'build.html',      active: 'BUILD'   },
];

const NAV_KEYS = ['INDEX','UPGRADE','QUIZ','BUILD','CONTACT'];

function applyTokens(src, extra) {
  let out = src;
  const all = Object.assign({}, config, extra || {});
  for (const [k, v] of Object.entries(all)) {
    out = out.split('%%' + k + '%%').join(v);
  }
  return out;
}

for (const page of PAGES) {
  const srcFile = path.join(SRC, 'pages', page.file);
  const outFile = path.join(ROOT, page.file);

  if (!fs.existsSync(srcFile)) { console.warn('Missing:', srcFile); continue; }

  const activeTokens = {};
  for (const k of NAV_KEYS) {
    activeTokens['ACTIVE_' + k] = (k === page.active) ? 'class="active"' : '';
  }

  const nav    = applyTokens(navTemplate, activeTokens);
  const footer = applyTokens(ftrTemplate);
  const html   = applyTokens(fs.readFileSync(srcFile, 'utf8'), { NAV: nav, FOOTER: footer });

  fs.writeFileSync(outFile, html, 'utf8');
  console.log('Built:', page.file);
}
console.log('\nDone —', PAGES.length, 'pages.');
