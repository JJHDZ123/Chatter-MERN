import axios from '../api/axios.js';
import useAuth from './useAuth';

const useRefresh = () => {
	const { setAuth } = useAuth();

	const refresh = async () => {
		const response = await axios.get('auth/refresh', {
			withCredentials : true
		});

		setAuth((prev) => {
			const { _id, username, isAvatarImageSet, avatarImage } = response.data.foundUser;
			return {
				...prev,
				accessToken : response.data.accessToken,
				id          : _id,
				username    : username,
				avatarSet   : isAvatarImageSet,
				avatar      : avatarImage
			};
		});
		return response.data.accessToken;
	};
	return refresh;
};

export default useRefresh;
