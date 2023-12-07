import styled from "styled-components"

export const AuthContainer = ({ children }: { children: React.ReactNode }) => {
    return <Container>{children}</Container>
}

const Container = styled.div`
    display: flex;
    width: 100%;
    max-width: 25rem;
    margin: auto;
    align-items: center;
    flex-direction: column;
    padding: 4rem 3rem;
    gap: 3rem;
`
