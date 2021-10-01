self.addEventListener("install", event => {
    event.waitUntil(
      (async () => {
        const cache = await caches.open("offline");
  
        await cache.add(new Request("/assets/offline.html", { cache: "reload" }));
      })(),
    );
  
    self.skipWaiting();
  });
  
  self.addEventListener("activate", event => {
    event.waitUntil(
      (async () => {
        if ("navigationPreload" in self.registration) await self.registration.navigationPreload.enable();
      })(),
    );
  
    self.clients.claim();
  });
  
  self.addEventListener("fetch", event => {
    if (event.request.mode === "navigate") {
      event.respondWith(
        (async () => {
          try {
            const PreloadResponse = await event.preloadResponse;
  
            if (PreloadResponse) {
              return PreloadResponse;
            }
  
            const NetworkResponse = await fetch(event.request);
  
            return NetworkResponse;
          } catch (err) {
            const cache = await caches.open("offline");
  
            return await cache.match("/assets/offline.html");
          }
        })(),
      );
    }
  });
  