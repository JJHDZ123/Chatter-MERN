const User = require('../models/userModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createError = require('../utils/createError.js');
require('dotenv').config();

module.exports.register = async (req, res, next) => {
	if (!req.body.username || !req.body.email || !req.body.password || !req.body.confirmPassword) {
		return next(
			createError({
				status  : 400,
				message : 'Username, Email, Password, and Password confirmation fields are all required'
			})
		);
	}

	if (req.body.password !== req.body.confirmPassword) {
		return next(createError({ status: 400, message: 'password and password confirmatio fields must match' }));
	}
	const email = await User.findOne({ email: req.body.email }).exec();

	if (email) {
		return next(createError({ status: 404, message: 'User with that email already exists' }));
	}

	const username = await User.findOne({ username: req.body.username }).exec();

	if (username) {
		return next(createError({ status: 404, message: 'Username is taken' }));
	}

	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPass = await bcrypt.hash(req.body.password, salt);

		const newUser = new User({
			username : req.body.username,
			email    : req.body.email,
			password : hashedPass
		});

		await newUser.save();
		return res.status(201).json('New User created');
	} catch (err) {
		console.log(err);
		return next(err);
	}
};

module.exports.login = async (req, res, next) => {
	if (!req.body.username || !req.body.password) {
		return next(createError({ status: 400, message: 'Username, and Password are required' }));
	}
	try {
		const foundUser = await User.findOne({ username: req.body.username }).exec();
		if (!foundUser) {
			return next(createError({ status: 404, message: 'No user found' }));
		}

		const isPasswordCorrect = await bcrypt.compare(req.body.password, foundUser.password);
		if (!isPasswordCorrect) {
			return next(createError({ status: 404, message: 'Password incorrect' }));
		}

		delete foundUser.password;
		delete foundUser.email;
		delete foundUser.__v;

		const accessToken = jwt.sign(
			{
				UserInfo : {
					id       : foundUser._id,
					username : foundUser.username
				}
			},
			process.env.ACCESS_TOKEN_SECRET,
			{ expiresIn: '1m' }
		);

		const refreshToken = jwt.sign({ username: foundUser.username }, process.env.REFRESH_TOKEN_SECRET, {
			expiresIn : '1d'
		});

		res.cookie('jwt', refreshToken, {
			httpOnly : true,
			maxAge   : 24 * 60 * 60 * 1000
		});

		res.json({ accessToken, foundUser });
	} catch (err) {
		console.log(err);
		return next(err);
	}
};

module.exports.handleRefreshToken = async (req, res, next) => {
	const cookies = req.cookies;
	if (!cookies.jwt || cookies.jwt === '') {
		return res.status(401).json({ message: 'Unauthorized' });
	}

	const refreshToken = cookies.jwt;

	return jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, decoded) => {
		if (err) {
			return res.status(403).json({ message: 'Forbidden' });
		}

		const foundUser = await User.findOne({ username: decoded.username }).exec();

		if (!foundUser) {
			return res.status(401).json({ message: 'Unauthorized' });
		}

		delete foundUser.password;
		delete foundUser.email;
		delete foundUser.__v;

		const accessToken = jwt.sign(
			{
				UserInfo : {
					id       : foundUser._id,
					username : foundUser.username
				}
			},
			process.env.ACCESS_TOKEN_SECRET,
			{ expiresIn: '1m' }
		);

		res.json({ accessToken, foundUser });
	});
};

module.exports.logout = async (req, res, next) => {
	try {
	} catch (err) {
		console.log(err);
		return next(err);
	}
};
