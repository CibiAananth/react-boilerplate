import React from 'react';
import ReactDOM from 'react-dom';
import 'metrics';
// redux utils
import { Provider } from 'react-redux';
import store from 'redux-utils/store';
// i18n utils
import 'lib/i18n';
// styles
import 'assets/jss/material-ui/bootstrap';
import 'index.scss';
// db
import 'db';
// main
import App from 'App';
import reportError from 'utils/crashReporter';

const monitorError = () => {
  window.onerror = (message, file, line, column, errorObject) => {
    const col = column || (window.event && window.event.errorCharacter);
    const stack = errorObject ? errorObject.stack : null;
    const data = {
      message,
      file,
      line,
      column: col,
      errorStack: stack,
    };
    console.log('errordata', data);
    reportError(stack);
    return false;
  };
};

monitorError();

const rootElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(rootElement, document.getElementById('root'));
