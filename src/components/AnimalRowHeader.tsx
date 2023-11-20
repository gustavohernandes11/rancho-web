import styled, { css } from "styled-components";
import { DesktopOnly } from "./utils/DesktopOnly";

export const AnimalRowHeader = () => {
	return (
		<Container>
			<Item>Nome</Item>
			<Item>Gênero</Item>
			<Item>Idade</Item>
			<DesktopOnly>
				<Item>Ações</Item>
			</DesktopOnly>
		</Container>
	);
};

const Container = styled.div`
	padding: 0.5rem 0.5rem 0.5rem 1rem;
	margin-bottom: 0.5rem;

	display: grid;
	grid-auto-flow: column;
`;
const Item = styled.p`
	${() => css`
		display: inline-flex;
		justify-content: start;
		align-items: start;
	`}
`;
