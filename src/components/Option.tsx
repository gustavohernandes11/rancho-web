import styled, { css } from "styled-components";

interface IOptionElementProps
	extends React.OptionHTMLAttributes<HTMLOptionElement> {}

export const Option: React.FC<IOptionElementProps> = ({ ...props }) => {
	return <StyledOption {...props} />;
};

const StyledOption = styled.option`
	${({ theme }) => css`
		display: flex;
		padding: 0.75rem;
		border-radius: 0.5rem;
		border: 1px solid ${theme.color.border};
		background-color: ${theme.color.surface};
		padding: 1rem;
		width: 100%;
		box-sizing: border-box;
	`}
`;
