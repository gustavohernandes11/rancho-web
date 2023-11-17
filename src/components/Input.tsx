import { useState } from "react";
import styled, { css } from "styled-components";

interface IInputElementProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	messageOnFocus?: string;
}

export const Input: React.FC<IInputElementProps> = ({
	messageOnFocus,
	...props
}) => {
	const [focused, setFocused] = useState(false);
	return (
		<>
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
		border-radius: 0.5rem;
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
		font-color: ${theme.color.secondaryText};
	`}
`;
