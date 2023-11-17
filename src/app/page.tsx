"use client";
import { Card } from "@/components/Card";
import { Grid } from "@/components/Grid";
import { Header } from "@/components/Header";
import { IconButton } from "@/components/IconButton";
import { Menu } from "@/components/Menu";
import { Span } from "@/components/Span";
import { Title } from "@/components/Title";
import { SignOut, Cog } from "@styled-icons/fa-solid";
import styled from "styled-components";
import BarnImage from "../assets/Barn.svg";
import AddBarnImage from "../assets/AddBarn.svg";
import AnimalImage from "../assets/Animal.svg";
import AddAnimalImage from "../assets/AddAnimal.svg";

export default function Home() {
	return (
		<Layout>
			<Header>
				<Title>Início</Title>
				<Span>
					<IconButton type="light" icon={<SignOut size={20} />} />
					<IconButton type="light" icon={<Cog size={20} />} />
				</Span>
			</Header>
			<Content>
				<Grid>
					<Card
						image={AddBarnImage}
						alt="Visualizar lotes"
						text="Visualizar Lotes"
					/>
					<Card
						image={AnimalImage}
						alt="Visualizar Rebanho"
						text="Visualizar Rebanho"
					/>

					<Card
						image={BarnImage}
						alt="Adicionar lote"
						text="Adicionar Lote"
					/>
					<Card
						image={AddAnimalImage}
						alt="Adicionar Animal"
						text="Adicionar Animal"
					/>
				</Grid>
			</Content>
			<Menu />
		</Layout>
	);
}
const Layout = styled.main`
	display: grid;
	height: 100vh;
	overflow: hidden;

	grid-template-columns: 1fr;
	grid-template-rows: 3.75rem 1fr 3.75rem;
`;
const Content = styled.main`
	padding: 1rem;
`;
