import { useNavigate } from 'react-router-dom';

function Unauthorized() {
	const navigate = useNavigate();

	const goBack = () => navigate('/');

	return (
		<section>
			<h1>Unauthorized</h1>
			<br />
			<p>You don't have access to this page, please try logging back in!</p>
			<div className="flexGrow">
				<button onClick={goBack}>Login</button>
			</div>
		</section>
	);
}

export default Unauthorized;
