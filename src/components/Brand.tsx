import styled from "styled-components";

export const Brand = () => {
	return (
		<Container>
			<Title>Rancho</Title>
			<Subtitle>Gerenciamento de gado leiteiro</Subtitle>
		</Container>
	);
};

const Container = styled.div`
	text-align: center;
`;
const Title = styled.h1`
	font-weight: bold;
	font-size: 2rem;
	margin-bottom: 0.5rem;
`;
const Subtitle = styled.p`
	font-size: 0.75rem;
	color: ${({ theme }) => theme.color.secondaryText};
`;
