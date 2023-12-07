import styled, { css } from "styled-components"

export const ErrorMessage = ({ children }: { children: string }) => {
    return <StyledSmall>{children}</StyledSmall>
}

const StyledSmall = styled.small`
    ${({ theme }) => css`
        display: block;
        text-align: center;
        color: ${theme.color.danger};
        margin: 1rem auto;
    `}
`
