'use strict';
var CACHE = 'netrunner-v1';
var PRECACHE = [
  '/',
  '/index.html',
  '/build.html',
  '/upgrade.html',
  '/request.html',
  '/build-quiz.html',
  '/404.html',
  '/styles.css',
  '/shared.js',
  '/parts.js',
  '/manifest.json',
  '/netrunner_logo.png',
  '/netrunner_logo.webp',
  '/apple-touch-icon.png',
  '/hero-bg.webp',
  '/selfie.webp',
  '/pc_pic.webp',
  '/pc_upgrade.webp',
  '/first_build.webp',
  '/first_build-2.webp',
  '/first_build-3.webp',
  '/first_build-4.webp',
  '/first_build-5.webp'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(c) { return c.addAll(PRECACHE); })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.filter(function(k) { return k !== CACHE; }).map(function(k) { return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;
  var url = new URL(e.request.url);
  if (url.hostname === 'formspree.io') return;
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      var net = fetch(e.request).then(function(res) {
        if (res.ok) {
          var clone = res.clone();
          caches.open(CACHE).then(function(c) { c.put(e.request, clone); });
        }
        return res;
      }).catch(function() { return cached; });
      return cached || net;
    })
  );
});
