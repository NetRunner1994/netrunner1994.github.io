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
})();
