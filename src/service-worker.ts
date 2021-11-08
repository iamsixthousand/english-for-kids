/* eslint-disable no-else-return */
/* eslint-disable prefer-template */
/* eslint-disable prettier/prettier */
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
import { } from 'workbox-precaching'; // WB_MANIFEST wont work without it
// import { registerRoute } from 'workbox-routing';
// import { StaleWhileRevalidate } from 'workbox-strategies';
// import { ExpirationPlugin } from 'workbox-expiration';
import { PrecacheEntry } from 'workbox-precaching/_types';
import { /* cards, */ categories } from './cardData';
import { PUBLIC_URL } from './@core/constants';

export type { };

declare const self: ServiceWorkerGlobalScope;

clientsClaim();

const offlineFile = `${PUBLIC_URL}/offline.html`;

const manifestStaticData = self.__WB_MANIFEST.map((el: string | PrecacheEntry) => {
  if (typeof el === 'object') {
    return el.url;
  }
  return el;
}) as string[];

const cacheNameStatic = '::efk-data-static';
const cacheNameMedia = '::efk-data-media';
const indexedDBName = 'efk-sound-database';
// const cacheNameAudio = '::efk-data-audio';
const versionMe = '-v-0.0.1';
const versionSt = '-v-0.0.1';
const versionDB = 1;

const openDBRequest = indexedDB.open(indexedDBName, versionDB);

const categoriesImagesToPreCache = categories.reduce((acc: string[], elem) => {
  acc.push(`${PUBLIC_URL}/${elem.image}`);
  return acc;
}, []);

const dataToPreCache = categoriesImagesToPreCache.concat(manifestStaticData, offlineFile);
// const staticToPreCache = manifestStaticData; // add offline.html
// *******************************INSTALL***************************
self.addEventListener('install', (event) => {
  console.log(dataToPreCache);
  event.waitUntil(
    caches.open(cacheNameStatic + versionSt).then((cache) => {
      return cache.addAll(dataToPreCache);
    })
  );
});
// *******************************IndexedDB Events*******************************
openDBRequest.addEventListener('upgradeneeded', () => {
  console.log('upgrdneeded');
  const db = openDBRequest.result;
  if (!db.objectStoreNames.contains('audios')) { // если хранилище "audios" не существует
    db.createObjectStore('audios', { keyPath: 'id' }); // создаем хранилище
  }
});

openDBRequest.addEventListener('error', () => {
  console.error(openDBRequest.error);
});

openDBRequest.addEventListener('success', () => {
  console.log(openDBRequest.result);
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

  if (url.origin === self.location.origin) {
    console.log('try to chache first');
    console.log(url.origin + ' / ' + self.location.origin);
    event.respondWith(cacheFirst(request));
  } else {
    console.log('try to network first');
    console.log(url.origin + ' / ' + self.location.origin);
    event.respondWith(networkFirst(request));
  }
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
  return cached ?? networkFirst(request);
}

async function networkFirst(request: Request) {
  const cache = await caches.open(cacheNameMedia + versionMe);
  const url = new URL(request.url);
  const db = openDBRequest.result;
  try {
    console.log('nF 1');
    if (url.pathname.endsWith('.mp3')) { // ***********AUDIO*******************
      console.log('audio here, add some logic1');
      // const audioResponse = await fetch(request);
      const audioResponse = await fetch(request);

      const audioResponseBlob = fetch(request)
        .then(response => response.blob())
        .catch((e) => console.log(e));
      console.log('11112');

      try {
        const audioEncoded = await getBase64(await audioResponseBlob);
        const transaction = db.transaction("audios", "readwrite");
        const audios = transaction.objectStore("audios");
        const addRequest = audios.add({name:'aaaa', id: '123123'});
        // addRequest.addEventListener('error', () => console.log(addRequest.error));
        addRequest.addEventListener('success', () => console.log(addRequest.result));
      } catch (error) {
        console.log(error)
      }
      // const audioEncoded = await getBase64(await audioResponseBlob);
      // const transaction = db.transaction("audios", "readwrite");
      // const audios = transaction.objectStore("audios");


      return audioResponse;
    }
    else {
      const response = await fetch(request);
      await cache.put(request, response.clone());
      return response;
    }

  } catch (e) {
    console.log('nF 2');
    const cached = await cache.match(request);
    return cached as Response ?? await caches.match(offlineFile);
  }
}

function getBase64(file: void | Blob): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    if (file)
      reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
