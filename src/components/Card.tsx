import Image, { StaticImageData } from "next/image";
import styled, { css } from "styled-components";
import { Span } from "./Span";

type ICardProps = {
	text: string;
	image: StaticImageData | string;
	alt: string;
};

export const Card = ({ text, image, alt }: ICardProps) => {
	return (
		<StyledCard>
			<Image src={image} alt={alt} height={60} width={65} />
			<StyledHeading>{text}</StyledHeading>
		</StyledCard>
	);
};

const StyledCard = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		flex-direction: row;
		background-color: ${theme.color.primary};
		justify-content: center;
		flex-wrap: wrap;
		color: white;
		padding: 1rem;
		gap: 1rem;
		border-radius: 0.5rem;

		&&:hover {
			cursor: pointer;
		}

		@media (min-width: ${({ theme }) => theme.screen.laptop}) {
			padding: 2rem;
		}
	`}
`;
const StyledHeading = styled.h2`
	text-align: center;
	font-weight: bold;
	color: white;
`;
