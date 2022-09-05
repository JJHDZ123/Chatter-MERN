import { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Register from './pages/Register.js';
import Login from './pages/Login';
import Chat from './pages/Chat';
import SetAvatar from './pages/SetAvatar.js';
import PersistLogin from './components/PersistLogin.js';
import RequireAuth from './components/RequireAuth.js';

function App() {
	return (
		<Fragment>
			<Toaster
				position="bottom-right"
				toastOptions={{
					style : {
						fontSize : '1.8rem'
					}
				}}
			/>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate to="/login" />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route element={<PersistLogin />}>
						<Route element={<RequireAuth />}>
							<Route path="/setAvatar" element={<SetAvatar />} />
							<Route path="/Chat" element={<Chat />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</Fragment>
	);
}

export default App;
