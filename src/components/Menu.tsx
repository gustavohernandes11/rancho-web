import styled, { css } from "styled-components";
import { IconButton } from "./IconButton";
import { House, Plus, List } from "@styled-icons/fa-solid";
import { MobileOnly } from "./utils/MobileOnly";
import { DesktopOnly } from "./utils/DesktopOnly";
import { usePathname } from "next/navigation";

export const Menu = () => {
	const pathname = usePathname();

	return (
		<>
			<MobileOnly>
				<HorizontalStyledMenu>
					<IconButton type="light" icon={<House size={20} />} />
					<IconButton type="primary" icon={<Plus size={20} />} />
					<IconButton type="light" icon={<List size={20} />} />
				</HorizontalStyledMenu>
			</MobileOnly>
			<DesktopOnly>
				<VerticalStyledMenu>
					<IconButton
						href="/"
						type="primary"
						active={pathname === "/"}
						icon={<House size={20} />}
					/>

					<IconButton
						href={"/animais/adicionar"}
						type="primary"
						active={pathname === "/animais/adicionar"}
						icon={<Plus size={20} />}
					/>
					<IconButton
						href="/animais"
						type="primary"
						active={pathname === "/animais"}
						icon={<List size={20} />}
					/>
				</VerticalStyledMenu>
			</DesktopOnly>
		</>
	);
};

const HorizontalStyledMenu = styled.menu`
	${() => css`
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		width: 100%;
		padding: 0;
	`}
`;
const VerticalStyledMenu = styled.menu`
	${() => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		grid-area: menu;
		gap: 0.5rem;
		width: 5rem;
		background-color: ${({ theme }) => theme.color.primary};
		border-radius: 0.5rem;
		padding: 1rem;
	`}
`;
