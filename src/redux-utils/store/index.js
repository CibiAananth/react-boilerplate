import { configureStore } from 'redux-starter-kit';
// middlewares
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// redux-utils
import createCacheMiddleware from 'redux-utils/middlewares';
import { cacheTypes } from 'redux-utils/types';
import rootReducer from 'redux-utils/reducers';
// root saga
import rootSaga from 'redux-utils/sagas';

const logger = createLogger({
  predicate: (_getState, action) => !action.type.includes('@@redux-form')
    && !action.type.includes('@@saga-network-status'),
});
const sagaMiddleware = createSagaMiddleware();
const cacheMiddleware = createCacheMiddleware(cacheTypes.cacheable);

const middleware = [logger, cacheMiddleware, sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export default store;

// @TODO
// on master branch merge change middleware to
// const middleware = process.env.NODE_ENV !== 'production'
//   ? [cacheMiddleware, sagaMiddleware]
//   : [logger, cacheMiddleware, sagaMiddleware];
