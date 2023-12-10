import styled, { css } from "styled-components"

import { ErrorMessage } from "./ErrorMessage"
import { Label } from "./Label"
import { useState } from "react"
import { Mixins } from "@/styles/mixins"

interface IInputElementProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    id?: string
    messageOnFocus?: string
    label?: string
    error?: string
}

export const Input: React.FC<IInputElementProps> = ({
    messageOnFocus,
    label,
    id,
    error,
    ...props
}) => {
    const [focused, setFocused] = useState(false)
    return (
        <>
            {label && <Label htmlFor={id}>{label}</Label>}
            {focused && messageOnFocus && (
                <StyledMessageOnFocus>{messageOnFocus}</StyledMessageOnFocus>
            )}
            <StyledInput
                id={id}
                {...props}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </>
    )
}

const StyledInput = styled.input`
    ${Mixins.inputAspect};
    width: 100%;
    box-sizing: border-box;
`

const StyledMessageOnFocus = styled.span`
    ${({ theme }) => css`
        display: block;
        margin-top: 0.25rem;
        font-size: 0.75rem;
        color: ${theme.color.secondaryText};
    `}
`
