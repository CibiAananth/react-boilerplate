import 'babel-polyfill';
import './polyfills.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import PouchDB from 'pouchdb';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

import store from './store/configureStore';
import AppRoutes from './routes/AppRoutes';

window.PouchDB = PouchDB;

ReactDOM.render(
	<Provider store={store}>
		<AppRoutes />
	</Provider>,
	document.getElementById('root')
);
