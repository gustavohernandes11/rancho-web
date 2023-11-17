import styled, { css } from "styled-components";
import { IconButton } from "./IconButton";
import { House, Plus, List } from "@styled-icons/fa-solid";

export const Menu = () => {
	return (
		<StyledMenu>
			<IconButton type="light" icon={<House size={20} />} />
			<IconButton type="primary" icon={<Plus size={20} />} />
			<IconButton type="light" icon={<List size={20} />} />
		</StyledMenu>
	);
};

const StyledMenu = styled.menu`
	${() => css`
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		width: 100%;
		padding-inline: 1rem;
	`}
`;
