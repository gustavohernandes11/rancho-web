import styled, { css } from "styled-components";

export const Title = ({ children, ...props }: any) => {
	return <StyledTitle {...props}>{children}</StyledTitle>;
};

const StyledTitle = styled.h2<{ marginBottom: string }>`
	${({ marginBottom }) => css`
		margin-bottom: ${marginBottom || "0"};
	`}
`;
