'use strict';

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

// perf: 1=entry (1080p medium) → 10=flagship (4K/8K unlimited)
const DATA = {
  gpu: {
    budget:[
      {n:'NVIDIA GTX 1060 6GB',lo:35,hi:75,year:2016,perf:1,s:'Used · 1080p medium · Cheapest way into PC gaming · Best for Fortnite, Minecraft, older titles',pcp:'https://pcpartpicker.com/search/?q=GTX+1060+6GB'},
      {n:'AMD RX 580 8GB',lo:45,hi:90,year:2017,perf:1,s:'Used · 1080p medium settings · Great Linux support · Good amount of VRAM for the price',pcp:'https://pcpartpicker.com/search/?q=RX+580+8GB'},
      {n:'NVIDIA GTX 1660 Super 6GB',lo:65,hi:120,year:2019,perf:2,s:'Used · 1080p high settings · No ray tracing · Solid reliable budget pick',pcp:'https://pcpartpicker.com/search/?q=GTX+1660+Super'},
      {n:'AMD RX 6600 XT 8GB',lo:110,hi:160,year:2021,perf:3,s:'Used · Strong 1080p gaming · Efficient power draw · Great value on used market',pcp:'https://pcpartpicker.com/search/?q=RX+6600+XT'},
      {n:'NVIDIA RTX 2060 6GB',lo:100,hi:165,year:2018,perf:3,s:'Used · 1080p high settings · Includes ray tracing · Older but still capable',pcp:'https://pcpartpicker.com/search/?q=RTX+2060+6GB'},
      {n:'NVIDIA RTX 3060 12GB',lo:160,hi:250,year:2021,perf:4,s:'Used · Great 1080p, light 1440p · Extra VRAM helps longevity · Ray tracing capable',pcp:'https://pcpartpicker.com/search/?q=RTX+3060+12GB'},
      {n:'AMD RX 7600 8GB',lo:195,hi:240,year:2023,perf:4,s:'Solid 1080p at ultra settings · Power efficient · Current-gen AMD entry card · Good driver support',pcp:'https://pcpartpicker.com/search/?q=RX+7600+8GB'},
      {n:'NVIDIA RTX 5050 8GB',lo:249,hi:299,year:2025,perf:4,s:'Entry-level current-gen · Plays all modern games at 1080p high settings · Latest NVIDIA architecture',pcp:'https://pcpartpicker.com/search/?q=RTX+5050'},
      {n:'NVIDIA RTX 5060 8GB',lo:299,hi:339,year:2025,perf:5,s:'Great 1080p, handles 1440p at medium-high · Latest generation · AI-powered frame generation included',pcp:'https://pcpartpicker.com/search/?q=RTX+5060+8GB'},
      {n:'AMD RX 9060 XT 8GB',lo:299,hi:359,year:2025,perf:5,s:'AMD current-gen entry · Great 1080p/1440p gaming · Excellent Linux and open-source driver support',pcp:'https://pcpartpicker.com/search/?q=RX+9060+XT+8GB'},
      {n:'NVIDIA RTX 5060 Ti 8GB',lo:369,hi:420,year:2025,perf:6,s:'Strong 1080p, solid 1440p · Step up from 5060 · AI frame generation · 8GB VRAM may feel tight in 2-3 years',pcp:'https://pcpartpicker.com/search/?q=RTX+5060+Ti+8GB'}
    ],
    mid:[
      {n:'NVIDIA RTX 3060 Ti 8GB',lo:175,hi:300,year:2020,perf:5,s:'Used · Good 1440p entry · Faster than standard 3060 · Proven reliable card',pcp:'https://pcpartpicker.com/search/?q=RTX+3060+Ti+8GB'},
      {n:'AMD RX 6700 XT 12GB',lo:200,hi:300,year:2021,perf:5,s:'Used · Solid 1440p · More VRAM than most cards at this price · Great used value',pcp:'https://pcpartpicker.com/search/?q=RX+6700+XT+12GB'},
      {n:'NVIDIA RTX 3070 8GB',lo:200,hi:280,year:2020,perf:6,s:'Used · Strong 1440p · Still competitive in 2026 · Great secondhand value',pcp:'https://pcpartpicker.com/search/?q=RTX+3070+8GB'},
      {n:'AMD RX 7700 XT 12GB',lo:320,hi:400,year:2023,perf:6,s:'Current-gen 1440p card · Good VRAM · Solid rasterization performance · Great for content creation',pcp:'https://pcpartpicker.com/search/?q=RX+7700+XT'},
      {n:'AMD RX 7900 GRE 16GB',lo:400,hi:500,year:2023,perf:7,s:'16GB VRAM · Strong 1440p and capable 4K · Excellent value for memory-heavy workloads and AI tools',pcp:'https://pcpartpicker.com/search/?q=RX+7900+GRE'},
      {n:'NVIDIA RTX 4060 8GB',lo:280,hi:330,year:2023,perf:5,s:'Efficient 1080p/1440p card · AI frame generation · Very low power draw · Good mainstream pick',pcp:'https://pcpartpicker.com/search/?q=RTX+4060+8GB'},
      {n:'NVIDIA RTX 4060 Ti 8GB',lo:360,hi:420,year:2023,perf:6,s:'Strong 1440p · AI frame boost · Efficient for its class · Good mid-tier 2023 pick',pcp:'https://pcpartpicker.com/search/?q=RTX+4060+Ti+8GB'},
      {n:'NVIDIA RTX 4070 Super 12GB',lo:490,hi:580,year:2024,perf:7,s:'Excellent 1440p, capable 4K · Great price-to-performance · AI features included · One of the best value cards available',pcp:'https://pcpartpicker.com/search/?q=RTX+4070+Super'},
      {n:'AMD RX 9060 XT 16GB',lo:349,hi:448,year:2025,perf:5,s:'16GB VRAM keeps this card useful for years · Great 1080p/1440p · Latest AMD generation',pcp:'https://pcpartpicker.com/search/?q=RX+9060+XT+16GB'},
      {n:'NVIDIA RTX 5060 Ti 16GB',lo:429,hi:570,year:2025,perf:6,s:'Speed + staying power · Best all-around mid-range balance · Large VRAM means fewer compromises later',pcp:'https://pcpartpicker.com/search/?q=RTX+5060+Ti+16GB'},
      {n:'AMD RX 9070 16GB',lo:499,hi:580,year:2025,perf:7,s:'Excellent 1440p · Beats similarly-priced competition in most games · 16GB VRAM · Latest AMD generation',pcp:'https://pcpartpicker.com/search/?q=RX+9070'},
      {n:'NVIDIA RTX 5070 12GB',lo:549,hi:650,year:2025,perf:8,s:'Best-in-class 1440p · Capable 4K · AI frame generation · Great for high-refresh gaming',pcp:'https://pcpartpicker.com/search/?q=RTX+5070'}
    ],
    high:[
      {n:'NVIDIA RTX 3080 10GB',lo:250,hi:360,year:2020,perf:7,s:'Used · High-performance 1440p and entry 4K · Still very capable in 2026',pcp:'https://pcpartpicker.com/search/?q=RTX+3080+10GB'},
      {n:'AMD RX 6800 XT 16GB',lo:300,hi:420,year:2020,perf:7,s:'Used · Maxes 1440p, handles entry 4K · 16GB VRAM · Excellent used market value',pcp:'https://pcpartpicker.com/search/?q=RX+6800+XT+16GB'},
      {n:'NVIDIA RTX 3090 24GB',lo:400,hi:560,year:2020,perf:8,s:'Used · Massive VRAM · Excellent for video editing, 3D, AI work · Handles 4K gaming well',pcp:'https://pcpartpicker.com/search/?q=RTX+3090'},
      {n:'AMD RX 7900 XT 20GB',lo:580,hi:720,year:2022,perf:8,s:'20GB VRAM · Strong 4K gaming · Excellent for creative workloads · Good current-gen AMD pick',pcp:'https://pcpartpicker.com/search/?q=RX+7900+XT'},
      {n:'NVIDIA RTX 4070 12GB',lo:549,hi:650,year:2023,perf:7,s:'Great 1440p, capable 4K · AI features · Efficient · A solid 2023 card still worth buying',pcp:'https://pcpartpicker.com/search/?q=RTX+4070+12GB'},
      {n:'NVIDIA RTX 4070 Ti 12GB',lo:620,hi:780,year:2023,perf:8,s:'High-end 1440p and strong 4K · AI features · Big jump over 4070 · Good high-tier 2023 option',pcp:'https://pcpartpicker.com/search/?q=RTX+4070+Ti'},
      {n:'NVIDIA RTX 4070 Ti Super 16GB',lo:720,hi:950,year:2024,perf:8,s:'4K capable · 16GB VRAM · Strong value at the high end · AI features included',pcp:'https://pcpartpicker.com/search/?q=RTX+4070+Ti+Super'},
      {n:'AMD RX 9070 XT 16GB',lo:549,hi:650,year:2025,perf:8,s:'Excellent 1440p and capable 4K · 16GB VRAM · AMD\'s top mid-range from the latest generation · Prices coming down',pcp:'https://pcpartpicker.com/search/?q=RX+9070+XT'},
      {n:'NVIDIA RTX 5070 Ti 16GB',lo:749,hi:1069,year:2025,perf:9,s:'High-refresh 1440p and smooth 4K · Big performance jump over 5070 · AI features included',pcp:'https://pcpartpicker.com/search/?q=RTX+5070+Ti'},
      {n:'NVIDIA RTX 5080 16GB',lo:999,hi:1400,year:2025,perf:9,s:'Top-tier 4K gaming · Near-best card available · No compromises at any resolution',pcp:'https://pcpartpicker.com/search/?q=RTX+5080'}
    ],
    ultra:[
      {n:'AMD RX 7900 XTX 24GB',lo:900,hi:1200,year:2022,perf:8,s:'AMD flagship · 4K ultra settings · Very large VRAM · Outstanding raw performance',pcp:'https://pcpartpicker.com/search/?q=RX+7900+XTX'},
      {n:'NVIDIA RTX 4090 24GB',lo:2000,hi:3000,year:2022,perf:9,s:'Previous NVIDIA flagship · 4K ultra settings · Massive VRAM · Still one of the top cards in the world',pcp:'https://pcpartpicker.com/search/?q=RTX+4090'},
      {n:'NVIDIA RTX 4080 Super 16GB',lo:999,hi:1349,year:2024,perf:9,s:'4K ultra settings · 16GB VRAM · Better value than the original 4080 · AI features included',pcp:'https://pcpartpicker.com/search/?q=RTX+4080+Super'},
      {n:'NVIDIA RTX 5080 16GB',lo:999,hi:1400,year:2025,perf:9,s:'Second-best card available · 4K gaming and high frame rates with ease · Latest generation',pcp:'https://pcpartpicker.com/search/?q=RTX+5080'},
      {n:'NVIDIA RTX 5090 32GB',lo:1999,hi:3500,year:2025,perf:10,s:'Best graphics card on the market · 4K and 8K capable · 32GB VRAM for AI and video work · Selling above suggested retail',pcp:'https://pcpartpicker.com/search/?q=RTX+5090'}
    ]
  },

  cpu: {
    budget:[
      {n:'AMD Ryzen 5 3600',lo:45,hi:80,sk:'AM4',dd:'DDR4',s:'Used · 6-core · Great secondhand value · Still capable for everyday gaming',pcp:'https://pcpartpicker.com/search/?q=Ryzen+5+3600'},
      {n:'AMD Ryzen 5 5500',lo:65,hi:90,sk:'AM4',dd:'DDR4',s:'6-core · Cheaper than 5600 · Good entry point for AMD platform · Great for everyday gaming',pcp:'https://pcpartpicker.com/search/?q=Ryzen+5+5500'},
      {n:'AMD Ryzen 5 4500',lo:70,hi:85,sk:'AM4',dd:'DDR4',s:'6-core · Budget entry · Good for everyday tasks and light gaming',pcp:'https://pcpartpicker.com/search/?q=Ryzen+5+4500'},
      {n:'Intel Core i3-12100F',lo:80,hi:110,sk:'LGA1700',dd:'DDR4',s:'4-core Intel · Excellent single-core speed · No built-in graphics — dedicated GPU required · Surprisingly fast for gaming',pcp:'https://pcpartpicker.com/search/?q=i3-12100F'},
      {n:'AMD Ryzen 5 5600',lo:99,hi:145,sk:'AM4',dd:'DDR4',s:'6-core · Proven reliable · Best value gaming chip at this price range',pcp:'https://pcpartpicker.com/search/?q=Ryzen+5+5600'},
      {n:'AMD Ryzen 5 5600X',lo:149,hi:177,sk:'AM4',dd:'DDR4',s:'6-core · Runs a bit faster than the 5600 · Small but real performance boost',pcp:'https://pcpartpicker.com/search/?q=Ryzen+5+5600X'},
      {n:'Intel Core i5-12400F',lo:120,hi:149,sk:'LGA1700',dd:'DDR4',s:'6-core Intel · Great for 1080p gaming · No built-in graphics — dedicated GPU required',pcp:'https://pcpartpicker.com/search/?q=i5-12400F'},
      {n:'Intel Core i5-13400F',lo:145,hi:180,sk:'LGA1700',dd:'DDR4',s:'10-core Intel · Big step up from 12400F · Better multitasking and streaming · No built-in graphics',pcp:'https://pcpartpicker.com/search/?q=i5-13400F'}
    ],
    mid:[
      {n:'AMD Ryzen 7 5700X',lo:133,hi:179,sk:'AM4',dd:'DDR4',s:'8-core · Runs cool and efficient · Good step between budget and mid-range · AM4 platform',pcp:'https://pcpartpicker.com/search/?q=Ryzen+7+5700X'},
      {n:'AMD Ryzen 7 5700X3D',lo:200,hi:260,sk:'AM4',dd:'DDR4',s:'8-core with 3D VCache · Exceptional gaming performance for AM4 · Budget-friendly path to VCache tech',pcp:'https://pcpartpicker.com/search/?q=Ryzen+7+5700X3D'},
      {n:'AMD Ryzen 7 5800X3D',lo:279,hi:349,sk:'AM4',dd:'DDR4',s:'8-core with 3D VCache · Was the top gaming CPU of its era · Still excellent for gaming today',pcp:'https://pcpartpicker.com/search/?q=Ryzen+7+5800X3D'},
      {n:'Intel Core i5-12600K',lo:165,hi:210,sk:'LGA1700',dd:'DDR4',s:'10-core Intel · Solid gaming and multitasking · Good value on older-gen platform · Widely available',pcp:'https://pcpartpicker.com/search/?q=i5-12600K'},
      {n:'Intel Core i5-13600K',lo:220,hi:275,sk:'LGA1700',dd:'DDR4',s:'14-core Intel · Excellent all-around gaming and productivity · Great value overall',pcp:'https://pcpartpicker.com/search/?q=i5-13600K'},
      {n:'Intel Core i5-14600K',lo:200,hi:240,sk:'LGA1700',dd:'DDR4',s:'14-core Intel · Outstanding gaming and streaming combo · Strong price-to-performance',pcp:'https://pcpartpicker.com/search/?q=i5-14600K'},
      {n:'Intel Core i5-14600KF',lo:185,hi:210,sk:'LGA1700',dd:'DDR4',s:'Same as 14600K · No built-in graphics — dedicated GPU required · Slightly cheaper as a result',pcp:'https://pcpartpicker.com/search/?q=i5-14600KF'},
      {n:'AMD Ryzen 5 7600',lo:160,hi:195,sk:'AM5',dd:'DDR5',s:'6-core · Lower power draw than 7600X · Excellent AM5 entry point · Future-proof platform',pcp:'https://pcpartpicker.com/search/?q=Ryzen+5+7600'},
      {n:'AMD Ryzen 5 7600X',lo:165,hi:205,sk:'AM5',dd:'DDR5',s:'6-core · Snappy single-task speed · AM5 future-proof platform · Higher power draw than 7600',pcp:'https://pcpartpicker.com/search/?q=Ryzen+5+7600X'},
      {n:'AMD Ryzen 5 9600X',lo:200,hi:230,sk:'AM5',dd:'DDR5',s:'6-core from AMD\'s latest generation · Very fast in games · Best mid-range gaming chip right now',pcp:'https://pcpartpicker.com/search/?q=Ryzen+5+9600X'},
      {n:'AMD Ryzen 7 7700X',lo:220,hi:255,sk:'AM5',dd:'DDR5',s:'8-core · Handles gaming and streaming simultaneously with ease · AM5 platform',pcp:'https://pcpartpicker.com/search/?q=Ryzen+7+7700X'},
      {n:'Intel Core Ultra 5 245KF',lo:160,hi:195,sk:'LGA1851',dd:'DDR5',s:'14-core latest-gen Intel · No built-in graphics — GPU required · Great all-around performance · Latest platform',pcp:'https://pcpartpicker.com/search/?q=Core+Ultra+5+245KF'}
    ],
    high:[
      {n:'AMD Ryzen 9 5900X',lo:160,hi:200,sk:'AM4',dd:'DDR4',s:'12-core · Excellent video editing and gaming · Great value on AM4 — new or used',pcp:'https://pcpartpicker.com/search/?q=Ryzen+9+5900X'},
      {n:'Intel Core i7-13700K',lo:280,hi:340,sk:'LGA1700',dd:'DDR4',s:'16-core Intel · Handles gaming, streaming, and content creation simultaneously · Strong platform',pcp:'https://pcpartpicker.com/search/?q=i7-13700K'},
      {n:'Intel Core i7-14700K',lo:310,hi:360,sk:'LGA1700',dd:'DDR4',s:'20-core Intel · Gaming, video editing, and streaming all at once without slowdowns',pcp:'https://pcpartpicker.com/search/?q=i7-14700K'},
      {n:'Intel Core i7-14700KF',lo:290,hi:340,sk:'LGA1700',dd:'DDR4',s:'20-core Intel · No built-in graphics — GPU required · Same power as i7-14700K at a lower price',pcp:'https://pcpartpicker.com/search/?q=i7-14700KF'},
      {n:'Intel Core i9-13900K',lo:330,hi:400,sk:'LGA1700',dd:'DDR4',s:'24-core Intel · Top-tier performance on the LGA1700 platform · Great for heavy workloads',pcp:'https://pcpartpicker.com/search/?q=i9-13900K'},
      {n:'AMD Ryzen 7 9700X',lo:295,hi:330,sk:'AM5',dd:'DDR5',s:'8-core from AMD\'s latest generation · Runs cool · Faster per-core than previous generations',pcp:'https://pcpartpicker.com/search/?q=Ryzen+7+9700X'},
      {n:'AMD Ryzen 9 7900X',lo:240,hi:280,sk:'AM5',dd:'DDR5',s:'12-core · Handles serious video editing or 3D work while gaming with no slowdowns',pcp:'https://pcpartpicker.com/search/?q=Ryzen+9+7900X'},
      {n:'Intel Core Ultra 7 265K',lo:230,hi:270,sk:'LGA1851',dd:'DDR5',s:'20-core latest-gen Intel · Includes basic built-in graphics · Current-gen flagship mid-range Intel chip',pcp:'https://pcpartpicker.com/search/?q=Core+Ultra+7+265K'},
      {n:'Intel Core Ultra 7 265KF',lo:215,hi:250,sk:'LGA1851',dd:'DDR5',s:'20-core latest-gen Intel · No built-in graphics — GPU required · Excellent multi-tasking performance',pcp:'https://pcpartpicker.com/search/?q=Core+Ultra+7+265KF'}
    ],
    ultra:[
      {n:'AMD Ryzen 7 9800X3D',lo:420,hi:450,sk:'AM5',dd:'DDR5',s:'8-core with 3D VCache · The best gaming processor you can buy, full stop · Worth every dollar',pcp:'https://pcpartpicker.com/search/?q=Ryzen+7+9800X3D'},
      {n:'AMD Ryzen 9 9900X',lo:340,hi:400,sk:'AM5',dd:'DDR5',s:'12-core from AMD\'s latest generation · Top choice for creators who also want top gaming performance',pcp:'https://pcpartpicker.com/search/?q=Ryzen+9+9900X'},
      {n:'AMD Ryzen 9 9950X',lo:480,hi:540,sk:'AM5',dd:'DDR5',s:'16-core from AMD\'s latest generation · The ultimate chip for professional work and gaming combined',pcp:'https://pcpartpicker.com/search/?q=Ryzen+9+9950X'},
      {n:'Intel Core i9-14900K',lo:400,hi:450,sk:'LGA1700',dd:'DDR4',s:'24-core Intel · At its lowest price in 2026 · Top performance with cheaper DDR4 memory',pcp:'https://pcpartpicker.com/search/?q=i9-14900K'},
      {n:'Intel Core Ultra 9 285K',lo:450,hi:490,sk:'LGA1851',dd:'DDR5',s:'24-core latest-gen Intel · Intel\'s most powerful chip for heavy workloads and productivity',pcp:'https://pcpartpicker.com/search/?q=Core+Ultra+9+285K'}
    ]
  },

  mobo: {
    budget:[
      {n:'ASUS Prime B550M-A (AM4)',lo:85,hi:125,sk:'AM4',dd:'DDR4',s:'Works with Ryzen 3600/4500/5500/5600/5600X · Solid entry board · Good feature set for the price'},
      {n:'MSI PRO B550-VC (AM4)',lo:90,hi:130,sk:'AM4',dd:'DDR4',s:'Budget AM4 board · Reliable MSI build quality · Works with all Ryzen 5000 series chips'},
      {n:'Gigabyte B550M DS3H (AM4)',lo:80,hi:120,sk:'AM4',dd:'DDR4',s:'Micro-ATX AM4 board · Smallest option for Ryzen builds · Good value for compact builds'},
      {n:'ASUS Prime B760M-A DDR4 (LGA1700)',lo:90,hi:135,sk:'LGA1700',dd:'DDR4',s:'Works with Intel 12th/13th/14th-gen processors · Solid entry Intel board · DDR4 keeps costs down'},
      {n:'MSI PRO B760M-A DDR4 (LGA1700)',lo:88,hi:130,sk:'LGA1700',dd:'DDR4',s:'Reliable budget Intel board · Works with i3-12100F, i5-12400F, i5-13400F · Good starter pick'},
      {n:'Gigabyte B760M DS3H DDR4 (LGA1700)',lo:85,hi:128,sk:'LGA1700',dd:'DDR4',s:'Compact Intel board · Works with 12th/13th/14th-gen chips · Budget-friendly and reliable'},
      {n:'MSI PRO B860M-B (LGA1851)',lo:110,hi:160,sk:'LGA1851',dd:'DDR5',s:'Entry board for Intel\'s latest Core Ultra platform · Works with Core Ultra 5 245KF'},
      {n:'Gigabyte B860M Gaming X (LGA1851)',lo:118,hi:170,sk:'LGA1851',dd:'DDR5',s:'Budget entry into Intel\'s newest platform · Good power delivery for Core Ultra chips'}
    ],
    mid:[
      {n:'ASUS TUF Gaming X570-Plus (AM4)',lo:140,hi:200,sk:'AM4',dd:'DDR4',s:'Premium AM4 board · Great for Ryzen 5800X3D and 5700X3D · PCIe 4.0 support · Solid power delivery'},
      {n:'MSI MAG X570S Torpedo (AM4)',lo:145,hi:210,sk:'AM4',dd:'DDR4',s:'Fanless chipset · High-end AM4 board · Great with Ryzen 5000 series · Reliable brand'},
      {n:'Gigabyte B650M Aorus Elite AX (AM5)',lo:135,hi:205,sk:'AM5',dd:'DDR5',s:'Compact AM5 board with Wi-Fi built in · Solid mid-range AM5 entry · Works with all Ryzen 7000/9000 chips'},
      {n:'MSI MAG B650 Tomahawk WiFi (AM5)',lo:155,hi:225,sk:'AM5',dd:'DDR5',s:'Popular AM5 mid-range board · Great power delivery · Wi-Fi included · Works with Ryzen 5/7/9 9000 series'},
      {n:'ASUS Prime B650-Plus (AM5)',lo:130,hi:198,sk:'AM5',dd:'DDR5',s:'Entry AM5 board · Gets you on the future-proof platform · Works with all Ryzen 7000/9000 chips'},
      {n:'ASUS TUF Gaming Z790-Plus DDR4 (LGA1700)',lo:175,hi:255,sk:'LGA1700',dd:'DDR4',s:'Top-tier Intel 12th-14th gen board · Great power delivery · Unlocks full tuning on K-series chips'},
      {n:'MSI MAG Z790 Tomahawk DDR4 (LGA1700)',lo:165,hi:248,sk:'LGA1700',dd:'DDR4',s:'Reliable mid-range Z790 board · Great for i5-13600K and i7-14700K · DDR4 saves money'},
      {n:'Gigabyte Z790 Aorus Elite AX (LGA1700)',lo:175,hi:260,sk:'LGA1700',dd:'DDR4',s:'Feature-rich Intel board · Wi-Fi included · Works well with i7-14700K and i9-13900K'},
      {n:'MSI PRO Z890-A Max WiFi (LGA1851)',lo:225,hi:360,sk:'LGA1851',dd:'DDR5',s:'Mid-range Z890 Intel board · Works with Core Ultra 5/7 chips · Wi-Fi and solid power delivery'},
      {n:'ASUS PRIME Z890-P WiFi (LGA1851)',lo:215,hi:345,sk:'LGA1851',dd:'DDR5',s:'Entry-level Z890 board · Unlocks full Intel Core Ultra performance tuning · Wi-Fi built in'}
    ],
    high:[
      {n:'ASUS ROG Strix X670E-F Gaming (AM5)',lo:260,hi:380,sk:'AM5',dd:'DDR5',s:'High-end AM5 board · Excellent for Ryzen 7 9800X3D and 9900X · PCIe 5.0 · Premium build'},
      {n:'MSI MEG X870 Ace (AM5)',lo:330,hi:490,sk:'AM5',dd:'DDR5',s:'Flagship AM5 board from MSI · Outstanding power delivery · Best pairing for Ryzen 9 9950X'},
      {n:'ASUS ROG Strix X870-E Gaming (AM5)',lo:350,hi:510,sk:'AM5',dd:'DDR5',s:'Premium X870E board · Best-in-class connectivity · 20Gbps USB · PCIe 5.0 storage · Ideal for high-end AMD builds'},
      {n:'Gigabyte X870E Aorus Master (AM5)',lo:330,hi:490,sk:'AM5',dd:'DDR5',s:'Top-tier AM5 board · Excellent VRMs for overclocking · Great match for Ryzen 9 chips'},
      {n:'ASUS ROG Strix Z790-E Gaming (LGA1700)',lo:310,hi:440,sk:'LGA1700',dd:'DDR4',s:'High-end Intel 12th-14th gen board · Premium overclocking features · Great for i9-14900K'},
      {n:'Gigabyte Z790 Aorus Master (LGA1700)',lo:300,hi:430,sk:'LGA1700',dd:'DDR4',s:'Top-tier Z790 board · Excellent power delivery · Best for i9-13900K / i7-14700K overclocking'}
    ],
    ultra:[
      {n:'ASUS ROG Crosshair X870E Hero (AM5)',lo:400,hi:640,sk:'AM5',dd:'DDR5',s:'Best AMD board available · Ideal for Ryzen 7 9800X3D or 9950X · Maximum speed and connectivity'},
      {n:'ASRock X870E Taichi (AM5)',lo:370,hi:580,sk:'AM5',dd:'DDR5',s:'Premium AM5 board · Outstanding build quality · Top overclocking features · Great for extreme AMD builds'},
      {n:'MSI MEG X870E Ace (AM5)',lo:450,hi:720,sk:'AM5',dd:'DDR5',s:'MSI\'s ultimate AM5 board · Top power delivery · Premium connectivity · No compromises for AMD'},
      {n:'MSI MEG Z890 Ace (LGA1851)',lo:450,hi:780,sk:'LGA1851',dd:'DDR5',s:'Intel\'s top-end LGA1851 board · Works with Core Ultra 9 285K · No limitations on speed or connectivity'},
      {n:'ASUS ROG Maximus Z890 Apex (LGA1851)',lo:520,hi:850,sk:'LGA1851',dd:'DDR5',s:'Intel extreme overclocking board · The absolute ceiling for LGA1851 builds · For no-compromise Intel setups'}
    ]
  },

  ram: {
    budget:[
      {n:'16GB DDR4-3200 Kit',lo:115,hi:155,dd:'DDR4',s:'Minimum for gaming in 2026 · Works with AM4 and LGA1700 builds · Note: RAM prices elevated — check before ordering',pcp:'https://pcpartpicker.com/search/?q=16GB+DDR4+3200'},
      {n:'32GB DDR4-3200 Kit',lo:180,hi:260,dd:'DDR4',s:'Recommended capacity · Keeps older AMD or Intel builds comfortable for years · Verify current price before buying',pcp:'https://pcpartpicker.com/search/?q=32GB+DDR4+3200'},
      {n:'16GB DDR5-4800 Kit',lo:80,hi:120,dd:'DDR5',s:'Entry DDR5 for latest Intel builds · Minimum to get started on the newest platform',pcp:'https://pcpartpicker.com/search/?q=16GB+DDR5+4800'},
      {n:'32GB DDR5-5600 Kit',lo:200,hi:300,dd:'DDR5',s:'Solid DDR5 for latest Intel builds · Good balance of speed and capacity',pcp:'https://pcpartpicker.com/search/?q=32GB+DDR5+5600'}
    ],
    mid:[
      {n:'32GB DDR4-3200 Kit',lo:180,hi:260,dd:'DDR4',s:'Best value for AM4 and LGA1700 builds · Currently cheaper than DDR5 · Good all-around choice',pcp:'https://pcpartpicker.com/search/?q=32GB+DDR4+3200'},
      {n:'32GB DDR5-5600 Kit',lo:200,hi:300,dd:'DDR5',s:'Entry DDR5 for AM5 platform · Handles most games and tasks well · Note: memory prices are elevated right now',pcp:'https://pcpartpicker.com/search/?q=32GB+DDR5+5600'},
      {n:'32GB DDR5-6000 CL30',lo:260,hi:375,dd:'DDR5',s:'Sweet spot for AM5 · This speed pairs especially well with Ryzen 7000/9000 · Note: prices are about 4x higher than 2025 lows',pcp:'https://pcpartpicker.com/search/?q=32GB+DDR5+6000'},
      {n:'64GB DDR5-6000 Kit',lo:500,hi:750,dd:'DDR5',s:'For video editing, streaming, and heavy multitasking · Plenty of room for large projects',pcp:'https://pcpartpicker.com/search/?q=64GB+DDR5+6000'}
    ],
    high:[
      {n:'32GB DDR5-6000 CL30',lo:260,hi:375,dd:'DDR5',s:'Best starting point for high-end AMD builds · Verified strong performance · Check current price — elevated right now',pcp:'https://pcpartpicker.com/search/?q=32GB+DDR5+6000'},
      {n:'32GB DDR5-6400 CL32',lo:280,hi:400,dd:'DDR5',s:'Faster DDR5 kit · Noticeable boost specifically with Ryzen 7 9800X3D · Verify price before ordering',pcp:'https://pcpartpicker.com/search/?q=32GB+DDR5+6400'},
      {n:'64GB DDR5-6000 Kit',lo:500,hi:750,dd:'DDR5',s:'For gaming + serious content creation · No worrying about running out on big projects',pcp:'https://pcpartpicker.com/search/?q=64GB+DDR5+6000'},
      {n:'64GB DDR5-6400 Kit',lo:550,hi:800,dd:'DDR5',s:'Fast, high-capacity · For people who create content and game hard · Check PCPartPicker before ordering',pcp:'https://pcpartpicker.com/search/?q=64GB+DDR5+6400'}
    ],
    ultra:[
      {n:'32GB DDR5-6400 CL32',lo:280,hi:400,dd:'DDR5',s:'Best pairing for the Ryzen 7 9800X3D · Unlocks maximum gaming performance from that chip',pcp:'https://pcpartpicker.com/search/?q=32GB+DDR5+6400'},
      {n:'64GB DDR5-6400 Kit',lo:550,hi:800,dd:'DDR5',s:'Fast + high-capacity · Handles professional workstation tasks and gaming with no limits',pcp:'https://pcpartpicker.com/search/?q=64GB+DDR5+6400'},
      {n:'96GB DDR5-6400 Kit',lo:900,hi:1400,dd:'DDR5',s:'Near server-level capacity · For extreme video rendering and running large AI models locally',pcp:'https://pcpartpicker.com/search/?q=96GB+DDR5'},
      {n:'128GB DDR5-6000 Kit',lo:900,hi:1400,dd:'DDR5',s:'Maximum capacity · For large AI models or rendering 3D scenes at scale · Verify price before ordering',pcp:'https://pcpartpicker.com/search/?q=128GB+DDR5'}
    ]
  },

  storage: [
    {n:'Kingston NV3 500GB',lo:35,hi:50,cap:'500GB',s:'Budget OS drive · Fast enough to boot and load programs quickly',pcp:'https://pcpartpicker.com/search/?q=Kingston+NV3+500GB'},
    {n:'WD Blue SN580 500GB',lo:35,hi:50,cap:'500GB',s:'Better 500GB option · Faster speeds + better reliability than budget alternatives',pcp:'https://pcpartpicker.com/search/?q=WD+SN580+500GB'},
    {n:'Kingston NV3 1TB',lo:50,hi:70,cap:'1TB',s:'Budget 1TB · OS + solid game library · Trusted brand at a low price',pcp:'https://pcpartpicker.com/search/?q=Kingston+NV3+1TB'},
    {n:'WD Black SN770 1TB',lo:50,hi:75,cap:'1TB',s:'Fast 1TB · Great gaming drive · No slowdowns under load',pcp:'https://pcpartpicker.com/search/?q=WD+SN770+1TB'},
    {n:'Samsung 990 Evo 1TB',lo:75,hi:110,cap:'1TB',s:'Samsung quality · Very fast · Works with both older and newer motherboards · Excellent longevity',pcp:'https://pcpartpicker.com/search/?q=Samsung+990+Evo+1TB'},
    {n:'Samsung 990 Pro 1TB',lo:100,hi:130,cap:'1TB',s:'Samsung\'s flagship 1TB · Blazing fast · Best endurance in its class',pcp:'https://pcpartpicker.com/search/?q=Samsung+990+Pro+1TB'},
    {n:'WD Black SN850X 1TB',lo:130,hi:230,cap:'1TB',s:'Among the fastest drives available · Same speed class as the PlayStation 5',pcp:'https://pcpartpicker.com/search/?q=WD+SN850X+1TB'},
    {n:'WD Black SN7100 2TB',lo:100,hi:150,cap:'2TB',s:'Great value 2TB · Fast across all tasks · Best entry point for 2TB',pcp:'https://pcpartpicker.com/search/?q=WD+SN7100+2TB'},
    {n:'Samsung 990 Evo 2TB',lo:150,hi:210,cap:'2TB',s:'Samsung 2TB value option · Very reliable · Strong warranty',pcp:'https://pcpartpicker.com/search/?q=Samsung+990+Evo+2TB'},
    {n:'Samsung 990 Pro 2TB',lo:200,hi:370,cap:'2TB',s:'Samsung flagship 2TB · Maximum speed for power users who need space and performance',pcp:'https://pcpartpicker.com/search/?q=Samsung+990+Pro+2TB'},
    {n:'WD Black SN850X 2TB',lo:250,hi:400,cap:'2TB',s:'Blazing-fast 2TB · 200+ games · No slowdowns at any task',pcp:'https://pcpartpicker.com/search/?q=WD+SN850X+2TB'},
    {n:'WD Black SN850X 4TB',lo:500,hi:660,cap:'4TB',s:'Massive fast drive · 300+ games · For enthusiasts who refuse to delete anything',pcp:'https://pcpartpicker.com/search/?q=WD+SN850X+4TB'},
    {n:'Seagate FireCuda 530 4TB',lo:450,hi:600,cap:'4TB',s:'Blazing-fast 4TB alternative · Matches the fastest drives · Great for large game libraries',pcp:'https://pcpartpicker.com/search/?q=Seagate+FireCuda+530+4TB'},
    {n:'Samsung 990 Pro 4TB',lo:400,hi:550,cap:'4TB',s:'Samsung flagship 4TB · Maximum speed and maximum capacity in one drive',pcp:'https://pcpartpicker.com/search/?q=Samsung+990+Pro+4TB'}
  ],

  // Flat list — all popular cases shown as a dropdown regardless of tier
  case: [
    {n:'Fractal Design Pop Air',lo:70,hi:100,s:'Mid-tower · Great airflow · Classic clean look · Budget-friendly · Pre-installed fans'},
    {n:'Phanteks Eclipse G360A',lo:80,hi:110,s:'Mid-tower · Tempered glass side · Three 120mm fans included · Best value pick'},
    {n:'NZXT H5 Flow',lo:85,hi:115,s:'Mid-tower · Mesh front panel · Excellent airflow · Most popular mid-range case · Clean white or black'},
    {n:'Corsair 4000D Airflow',lo:95,hi:130,s:'Mid-tower · Mesh front · Very popular · Great cable management · Solid Corsair build quality'},
    {n:'Lian Li Lancool 216',lo:90,hi:120,s:'Mid-tower · Dual 160mm fans pre-installed · Best out-of-box airflow for the price · Great value'},
    {n:'be quiet! Pure Base 500DX',lo:95,hi:130,s:'Mid-tower · Near-silent · Pre-installed fans · ARGB strips · Great for quiet builds'},
    {n:'NZXT H7 Flow',lo:130,hi:165,s:'Mid-tower · Extra room for large GPU or 360mm AIO · Natural upgrade from H5 · Very clean look'},
    {n:'Corsair 5000D Airflow',lo:145,hi:195,s:'Mid-tower · Spacious interior · Best cable management in class · Popular streamer choice'},
    {n:'Fractal Design Torrent',lo:150,hi:215,s:'Mid-tower · Massive front intake fans · Best airflow case available · Premium build quality'},
    {n:'Lian Li O11 Dynamic EVO',lo:140,hi:200,s:'Mid-tower · AIO-optimized · Gorgeous tempered glass · Very popular build showcase case'},
    {n:'be quiet! Silent Base 802',lo:165,hi:225,s:'Mid-tower · Sound dampened panels · Near-silent at full load · Premium quality feel'},
    {n:'Lian Li O11 Dynamic XL',lo:200,hi:280,s:'Full-tower · Maximum cooling · Dual radiator support · For the largest high-end builds'},
    {n:'Corsair 7000D Airflow',lo:240,hi:330,s:'Full-tower · Maximum airflow · 420mm radiator support · The ultimate size for extreme builds'}
  ],

  psu: {
    budget:[
      {n:'650W 80+ Bronze',lo:45,hi:75,rt:'Bronze',s:'82-85% efficient · Entry level · Works fine for budget builds with lower-power GPUs'},
      {n:'650W 80+ Gold',lo:75,hi:110,rt:'Gold',s:'Recommended · ~90% efficient · Runs quieter and cooler · Lasts longer than cheaper options'},
      {n:'750W 80+ Gold',lo:85,hi:125,rt:'Gold',s:'Extra breathing room · Gold-rated · Safe choice for any budget GPU'}
    ],
    mid:[
      {n:'750W 80+ Gold',lo:75,hi:120,rt:'Gold',s:'For RTX 5060 Ti or RX 9060 XT builds · Efficient gold-rated unit'},
      {n:'850W 80+ Gold',lo:95,hi:145,rt:'Gold',s:'Best all-around mid-range PSU · Handles any GPU at this tier comfortably'},
      {n:'850W 80+ Platinum',lo:125,hi:175,rt:'Platinum',s:'Premium efficiency · ~92% efficient · Great for systems that run around the clock'},
      {n:'1000W 80+ Gold',lo:120,hi:165,rt:'Gold',s:'Plenty of headroom · Good for RTX 5070 Ti builds or heavily-loaded systems'}
    ],
    high:[
      {n:'850W 80+ Gold',lo:95,hi:145,rt:'Gold',s:'Minimum for RTX 5070 Ti builds · Efficient gold-rated unit'},
      {n:'1000W 80+ Gold',lo:120,hi:165,rt:'Gold',s:'Recommended for RTX 5080 builds · Comfortable headroom · Efficient'},
      {n:'1000W 80+ Platinum',lo:145,hi:195,rt:'Platinum',s:'Premium efficiency · ~92% efficient · Near-silent even under heavy load'},
      {n:'1200W 80+ Gold',lo:155,hi:215,rt:'Gold',s:'For high-end builds at full tilt · Maximum headroom on power delivery'}
    ],
    ultra:[
      {n:'1200W 80+ Gold',lo:155,hi:215,rt:'Gold',s:'Minimum for RTX 5090 builds · Efficient gold-rated unit'},
      {n:'1200W 80+ Platinum',lo:185,hi:260,rt:'Platinum',s:'Recommended for RTX 5090 · Premium efficiency · Best long-term reliability'},
      {n:'1600W 80+ Platinum',lo:350,hi:455,rt:'Platinum',s:'For extreme builds · RTX 5090 + pushed processor · Zero power constraints'}
    ]
  },

  cooler: {
    budget:[
      {n:'Thermalright Peerless Assassin 120 SE (Air)',lo:34,hi:47,tp:'air',s:'Best budget air cooler available · Handles very powerful CPUs · Runs very quietly'},
      {n:'Arctic Freezer 36 (Air)',lo:36,hi:51,tp:'air',s:'Excellent air cooler · Fans on both sides · Works with all current AMD and Intel platforms'},
      {n:'DeepCool AK400 (Air)',lo:28,hi:40,tp:'air',s:'Popular budget air cooler · Good thermals · Slim profile fits most cases · Quiet'},
      {n:'Arctic Liquid Freezer III 240mm (AIO)',lo:75,hi:95,tp:'aio',s:'Best budget AIO · 240mm radiator · Award-winning cooling performance'}
    ],
    mid:[
      {n:'Thermalright Peerless Assassin 120 SE (Air)',lo:34,hi:47,tp:'air',s:'Budget cooler that performs well above its price · Great for Ryzen 5/7 chips'},
      {n:'be quiet! Dark Rock 4 (Air)',lo:55,hi:75,tp:'air',s:'Premium quiet air cooler · Excellent temps · Near-silent operation'},
      {n:'Noctua NH-U12S Redux (Air)',lo:50,hi:65,tp:'air',s:'Single-tower Noctua · Legendary reliability · Quiet · Fits in tighter cases'},
      {n:'Arctic Liquid Freezer III 240mm (AIO)',lo:75,hi:95,tp:'aio',s:'240mm AIO · Best value liquid cooler · Strong pump and fans'},
      {n:'NZXT Kraken Core 240mm (AIO)',lo:79,hi:109,tp:'aio',s:'240mm AIO · Clean look · Good software · Solid cooling'},
      {n:'Arctic Liquid Freezer III Pro 360mm (AIO)',lo:89,hi:125,tp:'aio',s:'360mm AIO · Best performance for the price · 6-year warranty'}
    ],
    high:[
      {n:'Noctua NH-D15 G2 (Air)',lo:130,hi:150,tp:'air',s:'Best air cooler money can buy · Whisper-quiet · Outperforms most liquid coolers'},
      {n:'DeepCool AK620 (Air)',lo:45,hi:65,tp:'air',s:'Dual-tower air cooler · Great thermals · Excellent value compared to Noctua · Very quiet'},
      {n:'Arctic Liquid Freezer III Pro 360mm (AIO)',lo:89,hi:125,tp:'aio',s:'360mm AIO · Award-winning · Best value liquid cooler on the market'},
      {n:'NZXT Kraken Plus 360mm (AIO)',lo:169,hi:220,tp:'aio',s:'360mm AIO · Premium with LCD display on pump · Top-tier performance'},
      {n:'Corsair iCUE H150i Elite 360mm (AIO)',lo:100,hi:160,tp:'aio',s:'360mm AIO · Corsair flagship · Great match for Intel i9 or AMD Ryzen 9'}
    ],
    ultra:[
      {n:'Noctua NH-D15 G2 (Air)',lo:130,hi:150,tp:'air',s:'Best air cooler on Earth · Handles even the most power-hungry CPUs quietly'},
      {n:'Arctic Liquid Freezer III Pro 360mm (AIO)',lo:89,hi:125,tp:'aio',s:'360mm AIO · Best value liquid cooler · 6-year warranty'},
      {n:'NZXT Kraken Plus 360mm (AIO)',lo:169,hi:220,tp:'aio',s:'360mm AIO · LCD display · Top-tier performance'},
      {n:'Corsair iCUE H150i Elite 360mm (AIO)',lo:100,hi:160,tp:'aio',s:'360mm AIO · Corsair flagship · Best match for Ryzen 9 9950X or Core Ultra 9 285K'}
    ]
  },

  // Flat list — shown as a dropdown
  fans: [
    {n:'Arctic P12 PWM 3-Pack',lo:22,hi:35,s:'No RGB · Pure airflow · Very quiet · Best budget pick · 120mm'},
    {n:'be quiet! Pure Wings 3 120mm 3-Pack',lo:28,hi:42,s:'No RGB · Ultra quiet · German engineering · Great for silent builds · 120mm'},
    {n:'Corsair RS120 ARGB 3-Pack',lo:38,hi:50,s:'ARGB lighting · Most popular choice · Reliable brand · Plug and play · 120mm'},
    {n:'Phanteks D30 ARGB 3-Pack',lo:42,hi:58,s:'High-static-pressure ARGB fans · Excellent airflow + lighting combo · 120mm'},
    {n:'Lian Li UNI Fan 120 ARGB 3-Pack',lo:55,hi:80,s:'Daisy chain cables · Premium ARGB · Cleanest cable routing · 120mm'},
    {n:'Noctua NF-A12x25 3-Pack',lo:85,hi:110,s:'Best airflow per fan · No RGB · Whisper quiet · For those who want top performance without lights · 120mm'},
    {n:'Corsair iCUE Link QX120 ARGB 3-Pack',lo:90,hi:120,s:'Smart iCUE ecosystem · Best overall airflow + RGB · Plug-and-play daisy chain · 120mm'}
  ]
};

