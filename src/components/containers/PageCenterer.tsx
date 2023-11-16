import styled from "styled-components";

export const PageCenterer = ({ children }: { children: React.ReactNode }) => {
	return <Container>{children}</Container>;
};

const Container = styled.div`
	display: flex;
	height: 100vh;
	width: 100%;
	align-items: center;
	flex-direction: column;
	padding: 4rem 3rem;
	gap: 3rem;
`;
