"use client";
import { Card } from "@/components/Card";
import { Grid } from "@/components/Grid";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import styled from "styled-components";
import BarnImage from "../assets/Barn.svg";
import AddBarnImage from "../assets/AddBarn.svg";
import AnimalImage from "../assets/Animal.svg";
import AddAnimalImage from "../assets/AddAnimal.svg";

export default function Home() {
	return (
		<Layout>
			<Container>
				<Header title={"Início"} />
				<Content>
					<Grid>
						<Card
							image={AddBarnImage}
							alt="Visualizar lotes"
							text="Visualizar Lotes"
							href="/"
						/>
						<Card
							image={AnimalImage}
							alt="Visualizar Rebanho"
							text="Visualizar Rebanho"
							href="/"
						/>

						<Card
							image={BarnImage}
							alt="Adicionar lote"
							text="Adicionar Lote"
							href="/"
						/>
						<Card
							image={AddAnimalImage}
							alt="Adicionar Animal"
							text="Adicionar Animal"
							href="/"
						/>
					</Grid>
				</Content>
			</Container>
			<Menu />
		</Layout>
	);
}
const Layout = styled.main`
	display: grid;
	height: 100vh;
	overflow-y: auto;
	background-color: #e9e9e9;
	grid-template-columns: 1fr;
	grid-template-rows: 3.75rem 1fr 3.75rem;
	grid-template-areas: "container" "container" "menu";
	column-gap: 0.5rem;

	@media (min-width: ${({ theme }) => theme.screen.laptop}) {
		padding: 0.5rem;
		grid-template-columns: 5rem 1fr;
		grid-template-rows: 1fr;
		grid-auto-flow: column;
		grid-template-areas: "menu container";
	}
`;

const Container = styled.section`
	display: grid;
	grid-area: container;
	grid-template-rows: 3.75rem 1fr;
	border-radius: 0.5rem;
	overflow-y: auto;
	grid-template-areas: "header" "content";
	background-color: white;
	width: 100%;
	height: 100%;
	@media (min-width: ${({ theme }) => theme.screen.laptop}) {
		padding: 3rem 5rem;
	}
`;

const Content = styled.main`
	padding: 1rem;
	grid-area: content;
`;
