const createError = require('./createError.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
	const authHeader = req.headers.authorization || req.headers.Authorization;

	if (!authHeader.startsWith('Bearer')) {
		return next(createError({ status: 401, message: 'Unauthorized' }));
	}

	const token = authHeader.split(' ')[1];

	jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err) {
			return next(createError({ status: 403, message: 'Forbidden' }));
		}
		req.id = decoded.UserInfo.id;
		req.username = decoded.UserInfo.username;
		next();
	});
};
