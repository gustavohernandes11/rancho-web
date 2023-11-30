"use client";
import { Card } from "@/components/Card";
import { Grid } from "@/components/Grid";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import AddBarnImage from "@/assets/AddBarn.svg";
import AddAnimalImage from "@/assets/AddAnimal.svg";
import { BatchDropdown } from "@/components/BatchDropdown";
import { Section } from "@/layout/Section";
import { Aside } from "@/layout/Aside";
import { Content } from "@/layout/Content";
import { Container } from "@/layout/Container";
import { PageLayout } from "@/layout/PageLayout";

const mockedAnimals = [
	{
		name: "any-name",
		id: "any-id",
		age: "123123",
		gender: "F",
	},
	{
		name: "any-name",
		id: "any-id2",
		age: "123123",
		gender: "F",
	},
	{
		name: "any-name",
		id: "any-id3",
		age: "123123",
		gender: "F",
	},
];

export default function BatchesPage() {
	return (
		<PageLayout>
			<Container>
				<Header title={"Lotes"} />
				<Content>
					<Section>
						<BatchDropdown
							title="Bezerros"
							description="Bezerros que estão com as vacas de leite"
							animals={mockedAnimals}
						/>
						<BatchDropdown
							title="Vacas em lactação"
							animals={mockedAnimals}
						/>
						<BatchDropdown title="Touros" animals={mockedAnimals} />
						<BatchDropdown
							title="Vacas solteiras"
							animals={mockedAnimals}
						/>
					</Section>
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
		</PageLayout>
	);
}
