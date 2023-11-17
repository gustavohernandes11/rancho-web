import styled, { css } from "styled-components";

export const Span = ({ children }: any) => {
	return <StyledSpan>{children}</StyledSpan>;
};

const StyledSpan = styled.span`
	${() => css`
		gap: 0.5rem;
	`}
`;
