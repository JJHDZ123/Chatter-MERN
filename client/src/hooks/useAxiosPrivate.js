import { useEffect } from 'react';
import { axiosPrivate } from '../api/axios.js';
import propCheck from './propCheck.js';
import useRefresh from './useRefresh.js';
import useAuth from './useAuth';

const useAxiosPrivate = () => {
	const refresh = useRefresh();
	const { auth } = useAuth();

	useEffect(
		() => {
			const requestIntercept = axiosPrivate.interceptors.request.use(
				(config) => {
					const accessToken = propCheck(() => auth.accessToken, undefined);
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
					const prevRequest = propCheck(() => error.config, undefined);
					const statusCheck = propCheck(() => error.response.status, undefined);
					const sentCheck = propCheck(() => prevRequest.sent, undefined);
					if (statusCheck === 403 && !sentCheck) {
						prevRequest.sent = true;
						const newAccessToken = await refresh();
						prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
						return axiosPrivate(prevRequest);
					}
					return Promise.reject(error);
				}
			);

			return () => {
				axiosPrivate.interceptors.request.eject(requestIntercept);
				axiosPrivate.interceptors.response.eject(responseIntercept);
			};
		},
		[ auth, refresh ]
	);
	return axiosPrivate;
};

export default useAxiosPrivate;
