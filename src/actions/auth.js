import { authTypes } from '../constants/actionTypes';

export function loginRequest(payload) {
	return {
		type: authTypes.LOGIN_REQUEST,
		payload
	};
}
