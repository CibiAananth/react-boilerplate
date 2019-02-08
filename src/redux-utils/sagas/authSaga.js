import { takeLatest, call, put } from 'redux-saga/effects';
// action types
import { authTypes } from 'redux-utils/types';
// api helpers
import { post } from 'api';
// core functions
import ls from 'lib/core/storageFactory';
import { deleteDB } from 'db';

const watcherSaga = [
  takeLatest(authTypes.login.request, userLoginSaga),
  takeLatest(authTypes.logout.request, userLogoutSaga),
];

function* userLoginSaga(action) {
  const { response, error } = yield call(post, {
    uriPath: process.env.REACT_LOGIN,
    payload: action.payload,
  });
  if (response) {
    const { data } = response;
    ls.set('authToken', data.token);
    yield put({
      type: authTypes.login.success,
      payload: { response: data },
    });
  } else {
    yield put({
      type: authTypes.login.failure,
      payload: { message: error.data },
      error: true,
    });
  }
}

function* userLogoutSaga() {
  const { response, error } = yield call(post, {
    uriPath: process.env.REACT_LOGOUT,
    headers: ['auth'],
  });
  if (response) {
    const { data } = response;
    ls.clear();
    deleteDB();
    yield put({
      type: authTypes.logout.success,
      payload: { response: data },
    });
  } else {
    yield put({
      type: authTypes.logout.failure,
      payload: { message: error.data },
      error: true,
    });
  }
}

export default watcherSaga;
