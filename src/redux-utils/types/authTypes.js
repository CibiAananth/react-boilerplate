const types = {
  login: {
    request: 'USER_LOGIN_REQUEST',
    success: 'USER_LOGIN_SUCCESS',
    failure: 'USER_LOGIN_FAILURE',
  },
  logout: {
    request: 'USER_LOGOUT_REQUEST',
    success: 'USER_LOGOUT_SUCCESS',
    failure: 'USER_LOGOUT_FAILURE',
  },
  inValidtoken: 'INVALID_USER_TOKEN_ERROR',
};

export default types;
