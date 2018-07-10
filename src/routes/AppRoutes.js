import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import App from '../App';
import LoginContainer from '../components/login/LoginContainer';
import PageNotFound from '../commons/404Page';

const AppRoutes = ({ store }) => (
	<Router history={history}>
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/login" component={LoginContainer} />
			<Route component={PageNotFound} />
		</Switch>
	</Router>
);

export default AppRoutes;
