import styled, { css } from "styled-components";
import { Label } from "./Label";

interface ITextAreaElementProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	id?: string;
	label: string;
}

export const TextArea = ({ label, id, ...props }: ITextAreaElementProps) => {
	return (
		<>
			{label && <Label htmlFor={id}>{label}</Label>}
			<StyledTextArea {...props} />
		</>
	);
};

const StyledTextArea = styled.textarea`
	${({ theme }) => css`
		display: flex;
		padding: 0.75rem;
		border-radius: 0.5rem;
		border: 1px solid ${theme.color.border};
		background-color: ${theme.color.surface};
		width: 100%;
		box-sizing: border-box;
		resize: vertical;
		max-height: 5rem;
		min-height: 3rem;
	`}
`;
