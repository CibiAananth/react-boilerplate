import React, { Component } from 'react';
import { Button, Image } from 'semantic-ui-react';

import styled from 'styled-components';

import mushroom from '../assets/images/mushroom.png';
import ghost from '../assets/images/ghost.png';

const Container = styled.div`
	display: block;
	margin: auto;
	width: fit-content;
	position: relative;
	top: 5em;
`;

const Label = styled.h1`
	font-size: ${(props) => (props.value ? '8em' : '2em')};
	display: ${(props) => (props.value ? 'inline-block' : '')};
	font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif !important;
	text-align: center;
`;

class PageNotFound extends Component {
	handleBackButton = (e) => {
		e.preventDefault();
		this.props.history.push('/dashboard');
	};

	render() {
		return (
			<Container>
				<div style={{ textAlign: 'center' }}>
					<Image
						style={{ maxHeight: '13rem', margin: 'auto' }}
						src={mushroom}
					/>
					<Label value={true}>4</Label>
					<Image
						style={{ maxHeight: '10rem', verticalAlign: 'bottom' }}
						src={ghost}
						className="inline"
					/>
					<Label value={true}>4</Label>
				</div>

				<Label>Page not found</Label>
				<div
					style={{
						textAlign: 'center',
						position: 'relative',
						top: '5em'
					}}
				>
					<Button
						onClick={this.handleBackButton}
						content="Go back to Home"
						secondary
					/>
				</div>
			</Container>
		);
	}
}

export default PageNotFound;
