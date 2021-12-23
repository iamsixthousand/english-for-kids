/* eslint-disable no-unused-vars */
type IDBSInit = (openRequest: IDBOpenDBRequest, storeName: string) => void;

type IDBSPut = (
  openRequest: IDBOpenDBRequest,
  storeName: string,
  value: string,
  key: string
) => void;

type IDBSGet = (
  openRequest: IDBOpenDBRequest,
  storeName: string,
  key: string
) => IDBRequest<string>;

type IDBSClear = (openRequest: IDBOpenDBRequest, storeName: string) => void;

interface IndexedDBService {
  init: IDBSInit;
  put: IDBSPut;
  get: IDBSGet;
  clear: IDBSClear;
}

const indexedDBService: IndexedDBService = {
  init: (openRequest, storeName) => {
    const db = openRequest.result;
    if (!db.objectStoreNames.contains(storeName)) {
      db.createObjectStore(storeName);
    }
  },
  put: (openRequest, storeName, value, key) => {
    const db = openRequest.result;
    const transaction = db.transaction(storeName, 'readwrite');
    const objectStore = transaction.objectStore(storeName);
    objectStore.put(value, key);
  },
  get: (openRequest, storeName, key) => {
    const db = openRequest.result;
    const objectSrore = db.transaction(storeName, 'readonly').objectStore(storeName);
    return objectSrore.get(key);
  },
  clear: (openRequest, storeName) => {
    const db = openRequest.result;
    const objectSrore = db.transaction(storeName, 'readwrite').objectStore(storeName);
    const dbKeys = objectSrore.getAllKeys();
    const keyRange = IDBKeyRange.lowerBound(dbKeys);
    console.log(keyRange);
    // const { lower } = keyRange;
    // const { upper } = keyRange;
    // objectSrore.delete(keyRange)

    // IDBKeyRange.lowerBound
    // IDBKeyRange.upperBound
    const clearRequest = objectSrore.clear();
    clearRequest.onsuccess = () => console.log('11111', clearRequest.result);
    clearRequest.onerror = () => console.log('22222', clearRequest.error);
  },
};

export default indexedDBService;
