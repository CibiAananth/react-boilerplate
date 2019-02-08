// action types
import { cacheTypes } from 'redux-utils/types';
import _ from 'lodash';
// db helpers
import { writeToDB } from 'db/index';
// cache helpers
import {
  checkCacheValidity,
  generateCacheTTL,
  useCache,
} from 'lib/cache/cacheHelper';

const dbWriter = ({ payload, store }) => {
  const { dbKey, response, targetAction } = payload;
  writeToDB(
    {
      ...dbKey,
      response,
      cacheUntil: generateCacheTTL(),
    },
    (_err, res) => {
      if (_err) {
        console.log(
          `cacheMiddleware error to write in key ${dbKey} -and error is ${_err}`,
        );
      } else {
        console.log('db write Response', res);
      }
      store.dispatch({
        type: targetAction,
        payload,
      });
    },
  );
};

function createCacheMiddleware(cacheable) {
  return store => next => (action) => {
    if (action.type === cacheTypes.store.request) {
      if (useCache()) {
        dbWriter({ payload: action.payload, store });
      } else {
        const { targetAction } = action.payload;
        store.dispatch({
          type: targetAction,
          payload: action.payload,
          meta: action.meta,
        });
      }
    }
    if (_.includes(cacheable, action.type)) {
      const { dbKey, requestAction } = action.payload;
      checkCacheValidity(
        dbKey,
        (isValid, res) => (isValid
          ? store.dispatch({
            type: cacheTypes.set.request,
            payload: { ...action.payload, response: res },
            meta: action.meta,
          })
          : store.dispatch({
            type: requestAction,
            payload: action.payload,
            meta: action.meta,
          })),
        useCache(),
      );
    }
    // Nothing to do here - keep calm and carry on
    next(action);
  };
}

export default createCacheMiddleware;
