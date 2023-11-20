import styled, { css } from "styled-components";
import { IAnimal } from "@/types/IAnimal";
import { CheckBox } from "./CheckBox";

interface IAnimalCheckBoxProps {
	animal: IAnimal;
}

export const AnimalCheckBox = ({ animal }: IAnimalCheckBoxProps) => {
	return (
		<Container>
			<Item>{animal.name}</Item>
			<Item>{animal.gender}</Item>
			<Item>{animal.age}</Item>
			<StyledCheckBox />
		</Container>
	);
};

const Container = styled.div`
	${({ theme }) => css`
		display: grid;
		grid-auto-flow: row;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		background-color: ${theme.color.surface};
		border: 1px solid ${theme.color.border};
		outline-color: ${theme.color.border};
		margin-bottom: 0.5rem;
		border-radius: 0.5rem;

		&&:hover {
			cursor: pointer;
			transition: outline ease-in-out 150ms;
			outline: 2px solid ${theme.color.border};
		}
	`}
`;
const StyledCheckBox = styled(CheckBox)`
	${({ theme }) => css`
		margin: 0;
		color: white;
		border: 1px solid ${theme.color.border};
		accent-color: ${theme.color.primary};
		transform: scale(1.5);
		margin-left: auto;
	`}
`;
const Item = styled.p`
	${() => css`
		display: inline;
		font-size: 0.875rem;
		font-weight: 100;
	`}
`;
