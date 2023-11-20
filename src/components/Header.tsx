import { SignOut, Cog } from "@styled-icons/fa-solid";
import styled from "styled-components";
import { IconButton } from "./IconButton";
import { Span } from "./Span";
import { Title } from "./Title";
import { DesktopOnly } from "./utils/DesktopOnly";

export const Header = ({ title }: { title: string }) => {
	return (
		<StyledHeader>
			<Title>{title}</Title>
			<Span>
				<DesktopOnly>
					<Paragraph>account.exemple@gmail.com</Paragraph>
				</DesktopOnly>
				<IconButton type="light" icon={<SignOut size={20} />} />
				<IconButton type="light" icon={<Cog size={20} />} />
			</Span>
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
	display: flex;
	grid-area: header;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 3.75rem;
	padding-inline: 1rem;

	@media (min-width: ${({ theme }) => theme.screen.laptop}) {
		padding-inline: 0;
	}
`;
const Paragraph = styled.p`
	display: inline;
	padding: 1rem;
`;
