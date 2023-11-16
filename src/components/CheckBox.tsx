import styled, { css } from "styled-components";

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const CheckBox: React.FC<CheckBoxProps> = ({ children }: any) => {
	return (
		<StyledSpan>
			<StyledCheckBox type="checkbox" />
			{children}
		</StyledSpan>
	);
};

const StyledCheckBox = styled.input`
	${() => css`
		margin-right: 0.5rem;
	`}
`;
const StyledSpan = styled.span`
	display: flex;
	align-items: flex-start;
`;
