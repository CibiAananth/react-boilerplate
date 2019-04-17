import Dexie from 'dexie';
import indexedDB from 'fake-indexeddb';

const db = new Dexie('Infiviz-Test', { indexedDB });

const stores = {
  apiCache: '[apiID+params],apiID,params,response,cacheUntil',
};

db.version(1).stores(stores);

const openDB = () => {
  db.open()
    .then(() => {
      console.log('db open success');
    })
    .catch((err) => {
      console.log('db open error', err);
    });
};
openDB();

const deleteDB = () => db.delete().then(() => openDB());

const deleteFromDB = (pkey, cb) => {
  console.log('read db by pkey - ', pkey);
  db.apiCache
    .delete(pkey)
    .then((res) => {
      cb(null, res);
    })
    .catch(err => cb(err));
};

const readFromDB = (pkey, cb) => {
  console.log('read db by pkey - ', pkey);
  //   db.apiCache
  //     .where(pkey)
  //     .first((res) => {
  //       const parsedObject = { ...res };
  //       if (res) {
  //         parsedObject.params = JSON.parse(res.params);
  //       }
  //       if (cb) {
  //         cb(null, parsedObject);
  //       }
  //     })
  //     .catch(err => cb(err));
};

async function writeToDB(obj, cb) {
  console.log('write obj to db - ', obj);
  db.apiCache.put(obj, res => cb(res)).catch(err => cb(err));
}

export {
  db, deleteDB, deleteFromDB, readFromDB, writeToDB, openDB,
};
