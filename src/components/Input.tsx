import styled, { css } from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ ...props }) => {
	return <StyledInput {...props} />;
};

const StyledInput = styled.input`
	${() => css`
		display: flex;
		padding: 0.75rem;
		border-radius: 0.5rem;
		border: 1px solid ${({ theme }) => theme.color.border};
		background-color: ${({ theme }) => theme.color.surface};
		width: 100%;
		box-sizing: border-box;
	`}
`;
