import styled, { css } from "styled-components";

export const Title = ({ children }: any) => {
	return <StyledTitle>{children}</StyledTitle>;
};

const StyledTitle = styled.h2`
	${() => css``}
`;
