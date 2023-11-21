import styled from "styled-components";
import { Container } from "./Container";

export const ContainerAsideAtBottom = styled(Container)`
	grid-template-areas:
		"header"
		"content"
		"aside";

	@media (min-width: ${({ theme }) => theme.screen.laptop}) {
		grid-template-areas:
			"header header"
			"content aside";
	}
`;
