import styled from "styled-components";
import { css } from "styled-components";

interface ButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {
	primary?: boolean;
	light?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }: any) => {
	return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled.button<ButtonProps>`
	padding: 0.75rem 1.5rem;
	background-color: ${({ theme }) => theme.color.primary};
	border: 1px solid ${({ theme }) => theme.color.border};
	border-radius: 0.5rem;
	font-weight: 500;
	color: white;
	font-size: 1rem;

	&&:active {
		background-color: ${({ theme }) => theme.color.secondary};
	}
	&&:hover {
		cursor: pointer;
	}

	${({ theme, light }) =>
		light &&
		css`
			background-color: transparent;
			color: ${theme.color.text};
		`}
`;
