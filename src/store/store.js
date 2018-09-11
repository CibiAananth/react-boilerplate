import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers/rootReducer";
import rootSaga from "../sagas/rootSaga";

const logger = createLogger({
  predicate: (getState, action) => !action.type.includes("@@redux-form")
});
const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware];
const enhancers = [];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);
const store = createStore(rootReducer, composedEnhancers);

sagaMiddleware.run(rootSaga);

export default store;
