import styled, { css } from "styled-components"

export const InlineBox = ({ children }: any) => {
    return <StyledInlineBox>{children}</StyledInlineBox>
}

const StyledInlineBox = styled.span`
    ${() => css`
        display: inline-flex;
        gap: 0.5rem;
        margin-bottom: 1rem;
        @media (max-width: ${({ theme }) => theme.screen.laptop}) {
            margin-block: 1rem;
        }
    `}
`
