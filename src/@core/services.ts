export const indexedDBService = {
  init: (openRequest: IDBOpenDBRequest, storeName: string): void => {
    const db = openRequest.result;
    if (!db.objectStoreNames.contains(storeName)) {
      // if we have no storageName storage
      db.createObjectStore(storeName); // then create storage
    }
  },
  put: (openRequest: IDBOpenDBRequest, storeName: string, value: string, key: string): void => {
    const db = openRequest.result;
    const transaction = db.transaction(storeName, 'readwrite');
    const objectStore = transaction.objectStore(storeName);
    // eslint-disable-next-line no-unused-vars
    const putRequest = objectStore.put(value, key);
  },
  get: (openRequest: IDBOpenDBRequest, storeName: string, key: string): IDBRequest<string> => {
    const db = openRequest.result;
    const transaction = db.transaction(storeName, 'readonly').objectStore(storeName);
    return transaction.get(key);
  },
};
