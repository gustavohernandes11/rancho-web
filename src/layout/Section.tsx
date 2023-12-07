import styled from "styled-components"

export const Section = styled.section`
    @media (max-width: ${({ theme }) => theme.screen.laptop}) {
        padding-block: 1rem;
    }
`
