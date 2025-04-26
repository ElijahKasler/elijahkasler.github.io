self.addEventListener('install', event => {
  console.log('Service Worker installing.');
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open('site-cache').then(cache => {
      return cache.match(event.request).then(response => {
        if (response) {
          return response; // serve from cache
        }
        return fetch(event.request).then(networkResponse => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});
