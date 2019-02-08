import React from 'react';
import PropTypes from 'prop-types';
// login form
import LoginForm from './LoginForm';

const LoginPage = ({ handleLogin }) => <LoginForm onSubmit={handleLogin} />;

LoginPage.propTypes = {
  /**
   * @type {function}
   * @description Redux Action dispatcher
   */
  handleLogin: PropTypes.func.isRequired,
};

export default LoginPage;
