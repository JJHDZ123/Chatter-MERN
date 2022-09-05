import React from 'react';
import styled from 'styled-components';
import Welcome from '../assets/Welcome.gif';

function SplashScreen({ currentUsername }) {
	return (
		<Container>
			<img src={Welcome} alt="" />
			<h1>
				Welcome, <span>{currentUsername}!</span>
			</h1>
			<h3>Please select a chat to Start messaging.</h3>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	flex-direction: column;
	img {
		height: 20rem;
	}
	span {
		color: #4e0eff;
	}
`;

export default SplashScreen;
