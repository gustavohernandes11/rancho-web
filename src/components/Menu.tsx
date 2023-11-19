import styled, { css } from "styled-components";
import { IconButton } from "./IconButton";
import { House, Plus, List } from "@styled-icons/fa-solid";
import { MobileOnly } from "./utils/MobileOnly";
import { DesktopOnly } from "./utils/DesktopOnly";

export const Menu = () => {
	return (
		<>
			<MobileOnly>
				<HorizontalContainer>
					<IconButton type="light" icon={<House size={20} />} />
					<IconButton type="primary" icon={<Plus size={20} />} />
					<IconButton type="light" icon={<List size={20} />} />
				</HorizontalContainer>
			</MobileOnly>
			<DesktopOnly>
				<VerticalAsideContainer>
					<IconButton type="primary" icon={<House size={20} />} />
					<IconButton type="primary" icon={<Plus size={20} />} />
					<IconButton type="primary" icon={<List size={20} />} />
				</VerticalAsideContainer>
			</DesktopOnly>
		</>
	);
};

const HorizontalContainer = styled.menu`
	${() => css`
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		width: 100%;
	`}
`;
const VerticalAsideContainer = styled.menu`
	${() => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		grid-area: menu;
		width: 5rem;
		background-color: ${({ theme }) => theme.color.primary};
		border-radius: 0.5rem;
		padding: 1rem;
	`}
`;
