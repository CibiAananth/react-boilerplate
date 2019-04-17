/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import reportError from 'utils/crashReporter';

class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error) {
    this.setState({ hasError: true });
    reportError(error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

export default ErrorBoundary;
