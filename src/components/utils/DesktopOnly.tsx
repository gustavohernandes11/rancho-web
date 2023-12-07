import styled from "styled-components"

export const DesktopOnly = ({ children, ...props }: any) => {
    return <StyledDesktopOnly {...props}>{children}</StyledDesktopOnly>
}

const StyledDesktopOnly = styled.div`
    display: contents;
    @media (max-width: ${({ theme }) => theme.screen.laptop}) {
        display: none;
    }
`
