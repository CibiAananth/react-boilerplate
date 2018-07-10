import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authActionCreator } from '../../actions/actions';
import { authSelector } from '../../selectors/index';

import LoginPage from './LoginPage';

function mapStateToProps(state) {
	return {
		auth: authSelector.getAuthState(state)
	};
}

const mapDispatchToProps = {
	loginRequest: authActionCreator.loginRequest
};

class LoginContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authState: {
				isEmailValid: this.props.auth.get('isEmailValid'),
				isPasswordValid: this.props.auth.get('isPasswordValid'),
				isLoggedIn: this.props.auth.get('isLoggedIn'),
				isLoading: this.props.auth.get('isLoading')
			}
		};
	}

	loginHandler = (email, password) => {
		let payload = {
			email,
			password
		};
		this.props.loginRequest(payload);
	};

	componentWillUpdate(nextProps, nextState) {
		if (nextProps.auth.get('isLoggedIn') === 'true') {
			sessionStorage.setItem('isAuthenticated', 'true');
			nextProps.history.replace('/');
		}
	}

	render() {
		let { authState } = this.state;
		let loadingState = <h1>Loading</h1>;

		return authState.isLoading ? (
			loadingState
		) : (
			<LoginPage authState={authState} handleLogin={this.loginHandler} />
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
