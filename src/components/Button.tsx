import styled, { css } from "styled-components";

export const Button = ({ children }: any) => {
	return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled.button`
	${() => css`
		padding: 0.75rem 1.5rem;
		background-color: ${({ theme }) => theme.color.primary};
		border: 1px solid ${({ theme }) => theme.color.border};
		border-radius: 0.5rem;
		font-weight: 500;
		color: white;
		font-size: 1rem;
	`}
`;
