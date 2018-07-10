import { authTypes } from '../constants/actionTypes';
import { persistentReducer } from 'redux-pouchdb-plus';
import { fromJS, is, toJS } from 'immutable';
import PouchDB from 'pouchdb';

import { enableLoader, disableLoader } from './rootReducer';

let initialState = fromJS({
	isLoggedIn: false,
	isEmailValid: true,
	isPasswordValid: true,
	isLoading: false
});

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case authTypes.LOGIN_SUCCESS:
			return loginStatus(state, action);
		case authTypes.LOGIN_FAILED:
			return loginStatus(state, action);
		case authTypes.LOGIN_REQUEST:
			return enableLoader(state, action);
		case authTypes.USER_LOGOUT:
			return logoutUser(state, action);
		default:
			return state;
	}
};

const loginStatus = (state, action) => {
	let updatedState = disableLoader(state);
	if (action.type === authTypes.LOGIN_SUCCESS) {
		return updatedState
			.set('isLoggedIn', true)
			.set('isEmailValid', true)
			.set('isPasswordValid', true)
			.set('isLoading', false);
	} else if (action.type === authTypes.LOGIN_FAILED) {
		let { payload } = action.payload.error;
		if (payload.error[0].path === 'email') {
			return updatedState
				.set('isEmailValid', false)
				.set('isPasswordValid', true)
				.set('isDisabled', false);
		} else if (payload.error[0].path === 'password') {
			return updatedState
				.set('isEmailValid', true)
				.set('isPasswordValid', false)
				.set('isDisabled', false);
		} else return updatedState;
	} else return updatedState;
};

const logoutUser = (state, action) => {
	return state
		.set('isLoggedIn', false)
		.set('isEmailValid', true)
		.set('isPasswordValid', true)
		.set('isLoading', false);
};

const db = new PouchDB('authDB');
export const authReducer = persistentReducer(reducer, {
	db,
	toPouch: toJS,
	fromPouch: fromJS,
	isEqual: is
});
