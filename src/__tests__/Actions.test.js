/* eslint-disable no-undef */
import * as actions from '../actions';
import * as types from '../constants/actionTypes';

describe('actions', () => {
  it('should create an action to login an user', () => {
    const loginAction1 = {
      type: types.authTypes.login.request,
    };
    const loginAction2 = {
      type: types.authTypes.login.request,
      payload: { name: 'developer' },
    };
    expect(actions.authActions.userLoginRequest()).toEqual(loginAction1);
    expect(actions.authActions.userLoginRequest({ name: 'developer' })).toEqual(loginAction2);
  });

  it('should create an action to logout an user', () => {
    const logoutAction1 = {
      type: types.authTypes.logout.request,
    };
    const logoutAction2 = {
      type: types.authTypes.logout.request,
      payload: { name: 'developer' },
    };
    expect(actions.authActions.userLogoutRequest()).toEqual(logoutAction1);
    expect(actions.authActions.userLogoutRequest({ name: 'developer' })).toEqual(logoutAction2);
  });
});
