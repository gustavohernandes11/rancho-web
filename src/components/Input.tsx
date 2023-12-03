import { useState } from "react";
import styled, { css } from "styled-components";
import { Label } from "./Label";

interface IInputElementProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	id?: string;
	messageOnFocus?: string;
	label?: string;
}

export const Input: React.FC<IInputElementProps> = ({
	messageOnFocus,
	label,
	id,
	...props
}) => {
	const [focused, setFocused] = useState(false);
	return (
		<>
			{label && <Label htmlFor={id}>{label}</Label>}
			{focused && messageOnFocus && (
				<StyledMessageOnFocus>{messageOnFocus}</StyledMessageOnFocus>
			)}
			<StyledInput
				{...props}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
			/>
		</>
	);
};

const StyledInput = styled.input`
	${({ theme }) => css`
		display: flex;
		padding: 0.75rem;
		border-radius: 0.25rem;
		border: 1px solid ${theme.color.border};
		background-color: ${theme.color.surface};
		width: 100%;
		box-sizing: border-box;
	`}
`;

const StyledMessageOnFocus = styled.span`
	${({ theme }) => css`
		display: block;
		margin-top: 0.25rem;
		font-size: 0.75rem;
		color: ${theme.color.secondaryText};
	`}
`;
