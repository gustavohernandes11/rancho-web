import { SignOut, Cog, ArrowLeft } from "@styled-icons/fa-solid";
import styled from "styled-components";
import { IconButton } from "./IconButton";
import { Title } from "./Title";
import { DesktopOnly } from "./utils/DesktopOnly";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export const Header = ({ title }: { title: string }) => {
	const { back } = useRouter();
	const pathname = usePathname();
	return (
		<StyledHeader>
			<GoBackContainer>
				{pathname !== "/" ? (
					<IconButton
						onClick={back}
						type="light"
						icon={<ArrowLeft size={16} />}
					/>
				) : null}
			</GoBackContainer>
			<Title>{title}</Title>
			<ActionsContainer>
				<DesktopOnly>
					<Paragraph>account.exemple@gmail.com</Paragraph>
					<IconButton
						onClick={() => signOut()}
						type="light"
						icon={<SignOut size={16} />}
					/>
				</DesktopOnly>
				<IconButton type="light" icon={<Cog size={16} />} />
			</ActionsContainer>
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
	display: grid;
	grid-template-columns: auto 2fr 1fr;
	grid-template-areas: "goback title actions";
	column-gap: 1rem;
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
	grid-area: title;
`;
const ActionsContainer = styled.span`
	display: inline-flex;
	gap: 0.5rem;
	justify-self: end;
	grid-area: actions;
`;
const GoBackContainer = styled.span`
	display: inline-flex;
	gap: 0.5rem;
	justify-self: start;
	grid-area: goback;
`;
