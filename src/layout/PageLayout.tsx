import styled from "styled-components"

export const PageLayout = styled.main`
    display: grid;
    height: 100vh;
    overflow-y: auto;
    background-color: #e9e9e9;
    grid-template-columns: 1fr;
    grid-template-rows: 3.75rem 1fr 3.75rem;
    grid-template-areas: "container" "container" "menu";
    column-gap: 0.5rem;

    @media (min-width: ${({ theme }) => theme.screen.laptop}) {
        padding: 0.5rem;
        grid-template-columns: 5rem 1fr;
        grid-template-rows: 1fr;
        grid-auto-flow: column;
        grid-template-areas: "menu container";
    }
`
