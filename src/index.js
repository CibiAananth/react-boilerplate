import React from 'react';
import ReactDOM from 'react-dom';
// redux utils
import { Provider } from 'react-redux';
import store from 'redux-utils/store';
// i18n utils
import 'lib/i18n';
// styles
import './index.scss';
// db
import 'db';
// main
import App from './App';

const rootElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(rootElement, document.getElementById('root'));
