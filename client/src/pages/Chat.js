import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import styled from 'styled-components';

import useAuth from '../hooks/useAuth';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

import Contacts from '../components/Contacts.js';
import SplashScreen from '../components/SplashScreen.js';
import ChatContainer from '../components/chatcontainer/ChatContainer.js';

function Chat() {
	const navigate = useNavigate();
	const axiosPrivate = useAxiosPrivate();
	const { auth } = useAuth();

	const [ contacts, setContacts ] = useState([]);
	const [ currentChat, setCurrentChat ] = useState(undefined);

	useEffect(
		() => {
			if (!auth.avatarSet) {
				navigate('/setAvatar');
				toast.error('Please choose and avatar');
			}

			async function fetchUsers() {
				const data = await axiosPrivate.get(`/users/allusers/${auth.id}`);
				setContacts(data.data);
			}

			fetchUsers();
		},
		[ auth.avatarSet, auth.id, axiosPrivate, navigate ]
	);

	const handleChatChange = (chat) => {
		setCurrentChat(chat);
	};

	return (
		<Fragment>
			<Container>
				<div className="container">
					<Contacts
						contacts={contacts}
						currentUsername={auth.username}
						currentUseravatar={auth.avatar}
						changeChat={handleChatChange}
					/>
					{currentChat === undefined ? (
						<SplashScreen currentUsername={auth.username} />
					) : (
						<ChatContainer currentUserId={auth.id} currentChat={currentChat} />
					)}
				</div>
			</Container>
		</Fragment>
	);
}

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
	align-items: center;
	background-color: #131324;
	.container {
		height: 85%;
		min-height: 600px;
		width: 85%;
		background-color: #00000076;
		display: grid;
		grid-template-columns: 25% 75%;
		@media screen and (min-width: 720px) and (max-width: 1080px) {
			grid-template-columns: 35% 65%;
		}
	}
`;

export default Chat;
