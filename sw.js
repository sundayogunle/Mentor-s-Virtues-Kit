// Service Worker for Offline Caching

const CACHE_NAME = 'virtues-kit-cache-v2'; // Version bumped for updates
// List of core files that make up the "app shell" to be cached on install.
const APP_SHELL_URLS = [
  '/',
  '/index.html',
  '/index.tsx',
  '/manifest.json', // Added manifest to the cache for better PWA integration
  '/metadata.json',
  // Core dependencies from CDN
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800&display=swap',
  'https://aistudiocdn.com/react@^19.2.0',
  'https://aistudiocdn.com/react-dom@^19.2.0/',
  'https://aistudiocdn.com/@google/genai@^1.22.0'
];

// Install event: precache the app shell for offline access.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching App Shell');
        return cache.addAll(APP_SHELL_URLS).catch(err => {
          console.error('Service Worker: Failed to cache one or more App Shell resources:', err);
        });
      })
  );
});

// Activate event: clean up any old, unused caches to save space.
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Ensure the new service worker takes control immediately.
  return self.clients.claim();
});

// Fetch event: Implement a cache-first strategy.
// This is ideal for an app shell model, prioritizing fast loads and offline capability.
// Dynamic assets (e.g., illustrations, API-fetched translations, parenting tips)
// are cached at runtime upon the first successful network fetch.
self.addEventListener('fetch', (event) => {
  // We only cache GET requests.
  if (event.request.method !== 'GET') {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Cache hit: return the response from the cache.
        if (cachedResponse) {
          return cachedResponse;
        }

        // Not in cache: fetch from the network.
        return fetch(event.request).then(
          (networkResponse) => {
            // Check if we received a valid response to cache.
            // Opaque responses (type 'opaque', status 0) are for cross-origin 'no-cors' requests.
            if (!networkResponse || (networkResponse.status !== 200 && networkResponse.status !== 0)) {
              return networkResponse;
            }

            // Clone the response to store it in the cache for future use.
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return networkResponse;
          }
        ).catch((error) => {
            // This handles cases where the fetch fails (e.g., user is offline and resource is not cached).
            console.error('Service Worker: Fetch failed. The browser will now show the default offline error.', error);
        });
      })
  );
});
