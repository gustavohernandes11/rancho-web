"use client";
import { Card } from "@/components/Card";
import { Grid } from "@/components/Grid";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import styled from "styled-components";
import AddBarnImage from "../../assets/AddBarn.svg";
import AddAnimalImage from "../../assets/AddAnimal.svg";
import { BatchDropdown } from "@/components/BatchDropdown";

export default function BatchesPage() {
	return (
		<Layout>
			<Container>
				<Header title={"Lotes"} />
				<Content>
					<BatchDropdown
						title="Bezerros"
						description="Bezerros que estão com as vacas de leite"
						animals={[
							{ name: "any-name", id: "any-id" },
							{ name: "any-name", id: "any-id2" },
							{ name: "any-name", id: "any-id3" },
						]}
					/>
					<BatchDropdown
						title="Vacas em lactação"
						animals={[{ name: "any-name", id: "any-id2" }]}
					/>
					<BatchDropdown
						title="Touros"
						animals={[{ name: "any-name", id: "any-id3" }]}
					/>
					<BatchDropdown
						title="Vacas solteiras"
						animals={[{ name: "any-name", id: "any-id4" }]}
					/>
				</Content>
				<Aside>
					<Grid>
						<Card
							image={AddBarnImage}
							alt="Adicionar lote"
							text="Adicionar Lote"
							href="/batches/add"
						/>
						<Card
							image={AddAnimalImage}
							alt="Adicionar Animal"
							text="Adicionar Animal"
							href="/animals/add"
						/>
					</Grid>
				</Aside>
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
	border-radius: 0.5rem;
	overflow-y: auto;
	background-color: white;
	width: 100%;
	height: 100%;

	grid-template-rows: 1fr;
	grid-template-rows: 3.75rem 2fr 1fr;
	grid-template-areas:
		"header"
		"aside"
		"content";
	padding: 1rem;

	@media (min-width: ${({ theme }) => theme.screen.laptop}) {
		grid-template-rows: 3.75rem 1fr;
		grid-template-columns: 2fr 1fr;
		grid-template-areas:
			"header header"
			"content aside";
		padding: 3rem 5rem;
		gap: 3rem;
	}
`;

const Aside = styled.aside`
	grid-area: aside;
`;

const Content = styled.main`
	grid-area: content;
`;
