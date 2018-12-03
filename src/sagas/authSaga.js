import { call, takeLatest, put } from 'redux-saga/effects';

import { authTypes } from '../constants/actionTypes';
import { authApi } from '../api/index';
import { rootWorkerSaga, actionTypeFormatter } from './rootSaga';

const authSaga = [takeLatest(authTypes.user.login.request, rootWorkerSaga, authApi.userLogin)];

export default authSaga;
