const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
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

app.listen(PORT, () => {
	connectDB();
	console.log(`Server is running on port ${PORT}`);
});
