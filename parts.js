'use strict';

// All PC component data lives here. Edit prices, add/remove parts, or update icons — build.html's logic never needs to change.

const ICONS = {
  gpu:'<svg viewBox="0 0 48 48" fill="none"><rect x="2" y="12" width="44" height="26" rx="3" fill="#0d1b2a" stroke="#22d3ee" stroke-width="1.5"/><circle cx="14" cy="25" r="7" stroke="#22d3ee" stroke-width="1.5"/><circle cx="14" cy="25" r="3" fill="#22d3ee" opacity=".3"/><circle cx="30" cy="25" r="7" stroke="#22d3ee" stroke-width="1.5"/><circle cx="30" cy="25" r="3" fill="#22d3ee" opacity=".3"/><rect x="44" y="16" width="2" height="3" fill="#22d3ee"/><rect x="44" y="21" width="2" height="3" fill="#22d3ee"/><rect x="44" y="26" width="2" height="3" fill="#22d3ee"/><rect x="14" y="8" width="14" height="4" rx="1" fill="#22d3ee" opacity=".5"/></svg>',
  cpu:'<svg viewBox="0 0 48 48" fill="none"><rect x="11" y="11" width="26" height="26" rx="3" fill="#0d1b2a" stroke="#22d3ee" stroke-width="1.5"/><rect x="16" y="16" width="16" height="16" rx="1.5" fill="#22d3ee" opacity=".15" stroke="#22d3ee" stroke-width="1"/><line x1="17" y1="11" x2="17" y2="7" stroke="#22d3ee" stroke-width="1.5" stroke-linecap="round"/><line x1="23" y1="11" x2="23" y2="7" stroke="#22d3ee" stroke-width="1.5" stroke-linecap="round"/><line x1="29" y1="11" x2="29" y2="7" stroke="#22d3ee" stroke-width="1.5" stroke-linecap="round"/><line x1="17" y1="41" x2="17" y2="37" stroke="#22d3ee" stroke-width="1.5" stroke-linecap="round"/><line x1="23" y1="41" x2="23" y2="37" stroke="#22d3ee" stroke-width="1.5" stroke-linecap="round"/><line x1="29" y1="41" x2="29" y2="37" stroke="#22d3ee" stroke-width="1.5" stroke-linecap="round"/><line x1="11" y1="17" x2="7" y2="17" stroke="#22d3ee" stroke-width="1.5" stroke-linecap="round"/><line x1="11" y1="23" x2="7" y2="23" stroke="#22d3ee" stroke-width="1.5" stroke-linecap="round"/><line x1="11" y1="29" x2="7" y2="29" stroke="#22d3ee" stroke-width="1.5" stroke-linecap="round"/><line x1="41" y1="17" x2="37" y2="17" stroke="#22d3ee" stroke-width="1.5" stroke-linecap="round"/><line x1="41" y1="23" x2="37" y2="23" stroke="#22d3ee" stroke-width="1.5" stroke-linecap="round"/><line x1="41" y1="29" x2="37" y2="29" stroke="#22d3ee" stroke-width="1.5" stroke-linecap="round"/></svg>',
  mobo:'<svg viewBox="0 0 48 48" fill="none"><rect x="3" y="3" width="42" height="42" rx="3" fill="#0d1b2a" stroke="#22d3ee" stroke-width="1.5"/><rect x="8" y="8" width="14" height="14" rx="2" fill="#22d3ee" opacity=".15" stroke="#22d3ee" stroke-width="1"/><rect x="9" y="27" width="30" height="4" rx="1" fill="none" stroke="#22d3ee" stroke-width="1"/><rect x="9" y="34" width="30" height="4" rx="1" fill="none" stroke="#22d3ee" stroke-width="1"/><rect x="27" y="8" width="12" height="8" rx="1" fill="none" stroke="#22d3ee" stroke-width="1"/><circle cx="36" cy="22" r="3" fill="none" stroke="#22d3ee" stroke-width="1.2"/></svg>',
  ram:'<svg viewBox="0 0 48 48" fill="none"><rect x="5" y="6" width="14" height="36" rx="2" fill="#0d1b2a" stroke="#22d3ee" stroke-width="1.5"/><rect x="8" y="10" width="8" height="4" rx=".5" fill="#22d3ee" opacity=".5"/><rect x="8" y="17" width="8" height="4" rx=".5" fill="#22d3ee" opacity=".5"/><rect x="8" y="24" width="8" height="4" rx=".5" fill="#22d3ee" opacity=".5"/><rect x="8" y="38" width="5" height="2" rx=".5" fill="#060d1a"/><rect x="29" y="6" width="14" height="36" rx="2" fill="#0d1b2a" stroke="#22d3ee" stroke-width="1.5"/><rect x="32" y="10" width="8" height="4" rx=".5" fill="#22d3ee" opacity=".5"/><rect x="32" y="17" width="8" height="4" rx=".5" fill="#22d3ee" opacity=".5"/><rect x="32" y="24" width="8" height="4" rx=".5" fill="#22d3ee" opacity=".5"/><rect x="32" y="38" width="5" height="2" rx=".5" fill="#060d1a"/></svg>',
  storage:'<svg viewBox="0 0 48 48" fill="none"><rect x="3" y="17" width="42" height="14" rx="2" fill="#0d1b2a" stroke="#22d3ee" stroke-width="1.5"/><rect x="5" y="20" width="6" height="8" rx="1" fill="#22d3ee" opacity=".4"/><rect x="15" y="20" width="6" height="8" rx="1" fill="#22d3ee" opacity=".4"/><rect x="25" y="20" width="6" height="8" rx="1" fill="#22d3ee" opacity=".4"/><rect x="37" y="21" width="5" height="2" rx=".5" fill="#22d3ee" opacity=".6"/><rect x="37" y="25" width="5" height="2" rx=".5" fill="#22d3ee" opacity=".6"/><line x1="5" y1="17" x2="5" y2="14" stroke="#22d3ee" stroke-width="1.5" stroke-linecap="round"/><line x1="8" y1="17" x2="8" y2="14" stroke="#22d3ee" stroke-width="1.5" stroke-linecap="round"/></svg>',
  case:'<svg viewBox="0 0 48 48" fill="none"><rect x="10" y="3" width="28" height="42" rx="3" fill="#0d1b2a" stroke="#22d3ee" stroke-width="1.5"/><circle cx="24" cy="10" r="3" fill="none" stroke="#22d3ee" stroke-width="1.2"/><rect x="14" y="17" width="20" height="15" rx="2" fill="none" stroke="#22d3ee" stroke-width="1"/><rect x="17" y="36" width="6" height="3" rx=".5" fill="#22d3ee" opacity=".4"/><line x1="36" y1="4" x2="36" y2="44" stroke="#22d3ee" stroke-width="1" opacity=".4"/></svg>',
  psu:'<svg viewBox="0 0 48 48" fill="none"><rect x="4" y="10" width="36" height="28" rx="3" fill="#0d1b2a" stroke="#22d3ee" stroke-width="1.5"/><circle cx="16" cy="24" r="8" fill="none" stroke="#22d3ee" stroke-width="1.2"/><circle cx="16" cy="24" r="3" fill="#22d3ee" opacity=".3"/><line x1="16" y1="16" x2="16" y2="19" stroke="#22d3ee" stroke-width="1" stroke-linecap="round"/><line x1="16" y1="29" x2="16" y2="32" stroke="#22d3ee" stroke-width="1" stroke-linecap="round"/><line x1="8" y1="24" x2="11" y2="24" stroke="#22d3ee" stroke-width="1" stroke-linecap="round"/><line x1="21" y1="24" x2="24" y2="24" stroke="#22d3ee" stroke-width="1" stroke-linecap="round"/><rect x="30" y="14" width="10" height="2" rx="1" fill="#22d3ee" opacity=".5"/><rect x="30" y="19" width="10" height="2" rx="1" fill="#22d3ee" opacity=".5"/><rect x="30" y="24" width="10" height="2" rx="1" fill="#22d3ee" opacity=".5"/><rect x="30" y="29" width="10" height="2" rx="1" fill="#22d3ee" opacity=".5"/></svg>',
  cooler:'<svg viewBox="0 0 48 48" fill="none"><rect x="9" y="28" width="30" height="14" rx="2" fill="#0d1b2a" stroke="#22d3ee" stroke-width="1.5"/><line x1="14" y1="28" x2="14" y2="12" stroke="#22d3ee" stroke-width="2" stroke-linecap="round"/><line x1="19" y1="28" x2="19" y2="10" stroke="#22d3ee" stroke-width="2" stroke-linecap="round"/><line x1="24" y1="28" x2="24" y2="10" stroke="#22d3ee" stroke-width="2" stroke-linecap="round"/><line x1="29" y1="28" x2="29" y2="10" stroke="#22d3ee" stroke-width="2" stroke-linecap="round"/><line x1="34" y1="28" x2="34" y2="12" stroke="#22d3ee" stroke-width="2" stroke-linecap="round"/><circle cx="24" cy="36" r="4" fill="none" stroke="#22d3ee" stroke-width="1.2"/></svg>',
  fans:'<svg viewBox="0 0 48 48" fill="none"><rect x="4" y="4" width="40" height="40" rx="4" fill="#0d1b2a" stroke="#22d3ee" stroke-width="1.5"/><circle cx="24" cy="24" r="14" fill="none" stroke="#22d3ee" stroke-width="1" opacity=".3"/><circle cx="24" cy="24" r="4" fill="#22d3ee" opacity=".3" stroke="#22d3ee" stroke-width="1"/><path d="M24 20 C26 16 30 15 31 18 C32 21 28 22 24 20Z" fill="#22d3ee" opacity=".6"/><path d="M28 24 C32 22 34 25 32 28 C30 31 27 28 28 24Z" fill="#22d3ee" opacity=".6"/><path d="M24 28 C22 32 18 33 17 30 C16 27 20 26 24 28Z" fill="#22d3ee" opacity=".6"/><path d="M20 24 C16 26 14 23 16 20 C18 17 21 20 20 24Z" fill="#22d3ee" opacity=".6"/><circle cx="8" cy="8" r="2" fill="none" stroke="#22d3ee" stroke-width="1" opacity=".5"/><circle cx="40" cy="8" r="2" fill="none" stroke="#22d3ee" stroke-width="1" opacity=".5"/><circle cx="8" cy="40" r="2" fill="none" stroke="#22d3ee" stroke-width="1" opacity=".5"/><circle cx="40" cy="40" r="2" fill="none" stroke="#22d3ee" stroke-width="1" opacity=".5"/></svg>'
};

