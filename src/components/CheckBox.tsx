import styled, { css } from "styled-components"
import { ErrorMessage } from "./ErrorMessage"

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string
}

export const CheckBox: React.FC<CheckBoxProps> = ({
    children,
    error,
    ...props
}: any) => {
    return (
        <>
            <StyledSpan>
                <StyledCheckBox {...props} type="checkbox" />
                {children}
            </StyledSpan>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </>
    )
}

const StyledCheckBox = styled.input`
    ${() => css`
        margin-right: 0.5rem;
    `}
`
const StyledSpan = styled.span`
    display: flex;
    align-items: flex-start;
`
