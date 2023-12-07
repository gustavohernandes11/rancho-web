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
import { IconButton } from "@/components/IconButton";
import { Refresh } from "@styled-icons/fa-solid";
import { InlineBox } from "@/components/InlineBox";

export default function AnimalsPage() {
	const { animals, refetchAnimals } = useAnimalContext();

	return (
		<PageLayout>
			<Container>
				<Header title={"Animais"} />
				<Content>
					<InlineBox>
						<Search />
						<IconButton
							type="light"
							icon={<Refresh size={14} />}
							onClick={refetchAnimals}
						/>
					</InlineBox>
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
