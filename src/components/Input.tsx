import styled, { css } from "styled-components"

import { ErrorMessage } from "./ErrorMessage"
import { Label } from "./Label"
import { forwardRef, useState } from "react"
import { Mixins } from "@/styles/mixins"

interface IInputElementProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    id?: string
    messageOnFocus?: string
    label?: string
    ref?: React.Ref<any>
    error?: string | null
}

const Input: React.FC<IInputElementProps> = forwardRef(
    ({ messageOnFocus, label, id, error, ...props }, ref) => {
        const [focused, setFocused] = useState(false)
        return (
            <>
                {label && <Label htmlFor={id}>{label}</Label>}
                {focused && messageOnFocus && (
                    <StyledMessageOnFocus>
                        {messageOnFocus}
                    </StyledMessageOnFocus>
                )}
                <StyledInput
                    ref={ref}
                    id={id}
                    autoComplete="nope"
                    {...props}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </>
        )
    }
)
Input.displayName = "Input"
export { Input }

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
