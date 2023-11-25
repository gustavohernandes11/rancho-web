"use client";
import { Card } from "@/components/Card";
import { Grid } from "@/components/Grid";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import AddBarnImage from "../../assets/AddBarn.svg";
import AddAnimalImage from "../../assets/AddAnimal.svg";
import { Search } from "@/components/Search";
import { AnimalRow } from "@/components/AnimalTable/AnimalRow";
import { AnimalTableHeader } from "@/components/AnimalTable/AnimalTableHeader";
import { Aside } from "@/layout/Aside";
import { Container } from "@/layout/Container";
import { Content } from "@/layout/Content";
import { PageLayout } from "@/layout/PageLayout";

export default function AnimalsPage() {
	return (
		<PageLayout>
			<Container>
				<Header title={"Animais"} />
				<Content>
					<Search />
					<AnimalTableHeader />
					<AnimalRow />
					<AnimalRow />
					<AnimalRow />
					<AnimalRow />
					<AnimalRow />
					<AnimalRow />
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
