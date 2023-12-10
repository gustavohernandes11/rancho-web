import styled, { css } from "styled-components"

export const VerticalSpan = ({ children }: any) => {
    return <StyledVerticalSpan>{children}</StyledVerticalSpan>
}

const StyledVerticalSpan = styled.span`
    ${() => css`
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-block: 1rem;
    `}
`
