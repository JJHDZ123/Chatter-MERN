import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Register from './pages/Register.js';
import Login from './pages/Login';
import Chat from './pages/Chat';

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
					<Route path="/Register" element={<Register />} />
					<Route path="/Login" element={<Login />} />
					<Route path="/" element={<Chat />} />
				</Routes>
			</BrowserRouter>
		</Fragment>
	);
}

export default App;
