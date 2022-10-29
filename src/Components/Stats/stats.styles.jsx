import styled from "styled-components";
export const Container = styled.div`
	/* width: 100%; */
	overflow: hidden;
	margin-top: 51px;
	height: fit-content;
	padding-top: 38px;
	padding-bottom: 38px;
	padding-left: 85px;
	padding-right: 85px;
	background-color: #00a874;
	background-repeat: no-repeat;
	.title {
		font-family: "Nunito";
		font-style: normal;
		font-weight: 800;
		font-size: 28px;
		line-height: 38px;

		color: #ffffff;
	}
	.cards__container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 41px;
		margin-top: 25px;
	}
	.card {
		background-color: #fff;
		padding: 28px 46px;
		border-radius: 39px;
		color: #00a874;
		text-align: center;
		.name {
			font-weight: 700;
			font-size: 20px;
			line-height: 34px;
		}
		.number {
			font-weight: 700;
			font-size: 70px;
			line-height: 102px;
		}
		.date {
			font-weight: 700;
			font-size: 18px;
			line-height: 31px;
		}
	}

	.stat_name {
		font-style: normal;
		font-weight: 600;
		font-size: 24px;
		line-height: 33px;
		/* identical to box height */
		/* margin-bottom: 21px; */
		color: #ffffff;
	}
	.stats {
		display: grid;
		grid-template-columns: 177px 1fr 177px;
		grid-gap: 19px;
		margin-top: 12px;
	}
	.status {
		width: 177px;
		height: 30px;
		left: 1178px;
		top: 1545px;
		background: #ffffff;
		border-radius: 16px;
		border: none;
	}
	.progress_container {
		height: 30px;

		background: #ffffff;
		border-radius: 16px;
	}
	.progress {
		height: 100%;
		width: 80%;
		background: #70ffd3;
		border-radius: 16px;
	}
	.inprogress {
		color: red;
	}
	.complete {
		color: #00a874;
		width: 100%;
	}
	@media screen and (max-width: 600px) {
		/* width: 100%; */

		margin-top: 51px;
		height: fit-content;
		padding-top: 18px;
		padding-bottom: 18px;
		padding-left: 25px;
		padding-right: 25px;

		.title {
			font-family: "Nunito";
			font-style: normal;
			font-weight: 800;
			font-size: 20px;
			line-height: 38px;

			color: #ffffff;
		}
		.cards__container {
			display: grid;
			grid-template-columns: 1fr;
			grid-gap: 41px;
			margin-top: 25px;
		}
		.card {
			background-color: #fff;
			padding: 28px 46px;
			border-radius: 39px;
			color: #00a874;
			text-align: center;
			.name {
				font-weight: 700;
				font-size: 20px;
				line-height: 34px;
			}
			.number {
				font-weight: 700;
				font-size: 70px;
				line-height: 102px;
			}
			.date {
				font-weight: 700;
				font-size: 18px;
				line-height: 31px;
			}
		}

		.stat_name {
			font-style: normal;
			font-weight: 600;
			font-size: 24px;
			line-height: 33px;
			/* identical to box height */
			/* margin-bottom: 21px; */
			color: #ffffff;
		}
		.stats {
			display: grid;
			grid-template-columns: 70px 1fr 75px;
			grid-gap: 10px;
			margin-top: 12px;
		}
		.status {
			width: 75px;
			height: 20px;
			margin-top: 8px;
			background: #ffffff;
			border-radius: 16px;
			border: none;
		}
		.progress_container {
			height: 15px;
			margin-top: 10px;
			background: #ffffff;
			border-radius: 16px;
		}
		.progress {
			height: 100%;
			width: 80%;
			background: #70ffd3;
			border-radius: 16px;
		}
		.inprogress {
			color: red;
		}
		.complete {
			color: #00a874;
			width: 100%;
		}
		.stat_name {
			font-size: 15px;
		}
	}
`;
