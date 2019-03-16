var CACHE = 'v2.2';
const CACHE_MISS = 'cache-miss';
var filesToCache = [
  '/490/',
  '/490/index.html',
  '/490/scripts/app.js',
  '/490/styles/inline.css',
  '/490/manifest.webmanifest',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== CACHE) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});
