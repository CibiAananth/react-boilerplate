import React, { Component } from 'react';
// library to set component properties
import PropTypes from 'prop-types';
// redux library for react
import { connect } from 'react-redux';
// routers
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// redux utils
import { appActions } from 'redux-utils/actions';
import { appSelector } from 'redux-utils/selectors';
// core components
import NoInternetSnackBar from 'components/SnackBar/NoInternetSnackBar';
import './App.scss';

/**
 * @description Stateless App component to render the views.
 * Entry file to the appication
 * @class
 * @returns {reactnode} React Node
 */
class App extends Component {
  constructor(props) {
    super(props);
    const { dispatchStartWatchNetwork } = this.props;
    dispatchStartWatchNetwork();
  }

  componentWillUnmount() {
    const { dispatchStopWatchNetwork } = this.props;
    dispatchStopWatchNetwork();
  }

  render() {
    const { network } = this.props;
    return (
      <div>
        <NoInternetSnackBar network={network} />
        <Router>
          <Switch>
            <Route exact path="/" render={() => <div>Hello</div>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

// component properties
App.propTypes = {
  /**
   * @type {function}
   * @description Redux action to start subscription the network status
   */
  dispatchStartWatchNetwork: PropTypes.func.isRequired,
  /**
   * @type {function}
   * @description Redux action to stop subscription of the network status
   */
  dispatchStopWatchNetwork: PropTypes.func.isRequired,
  /**
   * @type {function}
   * @description An object containing the current network status.
   */
  network: PropTypes.object.isRequired,
};

/*
  Connect redux store state to props so that you can access the state
  from the scope of the componet's props
*/
const mapStateToProps = state => ({
  network: appSelector.getNetworkState(state),
});

/*
  Connect dispatch methods to props so that you can call the methods
  from the scope of the componet's props
*/
const mapDispatchToProps = {
  dispatchStartWatchNetwork: appActions.startWatchNetworkAction,
  dispatchStopWatchNetwork: appActions.stopWatchNetworkAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
