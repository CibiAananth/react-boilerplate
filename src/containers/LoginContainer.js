import React, { Component } from 'react';
import PropTypes from 'prop-types';
// redux library for react
import { connect } from 'react-redux';
// react library to dynamically set the document’s head section
import Helmet from 'react-helmet';
// router
import { Redirect } from 'react-router-dom';
// redux utils
import { authTypes } from 'redux-utils/types';
import { appSelector } from 'redux-utils/selectors';
import { authActions } from 'redux-utils/actions';
// core functions
import ls from 'lib/core/storageFactory';
// core components
import Loader from 'components/Loader/Loader';
import Notification from 'components/Notification/Notification';
// views
import LoginPage from 'views/Login/Login';

const helmet = (
  <Helmet>
    <style key="login-container">
      {'body { background-color: #fff; overflow: hidden; overflow-x: hidden; }'}
    </style>
  </Helmet>
);

/**
 * @class
 * @hideconstructor
 * @description Login page container component
 */
class LoginContainer extends Component {
  /**
   * @private
   * @memberof LoginContainer
   * @description Component state object
   */
  state = {
    isErrorSnackOpen: false,
  };

  componentWillReceiveProps(nextProps) {
    const { authState } = nextProps;
    this.setState({ isErrorSnackOpen: authState.error.state });
  }

  /**
   * @method
   * @private
   * @description A function to call the dispatcher function with the user
   * login details
   * @returns {undefined}
   */
  handleLogin = () => {
    this.props.dispatchLoginRequest({ username: 'cibi', password: 'cibi' });
  };

  /**
   * @method
   * @private
   * @description handler function to handle the notification close
   * @param {object} _event - event object
   * @param {reason} reason - a string to check if the notification is closed due to
   * the click away listener
   * @return {undefined}
   */
  handleNotificationClose = (_event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ isErrorSnackOpen: false });
  };

  /**
   * @method
   * @private
   * @description A function to set the logged in status of the user and
   * redirect to dashboard page
   * @returns {undefined}
   */
  redirectLogin = () => {
    ls.set('isLoggedIn', true);
    return <Redirect to="/" />;
  };

  render() {
    const { authState } = this.props;
    const { isErrorSnackOpen } = this.state;
    return (
      <div>
        {helmet}
        {authState.isPageLoading ? <Loader color="secondary" /> : null}
        {authState.isLoggedIn ? this.redirectLogin() : null}
        {ls.get('isLoggedIn') === true ? <Redirect to="/" /> : null}
        {authState.error.type === authTypes.login.failure ? (
          <Notification
            isOpen={isErrorSnackOpen}
            handleClose={this.handleNotificationClose}
          />
        ) : null}
        <LoginPage
          loginError={authState.error}
          handleLogin={this.handleLogin}
        />
      </div>
    );
  }
}

// component properties
LoginContainer.propTypes = {
  authState: PropTypes.object.isRequired,
  /**
   * @type {function}
   * @description Redux Login request action dispatcher
   */
  dispatchLoginRequest: PropTypes.func.isRequired,
};

/*
  Connect redux store state to props so that you can access the state
  from the scope of the componet's props
*/
const mapStateToProps = state => ({
  authState: appSelector.getAuthState(state),
});

/*
  Connect dispatch methods to props so that you can call the methods
  from the scope of the componet's props
*/
const mapDispatchToProps = dispatch => ({
  dispatchLoginRequest: payload => dispatch(authActions.userLoginRequest(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
