// public/service-worker.js

self.addEventListener('install', event => {
    console.log('Service Worker установился.');
});

self.addEventListener('activate', event => {
    console.log('Service Worker активирован.');
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
        return cachedResponse || fetch(event.request);
        })
    );
});