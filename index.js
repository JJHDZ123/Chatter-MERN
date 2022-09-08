const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const socket = require('socket.io');
const connectDB = require('./config/Database.js');
const allRoutes = require('./routes/index.js');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser());

app.use('/api', allRoutes);

const server = app.listen(PORT, () => {
	connectDB();
	console.log(`Server is running on port ${PORT}`);
});

const io = socket(server, {
	cors : {
		origin      : 'http://localhost:3000',
		credentials : true
	}
});

global.onlineUsers = new Map();

io.on('connection', (socket) => {
	global.chatSocket = socket;
	socket.on('add-user', (userId) => {
		onlineUsers.set(userId, socket.id);
	});

	socket.on('send-msg', (data) => {
		const sendUserSocket = onlineUsers.get(data.to);
		if (sendUserSocket) {
			socket.to(sendUserSocket).emit('msg-recieved', data.message);
		}
	});
});
