import React from 'react';
import useRefresh from '../hooks/useRefresh';

function Chat() {
	const refresh = useRefresh();

	return (
		<div>
			<button onClick={() => refresh()}>Press to refresh token</button>
		</div>
	);
}

export default Chat;
