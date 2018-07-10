import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { authReducer } from './authReducer';

export function enableLoader(state) {
	return state.set('isLoading', true);
}

export function disableLoader(state) {
	return state.set('isLoading', false);
}

const appReducer = combineReducers({
	authState: authReducer
});

const rootReducer = (state, action) => {
	if (action.type === 'USER_LOGOUT_REQUEST') {
		state = undefined;
	}
	return appReducer(state, action);
};

export default rootReducer;
