'use strict';
(function(){
  function toggleNav(){
    var ul=document.querySelector('.nav-links'),b=document.getElementById('nav-burger');
    ul.classList.toggle('open');
    b.textContent=ul.classList.contains('open')?'✕':'☰';
  }
  window.toggleNav=toggleNav;

  document.addEventListener('click',function(e){
    if(!e.target.closest('nav')){
      var ul=document.querySelector('.nav-links');
      if(ul)ul.classList.remove('open');
      var b=document.getElementById('nav-burger');
      if(b)b.textContent='☰';
    }
  });

  function toggleFAQ(btn){
    var a=btn.nextElementSibling;
    var isOpen=btn.classList.contains('open');
    document.querySelectorAll('.faq-q.open').forEach(function(b){
      b.classList.remove('open');
      b.nextElementSibling.classList.remove('open');
    });
    if(!isOpen){btn.classList.add('open');a.classList.add('open');}
  }
  window.toggleFAQ=toggleFAQ;

  var revObs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add('in');revObs.unobserve(e.target);}
    });
  },{threshold:.08});
  document.querySelectorAll('.rev').forEach(function(el){revObs.observe(el);});

  window.addEventListener('scroll',function(){
    var btt=document.getElementById('btt');
    if(btt)btt.classList.toggle('show',window.scrollY>500);
  });

  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(function(){});
  }

  document.querySelectorAll('.carousel-track').forEach(function(track){
    var slides=track.children.length;
    if(slides<2)return;
    var i=0;
    setInterval(function(){
      i=(i+1)%slides;
      track.style.transform='translateX(-'+(i*100)+'%)';
    },3500);
  });

  function dismissSaleBanner(){
    var b=document.getElementById('sale-banner');
    if(!b)return;
    try{localStorage.setItem('sale-dismissed-'+b.dataset.phase,'1');}catch(e){}
    b.style.display='none';
  }
  window.dismissSaleBanner=dismissSaleBanner;

  (function(){
    var banner=document.getElementById('sale-banner');
    var textEl=document.getElementById('sale-banner-text');
    if(!banner||!textEl)return;
    var now=new Date();
    var saleStart=new Date('2026-09-04T00:00:00');
    var saleEnd=new Date('2026-09-13T00:00:00');
    if(now>=saleEnd)return;
    var phase=now>=saleStart?'live':'announce';
    banner.dataset.phase=phase;
    var dismissed=false;
    try{dismissed=localStorage.getItem('sale-dismissed-'+phase)==='1';}catch(e){}
    if(dismissed)return;
    textEl.innerHTML=phase==='live'
      ?'&#127881; <b>Labor Day Sale is live:</b> 25% off all labor through Sept 12. <a href="request.html?promo=laborday2026">Book now &rarr;</a>'
      :'&#127881; <b>Labor Day Sale starts Friday, Sept 4:</b> 25% off all labor through Sept 12. <a href="request.html?promo=laborday2026">Book now &rarr;</a>';
    banner.style.display='flex';
  })();
})();
