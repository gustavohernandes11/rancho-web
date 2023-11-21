import styled, { css } from "styled-components";
type ITitleProps = {
	marginBottom?: string;
	textAlign?: string;
	children: string;
	as?: string;
};

export const Title = ({ children, ...props }: ITitleProps) => {
	return <StyledTitle {...props}>{children}</StyledTitle>;
};

const StyledTitle = styled.h2<ITitleProps>`
	${({ marginBottom, textAlign }) => css`
		margin-bottom: ${marginBottom || "0"};
		text-align: ${textAlign || "start"};
	`}
`;
