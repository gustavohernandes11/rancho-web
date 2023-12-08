import styled, { css } from "styled-components"

import { ErrorMessage } from "./ErrorMessage"
import { Label } from "./Label"

interface ITextAreaElementProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    id?: string
    label?: string
    error?: string
}

export const TextArea = ({
    label,
    id,
    error,
    ...props
}: ITextAreaElementProps) => {
    return (
        <>
            {label && <Label htmlFor={id}>{label}</Label>}
            <StyledTextArea id={id} {...props} />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </>
    )
}

const StyledTextArea = styled.textarea`
    ${({ theme }) => css`
        display: flex;
        padding: 0.75rem;
        border-radius: 0.25rem;
        border: 1px solid ${theme.color.border};
        background-color: ${theme.color.surface};
        width: 100%;
        box-sizing: border-box;
        resize: vertical;
        max-height: 10rem;
        min-height: 3rem;
    `}
`
