import styled, { css } from "styled-components";
import { DesktopOnly } from "../utils/DesktopOnly";

export const AnimalTableHeader = () => {
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

const Container = styled.th`
	padding: 0.5rem 0.5rem 0.5rem 1rem;
	border: 1px solid ${({ theme }) => theme.color.border};
	color: ${({ theme }) => theme.color.secondaryText};
	column-gap: 1rem;

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
