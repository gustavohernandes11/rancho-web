import styled from "styled-components";

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<CheckBoxProps> = ({
	children,
	...props
}: any) => {
	return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled.button`
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
`;
