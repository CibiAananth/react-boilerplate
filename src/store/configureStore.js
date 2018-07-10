import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { persistentStore } from 'redux-pouchdb-plus';
import createSagaMiddleware from 'redux-saga';
import PouchDB from 'pouchdb';

import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';

const db = new PouchDB('app_state');
const enhancers = [persistentStore({ db })];
const logger = createLogger({
	predicate: (getState, action) => !action.type.includes('@@redux-form')
});
const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
	const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension());
	}
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);
const store = createStore(rootReducer, composedEnhancers);

sagaMiddleware.run(rootSaga);

export default store;
