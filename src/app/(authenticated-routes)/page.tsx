"use client";
import { Card } from "@/components/Card";
import { Grid } from "@/components/Grid";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import BarnImage from "@/assets/Barn.svg";
import AddBarnImage from "@/assets/AddBarn.svg";
import AnimalImage from "@/assets/Animal.svg";
import AddAnimalImage from "@/assets/AddAnimal.svg";
import { Container } from "@/layout/Container";
import { Content } from "@/layout/Content";
import { PageLayout } from "@/layout/PageLayout";
import { ContainerNoAside } from "@/layout/ContainerNoAside";

export default function Home() {
	return (
		<PageLayout>
			<ContainerNoAside>
				<Header title={"Início"} />
				<Content>
					<Grid>
						<Card
							image={AddBarnImage}
							alt="Visualizar lotes"
							text="Visualizar Lotes"
							href="/batches"
						/>
						<Card
							image={AnimalImage}
							alt="Visualizar Rebanho"
							text="Visualizar Rebanho"
							href="/animals"
						/>

						<Card
							image={BarnImage}
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
				</Content>
			</ContainerNoAside>
			<Menu />
		</PageLayout>
	);
}
