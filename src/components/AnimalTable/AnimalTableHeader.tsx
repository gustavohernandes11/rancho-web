import styled, { css } from "styled-components";
import { DesktopOnly } from "../utils/DesktopOnly";

export const AnimalTableHeader = () => {
	return (
		<StyledTableHeader>
			<Item>Nome</Item>
			<Item>Gênero</Item>
			<Item>Idade</Item>
			<DesktopOnly>
				<Item>Ações</Item>
			</DesktopOnly>
		</StyledTableHeader>
	);
};

const StyledTableHeader = styled.thead`
	display: grid;
	grid-auto-flow: column;
	column-gap: 1rem;

	padding: 0.5rem 0.5rem 0.5rem 1rem;
	border: 1px solid ${({ theme }) => theme.color.border};
	color: ${({ theme }) => theme.color.secondaryText};

	&:first-child {
		border-top-left-radius: 0.25rem;
		border-top-right-radius: 0.25rem;
	}
`;
const Item = styled.tr`
	${() => css`
		display: inline-flex;
		justify-content: start;
		align-items: start;
	`}
`;
