import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import toast from 'react-hot-toast';

import Logo from '../assets/Chatter.jpg';

function Login() {
	const navigate = useNavigate();
	const [ values, setValues ] = useState({
		username : '',
		password : ''
	});

	const handleChange = (event) => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	const handleValidation = () => {
		const { password, username } = values;
		if (!password || !username) {
			toast.error('Username and Password required');
			return false;
		}

		return true;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (handleValidation()) {
			const user = {
				username : values.username,
				password : values.password
			};
			try {
				await axios.post('/api/auth/login', user);

				toast.success('User has been created!');

				navigate('/');
			} catch (err) {
				console.log(err);
				toast.error('error has happened!');
			}
		}
	};

	return (
		<Fragment>
			<FormContainer>
				<form onSubmit={handleSubmit}>
					<div className="brand">
						<img src={Logo} alt="Logo" />
						<h1>Chatter</h1>
					</div>
					<input name="username" type="text" placeholder="Username" onChange={handleChange} min="3" />
					<input name="password" type="password" placeholder="Password" onChange={handleChange} />
					<button type="submit"> Login </button>
					<span>
						Need an account? <Link to="/register">Register</Link>
					</span>
				</form>
			</FormContainer>
		</Fragment>
	);
}

const FormContainer = styled.div`
	height: 100vh;
	min-height: 700px;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
	align-items: center;
	background-color: #131324;
	.brand {
		display: flex;
		align-items: center;
		gap: 1rem;
		justify-content: center;
		img {
			height: 5rem;
		}
		h1 {
			color: white;
			text-transform: uppercase;
		}
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		background-color: #00000076;
		border-radius: 2rem;
		padding: 3rem 5rem;
	}

	input {
		background-color: transparent;
		padding: 1rem;
		border: 0.1rem solid #4e0eff;
		border-radius: 0.4rem;
		color: white;
		width: 100%;
		font-size: 1rem;
		&:focus {
			border: 0.1rem solid #997af0;
			outline: none;
		}
	}

	button {
		background-color: #4e0eff;
		color: white;
		padding: 1rem 2rem;
		border: none;
		font-weight: bold;
		cursor: pointer;
		border-radius: 0.4rem;
		font-size: 1rem;
		text-transform: uppercase;
		&:hover {
			background-color: #4e0eff;
		}
	}

	span {
		color: white;
		text-transform: uppercase;
		a {
			color: #4e0eff;
			text-decoration: none;
			font-weight: bold;
		}
	}
`;

export default Login;
