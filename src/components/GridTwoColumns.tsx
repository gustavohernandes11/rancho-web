import styled, { css } from "styled-components";

export const GridTwoColumns = ({ children }: any) => {
	return <Container>{children}</Container>;
};

const Container = styled.div`
	${() => css`
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 1rem;
	`}
`;
