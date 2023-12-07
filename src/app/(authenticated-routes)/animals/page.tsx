"use client";
import { Card } from "@/components/Card";
import { Grid } from "@/components/Grid";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import AddBarnImage from "@/assets/AddBarn.svg";
import AddAnimalImage from "@/assets/AddAnimal.svg";
import { Search } from "@/components/Search";
import { Aside } from "@/layout/Aside";
import { Container } from "@/layout/Container";
import { Content } from "@/layout/Content";
import { PageLayout } from "@/layout/PageLayout";
import { AnimalTable } from "@/components/AnimalTable";
import { useAnimalContext } from "@/hooks/useAnimalContext";

export default function AnimalsPage() {
	const { animals } = useAnimalContext();

	return (
		<PageLayout>
			<Container>
				<Header title={"Animais"} />
				<Content>
					<Search />
					<AnimalTable animals={animals} />
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
