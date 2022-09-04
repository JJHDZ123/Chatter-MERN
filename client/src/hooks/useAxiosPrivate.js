import { useEffect } from 'react';
import { axiosPrivate } from '../api/axios.js';
import propCheck from './propCheck.js';
import useRefresh from './useRefresh.js';
import useAuth from './useAuth';

const useAxiosPrivate = () => {
	const refresh = useRefresh();
	const { auth } = useAuth();

	useEffect(() => {
		const requestIntercept = axiosPrivate.interceptors.request.use(
			(config) => {
				const accessToken = propCheck(() => auth.accessToken, null);
				if (!config.headers['Authorization']) {
					config.headers['Authorization'] = `Bearer ${accessToken}`;
				}
				return config;
			},
			(error) => Promise.reject(error)
		);

		const responseIntercept = axiosPrivate.interceptors.response.use(
			(response) => response,
			async (error) => {
				const prevRequest = error.config;
			}
		);
	});
};

export default useAxiosPrivate;
