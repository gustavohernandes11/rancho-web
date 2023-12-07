import styled, { css } from "styled-components"

export const Span = ({ children }: any) => {
    return <StyledSpan>{children}</StyledSpan>
}

const StyledSpan = styled.span`
    ${() => css`
        display: inline-flex;
        gap: 0.5rem;
    `}
`
