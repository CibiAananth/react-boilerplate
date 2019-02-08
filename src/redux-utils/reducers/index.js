import { combineReducers } from 'redux';
// js util library
import _ from 'lodash';
// types
import { authTypes } from 'redux-utils/types';
// models
import reducerModel from 'models/reducerModel';
// reducers
import authReducer from './authReducer';
import networkReducer from './networkReducer';

// higher-order reducer, to limit a reducer to work
// on actions matching a predicate only
const limited = (reducer, predicate) => (state, action) => {
  if (predicate(action)) {
    return reducer(state, action);
  }
  return state;
};

const mainReducer = combineReducers({
  appStore: limited('REDUCER_HERE', action => (action.meta === undefined
    ? true
    : _.includes(action.meta.reducerID, reducerModel.app.id))),
  authStore: authReducer,
  network: networkReducer,
});

const rootReducer = (state, action) => {
  let newState = { ...state };
  if (action.type === authTypes.logout.success) {
    newState = undefined;
  }
  return mainReducer(newState, action);
};

export default rootReducer;
