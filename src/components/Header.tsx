import { SignOut, Cog, ArrowLeft } from "@styled-icons/fa-solid";
import styled from "styled-components";
import { IconButton } from "./IconButton";
import { Span } from "./Span";
import { Title } from "./Title";
import { DesktopOnly } from "./utils/DesktopOnly";
import { useRouter } from "next/navigation";

export const Header = ({ title }: { title: string }) => {
	const { back } = useRouter();
	return (
		<StyledHeader>
			<IconButton
				onClick={back}
				type="light"
				icon={<ArrowLeft size={16} />}
			/>
			<Title textAlign="center">{title}</Title>
			<JustifyEnd>
				<DesktopOnly>
					<Paragraph>account.exemple@gmail.com</Paragraph>
					<IconButton type="light" icon={<SignOut size={16} />} />
				</DesktopOnly>
				<IconButton type="light" icon={<Cog size={16} />} />
			</JustifyEnd>
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	grid-auto-flow: row;
	grid-area: header;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 3.75rem;

	@media (min-width: ${({ theme }) => theme.screen.laptop}) {
		padding-inline: 1rem;
	}
`;
const Paragraph = styled.p`
	display: inline;
	text-align: start;
	padding-block: 1rem;
`;
const JustifyEnd = styled.span`
	display: inline-flex;
	gap: 0.5rem;
	justify-self: end;
`;
