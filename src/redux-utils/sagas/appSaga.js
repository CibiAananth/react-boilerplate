import { takeLatest, call, put } from 'redux-saga/effects';
// redux-utils
import { cacheTypes } from 'redux-utils/types';
// api helpers
import { get } from 'api';

/**
 * @name appWatcherSaga
 * @description Catches the action dispatched of certain type.
 */
const watcherSaga = [takeLatest('API_REQUEST_ACTION', exampleSaga)];

/**
 * @description Example worker saga
 * @param {object} action - dispatched action
 * @returns {undefined}
 * @yields put - get layout success/error action.
 */
function* exampleSaga(action) {
  const { response, error } = yield call(get, {
    uriPath: process.env.REACT_PATH,
    headers: ['auth'],
  });
  if (response) {
    const { data } = response;
    yield put({
      type: cacheTypes.store.request,
      payload: { response: data, ...action.payload },
    });
  } else {
    yield put({
      type: 'FAILURE_ACTION',
      payload: { message: error.data },
      error: true,
    });
  }
}

export default watcherSaga;
