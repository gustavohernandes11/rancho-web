import styled from "styled-components"

export const MobileOnly = ({ children, ...props }: any) => {
    return <StyledDesktopOnly {...props}>{children}</StyledDesktopOnly>
}

const StyledDesktopOnly = styled.div`
    display: contents;
    @media (min-width: ${({ theme }) => theme.screen.laptop}) {
        display: none;
    }
`
