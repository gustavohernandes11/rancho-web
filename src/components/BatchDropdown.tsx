import styled, { css } from "styled-components";
import { useState } from "react";
import { IconButton } from "./IconButton";
import {
	ChevronLeft,
	ChevronDown,
	Edit,
	Exchange,
} from "@styled-icons/fa-solid";
import { AnimalRow } from "./AnimalTable/AnimalRow";
import { IAnimal } from "@/types/IAnimal";

interface IBatchDropdown {
	title: string;
	viewMode?: boolean;
	description?: string;
	animals: IAnimal[];
}

export const BatchDropdown = ({
	animals,
	title,
	description,
	viewMode,
}: IBatchDropdown) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Container>
				<div>
					<BatchTitle>{title}</BatchTitle>
					{description && (
						<BatchDescription>{description}</BatchDescription>
					)}
				</div>
				<BatchCount>
					{animals.length}
					{animals.length > 1 ? " animais" : " animal"}
				</BatchCount>
				<ActionSpan>
					{viewMode ? (
						<IconButton
							type="secondary"
							icon={<Exchange size={16} />}
						/>
					) : (
						<>
							<IconButton
								type="secondary"
								icon={<Edit color="white" size={16} />}
							/>
							<IconButton
								onClick={() => setIsOpen(() => !isOpen)}
								type="secondary"
								icon={
									isOpen ? (
										<ChevronDown color="white" size={16} />
									) : (
										<ChevronLeft color="white" size={16} />
									)
								}
							/>
						</>
					)}
				</ActionSpan>
			</Container>
			<AnimalsContainer>
				{isOpen &&
					animals.map((animal: any) => <AnimalRow key={animal.id} />)}
			</AnimalsContainer>
		</>
	);
};

const Container = styled.div`
	${({ theme }) => css`
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		grid-auto-flow: row;
		column-gap: 1rem;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem 0.5rem 0.5rem 1rem;
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

const BatchTitle = styled.h2`
	font-weight: 400;
	font-size: 1rem;
`;
const BatchDescription = styled.p`
	font-size: 0.75rem;
	font-weight: 100;
`;
const BatchCount = styled.p`
	${() => css`
		display: inline;
		font-size: 1rem;
		font-weight: 100;
	`}
`;

const ActionSpan = styled.span`
	display: flex;
	gap: 0.5rem;
	margin-left: auto;
`;

const AnimalsContainer = styled.div`
	padding-left: 1rem;
`;