// perf: 1=GTX 1060 tier (1080p medium) → 10=RTX 5090 tier (4K/8K flagship)
const DATA = {
  gpu: {
    budget:[
      {n:'NVIDIA RTX 5050 8GB',lo:278,hi:312,year:2025,perf:4,s:'1080p entry · Handles all modern titles at high settings',pcp:'https://pcpartpicker.com/search/?q=RTX+5050'},
      {n:'NVIDIA RTX 5060 8GB',lo:335,hi:368,year:2025,perf:5,s:'Strong 1080p, capable 1440p · Blackwell gen',pcp:'https://pcpartpicker.com/search/?q=RTX+5060+8GB'},
      {n:'AMD RX 9060 XT 8GB',lo:352,hi:392,year:2025,perf:5,s:'AMD alternative · RDNA 4 · Great open-source drivers',pcp:'https://pcpartpicker.com/search/?q=RX+9060+XT+8GB'},
      {n:'NVIDIA RTX 5060 Ti 8GB',lo:368,hi:425,year:2025,perf:6,s:'1080p/1440p · Faster Ti chip · DLSS 4 · 8GB is limiting by 2027',pcp:'https://pcpartpicker.com/search/?q=RTX+5060+Ti+8GB'},
      // Used market / older generation options
      {n:'NVIDIA RTX 3060 12GB',lo:190,hi:265,year:2021,perf:4,s:'Used market · Solid 1080p · 12GB VRAM helps · Light 1440p capable',pcp:'https://pcpartpicker.com/search/?q=RTX+3060+12GB'},
      {n:'NVIDIA RTX 2060 6GB',lo:130,hi:200,year:2018,perf:3,s:'Used market · 1080p ultra · Entry ray tracing · DLSS support',pcp:'https://pcpartpicker.com/search/?q=RTX+2060+6GB'},
      {n:'NVIDIA GTX 1660 Super 6GB',lo:100,hi:155,year:2019,perf:2,s:'Used market · 1080p high settings · No ray tracing · Solid budget pick',pcp:'https://pcpartpicker.com/search/?q=GTX+1660+Super'},
      {n:'AMD RX 580 8GB',lo:55,hi:90,year:2017,perf:1,s:'Used market · 1080p medium settings · 8GB VRAM · Great for Linux',pcp:'https://pcpartpicker.com/search/?q=RX+580+8GB'},
      {n:'NVIDIA GTX 1060 6GB',lo:50,hi:85,year:2016,perf:1,s:'Used market · 1080p medium settings · Esports titles only · Cheapest entry point',pcp:'https://pcpartpicker.com/search/?q=GTX+1060+6GB'}
    ],
    mid:[
      {n:'AMD RX 9060 XT 16GB',lo:428,hi:478,year:2025,perf:5,s:'16GB VRAM future-proofs this card significantly · RDNA 4',pcp:'https://pcpartpicker.com/search/?q=RX+9060+XT+16GB'},
      {n:'NVIDIA RTX 5060 Ti 16GB',lo:565,hi:625,year:2025,perf:6,s:'Speed + headroom · Best mid-range overall balance',pcp:'https://pcpartpicker.com/search/?q=RTX+5060+Ti+16GB'},
      {n:'AMD RX 9070 16GB',lo:545,hi:625,year:2025,perf:7,s:'1440p powerhouse · Beats RTX 5070 in many benchmarks · Near MSRP now',pcp:'https://pcpartpicker.com/search/?q=RX+9070'},
      {n:'NVIDIA RTX 5070 12GB',lo:605,hi:672,year:2025,perf:8,s:'Top 1440p · DLSS 4 Multi-Frame Gen · 4K capable',pcp:'https://pcpartpicker.com/search/?q=RTX+5070'},
      // Current-gen 2023-2024 options
      {n:'NVIDIA RTX 4060 Ti 8GB',lo:350,hi:415,year:2023,perf:6,s:'Strong 1440p · DLSS 3 Frame Gen · Efficient 160W card',pcp:'https://pcpartpicker.com/search/?q=RTX+4060+Ti+8GB'},
      {n:'NVIDIA RTX 4060 8GB',lo:275,hi:330,year:2023,perf:5,s:'Solid 1440p entry · DLSS 3 · Frame gen support · Very efficient',pcp:'https://pcpartpicker.com/search/?q=RTX+4060+8GB'},
      // Used market / older generation options
      {n:'NVIDIA RTX 3070 8GB',lo:295,hi:385,year:2020,perf:6,s:'Used market · Strong 1440p · Still very capable in 2026',pcp:'https://pcpartpicker.com/search/?q=RTX+3070+8GB'},
      {n:'AMD RX 6700 XT 12GB',lo:235,hi:325,year:2021,perf:5,s:'Used market · Solid 1440p · 12GB VRAM advantage · Great value',pcp:'https://pcpartpicker.com/search/?q=RX+6700+XT+12GB'},
      {n:'NVIDIA RTX 3060 Ti 8GB',lo:230,hi:310,year:2020,perf:5,s:'Used market · 1440p capable · Better than RTX 3060 for gaming',pcp:'https://pcpartpicker.com/search/?q=RTX+3060+Ti+8GB'}
    ],
    high:[
      {n:'AMD RX 9070 XT 16GB',lo:648,hi:758,year:2025,perf:8,s:'1440p/4K champion · 16GB · AMD RDNA 4 flagship mid · Prices dropping',pcp:'https://pcpartpicker.com/search/?q=RX+9070+XT'},
      {n:'NVIDIA RTX 5070 Ti 16GB',lo:975,hi:1108,year:2025,perf:9,s:'High-refresh 1440p / 4K · Big jump over 5070 · DLSS 4',pcp:'https://pcpartpicker.com/search/?q=RTX+5070+Ti'},
      {n:'NVIDIA RTX 5080 16GB',lo:1285,hi:1455,year:2025,perf:9,s:'4K ultra performance · Near-top Blackwell · No compromises',pcp:'https://pcpartpicker.com/search/?q=RTX+5080'},
      // 2024 options
      {n:'NVIDIA RTX 4070 Ti Super 16GB',lo:720,hi:845,year:2024,perf:8,s:'4K capable · 16GB VRAM · Strong high-end value · DLSS 3',pcp:'https://pcpartpicker.com/search/?q=RTX+4070+Ti+Super'},
      // 2023 options
      {n:'NVIDIA RTX 4070 12GB',lo:530,hi:615,year:2023,perf:7,s:'High 1440p · DLSS 3 Frame Gen · Very efficient · Great 2023 card',pcp:'https://pcpartpicker.com/search/?q=RTX+4070+12GB'},
      // Used market high-end options
      {n:'NVIDIA RTX 3090 24GB',lo:600,hi:790,year:2020,perf:8,s:'Used market · 24GB VRAM · Content creation beast · 4K capable',pcp:'https://pcpartpicker.com/search/?q=RTX+3090'},
      {n:'AMD RX 6800 XT 16GB',lo:410,hi:560,year:2020,perf:7,s:'Used market · 1440p max / entry 4K · 16GB VRAM · Excellent value used',pcp:'https://pcpartpicker.com/search/?q=RX+6800+XT+16GB'},
      {n:'NVIDIA RTX 3080 10GB',lo:395,hi:540,year:2020,perf:7,s:'Used market · High 1440p / entry 4K · Still very capable in 2026',pcp:'https://pcpartpicker.com/search/?q=RTX+3080+10GB'}
    ],
    ultra:[
      {n:'NVIDIA RTX 5080 16GB',lo:1285,hi:1455,year:2025,perf:9,s:'Second-best GPU alive · 4K / high-refresh beast',pcp:'https://pcpartpicker.com/search/?q=RTX+5080'},
      {n:'NVIDIA RTX 5090 32GB',lo:3200,hi:4200,year:2025,perf:10,s:'Best GPU on the market · 4K/8K · AI/ML workloads · 32GB VRAM · Elevated above MSRP',pcp:'https://pcpartpicker.com/search/?q=RTX+5090'},
      // 2024 options
      {n:'NVIDIA RTX 4080 Super 16GB',lo:900,hi:1085,year:2024,perf:9,s:'4K ultra · 16GB VRAM · Better value than original 4080 · DLSS 3',pcp:'https://pcpartpicker.com/search/?q=RTX+4080+Super'},
      // 2022 options
      {n:'NVIDIA RTX 4090 24GB',lo:1500,hi:2100,year:2022,perf:9,s:'Former flagship · 4K ultra · 24GB VRAM · Still top-5 GPU on the planet',pcp:'https://pcpartpicker.com/search/?q=RTX+4090'},
      {n:'AMD RX 7900 XTX 24GB',lo:780,hi:1040,year:2022,perf:8,s:'AMD flagship · 4K ultra · 24GB VRAM · Strong rasterization performance',pcp:'https://pcpartpicker.com/search/?q=RX+7900+XTX'}
    ]
  },
  cpu: {
    budget:[
      {n:'AMD Ryzen 5 4500',lo:78,hi:105,year:2020,sk:'AM4',dd:'DDR4',s:'6-core AM4 · Budget entry · Good for light gaming + everyday use',pcp:'https://pcpartpicker.com/search/?q=Ryzen+5+4500'},
      {n:'AMD Ryzen 5 5600',lo:105,hi:142,year:2021,sk:'AM4',dd:'DDR4',s:'6-core AM4 · Proven performer · Best budget gaming CPU',pcp:'https://pcpartpicker.com/search/?q=Ryzen+5+5600'},
      {n:'AMD Ryzen 5 5600X',lo:135,hi:168,year:2021,sk:'AM4',dd:'DDR4',s:'6-core AM4 · Boosted clocks · Small OC headroom over 5600',pcp:'https://pcpartpicker.com/search/?q=Ryzen+5+5600X'},
      {n:'Intel Core i5-12400F',lo:145,hi:185,year:2022,sk:'LGA1700',dd:'DDR4',s:'6-core LGA1700 · Solid 1080p gaming · No iGPU',pcp:'https://pcpartpicker.com/search/?q=i5-12400F'},
      // Used market / older AM4
      {n:'AMD Ryzen 5 3600',lo:65,hi:95,year:2019,sk:'AM4',dd:'DDR4',s:'Used market · 6-core AM4 · Great value used · Still capable for gaming',pcp:'https://pcpartpicker.com/search/?q=Ryzen+5+3600'}
    ],
    mid:[
      {n:'Intel Core i5-14600K',lo:215,hi:258,year:2023,sk:'LGA1700',dd:'DDR4',s:'14-core hybrid · Phenomenal gaming + streaming value',pcp:'https://pcpartpicker.com/search/?q=i5-14600K'},
      {n:'Intel Core i5-14600KF',lo:228,hi:268,year:2023,sk:'LGA1700',dd:'DDR4',s:'Same as 14600K · No iGPU · Slightly cheaper',pcp:'https://pcpartpicker.com/search/?q=i5-14600KF'},
      {n:'AMD Ryzen 5 7600X',lo:172,hi:215,year:2022,sk:'AM5',dd:'DDR5',s:'6-core AM5 · Fast single-core · Future platform',pcp:'https://pcpartpicker.com/search/?q=Ryzen+5+7600X'},
      {n:'AMD Ryzen 5 9600X',lo:198,hi:238,year:2024,sk:'AM5',dd:'DDR5',s:'6-core Zen 5 · 5.4GHz boost · Best mid gaming CPU',pcp:'https://pcpartpicker.com/search/?q=Ryzen+5+9600X'},
      {n:'Intel Core Ultra 5 245KF',lo:188,hi:228,year:2024,sk:'LGA1851',dd:'DDR5',s:'14-core Arrow Lake · Current-gen Intel · No iGPU',pcp:'https://pcpartpicker.com/search/?q=Core+Ultra+5+245KF'},
      {n:'AMD Ryzen 7 7700X',lo:238,hi:278,year:2022,sk:'AM5',dd:'DDR5',s:'8-core AM5 · Great streaming + gaming combo',pcp:'https://pcpartpicker.com/search/?q=Ryzen+7+7700X'},
      // Strong AM4 options (great used / new value)
      {n:'AMD Ryzen 7 5800X3D',lo:195,hi:255,year:2022,sk:'AM4',dd:'DDR4',s:'8-core AM4 · 3D V-Cache · Was the #1 gaming CPU of its era · Still excellent',pcp:'https://pcpartpicker.com/search/?q=Ryzen+7+5800X3D'},
      {n:'AMD Ryzen 7 5700X',lo:128,hi:175,year:2022,sk:'AM4',dd:'DDR4',s:'8-core AM4 · Efficient · Great budget-to-mid upgrade CPU',pcp:'https://pcpartpicker.com/search/?q=Ryzen+7+5700X'},
      {n:'Intel Core i5-13600K',lo:195,hi:245,year:2022,sk:'LGA1700',dd:'DDR4',s:'14-core hybrid · Excellent gaming + productivity value · LGA1700',pcp:'https://pcpartpicker.com/search/?q=i5-13600K'}
    ],
    high:[
      {n:'AMD Ryzen 7 9700X',lo:295,hi:342,year:2024,sk:'AM5',dd:'DDR5',s:'8-core Zen 5 · Improved IPC · Runs cool',pcp:'https://pcpartpicker.com/search/?q=Ryzen+7+9700X'},
      {n:'AMD Ryzen 9 7900X',lo:315,hi:378,year:2022,sk:'AM5',dd:'DDR5',s:'12-core AM5 · Serious creator + gaming combo',pcp:'https://pcpartpicker.com/search/?q=Ryzen+9+7900X'},
      {n:'Intel Core i7-14700K',lo:315,hi:372,year:2023,sk:'LGA1700',dd:'DDR4',s:'20-core hybrid · Gaming + content creation beast',pcp:'https://pcpartpicker.com/search/?q=i7-14700K'},
      {n:'Intel Core Ultra 7 265KF',lo:285,hi:338,year:2024,sk:'LGA1851',dd:'DDR5',s:'20-core Arrow Lake · No iGPU · Excellent multi-threaded',pcp:'https://pcpartpicker.com/search/?q=Core+Ultra+7+265KF'},
      {n:'Intel Core Ultra 7 265K',lo:302,hi:355,year:2024,sk:'LGA1851',dd:'DDR5',s:'20-core Arrow Lake · Includes iGPU · Current-gen flagship mid',pcp:'https://pcpartpicker.com/search/?q=Core+Ultra+7+265K'},
      // AM4 high-end (new or used)
      {n:'AMD Ryzen 9 5900X',lo:175,hi:235,year:2020,sk:'AM4',dd:'DDR4',s:'12-core AM4 · Excellent content creation + gaming · Great value used or new',pcp:'https://pcpartpicker.com/search/?q=Ryzen+9+5900X'},
      {n:'Intel Core i7-13700K',lo:265,hi:325,year:2022,sk:'LGA1700',dd:'DDR4',s:'16-core hybrid · Gaming + streaming powerhouse · LGA1700 platform',pcp:'https://pcpartpicker.com/search/?q=i7-13700K'}
    ],
    ultra:[
      {n:'AMD Ryzen 7 9800X3D',lo:465,hi:512,year:2024,sk:'AM5',dd:'DDR5',s:'8-core · 3D V-Cache · Best gaming CPU alive. Period.',pcp:'https://pcpartpicker.com/search/?q=Ryzen+7+9800X3D'},
      {n:'AMD Ryzen 9 9900X',lo:485,hi:548,year:2024,sk:'AM5',dd:'DDR5',s:'12-core Zen 5 · Top creator + gaming combo',pcp:'https://pcpartpicker.com/search/?q=Ryzen+9+9900X'},
      {n:'AMD Ryzen 9 9950X',lo:515,hi:598,year:2024,sk:'AM5',dd:'DDR5',s:'16-core Zen 5 · Absolute workstation + gaming king',pcp:'https://pcpartpicker.com/search/?q=Ryzen+9+9950X'},
      {n:'Intel Core i9-14900K',lo:448,hi:508,year:2023,sk:'LGA1700',dd:'DDR4',s:'24-core · At all-time low price in 2026 · Great DDR4 value play',pcp:'https://pcpartpicker.com/search/?q=i9-14900K'},
      {n:'Intel Core Ultra 9 285K',lo:535,hi:628,year:2024,sk:'LGA1851',dd:'DDR5',s:'24-core Arrow Lake flagship · Maximum Intel productivity',pcp:'https://pcpartpicker.com/search/?q=Core+Ultra+9+285K'}
    ]
  },
  mobo: {
    budget:[
      {n:'B550 Motherboard (AM4)',lo:90,hi:138,sk:'AM4',dd:'DDR4',s:'Pairs with Ryzen 3600/4500/5600/5600X · Solid budget board'},
      {n:'B660 Motherboard (LGA1700)',lo:88,hi:132,sk:'LGA1700',dd:'DDR4',s:'Pairs with i5-12400F · Entry Intel 12th gen board'},
      {n:'B760 Motherboard (LGA1700)',lo:98,hi:155,sk:'LGA1700',dd:'DDR4',s:'Better VRMs than B660 · More stable under load'},
      {n:'B860 Motherboard (LGA1851)',lo:118,hi:185,sk:'LGA1851',dd:'DDR5',s:'Pairs with Core Ultra 5 245KF · Entry Arrow Lake'}
    ],
    mid:[
      {n:'X570 Motherboard (AM4)',lo:138,hi:198,sk:'AM4',dd:'DDR4',s:'Premium AM4 · PCIe 4.0 across all lanes · Works with 5800X3D/5700X'},
      {n:'Z790 Motherboard (LGA1700)',lo:158,hi:252,sk:'LGA1700',dd:'DDR4',s:'Top 12th/13th/14th gen Intel · Full OC support'},
      {n:'B650 Motherboard (AM5)',lo:128,hi:212,sk:'AM5',dd:'DDR5',s:'Entry AM5 · Gets you onto the new platform affordably'},
      {n:'Z890 Motherboard (LGA1851)',lo:225,hi:388,sk:'LGA1851',dd:'DDR5',s:'Pairs with Core Ultra 5/7 · Arrow Lake OC unlocked'}
    ],
    high:[
      {n:'X670 Motherboard (AM5)',lo:225,hi:358,sk:'AM5',dd:'DDR5',s:'High-end AM5 · Serious VRMs · More bandwidth'},
      {n:'X670E Motherboard (AM5)',lo:288,hi:462,sk:'AM5',dd:'DDR5',s:'AM5 · PCIe 5.0 x16 · Best for fast NVMe SSDs'},
      {n:'X870 Motherboard (AM5)',lo:325,hi:492,sk:'AM5',dd:'DDR5',s:'Latest AMD chipset · USB4 · Pairs well with 9800X3D'},
      {n:'Z790 High-End (LGA1700)',lo:288,hi:462,sk:'LGA1700',dd:'DDR4',s:'Pairs with i7-14700K/i9-14900K · Top Intel mid board'}
    ],
    ultra:[
      {n:'X870E Motherboard (AM5)',lo:385,hi:858,sk:'AM5',dd:'DDR5',s:'Best AM5 board for 9800X3D / 9950X · Maximum bandwidth'},
      {n:'Z890 Extreme (LGA1851)',lo:462,hi:822,sk:'LGA1851',dd:'DDR5',s:'Pairs with Core Ultra 9 285K · Absolute Intel flagship'}
    ]
  },
  ram: {
    budget:[
      {n:'16GB DDR4-3200 Kit',lo:145,hi:195,dd:'DDR4',s:'Minimum for gaming in 2026 · AM4 + LGA1700 platforms · [!] Prices up ~3x since mid-2025',pcp:'https://pcpartpicker.com/search/?q=16GB+DDR4+3200'},
      {n:'32GB DDR4-3200 Kit',lo:252,hi:328,dd:'DDR4',s:'Recommended · Future-proofs your DDR4 build · [!] Memory prices elevated in 2026',pcp:'https://pcpartpicker.com/search/?q=32GB+DDR4+3200'},
      {n:'16GB DDR5-4800 Kit',lo:198,hi:272,dd:'DDR5',s:'Entry DDR5 · For LGA1851 builds · [!] DDR5 prices surged significantly in 2026',pcp:'https://pcpartpicker.com/search/?q=16GB+DDR5+4800'},
      {n:'32GB DDR5-5600 Kit',lo:298,hi:385,dd:'DDR5',s:'Solid DDR5 · Good balance for Core Ultra 5 builds · [!] Verify current price before ordering',pcp:'https://pcpartpicker.com/search/?q=32GB+DDR5+5600'}
    ],
    mid:[
      {n:'32GB DDR4-3200 Kit',lo:252,hi:328,dd:'DDR4',s:'Recommended DDR4 · LGA1700 sweet spot · Cheaper than DDR5 right now',pcp:'https://pcpartpicker.com/search/?q=32GB+DDR4+3200'},
      {n:'32GB DDR5-5600 Kit',lo:298,hi:385,dd:'DDR5',s:'Entry AM5 · Solid for most games and workloads · [!] Check live price before ordering',pcp:'https://pcpartpicker.com/search/?q=32GB+DDR5+5600'},
      {n:'32GB DDR5-6000 CL30',lo:318,hi:422,dd:'DDR5',s:'Sweet spot for AM5 · Highly recommended pairing · [!] Memory prices up ~4x from 2025 lows',pcp:'https://pcpartpicker.com/search/?q=32GB+DDR5+6000'},
      {n:'64GB DDR5-6000 Kit',lo:698,hi:958,dd:'DDR5',s:'Content creation + streaming + heavy multitasking · [!] Significant price increase in 2026',pcp:'https://pcpartpicker.com/search/?q=64GB+DDR5+6000'}
    ],
    high:[
      {n:'32GB DDR5-6000 CL30',lo:318,hi:422,dd:'DDR5',s:'Best starting point for high-end AM5 builds · Verify live price',pcp:'https://pcpartpicker.com/search/?q=32GB+DDR5+6000'},
      {n:'32GB DDR5-6400 CL32',lo:375,hi:458,dd:'DDR5',s:'Faster kit · Noticeable gains with 9800X3D specifically · [!] Memory shortage impacting prices',pcp:'https://pcpartpicker.com/search/?q=32GB+DDR5+6400'},
      {n:'64GB DDR5-6000 Kit',lo:698,hi:958,dd:'DDR5',s:'Gaming + serious content creation · No capacity limits',pcp:'https://pcpartpicker.com/search/?q=64GB+DDR5+6000'},
      {n:'64GB DDR5-6400 Kit',lo:798,hi:1052,dd:'DDR5',s:'High-speed 64GB · For creators who game hard · [!] Check PCPartPicker for current price',pcp:'https://pcpartpicker.com/search/?q=64GB+DDR5+6400'}
    ],
    ultra:[
      {n:'32GB DDR5-6400 CL32',lo:375,hi:458,dd:'DDR5',s:'Optimal for 9800X3D · Best gaming RAM pairing',pcp:'https://pcpartpicker.com/search/?q=32GB+DDR5+6400'},
      {n:'64GB DDR5-6400 Kit',lo:798,hi:1052,dd:'DDR5',s:'High-speed large kit · Workstation + gaming',pcp:'https://pcpartpicker.com/search/?q=64GB+DDR5+6400'},
      {n:'96GB DDR5-6400 Kit',lo:1195,hi:1498,dd:'DDR5',s:'Server-adjacent · Extreme rendering + AI workloads · [!] Highly volatile pricing',pcp:'https://pcpartpicker.com/search/?q=96GB+DDR5'},
      {n:'128GB DDR5-6000 Kit',lo:1895,hi:2495,dd:'DDR5',s:'Maximum capacity · Local AI models + 3D rendering at scale · [!] Verify before ordering',pcp:'https://pcpartpicker.com/search/?q=128GB+DDR5'}
    ]
  },
  storage: [
    {n:'Kingston NV3 500GB',lo:48,hi:72,cap:'500GB',s:'Budget OS drive · PCIe 4.0 · Gets you booted fast',pcp:'https://pcpartpicker.com/search/?q=Kingston+NV3+500GB'},
    {n:'WD Blue SN580 500GB',lo:65,hi:92,cap:'500GB',s:'Better 500GB · Stronger sequential speeds + endurance',pcp:'https://pcpartpicker.com/search/?q=WD+SN580+500GB'},
    {n:'Kingston NV3 1TB',lo:75,hi:105,cap:'1TB',s:'Budget 1TB · Enough for OS + games · Proven brand',pcp:'https://pcpartpicker.com/search/?q=Kingston+NV3+1TB'},
    {n:'WD Black SN770 1TB',lo:108,hi:148,cap:'1TB',s:'Fast 1TB · 5,150 MB/s · No cache dip · Gaming pick',pcp:'https://pcpartpicker.com/search/?q=WD+SN770+1TB'},
    {n:'Samsung 990 Evo 1TB',lo:118,hi:158,cap:'1TB',s:'Samsung quality · PCIe 4x4/5x2 · Excellent reliability',pcp:'https://pcpartpicker.com/search/?q=Samsung+990+Evo+1TB'},
    {n:'WD Black SN850X 1TB',lo:138,hi:188,cap:'1TB',s:'7,300 MB/s · Top gaming drive · PS5-class speeds',pcp:'https://pcpartpicker.com/search/?q=WD+SN850X+1TB'},
    {n:'Samsung 990 Pro 1TB',lo:155,hi:205,cap:'1TB',s:'Samsung flagship · 7,450 MB/s · Best 1TB endurance',pcp:'https://pcpartpicker.com/search/?q=Samsung+990+Pro+1TB'},
    {n:'WD Black SN7100 2TB',lo:195,hi:248,cap:'2TB',s:'Value 2TB · Strong all-rounder · Best entry 2TB',pcp:'https://pcpartpicker.com/search/?q=WD+SN7100+2TB'},
    {n:'WD Black SN850X 2TB',lo:208,hi:272,cap:'2TB',s:'Fast 2TB · 200+ games · No compromise on speed',pcp:'https://pcpartpicker.com/search/?q=WD+SN850X+2TB'},
    {n:'Samsung 990 Evo 2TB',lo:215,hi:278,cap:'2TB',s:'Samsung 2TB value tier · Reliable · Great warranty',pcp:'https://pcpartpicker.com/search/?q=Samsung+990+Evo+2TB'},
    {n:'Samsung 990 Pro 2TB',lo:245,hi:312,cap:'2TB',s:'Flagship 2TB · Max speed for power users',pcp:'https://pcpartpicker.com/search/?q=Samsung+990+Pro+2TB'},
    {n:'WD Black SN850X 4TB',lo:385,hi:495,cap:'4TB',s:'Massive NVMe · 300+ games · Enthusiast speed',pcp:'https://pcpartpicker.com/search/?q=WD+SN850X+4TB'},
    {n:'Seagate FireCuda 530 4TB',lo:395,hi:515,cap:'4TB',s:'High-speed 4TB alternative · 7,300 MB/s',pcp:'https://pcpartpicker.com/search/?q=Seagate+FireCuda+530+4TB'},
    {n:'Samsung 990 Pro 4TB',lo:415,hi:545,cap:'4TB',s:'Samsung flagship 4TB · Max speed + capacity',pcp:'https://pcpartpicker.com/search/?q=Samsung+990+Pro+4TB'}
  ],
  case: {
    budget:[
      {n:'Budget Mid-Tower',lo:55,hi:85,s:'Clean mid-tower · No frills · Gets the job done · Good airflow'},
      {n:'Mid-Tower (Airflow Focus)',lo:75,hi:115,s:'Mesh front panel · Excellent airflow · Most popular style'},
      {n:'Mid-Tower (Tempered Glass)',lo:90,hi:145,s:'Glass side panel · Show off your components · RGB ready'}
    ],
    mid:[
      {n:'Mid-Tower (Airflow Focus)',lo:75,hi:115,s:'Mesh front panel · Best airflow per dollar'},
      {n:'Mid-Tower (Tempered Glass)',lo:90,hi:145,s:'NZXT H5 / Fractal Pop Air style · Clean and sharp'},
      {n:'NZXT H5 Flow / Similar',lo:110,hi:155,s:'Premium airflow mid-tower · Excellent cable management'},
      {n:'Lian Li Lancool 216 / Similar',lo:98,hi:145,s:'Dual 160mm fans included · Out-of-box airflow king'}
    ],
    high:[
      {n:'Fractal Design Torrent / Similar',lo:155,hi:215,s:'Airflow-focused · Huge front intake · Premium build quality'},
      {n:'Lian Li O11 Dynamic EVO',lo:148,hi:218,s:'AIO-friendly · Triple radiator support · Beautiful glass'},
      {n:'be quiet! Silent Base 802',lo:168,hi:228,s:'Near-silent · Sound dampening panels · Premium quality'}
    ],
    ultra:[
      {n:'Lian Li O11 Dynamic XL',lo:218,hi:298,s:'Full tower · Extreme cooling capacity · Dual-system capable'},
      {n:'Corsair 7000D Airflow',lo:248,hi:338,s:'Full-tower beast · 420mm radiator support · Max airflow'},
      {n:'Phanteks Enthoo 719',lo:228,hi:318,s:'EATX full-tower · Modular interior · Flagship'}
    ]
  },
  psu: {
    budget:[
      {n:'650W 80+ Bronze',lo:45,hi:75,rt:'Bronze',s:'82-85% efficient · Entry level · Fine for budget builds'},
      {n:'650W 80+ Gold',lo:75,hi:110,rt:'Gold',s:'Recommended · 90% efficient · Quieter + cooler + lasts longer'},
      {n:'750W 80+ Gold',lo:85,hi:125,rt:'Gold',s:'Extra headroom · Gold rated · Safe for any budget GPU'}
    ],
    mid:[
      {n:'750W 80+ Gold',lo:75,hi:120,rt:'Gold',s:'Recommended for RTX 5060 Ti / RX 9060 XT builds'},
      {n:'850W 80+ Gold',lo:95,hi:145,rt:'Gold',s:'Best mid-range pick · Handles any GPU at this tier'},
      {n:'850W 80+ Platinum',lo:125,hi:175,rt:'Platinum',s:'Premium efficiency · For streamers or heavy 24/7 use'},
      {n:'1000W 80+ Gold',lo:120,hi:165,rt:'Gold',s:'Extra headroom · RTX 5070 Ti / heavy OC builds'}
    ],
    high:[
      {n:'850W 80+ Gold',lo:95,hi:145,rt:'Gold',s:'Minimum for RTX 5070 Ti builds · Gold efficiency'},
      {n:'1000W 80+ Gold',lo:120,hi:165,rt:'Gold',s:'Recommended for RTX 5080 · Solid headroom · Gold rated'},
      {n:'1000W 80+ Platinum',lo:145,hi:195,rt:'Platinum',s:'Premium · 92% efficient · Near silent under load'},
      {n:'1200W 80+ Gold',lo:155,hi:215,rt:'Gold',s:'For overclocked high-end builds · Maximum headroom'}
    ],
    ultra:[
      {n:'1200W 80+ Gold',lo:155,hi:215,rt:'Gold',s:'Minimum for RTX 5090 builds · Gold efficiency'},
      {n:'1200W 80+ Platinum',lo:185,hi:260,rt:'Platinum',s:'Recommended for RTX 5090 · Premium efficiency'},
      {n:'1600W 80+ Platinum',lo:350,hi:455,rt:'Platinum',s:'Extreme builds · RTX 5090 + heavy OC · No limits'}
    ]
  },
  cooler: {
    budget:[
      {n:'Thermalright Peerless Assassin 120 SE (Air)',lo:35,hi:48,tp:'air',s:'Best budget air cooler alive · Handles 250W · Very quiet'},
      {n:'Arctic Freezer 36 (Air)',lo:45,hi:62,tp:'air',s:'Excellent push-pull · AM5 + LGA1700 ready · Great value'},
      {n:'Arctic Liquid Freezer III 240mm (AIO)',lo:65,hi:88,tp:'aio',s:'Best budget AIO · 240mm · Award-winning performance'}
    ],
    mid:[
      {n:'Thermalright Peerless Assassin 120 SE (Air)',lo:35,hi:48,tp:'air',s:'Budget king that punches way above its price'},
      {n:'be quiet! Dark Rock 4 (Air)',lo:65,hi:88,tp:'air',s:'Premium quiet air cooler · Excellent thermals · Near-silent'},
      {n:'Arctic Liquid Freezer III 240mm (AIO)',lo:65,hi:88,tp:'aio',s:'240mm · Best AIO per dollar · Strong pump + fans'},
      {n:'NZXT Kraken Core 240mm (AIO)',lo:85,hi:118,tp:'aio',s:'240mm · Clean aesthetic · Good software · Solid cooling'},
      {n:'Arctic Liquid Freezer III Pro 360mm (AIO)',lo:88,hi:115,tp:'aio',s:'360mm · Best performance per dollar · 6-year warranty'}
    ],
    high:[
      {n:'Noctua NH-D15 G2 (Air)',lo:125,hi:168,tp:'air',s:'Best air cooler money can buy · Whisper quiet · Beats most AIOs'},
      {n:'Arctic Liquid Freezer III Pro 360mm (AIO)',lo:88,hi:115,tp:'aio',s:'360mm · Award-winning · Best value AIO on the market'},
      {n:'NZXT Kraken Plus 360mm (AIO)',lo:158,hi:225,tp:'aio',s:'360mm · Premium LCD pump head · Top-tier performance'},
      {n:'Corsair iCUE H150i Elite 360mm (AIO)',lo:145,hi:198,tp:'aio',s:'360mm · Flagship Corsair · Great for i9 / Ryzen 9'}
    ],
    ultra:[
      {n:'Noctua NH-D15 G2 (Air)',lo:125,hi:168,tp:'air',s:'Best air cooler on Earth · Handles 250W+ silently'},
      {n:'Arctic Liquid Freezer III Pro 360mm (AIO)',lo:88,hi:115,tp:'aio',s:'360mm · Best AIO value · 6-year warranty'},
      {n:'NZXT Kraken Plus 360mm (AIO)',lo:158,hi:225,tp:'aio',s:'360mm · Premium LCD display · Top performance'},
      {n:'Corsair iCUE H150i Elite 360mm (AIO)',lo:145,hi:198,tp:'aio',s:'360mm · Flagship · Best for 9950X / Ultra 9 285K'}
    ]
  },
  fans: [
    {n:'Arctic P12 PWM 3-Pack',lo:22,hi:38,s:'No RGB · Pure airflow · Budget pick · Very quiet · 120mm'},
    {n:'Corsair RS120 ARGB 3-Pack',lo:40,hi:62,s:'ARGB lighting · Most popular choice · Reliable brand · 120mm'},
    {n:'Lian Li UNI Fan 120 ARGB 3-Pack',lo:55,hi:78,s:'Daisy chain cables · Premium ARGB · Cleanest install · 120mm'},
    {n:'Corsair iCUE Link QX120 ARGB 3-Pack',lo:78,hi:108,s:'Smart RGB ecosystem · Best airflow + lighting · 120mm'}
  ]
};

