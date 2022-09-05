import { Navigate, Outlet } from 'react-router-dom';
import propCheck from '../hooks/propCheck.js';
import useAuth from '../hooks/useAuth.js';

const RequireAuth = () => {
	const { auth } = useAuth();

	const accessTokenCheck = propCheck(() => auth.accessToken, undefined);

	return accessTokenCheck ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RequireAuth;
