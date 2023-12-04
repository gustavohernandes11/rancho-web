import Image, { StaticImageData } from "next/image";
import styled, { css } from "styled-components";
import Link from "next/link";

type ICardProps = {
	text: string;
	image: StaticImageData | string;
	alt: string;
	href: string;
};

export const Card = ({ text, image, alt, href }: ICardProps) => {
	return (
		<StyledCard href={href}>
			<Image src={image} alt={alt} height={50} width={50} />
			<StyledHeading>{text}</StyledHeading>
		</StyledCard>
	);
};

const StyledCard = styled(Link)`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		flex-direction: row;
		background-color: ${theme.color.primary};
		justify-content: center;
		flex-wrap: wrap;
		color: white;
		padding: 0.5rem;
		gap: 1rem;
		border-radius: 0.25rem;
		transition: background-color ease-in-out 250ms;

		&&:hover {
			cursor: pointer;
			background-color: ${theme.color.secondary};
		}

		@media (min-width: ${({ theme }) => theme.screen.laptop}) {
			padding: 1rem;

			height: 12rem;
			width: 12rem;
		}
	`}
`;
const StyledHeading = styled.h2`
	text-align: center;
	font-size: 1rem;
	color: white;
`;