const BASE = {budget:{lo:12,hi:22},mid:{lo:12,hi:22},high:{lo:12,hi:22},ultra:{lo:12,hi:22}};
const TIER_DESCS = {
  budget:'Budget &mdash; ~$800&ndash;$1,200 total. 1080p gaming, everyday tasks, best value entry point. Note: RAM prices are elevated in 2026 &mdash; verify before ordering.',
  mid:'Mid-Range &mdash; ~$1,300&ndash;$2,000 total. 1080p maxed, solid 1440p, light streaming. The sweet spot. Note: memory costs higher than usual right now.',
  high:'High-End &mdash; ~$2,500&ndash;$4,000 total. 1440p maxed out, capable 4K, content creation. For serious gamers and creators. 5+ year build.',
  ultra:'Ultra &mdash; $5,500+ total. No compromises. 4K high-refresh, local AI workloads, professional content creation. Absolute top-of-stack.'
};

const RECOMMENDED = {
  gaming:{
    label:'Gaming',
    budget:{blurb:'Solid 1080p on a budget. Runs modern titles well without breaking the bank.',sel:{gpu:'NVIDIA RTX 5060 8GB',cpu:'AMD Ryzen 5 5600',mobo:'B550 Motherboard (AM4)',ram:'16GB DDR4-3200 Kit',storage:'WD Black SN770 1TB',case:'Mid-Tower (Airflow Focus)',psu:'650W 80+ Gold',cooler:'Thermalright Peerless Assassin 120 SE (Air)',fans:'Arctic P12 PWM 3-Pack'}},
    mid:{blurb:'1080p maxed, solid 1440p, smooth FPS &mdash; future-proofed for 3&ndash;5 years.',sel:{gpu:'AMD RX 9070 16GB',cpu:'AMD Ryzen 5 9600X',mobo:'B650 Motherboard (AM5)',ram:'32GB DDR5-6000 CL30',storage:'WD Black SN770 1TB',case:'NZXT H5 Flow / Similar',psu:'850W 80+ Gold',cooler:'Arctic Liquid Freezer III 240mm (AIO)',fans:'Corsair RS120 ARGB 3-Pack'}},
    high:{blurb:'1440p maxed, capable 4K, high-refresh &mdash; a serious gaming rig.',sel:{gpu:'AMD RX 9070 XT 16GB',cpu:'AMD Ryzen 7 9700X',mobo:'X870 Motherboard (AM5)',ram:'32GB DDR5-6400 CL32',storage:'WD Black SN850X 1TB',case:'Lian Li O11 Dynamic EVO',psu:'1000W 80+ Gold',cooler:'NZXT Kraken Plus 360mm (AIO)',fans:'Lian Li UNI Fan 120 ARGB 3-Pack'}},
    ultra:{blurb:'4K high-refresh, no compromises. Built around the best gaming CPU available.',sel:{gpu:'NVIDIA RTX 5080 16GB',cpu:'AMD Ryzen 7 9800X3D',mobo:'X870E Motherboard (AM5)',ram:'32GB DDR5-6400 CL32',storage:'WD Black SN850X 2TB',case:'Corsair 7000D Airflow',psu:'1200W 80+ Gold',cooler:'NZXT Kraken Plus 360mm (AIO)',fans:'Corsair iCUE Link QX120 ARGB 3-Pack'}}
  },
  content:{
    label:'Content Creation',
    budget:{blurb:'Enough horsepower for 1080p editing and streaming without overspending.',sel:{gpu:'NVIDIA RTX 5060 Ti 8GB',cpu:'AMD Ryzen 5 5600X',mobo:'B550 Motherboard (AM4)',ram:'32GB DDR4-3200 Kit',storage:'Kingston NV3 1TB',case:'Mid-Tower (Tempered Glass)',psu:'750W 80+ Gold',cooler:'Arctic Freezer 36 (Air)',fans:'Corsair RS120 ARGB 3-Pack'}},
    mid:{blurb:'4K timeline editing, smooth streaming, heavy multitasking &mdash; no bottlenecks.',sel:{gpu:'NVIDIA RTX 5060 Ti 16GB',cpu:'AMD Ryzen 7 7700X',mobo:'B650 Motherboard (AM5)',ram:'64GB DDR5-6000 Kit',storage:'WD Black SN850X 2TB',case:'NZXT H5 Flow / Similar',psu:'850W 80+ Platinum',cooler:'Arctic Liquid Freezer III Pro 360mm (AIO)',fans:'Lian Li UNI Fan 120 ARGB 3-Pack'}},
    high:{blurb:'Professional-grade. 4K/8K editing, rendering, and live streaming simultaneously.',sel:{gpu:'NVIDIA RTX 5070 Ti 16GB',cpu:'AMD Ryzen 7 9700X',mobo:'X670 Motherboard (AM5)',ram:'64GB DDR5-6000 Kit',storage:'WD Black SN850X 2TB',case:'Lian Li O11 Dynamic EVO',psu:'1000W 80+ Gold',cooler:'Arctic Liquid Freezer III Pro 360mm (AIO)',fans:'Lian Li UNI Fan 120 ARGB 3-Pack'}},
    ultra:{blurb:'No workflow too heavy. 3D rendering, 8K export, multi-stream &mdash; all at once.',sel:{gpu:'NVIDIA RTX 5080 16GB',cpu:'AMD Ryzen 9 9900X',mobo:'X870E Motherboard (AM5)',ram:'64GB DDR5-6400 Kit',storage:'Samsung 990 Pro 4TB',case:'Lian Li O11 Dynamic XL',psu:'1200W 80+ Gold',cooler:'Corsair iCUE H150i Elite 360mm (AIO)',fans:'Lian Li UNI Fan 120 ARGB 3-Pack'}}
  },
  ai:{
    label:'AI &amp; Productivity',
    budget:{blurb:'16GB VRAM to run smaller local models &mdash; the minimum for real AI work.',sel:{gpu:'AMD RX 9060 XT 16GB',cpu:'AMD Ryzen 5 5600X',mobo:'B550 Motherboard (AM4)',ram:'32GB DDR4-3200 Kit',storage:'Kingston NV3 1TB',case:'Mid-Tower (Airflow Focus)',psu:'750W 80+ Gold',cooler:'Arctic Freezer 36 (Air)',fans:'Corsair RS120 ARGB 3-Pack'}},
    mid:{blurb:'Runs most local LLMs and Stable Diffusion models comfortably with room to grow.',sel:{gpu:'AMD RX 9070 16GB',cpu:'AMD Ryzen 7 7700X',mobo:'B650 Motherboard (AM5)',ram:'64GB DDR5-6000 Kit',storage:'Samsung 990 Evo 2TB',case:'Mid-Tower (Airflow Focus)',psu:'1000W 80+ Gold',cooler:'be quiet! Dark Rock 4 (Air)',fans:'Lian Li UNI Fan 120 ARGB 3-Pack'}},
    high:{blurb:'16GB VRAM, 12-core CPU, 64GB RAM &mdash; handles large models and heavy workloads.',sel:{gpu:'NVIDIA RTX 5080 16GB',cpu:'AMD Ryzen 9 7900X',mobo:'X870 Motherboard (AM5)',ram:'64GB DDR5-6000 Kit',storage:'Samsung 990 Pro 2TB',case:'Fractal Design Torrent / Similar',psu:'1200W 80+ Gold',cooler:'NZXT Kraken Plus 360mm (AIO)',fans:'Lian Li UNI Fan 120 ARGB 3-Pack'}},
    ultra:{blurb:'32GB VRAM. Runs the largest local models, AI video, and Stable Diffusion at max quality.',sel:{gpu:'NVIDIA RTX 5090 32GB',cpu:'AMD Ryzen 9 9950X',mobo:'X870E Motherboard (AM5)',ram:'64GB DDR5-6400 Kit',storage:'Samsung 990 Pro 2TB',case:'Lian Li O11 Dynamic XL',psu:'1200W 80+ Platinum',cooler:'Noctua NH-D15 G2 (Air)',fans:'Lian Li UNI Fan 120 ARGB 3-Pack'}}
  },
  general:{
    label:'General Use',
    budget:{blurb:'Fast, reliable, handles everything everyday &mdash; browsing, Office, school, light gaming.',sel:{gpu:'NVIDIA RTX 5060 8GB',cpu:'AMD Ryzen 5 5600',mobo:'B550 Motherboard (AM4)',ram:'16GB DDR4-3200 Kit',storage:'Kingston NV3 1TB',case:'Mid-Tower (Airflow Focus)',psu:'650W 80+ Gold',cooler:'Thermalright Peerless Assassin 120 SE (Air)',fans:'Arctic P12 PWM 3-Pack'}},
    mid:{blurb:'A well-rounded, future-proofed machine that handles anything you throw at it.',sel:{gpu:'AMD RX 9060 XT 16GB',cpu:'AMD Ryzen 5 9600X',mobo:'B650 Motherboard (AM5)',ram:'32GB DDR5-6000 CL30',storage:'WD Black SN770 1TB',case:'Mid-Tower (Tempered Glass)',psu:'750W 80+ Gold',cooler:'Thermalright Peerless Assassin 120 SE (Air)',fans:'Arctic P12 PWM 3-Pack'}},
    high:{blurb:'Overkill for everyday tasks, but your machine will never feel slow. Ever.',sel:{gpu:'AMD RX 9070 XT 16GB',cpu:'AMD Ryzen 7 9700X',mobo:'X670 Motherboard (AM5)',ram:'32GB DDR5-6400 CL32',storage:'WD Black SN850X 1TB',case:'be quiet! Silent Base 802',psu:'850W 80+ Gold',cooler:'Noctua NH-D15 G2 (Air)',fans:'Lian Li UNI Fan 120 ARGB 3-Pack'}},
    ultra:{blurb:'A forever machine. Premium components, whisper quiet, handles anything for a decade.',sel:{gpu:'NVIDIA RTX 5080 16GB',cpu:'AMD Ryzen 9 9900X',mobo:'X870E Motherboard (AM5)',ram:'32GB DDR5-6400 CL32',storage:'WD Black SN850X 2TB',case:'Phanteks Enthoo 719',psu:'1200W 80+ Gold',cooler:'Noctua NH-D15 G2 (Air)',fans:'Corsair iCUE Link QX120 ARGB 3-Pack'}}
  }
};
const STORAGE_CAPS = ['500GB','1TB','2TB','4TB'];
