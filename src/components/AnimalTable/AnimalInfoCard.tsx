import styled, { css } from "styled-components";
import { IconButton } from "../IconButton";
import { Trash, Edit } from "@styled-icons/fa-solid";
import { MobileOnly } from "../utils/MobileOnly";

type IAnimalInfoCardProps = {
	name: string;
	age: string;
	code: string;
	gender: string;
};

export const AnimalInfoCard = ({
	name,
	age,
	code,
	gender,
}: IAnimalInfoCardProps) => {
	return (
		<Container>
			<SpaceBetween>
				<Heading>{name}</Heading>
				<MobileOnly>
					<ActionsContainer>
						<IconButton
							type="primary"
							icon={<Trash color="white" size={16} />}
						/>
						<IconButton
							type="primary"
							icon={<Edit color="white" size={16} />}
						/>
					</ActionsContainer>
				</MobileOnly>
			</SpaceBetween>
			<Informations>
				<Info name="sexo" value={gender} />
				<Info name="idade" value={age} />
				<Info name="código" value={code} />
			</Informations>
		</Container>
	);
};

type IInfoProps = { value: string; name: string };

const Info = ({ value, name }: IInfoProps) => {
	return (
		<InfoContainer>
			<InfoValue>{value || "-"}</InfoValue>
			<InfoName>{name || "-"}</InfoName>
		</InfoContainer>
	);
};

const Container = styled.div`
	${({ theme }) => css`
		padding: 1rem;
		width: 100%;
		background-color: ${theme.color.primary};
		color: white;
		border-radius: 0.5rem;
	`}
`;
const ActionsContainer = styled.div`
	margin-left: auto;
	display: flex;
	align-items: start;
`;

const Heading = styled.h2`
	font-size: 1.5rem;
	font-weight: 500;
	color: white;
	margin-bottom: 2rem;
`;

const InfoValue = styled.h2`
	font-weight: 500;
	font-size: 1.25rem;
	color: inherit;
`;
const InfoName = styled.p`
	font-size: 0.875rem;
	color: #ebebeb;
`;
const Informations = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
`;
const InfoContainer = styled.div`
	display: inline-block;
`;
const SpaceBetween = styled.div`
	display: flex;
`;
