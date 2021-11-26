/* eslint-disable no-unused-vars */
export function register(updateAskFunc: (reg: ServiceWorkerRegistration) => void): void {
  window.addEventListener('load', async () => {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      try {
        const reg = await navigator.serviceWorker.register(
          `${process.env.PUBLIC_URL}/service-worker.js`
        );
        reg.onupdatefound = () => {
          const installingWorker = reg.installing;
          if (installingWorker) {
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                updateAskFunc(reg); // shows update message
              }
            };
          }
        };
      } catch (e) {
        console.log('fail', e);
      }
    }
  });
}
