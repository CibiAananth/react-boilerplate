// core functions
import { addHours } from 'lib/core/dateUtils';
import ls from 'lib/core/storageFactory';
// db helpers
import { readFromDB } from 'db';

const useCache = () => ls.get('enableCache') && true;

const generateCacheTTL = (duration = 6) => addHours(duration);

const checkCacheValidity = (dbKey, callback, enableCaching = false) => {
  if (!enableCaching) {
    callback(false);
    return 0;
  }
  readFromDB(dbKey, (_err, res) => {
    if (_err !== null) {
      console.log('cache helper db read error', _err);
      callback(false);
      return 0;
    }
    console.log('db read ', res);
    if (res !== undefined) {
      const currentTime = Date.now();
      const { cacheUntil } = res;
      if (cacheUntil === undefined || cacheUntil === null) {
        callback(false);
        return 0;
      }
      callback(cacheUntil > currentTime, res.response);
      return 0;
    }
    callback(false);
    return 0;
  });
  return 0;
};

export { useCache, checkCacheValidity, generateCacheTTL };
