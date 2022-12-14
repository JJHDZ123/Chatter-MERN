import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../../../api/axios';
import { BiPowerOff } from 'react-icons/bi';

function Logout() {
	const navigate = useNavigate();
	const handleClick = async () => {
		await axios.get(`/auth/logout`);
		toast.success('You have been logged out!');
		navigate('/');
	};

	return (
		<Button onClick={handleClick}>
			<BiPowerOff />
		</Button>
	);
}

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5rem;
	border-radius: 0.5rem;
	background-color: red;
	border: none;
	cursor: pointer;
	svg {
		font-size: 1.3rem;
		color: #ebe7ff;
	}
`;

export default Logout;
