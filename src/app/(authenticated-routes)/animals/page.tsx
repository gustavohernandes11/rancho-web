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
import { useEffect, useState } from "react";
import { listAnimals } from "@/requests/listAnimals";
import { AnimalTable } from "@/components/AnimalTable";
import { IAnimal } from "@/types/IAnimal";

export default function AnimalsPage() {
	const [animals, setAnimals] = useState<IAnimal[]>([]);

	useEffect(() => {
		listAnimals().then(({ data }) => {
			setAnimals(data);
		});
	}, []);

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
							href="/"
						/>
						<Card
							image={AddAnimalImage}
							alt="Adicionar Animal"
							text="Adicionar Animal"
							href="/"
						/>
					</Grid>
				</Aside>
			</Container>
			<Menu />
		</PageLayout>
	);
}
