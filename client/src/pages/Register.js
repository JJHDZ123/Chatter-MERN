import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import toast from 'react-hot-toast';

import Logo from '../assets/Chatter.jpg';

function Register() {
	const navigate = useNavigate();
	const [ values, setValues ] = useState({
		username        : '',
		email           : '',
		password        : '',
		confirmPassword : ''
	});

	const handleChange = (event) => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	const handleValidation = () => {
		const { password, confirmPassword, username, email } = values;
		if (password !== confirmPassword) {
			toast.error('Password and confirm password should be same.');
			return false;
		} else if (username.length < 3) {
			toast.error('Username should be greater than 3 characters.');
			return false;
		} else if (password.length < 8) {
			toast.error('Password should be equal or greater than 8 characters.');
			return false;
		} else if (email === '') {
			toast.error('Email is required.');
			return false;
		}

		return true;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (handleValidation()) {
			const user = {
				username        : values.username,
				email           : values.email,
				password        : values.password,
				confirmPassword : values.confirmPassword
			};
			try {
				await axios.post('/api/auth/register', user);

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
					<input name="username" type="text" placeholder="Username" onChange={handleChange} />
					<input name="email" type="email" placeholder="Email" onChange={handleChange} />
					<input name="password" type="password" placeholder="Password" onChange={handleChange} />
					<input
						name="confirmPassword"
						type="password"
						placeholder="Confirm Password"
						onChange={handleChange}
					/>
					<button type="submit"> Create User</button>
					<span>
						Already a member? <Link to="/login">Login</Link>
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

export default Register;
