import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Buffer } from 'buffer';
import toast from 'react-hot-toast';

function SetAvatar() {
	const api = 'https://api.multiavatar.com/Chatter';
	const navigate = useNavigate();
	const [ avatar, setAvatar ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(true);
	const [ selectedAvatar, setSelectedAvatar ] = useState(undefined);

	const setProfilePicture = async () => {
		if (selectedAvatar === undefined) {
			toast.error('please select an avatar');
		} else {
			const { data } = await axios.post(`api/users/setAvatar`, {
				image : avatar[selectedAvatar]
			});

			if (data.isSet) {
			}
		}
	};

	useEffect(() => {
		async function fetchAvatar() {
			const data = [];
			for (let i = 0; i < 2; i++) {
				const image = await axios.get(`${api}/${Math.round(Math.random() * 1000)}`);
				const buffer = new Buffer(image.data);
				data.push(buffer.toString('base64'));
			}
			setAvatar(data);
			setIsLoading(false);
		}
		fetchAvatar();
	}, []);

	return (
		<Fragment>
			<Container>
				<div className="title-container">
					<h1>Pick an avatar as a profile picture</h1>
				</div>
				<div className="avatars">
					{isLoading ? (
						<h1>LOADING...</h1>
					) : (
						avatar.map((currAvatar, index) => {
							return (
								<div key={index} className={`avatar ${selectedAvatar === index ? 'selected' : ''}`}>
									<img
										src={`data:image/svg+xml;base64,${currAvatar}`}
										alt="avatar"
										onClick={() => setSelectedAvatar(index)}
									/>
								</div>
							);
						})
					)}
				</div>
				<button className="submit-btn" onClick={setProfilePicture}>
					Set as profile picture
				</button>
			</Container>
		</Fragment>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 3rem;
	background-color: #131324;
	height: 100vh;
	width: 100vw;
	.loader {
		max-inline-size: 100%;
	}
	.title-container {
		h1 {
			color: white;
		}
	}
	.avatars {
		display: flex;
		gap: 2rem;
		.avatar {
			border: 0.4rem solid transparent;
			padding: 0.4rem;
			border-radius: 5rem;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: 0.5s ease-in-out;
			img {
				height: 6rem;
				transition: 0.5s ease-in-out;
			}
		}
		.selected {
			border: 0.4rem solid #4e0eff;
		}
	}
	.submit-btn {
		background-color: #4e0eff;
		color: white;
		padding: 1rem 2rem;
		border: none;
		font-weight: bold;
		cursor: pointer;
		border-radius: 0.4rem;
		font-size: 1rem;
		text-transform: uppercase;
		&:hover {
			background-color: #4e0eff;
		}
	}
`;

export default SetAvatar;
