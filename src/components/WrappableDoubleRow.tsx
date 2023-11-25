import styled, { css } from "styled-components";

export const WrappableDoubleRow = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return <Container>{children}</Container>;
};

const Container = styled.div`
	${() => css`
		display: grid;
		grid-template-columns: 1fr;
		column-gap: 1rem;

		@media (min-width: ${({ theme }) => theme.screen.laptop}) {
			grid-template-columns: 1fr 1fr;
		}
	`}
`;
