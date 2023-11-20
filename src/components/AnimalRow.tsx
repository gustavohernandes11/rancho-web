import styled, { css } from "styled-components";
import { Button } from "./Button";
import { IconButton } from "./IconButton";
import { Trash, EllipsisVertical } from "@styled-icons/fa-solid";
import { DesktopOnly } from "./utils/DesktopOnly";
import { MobileOnly } from "./utils/MobileOnly";
import { DropdownWrapper } from "./DropdownWrapper";
const Actions = () => {
	return (
		<Span>
			<StyledButton>Detalhes</StyledButton>
			<IconButton
				type="secondary"
				icon={<Trash color="white" size={16} />}
			/>
		</Span>
	);
};

export const AnimalRow = () => {
	return (
		<Container>
			<Item>Amarelinha</Item>
			<Item>Fêmea</Item>
			<Item>5 anos e 6 meses</Item>
			<DesktopOnly>
				<Actions />
			</DesktopOnly>
			<MobileOnly>
				<DropdownWrapper itemsToDropDown={<Actions />}>
					<IconButton
						type="light"
						icon={<EllipsisVertical size={20} />}
					/>
				</DropdownWrapper>
			</MobileOnly>
		</Container>
	);
};

const Container = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem 0.5rem 0.5rem 1rem;
		background-color: ${theme.color.surface};
		border: 1px solid ${theme.color.border};
		outline-color: ${theme.color.border};
		margin-bottom: 0.5rem;
		border-radius: 0.5rem;

		&&:hover {
			cursor: pointer;
			transition: outline ease-in-out 150ms;
			outline: 2px solid ${theme.color.border};
		}
	`}
`;
const Item = styled.p`
	${() => css`
		display: inline;
		font-size: 0.875rem;
		font-weight: 100;
	`}
`;

const Span = styled.span`
	display: flex;
	gap: 0.5rem;
`;

const StyledButton = styled(Button)`
	padding: 0.5rem;
	font-weight: 400;
	font-size: 0.875rem;
`;
