const User = require('../models/userModel.js');

module.exports.getAllUsers = async (req, res, next) => {
	try {
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
				avatarImage
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
