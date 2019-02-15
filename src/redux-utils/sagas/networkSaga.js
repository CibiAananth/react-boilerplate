import {
  call, put, take, race,
} from 'redux-saga/effects';
import axios from 'axios';
import { networkTypes } from 'redux-utils/types';

const TIMEOUT_DELAY = 7000;

function delay(duration) {
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve(true), duration);
  });
  return promise;
}

function pinger(uriPath) {
  return axios
    .get(process.env.REACT_APP_DOMAIN + uriPath)
    .then(response => ({ response }))
    .catch(error => ({ error }));
}

function* pingServer() {
  while (true) {
    try {
      const { response, error } = yield call(
        pinger,
        process.env.REACT_APP_PING,
      );
      if (response) {
        yield put({
          type: networkTypes.PING_SUCCESS,
          payload: { isOnline: true },
        });
      }
      if (error) {
        yield put({
          type: networkTypes.PING_FAILURE,
          payload: { isOnline: false },
        });
      }
      yield call(delay, TIMEOUT_DELAY);
    } catch (err) {
      yield put({
        type: networkTypes.PING_FAILURE,
        payload: { isOnline: false },
      });
    }
  }
}

function* watchNetworkStatus() {
  while (true) {
    yield take(networkTypes.START_WATCH_NETWORK_STATUS);
    yield race([
      call(pingServer),
      take(networkTypes.STOP_WATCH_NETWORK_STATUS),
    ]);
  }
}

export default watchNetworkStatus;
