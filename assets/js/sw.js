if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    const isLocalhost = Boolean(
      window.location.hostname === "localhost" ||
        window.location.hostname === "[::1]" ||
        window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[01]?)){3}$/),
    );
    const swUrl = `/service-worker.js`;

    if (isLocalhost) {
      checkValidServiceWorker(swUrl);

      navigator.serviceWorker.ready.then(() => console.log(`⚙ | Service Worker online.`));
    } else {
      registerValidSW(swUrl);
    }
  });
}

function registerValidSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;

        if (installingWorker === null) {
          return;
        }

        installingWorker.onstatechange = () => {
          if (installingWorker.state === "installed") {
            if (navigator.serviceWorker.controller) {
              console.log(
                "⚙ | Service Worker: New content is avalible and will be used when all tabs for this page are closed.",
              );
            }
          } else {
            console.log("⚙ | Service Worker: Content is ready for offline usage.");
          }
        };
      };
    })
    .catch(err => console.error(`⛔ | Service Worker: An error occoured while registration. ${err}`));
}

function checkValidServiceWorker(swUrl) {
  fetch(swUrl, {
    headers: {
      "Service-Worker": "script",
    },
  })
    .then(response => {
      const contentType = response.headers.get("content-type");

      if (response.status === 404 || (contentType !== null && contentType.indexOf("javascript") === -1)) {
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        registerValidSW(swUrl);
      }
    })
    .catch(err =>
      console.log(
        `⛔ | Failed to connect. Please check your network, or be forced to run in offline mode (only when avalible). This could be an error on our behalf. ${err}`,
      ),
    );
}
