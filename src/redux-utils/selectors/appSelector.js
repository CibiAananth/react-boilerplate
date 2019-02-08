import { createSelector } from 'redux-starter-kit';

// store selectors
const getAuthStore = state => state.authStore;
const getNetworkStore = state => state.network;

// memoized selector creators
const getAuthState = createSelector(
  [getAuthStore],
  state => state,
);

const getNetworkState = createSelector(
  [getNetworkStore],
  state => state,
);

export { getAuthState, getNetworkState };
