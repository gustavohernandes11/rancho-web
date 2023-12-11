import styled, { css } from "styled-components"

import { ErrorMessage } from "./ErrorMessage"
import { Label } from "./Label"
import { Mixins } from "@/styles/mixins"

interface ITextAreaElementProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    id?: string
    label?: string
    error?: string | null
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
    ${Mixins.inputAspect};
    width: 100%;
    box-sizing: border-box;
    resize: vertical;
    max-height: 10rem;
    min-height: 3rem;
`
