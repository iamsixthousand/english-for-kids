/* eslint-disable no-restricted-globals */
/* eslint-disable no-return-await */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */

/// <reference lib="WebWorker" />

import { clientsClaim } from 'workbox-core';
import {} from 'workbox-precaching'; // WB_MANIFEST wont work without it
// import { registerRoute } from 'workbox-routing';
// import { StaleWhileRevalidate } from 'workbox-strategies';
// import { ExpirationPlugin } from 'workbox-expiration';
import { PrecacheEntry } from 'workbox-precaching/_types';
import { /* cards, */ categories } from './cardData';
import { PUBLIC_URL } from './@core/constants';

export type {};

declare const self: ServiceWorkerGlobalScope;

clientsClaim();

const offlineFile = 'offline.html';

const manifestStaticData = self.__WB_MANIFEST.map((el: string | PrecacheEntry) => {
  if (typeof el === 'object') {
    return el.url;
  }
  return el;
}) as string[];

const cacheNameStatic = '::efk-data-static';
const cacheNameMedia = '::efk-data-media';
// const cacheNameAudio = '::efk-data-audio';
const versionMe = '-v-0.0.1';
const versionSt = '-v-0.0.1';

const categoriesImagesToPreCache = categories.reduce((acc: string[], elem) => {
  acc.push(`${PUBLIC_URL}/${elem.image}`);
  return acc;
}, []);

const dataToPreCache = categoriesImagesToPreCache.concat(manifestStaticData);
// const staticToPreCache = manifestStaticData; // add offline.html
// *******************************INSTALL***************************
self.addEventListener('install', (event) => {
  // const preloadResources = () => {
  //   return Promise.all([
  //     caches.open(cacheNameMedia + versionMe).then((cache) => {
  //       return cache.addAll(mediaToPreCache);
  //     }),
  //     caches.open(cacheNameStatic + versionSt).then((cache) => {
  //       return cache.addAll(staticToPreCache);
  //     }),
  //   ]);
  // };
  // event.waitUntil(preloadResources());
  // const staticCache = await caches.open(cacheNameStatic + versionSt);
  // await staticCache.addAll(staticToPreCache);
  console.log(dataToPreCache);
  event.waitUntil(
    caches.open(cacheNameStatic + versionSt).then((cache) => {
      return cache.addAll(dataToPreCache);
    })
  );
  // );
  // const cache = await caches.open(PWA_TEST_CACHE);
  //   await cache.addAll(filesToCache);
  //   const cacheS = await caches.open(MEDIA_CACHE);
  //   await cacheS.addAll(mediaFilesToCache);
  // console.log(mediaToPreCache);
  // console.log('installed');
});

// *******************************ACTIVATE*******************************
self.addEventListener('activate', (event) => {
  // event.waitUntil(
  //   caches.keys().then((keys) => {
  //     console.log('trying to activate');
  //     return Promise.all(
  //       keys
  //         .filter((key) => {
  //           return key.indexOf(versionMe) !== 0;
  //         })
  //         .map((key) => {
  //           return caches.delete(key);
  //         })
  //     );
  //   })
  // );
  console.log('activated');
});

// ***************************FETCH*****************************************
self.addEventListener('fetch', (event) => {
  console.log('Fetch', event.request.url);
  const { request } = event;
  const url = new URL(request.url);

  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(request));
  } else event.respondWith(networkFirst(request));
});

// const imageExtensions = /.*\/.*\.(?:jpg|png|svg|ico)$/;
// registerRoute(
//   // Add in any other file extensions or routing criteria as needed.
//   imageExtensions,
//   // Customize this strategy as needed, e.g., by changing to CacheFirst.
//   new StaleWhileRevalidate({
//     cacheName: cacheNameMedia + versionMe,
//     plugins: [
//       // Ensure that once this runtime cache reaches a maximum size the
//       // least-recently used images are removed.
//       new ExpirationPlugin({ maxEntries: 50 }),
//     ],
//   })
// );

async function cacheFirst(request: Request) {
  const cached = await caches.match(request);
  return cached ?? (await fetch(request));
}

async function networkFirst(request: Request) {
  const cache = await caches.open(cacheNameMedia + versionMe);
  try {
    const response = await fetch(request);
    await cache.put(request, response.clone());
    return response;
  } catch (e) {
    const cached = await cache.match(request);
    return (cached as Response) ?? (await caches.match('offline.html'));
  }
}
