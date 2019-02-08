/* eslint-disable no-param-reassign */
import { createReducer } from 'redux-starter-kit';
import { networkTypes } from 'redux-utils/types';

const initialState = {
  isPolling: false,
  isOnline: true,
  error: {
    state: false,
    type: '',
  },
};

const reducer = createReducer(initialState, {
  [networkTypes.START_WATCH_NETWORK_STATUS]: (state) => {
    state.isPolling = true;
    // state.isOnline = true;
  },
  [networkTypes.STOP_WATCH_NETWORK_STATUS]: (state) => {
    state.isPolling = false;
  },
  [networkTypes.PING_SUCCESS]: (state) => {
    state.isOnline = true;
  },
  [networkTypes.PING_FAILURE]: (state) => {
    state.isOnline = false;
  },
});

export default reducer;