const BASE = {budget:{lo:12,hi:22},mid:{lo:12,hi:22},high:{lo:12,hi:22},ultra:{lo:12,hi:22}};

const TIER_DESCS = {
  budget:'Budget &mdash; ~$875&ndash;$1,200 total. Great 1080p gaming and everyday tasks. Best value entry point. Note: RAM prices are elevated right now &mdash; verify before ordering.',
  mid:'Mid-Range &mdash; ~$1,500&ndash;$2,000 total. 1080p maxed, solid 1440p, smooth high framerates. The sweet spot for most gamers. Memory costs are higher than usual right now.',
  high:'High-End &mdash; ~$2,150&ndash;$2,850 total. 1440p maxed out, capable 4K, handles content creation. For serious gamers who want 5+ years without upgrading.',
  ultra:'Ultra &mdash; ~$3,000&ndash;$4,450 total. No compromises. 4K high-refresh gaming, streaming, and creation all at once. Built around the best gaming CPU available.'
};

const RECOMMENDED = {
  gaming:{
    label:'Gaming',
    budget:{blurb:'Solid 1080p on a budget. Runs modern titles well without breaking the bank.',sel:{gpu:'NVIDIA RTX 5060 8GB',cpu:'AMD Ryzen 5 5600',mobo:'MSI PRO B550-VC (AM4)',ram:'16GB DDR4-3200 Kit',storage:'WD Black SN770 1TB',case:'NZXT H5 Flow',psu:'650W 80+ Gold',cooler:'Thermalright Peerless Assassin 120 SE (Air)',fans:'Corsair RS120 ARGB 3-Pack'}},
    mid:{blurb:'1080p maxed, solid 1440p, smooth FPS &mdash; future-proofed for 3&ndash;5 years.',sel:{gpu:'AMD RX 9070 16GB',cpu:'AMD Ryzen 5 9600X',mobo:'MSI MAG B650 Tomahawk WiFi (AM5)',ram:'32GB DDR5-6000 CL30',storage:'WD Black SN770 1TB',case:'NZXT H5 Flow',psu:'850W 80+ Gold',cooler:'Arctic Liquid Freezer III 240mm (AIO)',fans:'Corsair RS120 ARGB 3-Pack'}},
    high:{blurb:'1440p maxed, capable 4K, high-refresh &mdash; a serious gaming rig.',sel:{gpu:'AMD RX 9070 XT 16GB',cpu:'AMD Ryzen 7 9700X',mobo:'ASUS ROG Strix X670E-F Gaming (AM5)',ram:'32GB DDR5-6400 CL32',storage:'WD Black SN850X 1TB',case:'Lian Li O11 Dynamic EVO',psu:'1000W 80+ Gold',cooler:'NZXT Kraken Plus 360mm (AIO)',fans:'Lian Li UNI Fan 120 ARGB 3-Pack'}},
    ultra:{blurb:'4K high-refresh, no compromises. Built around the best gaming CPU available.',sel:{gpu:'NVIDIA RTX 5080 16GB',cpu:'AMD Ryzen 7 9800X3D',mobo:'ASUS ROG Crosshair X870E Hero (AM5)',ram:'32GB DDR5-6400 CL32',storage:'WD Black SN850X 2TB',case:'Corsair 7000D Airflow',psu:'1200W 80+ Gold',cooler:'NZXT Kraken Plus 360mm (AIO)',fans:'Corsair iCUE Link QX120 ARGB 3-Pack'}}
  },
  content:{
    label:'Content Creation',
    budget:{blurb:'Enough horsepower for 1080p editing and streaming without overspending.',sel:{gpu:'NVIDIA RTX 5060 Ti 8GB',cpu:'AMD Ryzen 5 5600X',mobo:'ASUS Prime B550M-A (AM4)',ram:'32GB DDR4-3200 Kit',storage:'Kingston NV3 1TB',case:'Phanteks Eclipse G360A',psu:'750W 80+ Gold',cooler:'Arctic Freezer 36 (Air)',fans:'Corsair RS120 ARGB 3-Pack'}},
    mid:{blurb:'4K timeline editing, smooth streaming, heavy multitasking &mdash; no bottlenecks.',sel:{gpu:'NVIDIA RTX 5060 Ti 16GB',cpu:'AMD Ryzen 7 7700X',mobo:'MSI MAG B650 Tomahawk WiFi (AM5)',ram:'64GB DDR5-6000 Kit',storage:'WD Black SN850X 2TB',case:'NZXT H7 Flow',psu:'850W 80+ Platinum',cooler:'Arctic Liquid Freezer III Pro 360mm (AIO)',fans:'Lian Li UNI Fan 120 ARGB 3-Pack'}},
    high:{blurb:'Professional-grade. 4K/8K editing, rendering, and live streaming simultaneously.',sel:{gpu:'NVIDIA RTX 5070 Ti 16GB',cpu:'AMD Ryzen 7 9700X',mobo:'ASUS ROG Strix X670E-F Gaming (AM5)',ram:'64GB DDR5-6000 Kit',storage:'WD Black SN850X 2TB',case:'Lian Li O11 Dynamic EVO',psu:'1000W 80+ Gold',cooler:'Arctic Liquid Freezer III Pro 360mm (AIO)',fans:'Lian Li UNI Fan 120 ARGB 3-Pack'}},
    ultra:{blurb:'No workflow too heavy. 3D rendering, 8K export, multi-stream &mdash; all at once.',sel:{gpu:'NVIDIA RTX 5080 16GB',cpu:'AMD Ryzen 9 9900X',mobo:'ASUS ROG Crosshair X870E Hero (AM5)',ram:'64GB DDR5-6400 Kit',storage:'Samsung 990 Pro 4TB',case:'Lian Li O11 Dynamic XL',psu:'1200W 80+ Gold',cooler:'Corsair iCUE H150i Elite 360mm (AIO)',fans:'Lian Li UNI Fan 120 ARGB 3-Pack'}}
  },
  ai:{
    label:'AI &amp; Productivity',
    budget:{blurb:'16GB VRAM to run smaller local models &mdash; the minimum for real AI work.',sel:{gpu:'AMD RX 9060 XT 16GB',cpu:'AMD Ryzen 5 5600X',mobo:'ASUS Prime B550M-A (AM4)',ram:'32GB DDR4-3200 Kit',storage:'Kingston NV3 1TB',case:'NZXT H5 Flow',psu:'750W 80+ Gold',cooler:'Arctic Freezer 36 (Air)',fans:'Corsair RS120 ARGB 3-Pack'}},
    mid:{blurb:'Runs most local LLMs and Stable Diffusion models comfortably with room to grow.',sel:{gpu:'AMD RX 9070 16GB',cpu:'AMD Ryzen 7 7700X',mobo:'MSI MAG B650 Tomahawk WiFi (AM5)',ram:'64GB DDR5-6000 Kit',storage:'Samsung 990 Evo 2TB',case:'NZXT H5 Flow',psu:'1000W 80+ Gold',cooler:'be quiet! Dark Rock 4 (Air)',fans:'Lian Li UNI Fan 120 ARGB 3-Pack'}},
    high:{blurb:'16GB VRAM, high-core CPU, 64GB RAM &mdash; handles large models and heavy workloads.',sel:{gpu:'NVIDIA RTX 5080 16GB',cpu:'AMD Ryzen 9 7900X',mobo:'MSI MEG X870 Ace (AM5)',ram:'64GB DDR5-6000 Kit',storage:'Samsung 990 Pro 2TB',case:'Fractal Design Torrent',psu:'1200W 80+ Gold',cooler:'NZXT Kraken Plus 360mm (AIO)',fans:'Lian Li UNI Fan 120 ARGB 3-Pack'}},
    ultra:{blurb:'32GB VRAM. Runs the largest local models, AI video, and Stable Diffusion at max quality.',sel:{gpu:'NVIDIA RTX 5090 32GB',cpu:'AMD Ryzen 9 9950X',mobo:'ASUS ROG Crosshair X870E Hero (AM5)',ram:'64GB DDR5-6400 Kit',storage:'Samsung 990 Pro 2TB',case:'Lian Li O11 Dynamic XL',psu:'1200W 80+ Platinum',cooler:'Noctua NH-D15 G2 (Air)',fans:'Lian Li UNI Fan 120 ARGB 3-Pack'}}
  },
  general:{
    label:'General Use',
    budget:{blurb:'Fast, reliable, handles everything everyday &mdash; browsing, Office, school, light gaming.',sel:{gpu:'NVIDIA RTX 5060 8GB',cpu:'AMD Ryzen 5 5600',mobo:'MSI PRO B550-VC (AM4)',ram:'16GB DDR4-3200 Kit',storage:'Kingston NV3 1TB',case:'Fractal Design Pop Air',psu:'650W 80+ Gold',cooler:'Thermalright Peerless Assassin 120 SE (Air)',fans:'Arctic P12 PWM 3-Pack'}},
    mid:{blurb:'A well-rounded, future-proofed machine that handles anything you throw at it.',sel:{gpu:'AMD RX 9060 XT 16GB',cpu:'AMD Ryzen 5 9600X',mobo:'MSI MAG B650 Tomahawk WiFi (AM5)',ram:'32GB DDR5-6000 CL30',storage:'WD Black SN770 1TB',case:'Corsair 4000D Airflow',psu:'750W 80+ Gold',cooler:'Thermalright Peerless Assassin 120 SE (Air)',fans:'Arctic P12 PWM 3-Pack'}},
    high:{blurb:'Overkill for everyday tasks, but your machine will never feel slow. Ever.',sel:{gpu:'AMD RX 9070 XT 16GB',cpu:'AMD Ryzen 7 9700X',mobo:'ASUS ROG Strix X670E-F Gaming (AM5)',ram:'32GB DDR5-6400 CL32',storage:'WD Black SN850X 1TB',case:'be quiet! Silent Base 802',psu:'850W 80+ Gold',cooler:'Noctua NH-D15 G2 (Air)',fans:'Lian Li UNI Fan 120 ARGB 3-Pack'}},
    ultra:{blurb:'A forever machine. Premium components, whisper quiet, handles anything for a decade.',sel:{gpu:'NVIDIA RTX 5080 16GB',cpu:'AMD Ryzen 9 9900X',mobo:'ASUS ROG Crosshair X870E Hero (AM5)',ram:'32GB DDR5-6400 CL32',storage:'WD Black SN850X 2TB',case:'Lian Li O11 Dynamic XL',psu:'1200W 80+ Gold',cooler:'Noctua NH-D15 G2 (Air)',fans:'Corsair iCUE Link QX120 ARGB 3-Pack'}}
  }
};

const STORAGE_CAPS = ['500GB','1TB','2TB','4TB'];
