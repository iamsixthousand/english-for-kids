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

interface IndexedDBService {
  init: IDBSInit;
  put: IDBSPut;
  get: IDBSGet;
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
    const transaction = db.transaction(storeName, 'readonly').objectStore(storeName);
    return transaction.get(key);
  },
};

export default indexedDBService;
