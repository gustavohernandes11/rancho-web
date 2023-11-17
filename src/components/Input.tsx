import styled, { css } from "styled-components";

interface IInputElementProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	messageOnFocus?: string;
}

export const Input: React.FC<IInputElementProps> = ({ ...props }) => {
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
