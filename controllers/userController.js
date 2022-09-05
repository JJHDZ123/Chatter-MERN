const User = require('../models/userModel.js');

module.exports.getAllUsers = async (req, res, next) => {
	try {
		const users = await User.find({ _id: { $ne: req.id } }).select([ 'email', 'username', 'avatarImage', '_id' ]);
		return res.json(users);
	} catch (err) {
		next(err);
	}
};

module.exports.setAvatar = async (req, res, next) => {
	try {
		const userId = req.id;
		const avatarImage = req.body.image;

		const userData = await User.findByIdAndUpdate(
			userId,
			{
				isAvatarImageSet : true,
				avatarImage      : avatarImage
			},
			{ new: true }
		);

		return res.json({
			isSet : userData.isAvatarImageSet,
			image : userData.avatarImage
		});
	} catch (err) {
		next(err);
	}
};
