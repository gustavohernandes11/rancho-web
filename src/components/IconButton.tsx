import styled, { css } from "styled-components";
import { Button } from "./Button";

interface IconButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {
	icon: React.ReactNode;
	type?: "primary" | "light" | "secondary";
}

export const IconButton: React.FC<IconButtonProps> = ({
	children,
	icon,
	...props
}) => {
	return <StyledIconButton {...props}>{icon}</StyledIconButton>;
};

const StyledIconButton = styled(Button)`
	${({ theme, type }) => css`
		padding: 0.75rem;
		border: none;
		border-radius: 0.5rem;

		${type === "primary" &&
		css`
			border: 1px solid ${theme.color.border};
			background-color: ${theme.color.primary};
			path {
				fill: white;
			}
		`}
		${type === "light" &&
		css`
			background-color: transparent;
			path {
				fill: ${theme.color.icon};
			}
			&&:active {
				background-color: ${({ theme }) => theme.color.border};
			}
		`}
            ${type === "secondary" &&
		css`
			background-color: ${theme.color.surface};
			path {
				fill: ${theme.color.iconSecondary};
			}
			&&:active {
				background-color: ${({ theme }) => theme.color.iconSecondary};
			}
		`}
	`}
`;
