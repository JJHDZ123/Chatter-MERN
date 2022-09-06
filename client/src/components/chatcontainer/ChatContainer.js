import React from 'react';
import styled from 'styled-components';
import ChatInput from './chatcomponents/ChatInput';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

import Logout from './chatcomponents/Logout';
import Messages from './chatcomponents/Messages';

function ChatContainer({ currentChat }) {
	const handleSendMessage = async (msg) => {};
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
			<Messages />
			<ChatInput handler={handleSendMessage} />
		</Container>
	);
}

const Container = styled.div`
	padding-top: 1rem;
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
`;

export default ChatContainer;
