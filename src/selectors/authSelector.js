import { createSelectorCreator, defaultMemoize } from "reselect";
import { is } from "immutable";

const createImmutableEqualSelector = createSelectorCreator(defaultMemoize, is);

// selector
const getAuth = state => {
  return state.authState;
};

// reselect function
export const getAuthState = createImmutableEqualSelector([getAuth], auth => {
  return auth;
});
