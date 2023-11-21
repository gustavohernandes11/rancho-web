import styled from "styled-components";

export const Container = styled.section`
	display: grid;
	grid-area: container;
	border-radius: 0.5rem;
	overflow-y: auto;
	background-color: white;
	width: 100%;
	height: 100%;

	grid-template-rows: 1fr;
	grid-template-rows: 3.75rem auto 1fr;
	grid-template-areas:
		"header"
		"aside"
		"content";
	padding: 0rem 1rem;

	@media (min-width: ${({ theme }) => theme.screen.laptop}) {
		padding: 1rem;
		grid-template-rows: 3.75rem 1fr;
		grid-template-columns: 2fr 1fr;
		grid-template-areas:
			"header header"
			"content aside";
		padding: 3rem 5rem;
		gap: 3rem;
	}
`;
