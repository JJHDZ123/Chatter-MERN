import { Outlet } from 'react-router-dom';
import { Fragment, useState, useEffect } from 'react';
import propCheck from '../hooks/propCheck.js';
import useRefreshToken from '../hooks/useRefresh.js';
import useAuth from '../hooks/useAuth.js';
import Loading from './Loading.js';

const PersistLogin = () => {
	const [ isLoading, setIsLoading ] = useState(true);
	const refresh = useRefreshToken();
	const { auth } = useAuth();

	useEffect(
		() => {
			let isMounted = true;

			const verifyRefreshToken = async () => {
				try {
					await refresh();
				} catch (err) {
					console.error(err);
				} finally {
					isMounted && setIsLoading(false);
				}
			};

			const accessTokenCheck = propCheck(() => auth.accessToken, undefined);
			!accessTokenCheck ? verifyRefreshToken() : setIsLoading(false);

			return () => (isMounted = false);
		},
		[ auth.accessToken, refresh ]
	);

	useEffect(
		() => {
			const accessTokenCheck = propCheck(() => auth.accessToken, undefined);
			console.log(`isLoading: ${isLoading}`);
			console.log(`aT: ${JSON.stringify(accessTokenCheck)}`);
		},
		[ isLoading, auth.accessToken ]
	);

	return <Fragment>{isLoading ? <Loading /> : <Outlet />}</Fragment>;
};

export default PersistLogin;
