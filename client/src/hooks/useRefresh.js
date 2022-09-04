import axios from '../api/axios.js';
import useAuth from './useAuth';

const useRefresh = () => {
	const { auth, setAuth } = useAuth();

	const refresh = async () => {
		const response = await axios.get('auth/refresh', {
			withCredentials : true
		});

		setAuth((prev) => {
			console.log(JSON.stringify(prev));
			console.log(response.data.accessToken);
			return { ...prev, accessToken: response.data.accessToken };
		});
		return response.data.accessToken;
	};
	console.log(auth);
	return refresh;
};

export default useRefresh;
