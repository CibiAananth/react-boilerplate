import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { validateToken } from '../utils/jwtUtils';

const PrivateRoute = ({ component: Component, history, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				return validateToken(localStorage.getItem('userToken')) ? (
					<Component {...props} />
				) : (
					<Redirect to="/login" />
				);
			}}
		/>
	);
};

export default PrivateRoute;
