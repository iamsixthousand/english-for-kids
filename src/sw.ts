/* eslint-disable no-multi-assign */
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
import { openDB, deleteDB, wrap, unwrap } from 'idb';
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

// const openDBRequest = indexedDB.open(indexedDBName, versionDB);
// let db: IDBDatabase;

const categoriesImagesToPreCache = categories.reduce((acc: string[], elem) => {
  acc.push(`${PUBLIC_URL}/${elem.image}`);
  return acc;
}, []);

const dataToPreCache = categoriesImagesToPreCache.concat(manifestStaticData, offlineFile);

// *******************************INSTALL***************************
self.addEventListener('install', (event) => {
  console.log(dataToPreCache);
  withIndexedDB();
  event.waitUntil(
    caches.open(cacheNameStatic + versionSt).then((cache) => {
      return cache.addAll(dataToPreCache);
    })
  );
});

// *******************************IndexedDB Events*******************************
async function withIndexedDB(){
  const db = await openDB(indexedDBName, versionDB, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('audios'))
      db.createObjectStore('audios');
    }
  });

// openDBRequest.addEventListener('upgradeneeded', () => {
//   console.log('upgrdneeded');
//   db = openDBRequest.result; // db init
//   if (!db.objectStoreNames.contains('audios')) { // if we have no audios storage
//     db.createObjectStore('audios'); // then create storage
//   }
// });

// openDBRequest.addEventListener('error', () => {
//   console.error(openDBRequest.error);
// });

// openDBRequest.addEventListener('success', () => {
//   console.log(openDBRequest.result);
// });
// *******************************ACTIVATE*******************************
self.addEventListener('activate', async (event) => {
    const cacheNames = await caches.keys() // array with all cached keys
    await Promise.all(
      cacheNames
        .filter(name => name !== cacheNameStatic + versionSt) // search for old cache
        .filter(name => name !== cacheNameMedia + versionMe)
        .map(name => caches.delete(name))
    )
    console.log('activated');
  });
  
  // ***************************FETCH*****************************************
  self.addEventListener('fetch', (event) => {
    console.log('Fetch', event.request.url);
    const { request } = event;
    const url = new URL(request.url);
  
    if (url.origin === self.location.origin) {
      event.respondWith(cacheFirst(request, url));
    } else {
      event.respondWith(networkFirst(request, url));
    }
  });

// *************************STRATEGIES**********************************************
async function cacheFirst(request: Request, url: URL) {
  console.log('CF');
  // try {
  if (url.pathname.endsWith('.mp3')) {
    const audios = db.transaction("audios", "readonly").objectStore("audios");
    const audioFileRequest: Response = await audios.get(url.pathname);
    // let audioFile: unknown;
    // audioFileRequest.onsuccess = () => {
    //   const { result } = audioFileRequest;
    //   audioFile = result;
    //   console.log('we are here', audioFile);
    // }

    return audioFileRequest ?? networkFirst(request, url);
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
  console.log('no match in db NWF');
  const cache = await caches.open(cacheNameMedia + versionMe);
  // const db = openDBRequest.result;
  try {
    if (url.pathname.endsWith('.mp3')) { // ***********AUDIO*******************
      const audioResponse = await fetch(request);
      const responseClone = audioResponse.clone();
      const data = await audioResponse.blob();
      console.log(audioResponse)
      const audioEncoded = await getBase64(data);
      const audios = db.transaction("audios", "readwrite").objectStore("audios");
      const putRequest = audios.put(audioEncoded, url.pathname); // value, key
      // putRequest.addEventListener('error', () => console.log(putRequest.error));
      // putRequest.addEventListener('success', () => console.log('RESULT: ', putRequest.result));
      return responseClone;
    }
    else {
      const response = await fetch(request);
      await cache.put(request, response.clone());
      return response;
    }

  } catch (e) {
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

// async function getBlobFromBase64(baseStr: string) {
//   const blobFileRequest = await fetch(baseStr);
//   const blobFile = await blobFileRequest.blob();
//   const init = { "status": 206, "statusText": "audioFromDB" };
//   // return new Response(blobFile, init);
//   return blobFile;
// }

// function getBlobFromBase64 (b64Data: string, contentType='audio/mp3', sliceSize=512) {
//   const byteCharacters = atob(b64Data);
//   const byteArrays = [];

//   for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
//     const slice = byteCharacters.slice(offset, offset + sliceSize);

//     const byteNumbers = new Array(slice.length);
//     for (let i = 0; i < slice.length; i+1) {
//       byteNumbers[i] = slice.charCodeAt(i);
//     }

//     const byteArray = new Uint8Array(byteNumbers);
//     byteArrays.push(byteArray);
//   }

//   const blob = new Blob(byteArrays, {type: contentType});
//   return blob;
// }
}