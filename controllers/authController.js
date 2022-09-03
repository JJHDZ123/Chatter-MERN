const User = require('../models/userModel.js');
const bcrypt = require('bcrypt');
const createError = require('../utils/createError.js');

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
	if (!req.body.email || !req.body.password) {
		return next(createError({ status: 400, message: 'Email, and Password are required' }));
	}
	try {
		const user = await User.findOne({ username: req.body.username }).exec();
		if (!user) {
			return next(createError({ status: 404, message: 'No user found' }));
		}
		const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
		if (!isPasswordCorrect) {
			return next(createError({ status: 404, message: 'Password incorrect' }));
		}
	} catch (err) {
		console.log(err);
		return next(err);
	}
};

module.exports.logout = async (req, res, next) => {
	try {
	} catch (err) {
		console.log(err);
		return next(err);
	}
};
