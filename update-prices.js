#!/usr/bin/env node
// Price update helper for parts.js
// Run: node update-prices.js
// Prints every part with its current lo/hi prices and a PCPartPicker link.
// Update the lo/hi values in parts.js, then commit.

'use strict';

const fs = require('fs');
const path = require('path');

// Load parts.js by stripping the 'use strict' and exporting manually
let src = fs.readFileSync(path.join(__dirname, 'parts.js'), 'utf8');
// Replace const with var so eval works cleanly
src = src.replace(/^'use strict';\s*/m, '').replace(/\bconst\b/g, 'var');
const ctx = {};
(new Function('exports', src + '\nexports.DATA=DATA;exports.TIER_DESCS=TIER_DESCS;'))(ctx);
const DATA = ctx.DATA;

const TIER_DESCS = ctx.TIER_DESCS;

const CATS = ['gpu','cpu','mobo','ram','storage','cooler','fans'];

function pad(s, n) { return String(s).padEnd(n); }

let totalParts = 0;
let output = [];

output.push('='.repeat(80));
output.push('NETRUNNER BUILDS — PARTS PRICE CHECKLIST');
output.push('Generated: ' + new Date().toLocaleDateString('en-US', {month:'long',day:'numeric',year:'numeric'}));
output.push('For each part, verify lo/hi prices on PCPartPicker and update parts.js.');
output.push('='.repeat(80));
output.push('');

for (const cat of CATS) {
  const d = DATA[cat];
  output.push('─'.repeat(80));
  output.push('CATEGORY: ' + cat.toUpperCase());
  output.push('─'.repeat(80));

  if (Array.isArray(d)) {
    // flat list (storage, fans)
    for (const item of d) {
      totalParts++;
      const pcp = item.pcp ? item.pcp : 'https://pcpartpicker.com/search/?q=' + encodeURIComponent(item.n);
      output.push(`  ${pad(item.n, 42)} $${pad(item.lo + '–$' + item.hi, 14)} ${pcp}`);
    }
  } else {
    // tiered object
    for (const [tier, items] of Object.entries(d)) {
      if (!Array.isArray(items)) continue;
      output.push(`  [${tier.toUpperCase()}]`);
      for (const item of items) {
        totalParts++;
        const pcp = item.pcp ? item.pcp : 'https://pcpartpicker.com/search/?q=' + encodeURIComponent(item.n);
        output.push(`    ${pad(item.n, 40)} $${pad(item.lo + '–$' + item.hi, 14)} ${pcp}`);
      }
    }
  }
  output.push('');
}

output.push('='.repeat(80));
output.push(`Total parts: ${totalParts}`);
output.push('After verifying prices, update lo/hi values in parts.js and run: git add parts.js && git commit');
output.push('='.repeat(80));

const report = output.join('\n');
console.log(report);

// Also save to file for easy reference
const outFile = path.join(__dirname, 'price-checklist.txt');
fs.writeFileSync(outFile, report);
console.log('\nSaved to price-checklist.txt');
