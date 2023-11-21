"use client";
import { Card } from "@/components/Card";
import { Grid } from "@/components/Grid";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import AddBarnImage from "../../assets/AddBarn.svg";
import AddAnimalImage from "../../assets/AddAnimal.svg";
import { BatchDropdown } from "@/components/BatchDropdown";
import { Section } from "@/layout/Section";
import { Aside } from "@/layout/Aside";
import { Content } from "@/layout/Content";
import { Container } from "@/layout/Container";
import { PageLayout } from "@/layout/PageLayout";

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
