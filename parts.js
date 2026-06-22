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
      {n:'NVIDIA RTX 5050 8GB',lo:278,hi:312,year:2025,perf:4,s:'Entry-level gaming card · Plays all modern games at 1080p on high settings',pcp:'https://pcpartpicker.com/search/?q=RTX+5050'},
      {n:'NVIDIA RTX 5060 8GB',lo:335,hi:368,year:2025,perf:5,s:'Great for 1080p gaming · Can handle 1440p at medium-to-high settings · Latest generation',pcp:'https://pcpartpicker.com/search/?q=RTX+5060+8GB'},
      {n:'AMD RX 9060 XT 8GB',lo:352,hi:392,year:2025,perf:5,s:'AMD alternative at this price · Great 1080p gaming · Excellent driver support on all operating systems',pcp:'https://pcpartpicker.com/search/?q=RX+9060+XT+8GB'},
      {n:'NVIDIA RTX 5060 Ti 8GB',lo:368,hi:425,year:2025,perf:6,s:'Strong 1080p and solid 1440p gaming · Faster than the standard 5060 · AI-powered graphics features included · 8GB of video memory may feel tight in a couple of years',pcp:'https://pcpartpicker.com/search/?q=RTX+5060+Ti+8GB'},
      // Used market / older generation options
      {n:'NVIDIA RTX 3060 12GB',lo:190,hi:265,year:2021,perf:4,s:'Used market · Reliable 1080p gaming · Extra video memory helps it last longer · Can handle light 1440p gaming',pcp:'https://pcpartpicker.com/search/?q=RTX+3060+12GB'},
      {n:'NVIDIA RTX 2060 6GB',lo:130,hi:200,year:2018,perf:3,s:'Used market · Comfortable 1080p gaming on high settings · AI-powered graphics features included · Older but still capable',pcp:'https://pcpartpicker.com/search/?q=RTX+2060+6GB'},
      {n:'NVIDIA GTX 1660 Super 6GB',lo:100,hi:155,year:2019,perf:2,s:'Used market · 1080p gaming on high settings · No special lighting effects · Solid budget pick',pcp:'https://pcpartpicker.com/search/?q=GTX+1660+Super'},
      {n:'AMD RX 580 8GB',lo:55,hi:90,year:2017,perf:1,s:'Used market · 1080p gaming on medium settings · Good amount of video memory · Works great on Linux',pcp:'https://pcpartpicker.com/search/?q=RX+580+8GB'},
      {n:'NVIDIA GTX 1060 6GB',lo:50,hi:85,year:2016,perf:1,s:'Used market · 1080p gaming on medium settings · Best for less demanding games like Fortnite or Minecraft · Cheapest way into PC gaming',pcp:'https://pcpartpicker.com/search/?q=GTX+1060+6GB'}
    ],
    mid:[
      {n:'AMD RX 9060 XT 16GB',lo:428,hi:478,year:2025,perf:5,s:'Larger video memory keeps this card useful for years to come · Great 1080p and 1440p gaming · Latest AMD generation',pcp:'https://pcpartpicker.com/search/?q=RX+9060+XT+16GB'},
      {n:'NVIDIA RTX 5060 Ti 16GB',lo:565,hi:625,year:2025,perf:6,s:'Speed and staying power · Best all-around balance in the mid-range · Large video memory means fewer compromises later',pcp:'https://pcpartpicker.com/search/?q=RTX+5060+Ti+16GB'},
      {n:'AMD RX 9070 16GB',lo:545,hi:625,year:2025,perf:7,s:'Excellent 1440p gaming · Beats similarly priced competition in many games · Prices are close to suggested retail right now · Latest AMD generation',pcp:'https://pcpartpicker.com/search/?q=RX+9070'},
      {n:'NVIDIA RTX 5070 12GB',lo:605,hi:672,year:2025,perf:8,s:'Best-in-class 1440p gaming · Can push 4K as well · AI-powered graphics features included · Great for high frame-rate gaming',pcp:'https://pcpartpicker.com/search/?q=RTX+5070'},
      // Current-gen 2023-2024 options
      {n:'NVIDIA RTX 4060 Ti 8GB',lo:350,hi:415,year:2023,perf:6,s:'Strong 1440p gaming · AI-powered graphics with frame rate boost · Uses very little power for its performance level',pcp:'https://pcpartpicker.com/search/?q=RTX+4060+Ti+8GB'},
      {n:'NVIDIA RTX 4060 8GB',lo:275,hi:330,year:2023,perf:5,s:'Solid 1440p gaming at an affordable price · AI-powered graphics with frame rate boost · Very power-efficient',pcp:'https://pcpartpicker.com/search/?q=RTX+4060+8GB'},
      // Used market / older generation options
      {n:'NVIDIA RTX 3070 8GB',lo:295,hi:385,year:2020,perf:6,s:'Used market · Strong 1440p gaming · Still holds its own in 2026',pcp:'https://pcpartpicker.com/search/?q=RTX+3070+8GB'},
      {n:'AMD RX 6700 XT 12GB',lo:235,hi:325,year:2021,perf:5,s:'Used market · Solid 1440p gaming · More video memory than most cards at this price · Great used value',pcp:'https://pcpartpicker.com/search/?q=RX+6700+XT+12GB'},
      {n:'NVIDIA RTX 3060 Ti 8GB',lo:230,hi:310,year:2020,perf:5,s:'Used market · Good 1440p gaming · Faster than the regular 3060 in games',pcp:'https://pcpartpicker.com/search/?q=RTX+3060+Ti+8GB'}
    ],
    high:[
      {n:'AMD RX 9070 XT 16GB',lo:648,hi:758,year:2025,perf:8,s:'Excellent 1440p and capable 4K gaming · Large video memory · AMD\'s top mid-range card from the latest generation · Prices are coming down',pcp:'https://pcpartpicker.com/search/?q=RX+9070+XT'},
      {n:'NVIDIA RTX 5070 Ti 16GB',lo:975,hi:1108,year:2025,perf:9,s:'High frame-rate 1440p and smooth 4K gaming · Big jump in performance over the 5070 · AI-powered graphics included',pcp:'https://pcpartpicker.com/search/?q=RTX+5070+Ti'},
      {n:'NVIDIA RTX 5080 16GB',lo:1285,hi:1455,year:2025,perf:9,s:'Top-tier 4K gaming · Near-best card available · No compromises at any resolution',pcp:'https://pcpartpicker.com/search/?q=RTX+5080'},
      // 2024 options
      {n:'NVIDIA RTX 4070 Ti Super 16GB',lo:720,hi:845,year:2024,perf:8,s:'4K capable · Large video memory · Strong value at the high end · AI-powered graphics included',pcp:'https://pcpartpicker.com/search/?q=RTX+4070+Ti+Super'},
      // 2023 options
      {n:'NVIDIA RTX 4070 12GB',lo:530,hi:615,year:2023,perf:7,s:'High-performance 1440p gaming · AI-powered graphics with frame rate boost · Very power-efficient for its class · Great 2023 card still worth buying',pcp:'https://pcpartpicker.com/search/?q=RTX+4070+12GB'},
      // Used market high-end options
      {n:'NVIDIA RTX 3090 24GB',lo:600,hi:790,year:2020,perf:8,s:'Used market · Massive video memory · Excellent for video editing and 3D work · Handles 4K gaming well',pcp:'https://pcpartpicker.com/search/?q=RTX+3090'},
      {n:'AMD RX 6800 XT 16GB',lo:410,hi:560,year:2020,perf:7,s:'Used market · Maxes out 1440p, handles entry 4K · Large video memory advantage · Excellent value on the used market',pcp:'https://pcpartpicker.com/search/?q=RX+6800+XT+16GB'},
      {n:'NVIDIA RTX 3080 10GB',lo:395,hi:540,year:2020,perf:7,s:'Used market · High-performance 1440p and entry 4K gaming · Still very capable in 2026',pcp:'https://pcpartpicker.com/search/?q=RTX+3080+10GB'}
    ],
    ultra:[
      {n:'NVIDIA RTX 5080 16GB',lo:1285,hi:1455,year:2025,perf:9,s:'Second-best graphics card available · Handles 4K gaming and high frame rates with ease',pcp:'https://pcpartpicker.com/search/?q=RTX+5080'},
      {n:'NVIDIA RTX 5090 32GB',lo:3200,hi:4200,year:2025,perf:10,s:'Best graphics card on the market · Handles 4K and even 8K · Great for AI and video production work · Enormous video memory · Selling well above suggested price',pcp:'https://pcpartpicker.com/search/?q=RTX+5090'},
      // 2024 options
      {n:'NVIDIA RTX 4080 Super 16GB',lo:900,hi:1085,year:2024,perf:9,s:'4K ultra settings gaming · Large video memory · Better value than the original 4080 · AI-powered graphics included',pcp:'https://pcpartpicker.com/search/?q=RTX+4080+Super'},
      // 2022 options
      {n:'NVIDIA RTX 4090 24GB',lo:1500,hi:2100,year:2022,perf:9,s:'Previous flagship · Excellent 4K ultra settings gaming · Huge video memory · Still one of the top five graphics cards in the world',pcp:'https://pcpartpicker.com/search/?q=RTX+4090'},
      {n:'AMD RX 7900 XTX 24GB',lo:780,hi:1040,year:2022,perf:8,s:'AMD\'s flagship card · 4K ultra settings gaming · Very large video memory · Outstanding raw performance',pcp:'https://pcpartpicker.com/search/?q=RX+7900+XTX'}
    ]
  },
  cpu: {
    budget:[
      {n:'AMD Ryzen 5 4500',lo:78,hi:105,year:2020,sk:'AM4',dd:'DDR4',s:'6-core processor · Budget entry point · Good for everyday tasks and light gaming',pcp:'https://pcpartpicker.com/search/?q=Ryzen+5+4500'},
      {n:'AMD Ryzen 5 5600',lo:105,hi:142,year:2021,sk:'AM4',dd:'DDR4',s:'6-core processor · Proven and reliable · Best value gaming chip at this price',pcp:'https://pcpartpicker.com/search/?q=Ryzen+5+5600'},
      {n:'AMD Ryzen 5 5600X',lo:135,hi:168,year:2021,sk:'AM4',dd:'DDR4',s:'6-core processor · Runs a bit faster than the 5600 · Small performance boost over the base model',pcp:'https://pcpartpicker.com/search/?q=Ryzen+5+5600X'},
      {n:'Intel Core i5-12400F',lo:145,hi:185,year:2022,sk:'LGA1700',dd:'DDR4',s:'6-core Intel processor · Great for 1080p gaming · Does not include a built-in graphics chip, so a dedicated graphics card is required',pcp:'https://pcpartpicker.com/search/?q=i5-12400F'},
      // Used market / older AM4
      {n:'AMD Ryzen 5 3600',lo:65,hi:95,year:2019,sk:'AM4',dd:'DDR4',s:'Used market · 6-core processor · Great value when bought secondhand · Still capable for everyday gaming',pcp:'https://pcpartpicker.com/search/?q=Ryzen+5+3600'}
    ],
    mid:[
      {n:'Intel Core i5-14600K',lo:215,hi:258,year:2023,sk:'LGA1700',dd:'DDR4',s:'14-core processor (6 fast cores + 8 efficiency cores) · Outstanding value for gaming and streaming at the same time',pcp:'https://pcpartpicker.com/search/?q=i5-14600K'},
      {n:'Intel Core i5-14600KF',lo:228,hi:268,year:2023,sk:'LGA1700',dd:'DDR4',s:'Same chip as the 14600K · No built-in graphics, so a dedicated graphics card is required · Slightly cheaper as a result',pcp:'https://pcpartpicker.com/search/?q=i5-14600KF'},
      {n:'AMD Ryzen 5 7600X',lo:172,hi:215,year:2022,sk:'AM5',dd:'DDR5',s:'6-core processor · Snappy single-task performance · Works with the newer, more future-proof platform',pcp:'https://pcpartpicker.com/search/?q=Ryzen+5+7600X'},
      {n:'AMD Ryzen 5 9600X',lo:198,hi:238,year:2024,sk:'AM5',dd:'DDR5',s:'6-core processor from AMD\'s latest generation · Very fast in games · Best mid-range gaming chip right now',pcp:'https://pcpartpicker.com/search/?q=Ryzen+5+9600X'},
      {n:'Intel Core Ultra 5 245KF',lo:188,hi:228,year:2024,sk:'LGA1851',dd:'DDR5',s:'14-core Intel processor from the latest generation · No built-in graphics, so a dedicated graphics card is required · Great all-around performance',pcp:'https://pcpartpicker.com/search/?q=Core+Ultra+5+245KF'},
      {n:'AMD Ryzen 7 7700X',lo:238,hi:278,year:2022,sk:'AM5',dd:'DDR5',s:'8-core processor · Handles gaming and streaming at the same time with ease',pcp:'https://pcpartpicker.com/search/?q=Ryzen+7+7700X'},
      // Strong AM4 options (great used / new value)
      {n:'AMD Ryzen 7 5800X3D',lo:195,hi:255,year:2022,sk:'AM4',dd:'DDR4',s:'8-core processor with special extra memory built into the chip · Was the top gaming processor of its era · Still excellent for gaming today',pcp:'https://pcpartpicker.com/search/?q=Ryzen+7+5800X3D'},
      {n:'AMD Ryzen 7 5700X',lo:128,hi:175,year:2022,sk:'AM4',dd:'DDR4',s:'8-core processor · Runs cool and uses little power · Great stepping-stone from budget to mid-range',pcp:'https://pcpartpicker.com/search/?q=Ryzen+7+5700X'},
      {n:'Intel Core i5-13600K',lo:195,hi:245,year:2022,sk:'LGA1700',dd:'DDR4',s:'14-core Intel processor · Excellent for gaming and everyday productivity · Great value overall',pcp:'https://pcpartpicker.com/search/?q=i5-13600K'}
    ],
    high:[
      {n:'AMD Ryzen 7 9700X',lo:295,hi:342,year:2024,sk:'AM5',dd:'DDR5',s:'8-core processor from AMD\'s latest generation · Faster per-core than previous generations · Runs cool even under heavy load',pcp:'https://pcpartpicker.com/search/?q=Ryzen+7+9700X'},
      {n:'AMD Ryzen 9 7900X',lo:315,hi:378,year:2022,sk:'AM5',dd:'DDR5',s:'12-core processor · Handles serious video editing or 3D work while gaming with no slowdowns',pcp:'https://pcpartpicker.com/search/?q=Ryzen+9+7900X'},
      {n:'Intel Core i7-14700K',lo:315,hi:372,year:2023,sk:'LGA1700',dd:'DDR4',s:'20-core Intel processor · Powerful enough for gaming, video editing, and streaming all at once',pcp:'https://pcpartpicker.com/search/?q=i7-14700K'},
      {n:'Intel Core Ultra 7 265KF',lo:285,hi:338,year:2024,sk:'LGA1851',dd:'DDR5',s:'20-core Intel processor from the latest generation · No built-in graphics, so a dedicated graphics card is required · Excellent at running many things at once',pcp:'https://pcpartpicker.com/search/?q=Core+Ultra+7+265KF'},
      {n:'Intel Core Ultra 7 265K',lo:302,hi:355,year:2024,sk:'LGA1851',dd:'DDR5',s:'20-core Intel processor from the latest generation · Includes a basic built-in graphics chip · Current-gen flagship mid-range Intel chip',pcp:'https://pcpartpicker.com/search/?q=Core+Ultra+7+265K'},
      // AM4 high-end (new or used)
      {n:'AMD Ryzen 9 5900X',lo:175,hi:235,year:2020,sk:'AM4',dd:'DDR4',s:'12-core processor · Excellent for video editing and gaming · Great value whether bought new or secondhand',pcp:'https://pcpartpicker.com/search/?q=Ryzen+9+5900X'},
      {n:'Intel Core i7-13700K',lo:265,hi:325,year:2022,sk:'LGA1700',dd:'DDR4',s:'16-core Intel processor · Handles gaming, streaming, and content creation all at the same time · Strong overall platform',pcp:'https://pcpartpicker.com/search/?q=i7-13700K'}
    ],
    ultra:[
      {n:'AMD Ryzen 7 9800X3D',lo:465,hi:512,year:2024,sk:'AM5',dd:'DDR5',s:'8-core processor with special extra memory built into the chip · The best gaming processor you can buy, full stop',pcp:'https://pcpartpicker.com/search/?q=Ryzen+7+9800X3D'},
      {n:'AMD Ryzen 9 9900X',lo:485,hi:548,year:2024,sk:'AM5',dd:'DDR5',s:'12-core processor from AMD\'s latest generation · Top choice for creators who also want top gaming performance',pcp:'https://pcpartpicker.com/search/?q=Ryzen+9+9900X'},
      {n:'AMD Ryzen 9 9950X',lo:515,hi:598,year:2024,sk:'AM5',dd:'DDR5',s:'16-core processor from AMD\'s latest generation · The ultimate chip for professional work and gaming combined',pcp:'https://pcpartpicker.com/search/?q=Ryzen+9+9950X'},
      {n:'Intel Core i9-14900K',lo:448,hi:508,year:2023,sk:'LGA1700',dd:'DDR4',s:'24-core Intel processor · At its lowest price ever in 2026 · Great option if you want top performance with older, cheaper memory',pcp:'https://pcpartpicker.com/search/?q=i9-14900K'},
      {n:'Intel Core Ultra 9 285K',lo:535,hi:628,year:2024,sk:'LGA1851',dd:'DDR5',s:'24-core Intel processor from the latest generation · Intel\'s most powerful chip for heavy workloads and productivity',pcp:'https://pcpartpicker.com/search/?q=Core+Ultra+9+285K'}
    ]
  },
  mobo: {
    budget:[
      {n:'B550 Motherboard (AM4)',lo:90,hi:138,sk:'AM4',dd:'DDR4',s:'Works with Ryzen 3600, 4500, 5600, and 5600X processors · Solid budget board · Good for straightforward builds'},
      {n:'B660 Motherboard (LGA1700)',lo:88,hi:132,sk:'LGA1700',dd:'DDR4',s:'Works with Intel 12th-generation processors like the i5-12400F · Entry-level Intel board'},
      {n:'B760 Motherboard (LGA1700)',lo:98,hi:155,sk:'LGA1700',dd:'DDR4',s:'Works with Intel 12th, 13th, and 14th-generation processors · Better power delivery than the B660 · More stable under heavy use'},
      {n:'B860 Motherboard (LGA1851)',lo:118,hi:185,sk:'LGA1851',dd:'DDR5',s:'Works with Intel\'s latest-generation processors like the Core Ultra 5 245KF · Entry-level board for the newest Intel platform'}
    ],
    mid:[
      {n:'X570 Motherboard (AM4)',lo:138,hi:198,sk:'AM4',dd:'DDR4',s:'Premium board for older AMD processors · Works with the Ryzen 5800X3D and 5700X · Supports fast storage drives'},
      {n:'Z790 Motherboard (LGA1700)',lo:158,hi:252,sk:'LGA1700',dd:'DDR4',s:'Top-tier board for Intel 12th, 13th, and 14th-generation processors · Unlocks full performance tuning'},
      {n:'B650 Motherboard (AM5)',lo:128,hi:212,sk:'AM5',dd:'DDR5',s:'Entry-level board for AMD\'s newer processor platform · Gets you onto the future-proof platform without overspending'},
      {n:'Z890 Motherboard (LGA1851)',lo:225,hi:388,sk:'LGA1851',dd:'DDR5',s:'Works with Intel Core Ultra 5 and Core Ultra 7 processors · Unlocks full performance tuning on the latest Intel platform'}
    ],
    high:[
      {n:'X670 Motherboard (AM5)',lo:225,hi:358,sk:'AM5',dd:'DDR5',s:'High-end board for AMD\'s newer processor platform · Better power delivery · More connections and expansion options'},
      {n:'X670E Motherboard (AM5)',lo:288,hi:462,sk:'AM5',dd:'DDR5',s:'Premium AMD board · Supports the fastest storage drives available · Best expansion options for power users'},
      {n:'X870 Motherboard (AM5)',lo:325,hi:492,sk:'AM5',dd:'DDR5',s:'Latest AMD chipset · Includes the fastest USB ports available · Pairs especially well with the Ryzen 7 9800X3D'},
      {n:'Z790 High-End (LGA1700)',lo:288,hi:462,sk:'LGA1700',dd:'DDR4',s:'Works with Intel Core i7-14700K and Core i9-14900K · Top-tier Intel mid-range board'}
    ],
    ultra:[
      {n:'X870E Motherboard (AM5)',lo:385,hi:858,sk:'AM5',dd:'DDR5',s:'Best AMD board available · Ideal for the Ryzen 7 9800X3D or Ryzen 9 9950X · Maximum speed and connectivity'},
      {n:'Z890 Extreme (LGA1851)',lo:462,hi:822,sk:'LGA1851',dd:'DDR5',s:'Works with the Intel Core Ultra 9 285K · Intel\'s absolute top-end board · No compromises'}
    ]
  },
  ram: {
    budget:[
      {n:'16GB DDR4-3200 Kit',lo:145,hi:195,dd:'DDR4',s:'The minimum amount of memory for gaming in 2026 · Works with older AMD and Intel builds · Note: memory prices are unusually high right now, about three times what they were in mid-2025',pcp:'https://pcpartpicker.com/search/?q=16GB+DDR4+3200'},
      {n:'32GB DDR4-3200 Kit',lo:252,hi:328,dd:'DDR4',s:'Recommended amount of memory · Keeps your older AMD or Intel build comfortable for years · Note: memory prices are elevated right now, so check current prices before ordering',pcp:'https://pcpartpicker.com/search/?q=32GB+DDR4+3200'},
      {n:'16GB DDR5-4800 Kit',lo:198,hi:272,dd:'DDR5',s:'Entry-level memory for the newest Intel builds · Minimum to get started on the latest platform · Note: memory prices have gone up significantly in 2026, verify the price before you buy',pcp:'https://pcpartpicker.com/search/?q=16GB+DDR5+4800'},
      {n:'32GB DDR5-5600 Kit',lo:298,hi:385,dd:'DDR5',s:'Solid memory kit for the latest Intel builds · Good balance of speed and capacity · Note: memory is more expensive than usual right now, check prices before ordering',pcp:'https://pcpartpicker.com/search/?q=32GB+DDR5+5600'}
    ],
    mid:[
      {n:'32GB DDR4-3200 Kit',lo:252,hi:328,dd:'DDR4',s:'Recommended amount of memory for older AMD and Intel builds · Currently cheaper than the newer memory type · Good all-around choice',pcp:'https://pcpartpicker.com/search/?q=32GB+DDR4+3200'},
      {n:'32GB DDR5-5600 Kit',lo:298,hi:385,dd:'DDR5',s:'Entry-level memory for AMD\'s newer platform · Handles most games and tasks well · Note: memory is pricier than usual, check the live price before ordering',pcp:'https://pcpartpicker.com/search/?q=32GB+DDR5+5600'},
      {n:'32GB DDR5-6000 CL30',lo:318,hi:422,dd:'DDR5',s:'The sweet spot for AMD\'s newer platform · This specific speed pairs especially well with newer AMD processors · Note: memory prices are about four times higher than their 2025 lows right now',pcp:'https://pcpartpicker.com/search/?q=32GB+DDR5+6000'},
      {n:'64GB DDR5-6000 Kit',lo:698,hi:958,dd:'DDR5',s:'Great for video editing, live streaming, and heavy multitasking · Plenty of room to work on large projects · Note: memory prices rose significantly in 2026',pcp:'https://pcpartpicker.com/search/?q=64GB+DDR5+6000'}
    ],
    high:[
      {n:'32GB DDR5-6000 CL30',lo:318,hi:422,dd:'DDR5',s:'Best starting point for high-end AMD builds · Verified strong performance at this speed · Check the current price before ordering as memory costs are elevated',pcp:'https://pcpartpicker.com/search/?q=32GB+DDR5+6000'},
      {n:'32GB DDR5-6400 CL32',lo:375,hi:458,dd:'DDR5',s:'Faster memory kit · Makes a noticeable difference specifically with the Ryzen 7 9800X3D · Note: memory shortages are driving prices up right now',pcp:'https://pcpartpicker.com/search/?q=32GB+DDR5+6400'},
      {n:'64GB DDR5-6000 Kit',lo:698,hi:958,dd:'DDR5',s:'For gaming combined with serious content creation · No worrying about running out of memory on big projects',pcp:'https://pcpartpicker.com/search/?q=64GB+DDR5+6000'},
      {n:'64GB DDR5-6400 Kit',lo:798,hi:1052,dd:'DDR5',s:'Fast, high-capacity memory · For people who create content and game hard · Note: check current pricing on PCPartPicker before ordering',pcp:'https://pcpartpicker.com/search/?q=64GB+DDR5+6400'}
    ],
    ultra:[
      {n:'32GB DDR5-6400 CL32',lo:375,hi:458,dd:'DDR5',s:'The best memory pairing for the Ryzen 7 9800X3D · Unlocks the most gaming performance from that chip',pcp:'https://pcpartpicker.com/search/?q=32GB+DDR5+6400'},
      {n:'64GB DDR5-6400 Kit',lo:798,hi:1052,dd:'DDR5',s:'Fast, high-capacity memory · Handles professional workstation tasks and gaming with no limits',pcp:'https://pcpartpicker.com/search/?q=64GB+DDR5+6400'},
      {n:'96GB DDR5-6400 Kit',lo:1195,hi:1498,dd:'DDR5',s:'Near server-level memory · Built for extreme video rendering and running AI tools locally · Note: pricing on this kit changes frequently, verify before ordering',pcp:'https://pcpartpicker.com/search/?q=96GB+DDR5'},
      {n:'128GB DDR5-6000 Kit',lo:1895,hi:2495,dd:'DDR5',s:'Maximum memory capacity · For running large AI models locally or rendering 3D scenes at scale · Note: verify current price before ordering',pcp:'https://pcpartpicker.com/search/?q=128GB+DDR5'}
    ]
  },
  storage: [
    {n:'Kingston NV3 500GB',lo:48,hi:72,cap:'500GB',s:'Budget drive for your operating system · Fast enough to boot up and load programs quickly',pcp:'https://pcpartpicker.com/search/?q=Kingston+NV3+500GB'},
    {n:'WD Blue SN580 500GB',lo:65,hi:92,cap:'500GB',s:'Better 500GB option · Faster read and write speeds plus better long-term reliability than the budget drive',pcp:'https://pcpartpicker.com/search/?q=WD+SN580+500GB'},
    {n:'Kingston NV3 1TB',lo:75,hi:105,cap:'1TB',s:'Budget 1TB drive · Enough space for your operating system plus a good collection of games · Trusted brand',pcp:'https://pcpartpicker.com/search/?q=Kingston+NV3+1TB'},
    {n:'WD Black SN770 1TB',lo:108,hi:148,cap:'1TB',s:'Fast 1TB drive · Blazing-fast file transfers with no slowdowns · Great choice for gaming',pcp:'https://pcpartpicker.com/search/?q=WD+SN770+1TB'},
    {n:'Samsung 990 Evo 1TB',lo:118,hi:158,cap:'1TB',s:'Samsung quality and reliability · Very fast · Works with both older and newer motherboards · Excellent long-term reliability',pcp:'https://pcpartpicker.com/search/?q=Samsung+990+Evo+1TB'},
    {n:'WD Black SN850X 1TB',lo:138,hi:188,cap:'1TB',s:'Blazing-fast 1TB drive · Among the fastest drives available · Same speed class used in the PlayStation 5',pcp:'https://pcpartpicker.com/search/?q=WD+SN850X+1TB'},
    {n:'Samsung 990 Pro 1TB',lo:155,hi:205,cap:'1TB',s:'Samsung\'s flagship 1TB drive · Blazing-fast · Best endurance and lifespan in its class',pcp:'https://pcpartpicker.com/search/?q=Samsung+990+Pro+1TB'},
    {n:'WD Black SN7100 2TB',lo:195,hi:248,cap:'2TB',s:'Great value 2TB drive · Fast across all tasks · Best entry point for 2TB storage',pcp:'https://pcpartpicker.com/search/?q=WD+SN7100+2TB'},
    {n:'WD Black SN850X 2TB',lo:208,hi:272,cap:'2TB',s:'Blazing-fast 2TB drive · Enough space for 200 or more games · No slowdowns at any task',pcp:'https://pcpartpicker.com/search/?q=WD+SN850X+2TB'},
    {n:'Samsung 990 Evo 2TB',lo:215,hi:278,cap:'2TB',s:'Samsung\'s 2TB value option · Very reliable · Backed by a strong warranty',pcp:'https://pcpartpicker.com/search/?q=Samsung+990+Evo+2TB'},
    {n:'Samsung 990 Pro 2TB',lo:245,hi:312,cap:'2TB',s:'Samsung\'s flagship 2TB drive · Maximum speed for power users who need space and performance',pcp:'https://pcpartpicker.com/search/?q=Samsung+990+Pro+2TB'},
    {n:'WD Black SN850X 4TB',lo:385,hi:495,cap:'4TB',s:'Massive, blazing-fast drive · Enough for 300 or more games · For enthusiasts who refuse to delete anything',pcp:'https://pcpartpicker.com/search/?q=WD+SN850X+4TB'},
    {n:'Seagate FireCuda 530 4TB',lo:395,hi:515,cap:'4TB',s:'Blazing-fast 4TB alternative · Matches the fastest drives available · Great for large game libraries or creative work',pcp:'https://pcpartpicker.com/search/?q=Seagate+FireCuda+530+4TB'},
    {n:'Samsung 990 Pro 4TB',lo:415,hi:545,cap:'4TB',s:'Samsung\'s flagship 4TB drive · Maximum speed and maximum capacity in one drive',pcp:'https://pcpartpicker.com/search/?q=Samsung+990+Pro+4TB'}
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
      {n:'650W 80+ Bronze',lo:45,hi:75,rt:'Bronze',s:'Converts power at around 82-85% efficiency · Entry level · Works fine for budget builds'},
      {n:'650W 80+ Gold',lo:75,hi:110,rt:'Gold',s:'Recommended · Converts power at around 90% efficiency · Runs quieter and cooler and lasts longer than cheaper options'},
      {n:'750W 80+ Gold',lo:85,hi:125,rt:'Gold',s:'Extra breathing room on power · Efficient gold-rated unit · Safe choice for any budget graphics card'}
    ],
    mid:[
      {n:'750W 80+ Gold',lo:75,hi:120,rt:'Gold',s:'Recommended for builds using the RTX 5060 Ti or RX 9060 XT · Efficient gold-rated unit'},
      {n:'850W 80+ Gold',lo:95,hi:145,rt:'Gold',s:'Best all-around mid-range power supply · Handles any graphics card at this tier comfortably'},
      {n:'850W 80+ Platinum',lo:125,hi:175,rt:'Platinum',s:'Premium efficiency · Converts power at around 92% · Great for systems that run around the clock or for streamers'},
      {n:'1000W 80+ Gold',lo:120,hi:165,rt:'Gold',s:'Plenty of headroom · Good for RTX 5070 Ti builds or systems pushed to their limits'}
    ],
    high:[
      {n:'850W 80+ Gold',lo:95,hi:145,rt:'Gold',s:'Minimum recommended for RTX 5070 Ti builds · Efficient gold-rated unit'},
      {n:'1000W 80+ Gold',lo:120,hi:165,rt:'Gold',s:'Recommended for RTX 5080 builds · Comfortable headroom · Efficient gold-rated unit'},
      {n:'1000W 80+ Platinum',lo:145,hi:195,rt:'Platinum',s:'Premium efficiency · Converts power at around 92% · Near-silent even under heavy load'},
      {n:'1200W 80+ Gold',lo:155,hi:215,rt:'Gold',s:'For high-end builds running at full tilt · Maximum breathing room on power delivery'}
    ],
    ultra:[
      {n:'1200W 80+ Gold',lo:155,hi:215,rt:'Gold',s:'Minimum recommended for RTX 5090 builds · Efficient gold-rated unit'},
      {n:'1200W 80+ Platinum',lo:185,hi:260,rt:'Platinum',s:'Recommended for RTX 5090 builds · Premium efficiency rating · Best long-term reliability'},
      {n:'1600W 80+ Platinum',lo:350,hi:455,rt:'Platinum',s:'For extreme builds · RTX 5090 paired with a pushed-to-the-limit processor · Absolutely no power constraints'}
    ]
  },
  cooler: {
    budget:[
      {n:'Thermalright Peerless Assassin 120 SE (Air)',lo:35,hi:48,tp:'air',s:'Best budget air cooler available · Handles very powerful processors · Runs very quietly'},
      {n:'Arctic Freezer 36 (Air)',lo:45,hi:62,tp:'air',s:'Excellent air cooler with fans on both sides · Works with all current AMD and Intel platforms · Great value'},
      {n:'Arctic Liquid Freezer III 240mm (AIO)',lo:65,hi:88,tp:'aio',s:'Best budget liquid cooler · 240mm radiator · Award-winning cooling performance'}
    ],
    mid:[
      {n:'Thermalright Peerless Assassin 120 SE (Air)',lo:35,hi:48,tp:'air',s:'Budget cooler that performs far above its price'},
      {n:'be quiet! Dark Rock 4 (Air)',lo:65,hi:88,tp:'air',s:'Premium quiet air cooler · Excellent temperatures · Near-silent operation'},
      {n:'Arctic Liquid Freezer III 240mm (AIO)',lo:65,hi:88,tp:'aio',s:'240mm liquid cooler · Best value for the price · Strong pump and fans'},
      {n:'NZXT Kraken Core 240mm (AIO)',lo:85,hi:118,tp:'aio',s:'240mm liquid cooler · Clean look · Good software control · Solid cooling performance'},
      {n:'Arctic Liquid Freezer III Pro 360mm (AIO)',lo:88,hi:115,tp:'aio',s:'360mm liquid cooler · Best performance for the price · Backed by a 6-year warranty'}
    ],
    high:[
      {n:'Noctua NH-D15 G2 (Air)',lo:125,hi:168,tp:'air',s:'Best air cooler money can buy · Whisper-quiet · Outperforms most liquid coolers'},
      {n:'Arctic Liquid Freezer III Pro 360mm (AIO)',lo:88,hi:115,tp:'aio',s:'360mm liquid cooler · Award-winning · Best value liquid cooler on the market'},
      {n:'NZXT Kraken Plus 360mm (AIO)',lo:158,hi:225,tp:'aio',s:'360mm liquid cooler · Premium model with an LCD display on the pump · Top-tier performance'},
      {n:'Corsair iCUE H150i Elite 360mm (AIO)',lo:145,hi:198,tp:'aio',s:'360mm liquid cooler · Corsair\'s flagship · Great match for Intel Core i9 or AMD Ryzen 9 processors'}
    ],
    ultra:[
      {n:'Noctua NH-D15 G2 (Air)',lo:125,hi:168,tp:'air',s:'Best air cooler on Earth · Handles even the most power-hungry processors quietly'},
      {n:'Arctic Liquid Freezer III Pro 360mm (AIO)',lo:88,hi:115,tp:'aio',s:'360mm liquid cooler · Best value liquid cooler available · 6-year warranty'},
      {n:'NZXT Kraken Plus 360mm (AIO)',lo:158,hi:225,tp:'aio',s:'360mm liquid cooler · Premium model with an LCD display · Top-tier performance'},
      {n:'Corsair iCUE H150i Elite 360mm (AIO)',lo:145,hi:198,tp:'aio',s:'360mm liquid cooler · Corsair\'s flagship · Best match for the Ryzen 9 9950X or Intel Core Ultra 9 285K'}
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
