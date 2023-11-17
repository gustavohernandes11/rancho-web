import styled from "styled-components";

export const Grid = ({ children }: any) => {
	return <StyledGrid>{children}</StyledGrid>;
};

const StyledGrid = styled.div`
	display: grid;
	justify-content: start;
	grid-template-columns: repeat(auto-fit, minmax(10rem, max-content));
	grid-auto-rows: 1fr;
	grid-gap: 0.5rem;
`;
