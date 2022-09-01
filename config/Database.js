const mongoose = require('mongoose');
require('dotenv').config();

module.exports = connectDB = async () => {
	try {
		await mongoose.connect(process.env.DB_URI);
		console.log('mongoDB is connected');
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};
