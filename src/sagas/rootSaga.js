import { all, call, put } from 'redux-saga/effects';

import authSaga from './authSaga';

export default function* rootSaga() {
	yield all([...authSaga]);
}

export function* makeAPICall(action, apifunc, successAction, failureAction) {
	let { params, response, error } = yield call(apifunc, action.payload);
	if (response) {
		let payload = { response: response.data, request: params };
		yield put({ type: successAction, payload });
	} else {
		if (error.status !== 0) {
			let payload = { error: error.data, request: params };
			yield put({ type: failureAction, payload });
		} else if (error.status === 0) {
			yield put({ type: 'NO_INTERNET_ERROR' });
		}
	}
}
