import styled, { css } from "styled-components";
import { Label } from "./Label";

interface ISelectElementProps
	extends React.SelectHTMLAttributes<HTMLSelectElement> {
	id?: string;
	label?: string;
}

export const Select: React.FC<ISelectElementProps> = ({
	label,
	id,
	...props
}) => {
	return (
		<>
			{label && <Label htmlFor={id}>{label}</Label>}
			<Wrapper>
				<StyledSelect id={id} {...props} />
			</Wrapper>
		</>
	);
};
const Wrapper = styled.div`
	${({ theme }) => css`
		border: 1px solid ${theme.color.border};
		border-radius: 0.25rem;
		margin-bottom: 1rem;
	`};
`;

const StyledSelect = styled.select`
	${({ theme }) => css`
		border: none;
		border-radius: 0.25rem;
		display: flex;
		padding: 0.75rem;
		background-color: ${theme.color.surface};
		width: 100%;
		box-sizing: border-box;
		border-right: 16px solid transparent;
	`}
`;
