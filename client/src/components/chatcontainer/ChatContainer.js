import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import ChatInput from './chatcomponents/ChatInput';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

import Logout from './chatcomponents/Logout';
import propCheck from '../../hooks/propCheck';

function ChatContainer({ currentChat, currentUserId, socket }) {
	const axiosPrivate = useAxiosPrivate();
	const scrollRef = useRef();
	const [ currChatMessages, setCurrChatMessages ] = useState([]);
	const [ arrivalMessage, setArrivalMessage ] = useState(null);

	useEffect(
		() => {
			async function fetchChatMessages() {
				const response = await axiosPrivate.post('/messages/getmsg', {
					from : currentUserId,
					to   : currentChat._id
				});

				setCurrChatMessages(response.data);
			}

			fetchChatMessages();
		},
		[ currentChat, axiosPrivate, currentUserId ]
	);

	const handleSendMessage = async (msg) => {
		await axiosPrivate.post('/messages/addmsg', {
			from    : currentUserId,
			to      : currentChat._id,
			message : msg
		});

		socket.current.emit('send-msg', {
			to      : currentChat._id,
			from    : currentUserId,
			message : msg
		});

		const msgs = [ ...currChatMessages ];

		msgs.push({ fromSelf: true, message: msg });

		setCurrChatMessages(msgs);
	};

	useEffect(
		() => {
			if (socket.current) {
				socket.current.on('msg-recieved', (msg) => {
					setArrivalMessage({ fromSelf: false, message: msg });
				});
			}
		},
		[ socket ]
	);

	useEffect(
		() => {
			arrivalMessage && setCurrChatMessages((prev) => [ ...prev, arrivalMessage ]);
		},
		[ arrivalMessage ]
	);

	useEffect(
		() => {
			const scrollChecker = propCheck(() => scrollRef.current, undefined);

			if (!scrollChecker) {
				return;
			}

			scrollRef.current.scrollIntoView({ behavior: 'smooth' });
		},
		[ currChatMessages ]
	);

	return (
		<Container>
			<div className="chat-header">
				<div className="user-details">
					<div className="avatar">
						<img src={`data:image/svg+xml;base64,${currentChat.avatarImage}`} alt="avatar" />
					</div>
					<div className="username">
						<h3>{currentChat.username}</h3>
					</div>
				</div>
				<div>
					<Logout />
				</div>
			</div>
			<div className="chat-messages">
				{currChatMessages.map((message) => {
					return (
						<div ref={scrollRef} key={uuidv4()}>
							<div className={`message ${message.fromSelf ? 'Sent' : 'Received'}`}>
								<div className="content">
									<p>{message.message}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<ChatInput handler={handleSendMessage} />
		</Container>
	);
}

const Container = styled.div`
	display: grid;
	grid-template-rows: 10% 80% 10%;
	gap: 0.1rem;
	overflow: hidden;
	@media screen and (min-width: 720px) and (max-width: 1080px) {
		grid-template-rows: 15% 70% 15%;
	}
	.chat-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 2rem;
	}
	.user-details {
		display: flex;
		align-items: center;
		gap: 1rem;
		.avatar {
			img {
				height: 3rem;
			}
		}
		.username {
			h3 {
				color: white;
			}
		}
	}

	.chat-messages {
		padding: 1rem 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		overflow: auto;
		&::-webkit-scrollbar {
			width: 0.2rem;
			&-thumb {
				background-color: #ffffff39;
				width: 0.1rem;
				border-radius: 1rem;
			}
		}
		.message {
			display: flex;
			align-items: center;
			.content {
				max-width: 40%;
				overflow-wrap: break-word;
				padding: 1rem;
				font-size: 1.1rem;
				border-radius: 1rem;
				color: white;
			}
		}
		.Sent {
			justify-content: flex-end;
			.content {
				background-color: #4f04ff21;
			}
		}

		.Received {
			justify-content: flex-start;
			.content {
				background-color: #9900ff20;
			}
		}
	}
`;

export default ChatContainer;
