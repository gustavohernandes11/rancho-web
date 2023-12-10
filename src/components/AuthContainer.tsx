import styled from "styled-components"

export const AuthContainer = ({ children }: { children: React.ReactNode }) => {
    return <Container>{children}</Container>
}

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 25rem;
    margin: auto;
    padding: 4rem 3rem;
    gap: 3rem;
`
