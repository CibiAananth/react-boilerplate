import { createAction } from 'redux-starter-kit';
import { authTypes } from 'redux-utils/types';

const userLoginRequest = payload => createAction(authTypes.login.request)(payload);
const userLogoutRequest = payload => createAction(authTypes.logout.request)(payload);

export { userLoginRequest, userLogoutRequest };
