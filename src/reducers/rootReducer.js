import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { authTypes } from "../constants/actionTypes";

export function enableLoader(state) {
  return state.set("isLoading", true);
}

export function disableLoader(state) {
  return state.set("isLoading", false);
}

const appReducer = combineReducers({
  authState: {},
  formReducer
});

const rootReducer = (state, action) => {
  if (action.type === authTypes.user.logout.request) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
