import styled from "styled-components";
import img from "../../Assets/back.png";
export const Container = styled.div`
	/* width: 100%; */
	overflow: hidden;
	min-height: 100vh;
	height: fit-content;
	padding-top: 141px;
	padding-left: 102px;
	padding-right: 143px;
	background-image: url(${img});
	background-repeat: no-repeat;
	.top {
		width: 100%;
		display: flex;

		justify-content: space-between;
		max-width: 100%;
	}
	.bold {
		font-style: normal;
		font-weight: 800;
		font-size: 32px;
		line-height: 44px;
		max-width: 376px;
		color: #000000;
	}
	button {
		margin-top: 19px;
		background-color: transparent;
		border: none;
		text-decoration: underline;
		color: #00a874;
		font-weight: 700;
		font-size: 23px;
		line-height: 31px;
		padding: 29px 24px;
	}
	.right {
		margin-top: 200px;
		max-width: 588px;
	}
	.sub {
		max-width: 488px;
		text-align: left;
		font-style: normal;
		font-weight: 400;
		font-size: 22px;
		line-height: 30px;
		margin-top: 9px;
	}
	.title {
		font-style: normal;
		font-weight: 800;
		font-size: 26px;
		line-height: 35px;
	}
	.bottom {
		margin-top: 51px;
		width: 100%;
		height: 474px;
		position: relative;
		margin-left: 41px;
	}
	.play__button {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
	}

	@media screen and (max-width: 600px) {
		padding-top: 100px;
		padding-left: 20px;
		padding-right: 20px;
		.top {
			flex-direction: column;
		}
		.bold {
			font-size: 22px;
			line-height: 34px;
			max-width: 376px;
		}
		button {
			margin-top: 19px;
			background-color: transparent;
			border: none;
			text-decoration: underline;
			color: #00a874;
			font-weight: 700;
			font-size: 18px;
			line-height: 21px;
			padding: 19px 14px;
		}
		.right {
			margin-top: 20px;
			max-width: 100%;
		}
		.sub {
			max-width: 100%;
			text-align: left;
			font-style: normal;
			font-weight: 400;
			font-size: 18px;
			line-height: 30px;
			margin-top: 9px;
		}
		.title {
			font-style: normal;
			font-weight: 800;
			font-size: 22px;
			line-height: 30px;
		}
		.media {
			width: 100%;
		}
		.bottom {
			margin-top: 51px;
			width: 100%;
			height: auto;
			position: relative;
			margin-left: 0px;
		}
		.play__button {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			img {
				width: 50px;
			}
		}

		.overlay {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
		}
	}
`;
