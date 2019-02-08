/* eslint-disable no-param-reassign */
import { createReducer } from 'redux-starter-kit';
import { authTypes } from 'redux-utils/types';

const initialState = {
  isPageLoading: false,
  isLoggedIn: false,
  error: {
    state: false,
    type: '',
  },
};

const reducer = createReducer(initialState, {
  [authTypes.login.request]: (state) => {
    state.isPageLoading = true;
  },
  [authTypes.login.success]: (state) => {
    state.isPageLoading = false;
    state.isLoggedIn = true;
  },
  [authTypes.login.failure]: (state, action) => {
    state.isPageLoading = false;
    state.isLoggedIn = false;
    state.error = {
      state: true,
      type: action.type,
    };
  },
  [authTypes.logout.request]: (state) => {
    state.isPageLoading = true;
  },
  [authTypes.logout.success]: (state) => {
    state.isPageLoading = false;
    state.isLoggedIn = false;
  },
  [authTypes.logout.failure]: (state, action) => {
    state.isPageLoading = false;
    state.isLoggedIn = false;
    state.error = {
      state: true,
      type: action.type,
    };
  },
  [authTypes.inValidtoken]: (state) => {
    state.isPageLoading = false;
    state.isLoggedIn = false;
  },
});

export default reducer;
