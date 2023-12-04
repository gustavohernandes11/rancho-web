import styled from "styled-components";
import { Container } from "./Container";

export const ContainerNoAside = styled(Container)`
	grid-template-areas:
		"header"
		"content"
		"content";

	@media (min-width: ${({ theme }) => theme.screen.laptop}) {
		grid-template-areas:
			"header header"
			"content content";
	}
`;
