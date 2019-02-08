import Dexie from 'dexie';
import ls from 'lib/core/storageFactory';

const stores = {
  apiCache: '[apiID+params],apiID,params,response,cacheUntil',
};

const db = new Dexie('react-boilerplate');
db.version(1).stores(stores);

const openDB = () => {
  db.open()
    .then(() => {
      console.log('db open success');
      ls.set('enableCache', true);
    })
    .catch((err) => {
      console.log('db open error', err);
      ls.set('enableCache', false);
    });
};

openDB();

const deleteDB = () => db.delete().then(() => openDB());

const readFromDB = (pkey, cb) => {
  console.log('read db by pkey - ', pkey);
  db.apiCache
    .where(pkey)
    .first((res) => {
      const parsedObject = { ...res };
      if (res) {
        parsedObject.params = JSON.parse(res.params);
      }
      if (cb) {
        cb(null, parsedObject);
      }
    })
    .catch(err => cb(err));
};

const writeToDB = (obj, cb) => {
  console.log('write obj to db - ', obj);
  db.apiCache
    .put(obj)
    .then((res) => {
      if (cb) {
        cb(null, res);
      }
    })
    .catch(err => cb(err));
};

export { deleteDB, readFromDB, writeToDB };
