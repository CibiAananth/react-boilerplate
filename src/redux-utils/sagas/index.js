import { all } from 'redux-saga/effects';
import watchNetworkStatus from './networkSaga';
import authSaga from './authSaga';
import appSaga from './appSaga';

export default function* rootSaga() {
  yield all([watchNetworkStatus(), ...authSaga, ...appSaga]);
}

export const actionTypeFormatter = type => type.slice(0, type.indexOf('REQUEST') - 1);
