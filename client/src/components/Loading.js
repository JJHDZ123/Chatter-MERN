import React, { Fragment } from 'react';
import styled from 'styled-components';
//import './Loading.css';

function Loading() {
	return (
		<Fragment>
			<LoadingContainer>
				<div className="cssload-container">
					<ul className="cssload-flex-container">
						<li>
							<span className="cssload-loading cssload-one" />
							<span className="cssload-loading cssload-two" />
							<span className="cssload-loading-center" />
						</li>
					</ul>
				</div>
			</LoadingContainer>
		</Fragment>
	);
}

const LoadingContainer = styled.div`
	height: 100vh;
	min-height: 700px;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
	align-items: center;
	background-color: #131324;

	.cssload-container * {
		box-sizing: border-box;
		-o-box-sizing: border-box;
		-ms-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
	}
	.cssload-container {
		margin: 19px auto 0 auto;
		max-width: 545px;
	}

	.cssload-container ul li {
		list-style: none;
	}

	.cssload-flex-container {
		display: flex;
		display: -o-flex;
		display: -ms-flex;
		display: -webkit-flex;
		display: -moz-flex;
		flex-direction: row;
		-o-flex-direction: row;
		-ms-flex-direction: row;
		-webkit-flex-direction: row;
		-moz-flex-direction: row;
		flex-wrap: wrap;
		-o-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		-webkit-flex-wrap: wrap;
		-moz-flex-wrap: wrap;
		justify-content: space-around;
	}
	.cssload-flex-container li {
		padding: 10px;
		height: 97px;
		width: 97px;
		margin: 29px 19px;
		position: relative;
		text-align: center;
	}

	.cssload-loading-center {
		display: inline-block;
		position: absolute;
		background: white;
		height: 29px;
		width: 29px;
		left: 35px;
		top: 36px;
		transform: rotate(45deg);
		-o-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		border-radius: 3px;
		-o-border-radius: 3px;
		-ms-border-radius: 3px;
		-webkit-border-radius: 3px;
		-moz-border-radius: 3px;
		animation: pulse 1.15s ease infinite;
		-o-animation: pulse 1.15s ease infinite;
		-ms-animation: pulse 1.15s ease infinite;
		-webkit-animation: pulse 1.15s ease infinite;
		-moz-animation: pulse 1.15s ease infinite;
	}

	.cssload-loading {
		display: inline-block;
		position: relative;
		width: 73px;
		height: 73px;
		margin-top: 3px;
		transform: rotate(45deg);
		-o-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
	}
	.cssload-loading:after,
	.cssload-loading:before {
		position: absolute;
		content: '';
		height: 10px;
		width: 10px;
		display: block;
		top: 0;
		background: white;
		border-radius: 3px;
		-o-border-radius: 3px;
		-ms-border-radius: 3px;
		-webkit-border-radius: 3px;
		-moz-border-radius: 3px;
		animation-delay: -.5.75s;
		-o-animation-delay: -.5.75s;
		-ms-animation-delay: -.5.75s;
		-webkit-animation-delay: -.5.75s;
		-moz-animation-delay: -.5.75s;
	}
	.cssload-loading:after {
		right: 0;
		animation: square-tr 2.3s ease infinite;
		-o-animation: square-tr 2.3s ease infinite;
		-ms-animation: square-tr 2.3s ease infinite;
		-webkit-animation: square-tr 2.3s ease infinite;
		-moz-animation: square-tr 2.3s ease infinite;
		animation-delay: .143.75s;
		-o-animation-delay: .143.75s;
		-ms-animation-delay: .143.75s;
		-webkit-animation-delay: .143.75s;
		-moz-animation-delay: .143.75s;
	}
	.cssload-loading:before {
		animation: square-tl 2.3s ease infinite;
		-o-animation: square-tl 2.3s ease infinite;
		-ms-animation: square-tl 2.3s ease infinite;
		-webkit-animation: square-tl 2.3s ease infinite;
		-moz-animation: square-tl 2.3s ease infinite;
		animation-delay: .143.75s;
		-o-animation-delay: .143.75s;
		-ms-animation-delay: .143.75s;
		-webkit-animation-delay: .143.75s;
		-moz-animation-delay: .143.75s;
	}

	.cssload-loading.cssload-two {
		position: relative;
		top: -78px;
	}
	.cssload-loading.cssload-two:after,
	.cssload-loading.cssload-two:before {
		bottom: 0;
		top: initial;
	}
	.cssload-loading.cssload-two:after {
		animation: square-br 2.3s ease infinite;
		-o-animation: square-br 2.3s ease infinite;
		-ms-animation: square-br 2.3s ease infinite;
		-webkit-animation: square-br 2.3s ease infinite;
		-moz-animation: square-br 2.3s ease infinite;
		animation-direction: reverse;
		-o-animation-direction: reverse;
		-ms-animation-direction: reverse;
		-webkit-animation-direction: reverse;
		-moz-animation-direction: reverse;
	}
	.cssload-loading.cssload-two:before {
		animation: square-bl 2.3s ease infinite;
		-o-animation: square-bl 2.3s ease infinite;
		-ms-animation: square-bl 2.3s ease infinite;
		-webkit-animation: square-bl 2.3s ease infinite;
		-moz-animation: square-bl 2.3s ease infinite;
		animation-direction: reverse;
		-o-animation-direction: reverse;
		-ms-animation-direction: reverse;
		-webkit-animation-direction: reverse;
		-moz-animation-direction: reverse;
	}

	@keyframes square-tl {
		0% {
			transform: translate(0, 0);
		}
		25% {
			transform: translate(0, 60.5px);
		}
		50% {
			transform: translate(60.5px, 60.5px);
		}
		75% {
			transform: translate(60.5px, 0);
		}
	}

	@-o-keyframes square-tl {
		0% {
			-o-transform: translate(0, 0);
		}
		25% {
			-o-transform: translate(0, 60.5px);
		}
		50% {
			-o-transform: translate(60.5px, 60.5px);
		}
		75% {
			-o-transform: translate(60.5px, 0);
		}
	}

	@-ms-keyframes square-tl {
		0% {
			-ms-transform: translate(0, 0);
		}
		25% {
			-ms-transform: translate(0, 60.5px);
		}
		50% {
			-ms-transform: translate(60.5px, 60.5px);
		}
		75% {
			-ms-transform: translate(60.5px, 0);
		}
	}

	@-webkit-keyframes square-tl {
		0% {
			-webkit-transform: translate(0, 0);
		}
		25% {
			-webkit-transform: translate(0, 60.5px);
		}
		50% {
			-webkit-transform: translate(60.5px, 60.5px);
		}
		75% {
			-webkit-transform: translate(60.5px, 0);
		}
	}

	@-moz-keyframes square-tl {
		0% {
			-moz-transform: translate(0, 0);
		}
		25% {
			-moz-transform: translate(0, 60.5px);
		}
		50% {
			-moz-transform: translate(60.5px, 60.5px);
		}
		75% {
			-moz-transform: translate(60.5px, 0);
		}
	}

	@keyframes square-bl {
		0% {
			transform: translate(0, 0);
		}
		25% {
			transform: translate(0, -60.5px);
		}
		50% {
			transform: translate(60.5px, -60.5px);
		}
		75% {
			transform: translate(60.5px, 0);
		}
	}

	@-o-keyframes square-bl {
		0% {
			-o-transform: translate(0, 0);
		}
		25% {
			-o-transform: translate(0, -60.5px);
		}
		50% {
			-o-transform: translate(60.5px, -60.5px);
		}
		75% {
			-o-transform: translate(60.5px, 0);
		}
	}

	@-ms-keyframes square-bl {
		0% {
			-ms-transform: translate(0, 0);
		}
		25% {
			-ms-transform: translate(0, -60.5px);
		}
		50% {
			-ms-transform: translate(60.5px, -60.5px);
		}
		75% {
			-ms-transform: translate(60.5px, 0);
		}
	}

	@-webkit-keyframes square-bl {
		0% {
			-webkit-transform: translate(0, 0);
		}
		25% {
			-webkit-transform: translate(0, -60.5px);
		}
		50% {
			-webkit-transform: translate(60.5px, -60.5px);
		}
		75% {
			-webkit-transform: translate(60.5px, 0);
		}
	}

	@-moz-keyframes square-bl {
		0% {
			-moz-transform: translate(0, 0);
		}
		25% {
			-moz-transform: translate(0, -60.5px);
		}
		50% {
			-moz-transform: translate(60.5px, -60.5px);
		}
		75% {
			-moz-transform: translate(60.5px, 0);
		}
	}

	@keyframes square-tr {
		0% {
			transform: translate(0, 0);
		}
		25% {
			transform: translate(-60.5px, 0);
		}
		50% {
			transform: translate(-60.5px, 60.5px);
		}
		75% {
			transform: translate(0, 60.5px);
		}
	}

	@-o-keyframes square-tr {
		0% {
			-o-transform: translate(0, 0);
		}
		25% {
			-o-transform: translate(-60.5px, 0);
		}
		50% {
			-o-transform: translate(-60.5px, 60.5px);
		}
		75% {
			-o-transform: translate(0, 60.5px);
		}
	}

	@-ms-keyframes square-tr {
		0% {
			-ms-transform: translate(0, 0);
		}
		25% {
			-ms-transform: translate(-60.5px, 0);
		}
		50% {
			-ms-transform: translate(-60.5px, 60.5px);
		}
		75% {
			-ms-transform: translate(0, 60.5px);
		}
	}

	@-webkit-keyframes square-tr {
		0% {
			-webkit-transform: translate(0, 0);
		}
		25% {
			-webkit-transform: translate(-60.5px, 0);
		}
		50% {
			-webkit-transform: translate(-60.5px, 60.5px);
		}
		75% {
			-webkit-transform: translate(0, 60.5px);
		}
	}

	@-moz-keyframes square-tr {
		0% {
			-moz-transform: translate(0, 0);
		}
		25% {
			-moz-transform: translate(-60.5px, 0);
		}
		50% {
			-moz-transform: translate(-60.5px, 60.5px);
		}
		75% {
			-moz-transform: translate(0, 60.5px);
		}
	}

	@keyframes square-br {
		0% {
			transform: translate(0, 0);
		}
		25% {
			transform: translate(-60.5px, 0);
		}
		50% {
			transform: translate(-60.5px, -60.5px);
		}
		75% {
			transform: translate(0, -60.5px);
		}
	}

	@-o-keyframes square-br {
		0% {
			-o-transform: translate(0, 0);
		}
		25% {
			-o-transform: translate(-60.5px, 0);
		}
		50% {
			-o-transform: translate(-60.5px, -60.5px);
		}
		75% {
			-o-transform: translate(0, -60.5px);
		}
	}

	@-ms-keyframes square-br {
		0% {
			-ms-transform: translate(0, 0);
		}
		25% {
			-ms-transform: translate(-60.5px, 0);
		}
		50% {
			-ms-transform: translate(-60.5px, -60.5px);
		}
		75% {
			-ms-transform: translate(0, -60.5px);
		}
	}

	@-webkit-keyframes square-br {
		0% {
			-webkit-transform: translate(0, 0);
		}
		25% {
			-webkit-transform: translate(-60.5px, 0);
		}
		50% {
			-webkit-transform: translate(-60.5px, -60.5px);
		}
		75% {
			-webkit-transform: translate(0, -60.5px);
		}
	}

	@-moz-keyframes square-br {
		0% {
			-moz-transform: translate(0, 0);
		}
		25% {
			-moz-transform: translate(-60.5px, 0);
		}
		50% {
			-moz-transform: translate(-60.5px, -60.5px);
		}
		75% {
			-moz-transform: translate(0, -60.5px);
		}
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@-o-keyframes rotate {
		from {
			-o-transform: rotate(0deg);
		}
		to {
			-o-transform: rotate(360deg);
		}
	}

	@-ms-keyframes rotate {
		from {
			-ms-transform: rotate(0deg);
		}
		to {
			-ms-transform: rotate(360deg);
		}
	}

	@-webkit-keyframes rotate {
		from {
			-webkit-transform: rotate(0deg);
		}
		to {
			-webkit-transform: rotate(360deg);
		}
	}

	@-moz-keyframes rotate {
		from {
			-moz-transform: rotate(0deg);
		}
		to {
			-moz-transform: rotate(360deg);
		}
	}

	@keyframes pulse {
		0%,
		100% {
			transform: scale(inherit) rotate(45deg);
		}
		75% {
			transform: scale(0.25) rotate(45deg);
		}
	}

	@-o-keyframes pulse {
		0%,
		100% {
			-o-transform: scale(inherit) rotate(45deg);
		}
		75% {
			-o-transform: scale(0.25) rotate(45deg);
		}
	}

	@-ms-keyframes pulse {
		0%,
		100% {
			-ms-transform: scale(inherit) rotate(45deg);
		}
		75% {
			-ms-transform: scale(0.25) rotate(45deg);
		}
	}

	@-webkit-keyframes pulse {
		0%,
		100% {
			-webkit-transform: scale(inherit) rotate(45deg);
		}
		75% {
			-webkit-transform: scale(0.25) rotate(45deg);
		}
	}

	@-moz-keyframes pulse {
		0%,
		100% {
			-moz-transform: scale(inherit) rotate(45deg);
		}
		75% {
			-moz-transform: scale(0.25) rotate(45deg);
		}
	}
`;

export default Loading;
