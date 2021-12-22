/* eslint-disable import/no-named-as-default */
/* eslint-disable no-else-return */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */

/// <reference lib="WebWorker" />

import { clientsClaim } from 'workbox-core';
import 'workbox-precaching'; // WB_MANIFEST wont work without it
import { PrecacheEntry } from 'workbox-precaching/_types';
import { categories } from './cardData';
import { PUBLIC_URL } from './@core/constants';
import indexedDBService from './@core/services/indexedDBService';

export type {};

declare const self: ServiceWorkerGlobalScope;

clientsClaim();

const cacheNameStatic = '::efk-data-static';
const cacheNameMedia = '::efk-data-media';
const indexedDBName = 'efk-sound-database';
const indexedDBAudioStoreName = 'audios';

const versionMe = '-v-0.0.2';
const versionSt = '-v-0.0.2';
const versionDB = 1;

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
openDBRequest.addEventListener('upgradeneeded', () => {
  indexedDBService.init(openDBRequest, indexedDBAudioStoreName);
});

// *******************************INSTALL***************************
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheNameStatic + versionSt).then((cache) => cache.addAll(dataToPreCache))
  );
});

// *******************************ACTIVATE*******************************
self.addEventListener('activate', async () => {
  const cacheNames = await caches.keys(); // array with all cached keys
  await Promise.all(
    cacheNames
      .filter((name) => name !== cacheNameStatic + versionSt && name !== cacheNameMedia + versionMe)
      .map((name) => caches.delete(name))
  );
  indexedDBService.clear(openDBRequest, indexedDBAudioStoreName);
  // window.location.reload();
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
    self.skipWaiting(); // skip and activate
  }
});

// *************************STRATEGIES**********************************************
async function cacheFirst(request: Request, url: URL): Promise<Response> {
  if (url.pathname.endsWith('.mp3')) {
    return new Promise((resolve, reject) => {
      const audioStrRequest = indexedDBService.get(
        openDBRequest,
        indexedDBAudioStoreName,
        url.pathname
      );
      audioStrRequest.onsuccess = async () => {
        const { result } = audioStrRequest;
        if (result) {
          const audioFileResponse = convertBase64ToBlobToResponse(result, url.pathname);
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
  try {
    if (url.pathname.endsWith('.mp3')) {
      // ***********AUDIO*******************
      const audioResponse = await fetch(request);
      const responseClone = audioResponse.clone();
      const data = await audioResponse.blob();
      const audioEncoded = (await getBase64(data)) as string;
      indexedDBService.put(openDBRequest, indexedDBAudioStoreName, audioEncoded, url.pathname);
      return responseClone;
    } else {
      const response = await fetch(request);
      await cache.put(request, response.clone());
      return response;
    }
  } catch (e) {
    const cached = await cache.match(request);
    const offline = await cache.match(offlineFile);
    return (cached as Response) ?? (offline as Response);
  }
}

// **************************ENC/DECODING FUNCS*****************************
function getBase64(file: Blob): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    if (file) reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

function convertBase64ToBlobToResponse(base64Str: string, url: string) {
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
