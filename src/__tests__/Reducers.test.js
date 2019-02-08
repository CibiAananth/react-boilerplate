/* eslint-disable no-undef */
import authReducer from '../reducers/authReducer';
import * as types from '../constants/actionTypes';

describe('user authorization reducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual({
      isPageLoading: false,
      isLoggedIn: false,
      error: {
        state: false,
        type: '',
      },
    });
  });
  it('should handle USER_LOGIN_REQUEST', () => {
    expect(
      authReducer(
        {},
        {
          type: types.authTypes.login.request,
        },
      ),
    ).toEqual({
      isPageLoading: true,
    });
  });
  it('should handle USER_LOGIN_SUCCESS', () => {
    expect(
      authReducer(
        {},
        {
          type: types.authTypes.login.success,
        },
      ),
    ).toEqual({ isLoggedIn: true, isPageLoading: false });
  });
});
