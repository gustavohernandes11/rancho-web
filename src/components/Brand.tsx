import styled from "styled-components";

type IBrand = {
	textAlign?: "center" | "start";
};

export const Brand = ({ textAlign }: IBrand) => {
	return (
		<Container textAlign={textAlign}>
			<Title>Rancho</Title>
			<Subtitle>Gerenciamento de gado leiteiro</Subtitle>
		</Container>
	);
};

const Container = styled.div<IBrand>`
	text-align: ${({ textAlign }) => textAlign || "center"};
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
