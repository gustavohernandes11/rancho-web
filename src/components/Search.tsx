import styled, { css } from "styled-components";
import { Input } from "./Input";
import { MagnifyingGlass } from "@styled-icons/fa-solid";
import { IconButton } from "./IconButton";

export const Search = () => {
	return (
		<Container>
			<StyledInput placeholder="Buscar..." />
			<SmallIconButton
				type="primary"
				icon={<MagnifyingGlass color="white" size={16} />}
			/>
		</Container>
	);
};

const StyledInput = styled(Input)`
	border: none;
`;
const Container = styled.div`
	${({ theme }) => css`
		display: flex;
		max-width: 20rem;
		border-radius: 0.5rem;
		background-color: ${theme.color.surface};
		border: 1px solid ${theme.color.border};
		margin-bottom: 1rem;
		height: 2rem;
		@media (max-width: ${({ theme }) => theme.screen.laptop}) {
			margin-block: 1rem;
		}
	`}
`;
const SmallIconButton = styled(IconButton)`
	padding: 0.5rem 0.875rem;
	display: flex;
`;
