import { call, takeLatest, put } from 'redux-saga/effects';

import { authApi } from '../api/index';
import { makeAPICall } from './rootSaga';

const authSaga = [
	takeLatest('LOGIN_REQUEST', prepareAPICall, authApi.userLogin)
];

function prepareAPICall(apifunc, action) {
	makeAPICall(
		action,
		apifunc,
		`${action.type}_SUCCESS`,
		`${action.type}_FAILURE`
	);
}

export default authSaga;
