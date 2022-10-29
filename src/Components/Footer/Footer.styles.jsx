import styled from "styled-components";

export const Container = styled.div`
	height: fit-content;
	max-height: 100px;
	padding: 17px 40px;
	background-color: transparent;
	display: flex;
	border-top: 1px solid black;
	margin: 0 42px;
	h1 {
		font-size: 32px;
		line-height: 43.65px;
		color: #00a874;
	}
	.column {
		display: flex;
		flex-direction: column;
		width: 100%;

		text-align: center;
	}
`;
