import styled, { css } from "styled-components";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { Trash, EllipsisVertical, Eye, Exchange } from "@styled-icons/fa-solid";
import { DesktopOnly } from "../utils/DesktopOnly";
import { MobileOnly } from "../utils/MobileOnly";
import { DropdownWrapper } from "../DropdownWrapper";

const Actions = () => {
	return (
		<Span>
			<IconButton
				type="secondary"
				icon={<Trash color="white" size={16} />}
			/>
			<IconButton type="primary" icon={<Eye color="white" size={16} />} />
		</Span>
	);
};
type IAnimalRowProps = {
	viewMode?: boolean;
};
export const AnimalRow = ({ viewMode }: IAnimalRowProps) => {
	return (
		<Container>
			<Item>Amarelinha</Item>
			<Item>Fêmea</Item>
			<Item>5 anos e 6 meses</Item>
			{viewMode ? (
				<Span>
					<IconButton type="secondary" icon={<Eye size={16} />} />
					<IconButton
						type="secondary"
						icon={<Exchange size={16} />}
					/>
				</Span>
			) : (
				<>
					<DesktopOnly>
						<Actions />
					</DesktopOnly>
					<MobileOnly>
						<DropdownWrapper itemsToDropDown={<Actions />}>
							<IconButton
								type="secondary"
								icon={<EllipsisVertical size={16} />}
							/>
						</DropdownWrapper>
					</MobileOnly>
				</>
			)}
		</Container>
	);
};

const Container = styled.tr`
	${({ theme }) => css`
		display: grid;
		grid-auto-flow: column;
		grid-column-end: auto;
		padding: 0.5rem 0.5rem 0.5rem 1rem;
		background-color: ${theme.color.surface};
		border: 1px solid ${theme.color.border};
		outline-color: ${theme.color.border};
		column-gap: 1rem;

		:last-child {
			justify-content: end;
		}

		&:last-child {
			margin-bottom: 0.5rem;
		}

		&&:hover {
			cursor: pointer;
			transition: outline ease-in-out 150ms;
			outline: 2px solid ${theme.color.border};
		}
	`}
`;
const Item = styled.p`
	${() => css`
		display: inline-flex;
		align-items: center;
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
