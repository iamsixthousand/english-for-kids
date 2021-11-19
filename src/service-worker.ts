/* eslint-disable no-else-return */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */

/// <reference lib="WebWorker" />

import { clientsClaim } from 'workbox-core';
import {} from 'workbox-precaching'; // WB_MANIFEST wont work without it
import { PrecacheEntry } from 'workbox-precaching/_types';
import { categories } from './cardData';
import { PUBLIC_URL } from './@core/constants';

export type {};

declare const self: ServiceWorkerGlobalScope;

clientsClaim();

const cacheNameStatic = '::efk-data-static';
const cacheNameMedia = '::efk-data-media';
const indexedDBName = 'efk-sound-database';

const versionMe = '-v-0.0.3';
const versionSt = '-v-0.0.3';
const versionDB = 3;

const categoriesImagesToPreCache = categories.reduce((acc: string[], elem) => {
  acc.push(`${PUBLIC_URL}/${elem.image}`);
  return acc;
}, []);

const manifestStaticData = self.__WB_MANIFEST.map((el: string | PrecacheEntry) => {
  if (typeof el === 'object') {
    return el.url;
  }
  return el;
}) as string[];

const offlineFile = `${PUBLIC_URL}/offline.html`;

const dataToPreCache = categoriesImagesToPreCache.concat(manifestStaticData, offlineFile);

// *******************************IndexedDB*******************************
const openDBRequest = indexedDB.open(indexedDBName, versionDB);
let db: IDBDatabase;
openDBRequest.addEventListener('upgradeneeded', () => {
  db = openDBRequest.result; // db init
  if (!db.objectStoreNames.contains('audios')) {
    // if we have no audios storage
    db.createObjectStore('audios'); // then create storage
  }
});

// *******************************INSTALL***************************
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheNameStatic + versionSt).then((cache) => {
      return cache.addAll(dataToPreCache);
    })
  );
});

// *******************************ACTIVATE*******************************
self.addEventListener('activate', async () => {
  const cacheNames = await caches.keys(); // array with all cached keys
  await Promise.all(
    cacheNames
      .filter((name) => name !== cacheNameStatic + versionSt)
      .filter((name) => name !== cacheNameMedia + versionMe)
      .map((name) => caches.delete(name))
  );
});

// ***************************FETCH*****************************************
self.addEventListener('fetch', async (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (url.origin === self.location.origin) {
    event.respondWith(cacheFirst(request, url));
  } else {
    event.respondWith(networkFirst(request, url));
  }
});
// ***************************MESSAGE*****************************************
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('skip waiting()');
    self.skipWaiting();
  }
});

// *************************STRATEGIES**********************************************
async function cacheFirst(request: Request, url: URL): Promise<Response> {
  if (url.pathname.endsWith('.mp3')) {
    return new Promise((resolve, reject) => {
      db = openDBRequest.result;
      const transaction = db.transaction('audios', 'readonly').objectStore('audios');
      const audioStrRequest = transaction.get(url.pathname);
      audioStrRequest.onsuccess = async () => {
        const { result } = audioStrRequest;
        if (result) {
          const audioFileResponse = convertBase64ToBlob(result, url.pathname);
          resolve(audioFileResponse);
        } else {
          resolve(networkFirst(request, url));
        }
      };
      audioStrRequest.onerror = () => reject(networkFirst(request, url));
    });
  } else {
    const cached = await caches.match(request);
    if (cached) {
      return cached;
    } else {
      const cache = await caches.open(cacheNameMedia + versionMe);
      const response = await fetch(request);
      await cache.put(request, response.clone());
      return response;
    }
  }
}

async function networkFirst(request: Request, url: URL) {
  const cache = await caches.open(cacheNameMedia + versionMe);
  db = openDBRequest.result;
  try {
    if (url.pathname.endsWith('.mp3')) {
      // ***********AUDIO*******************
      const audioResponse = await fetch(request);
      const responseClone = audioResponse.clone();
      const data = await audioResponse.blob();
      const audioEncoded = await getBase64(data);
      const transaction = db.transaction('audios', 'readwrite');
      const objectStore = transaction.objectStore('audios');
      const putRequest = objectStore.put(audioEncoded, url.pathname);
      putRequest.onsuccess = () => {
        console.log('put-result', putRequest.result);
      };
      return responseClone;
    } else {
      const response = await fetch(request);
      await cache.put(request, response.clone());
      return response;
    }
  } catch (e) {
    const cached = await cache.match(request);
    const offline = await caches.match(offlineFile);
    return (cached as Response) ?? (offline as Response);
  }
}

// **************************ENC/DECODING FUNCS*****************************
function getBase64(file: void | Blob): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    if (file) reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

function convertBase64ToBlob(base64Str: string, url: string) {
  const parts = base64Str.split(';base64,');
  const dataType = parts[0].split(':')[1];
  const decodedData = atob(parts[1]);
  const uInt8Array = new Uint8Array(decodedData.length);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < decodedData.length; ++i) {
    uInt8Array[i] = decodedData.charCodeAt(i);
  }
  const blob = new Blob([uInt8Array], { type: dataType });
  const init = { status: 200, statusText: 'audioFromIDB', redirecterd: false };
  const response = new Response(blob, init);
  Object.defineProperty(response, 'url', { value: url });
  return response;
}
