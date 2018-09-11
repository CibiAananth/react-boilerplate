import { all, call, put } from "redux-saga/effects";
import authSaga from "./authSaga";

export default function* rootSaga() {
  yield all([...authSaga]);
}

export const actionTypeFormatter = type => {
  return type.slice(0, type.indexOf("REQUEST") - 1);
};

export function* rootWorkerSaga(apifunc, action) {
  let { params, response, error } = yield call(apifunc, action.payload);
  if (response) {
    let payload = { response: response.data, request: params };
    yield put({
      type: `${actionTypeFormatter(action.type)}_SUCCESS`,
      payload
    });
  } else {
    if (error.status !== 0) {
      let payload = { error: error.data, request: params };
      yield put({
        type: `${actionTypeFormatter(action.type)}_FAILURE`,
        payload
      });
    } else if (error.status === 0) {
      yield put({ type: "NO_INTERNET_ERROR" });
    }
  }
}
