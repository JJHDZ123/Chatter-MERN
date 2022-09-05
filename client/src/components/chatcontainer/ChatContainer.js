import React from 'react';
import styled from 'styled-components';

function ChatContainer({ currentChat }) {
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
			</div>
			<div className="chat-messages"> CHAT MESSAGES </div>
			<div className="chat-input"> CHAT INPUT </div>
		</Container>
	);
}

const Container = styled.div``;

export default ChatContainer;
