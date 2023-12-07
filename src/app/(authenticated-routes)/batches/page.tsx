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
import { listBatches } from "@/requests/listBatches";
import { IBatch } from "@/types/IBatch";
import { useState, useEffect } from "react";

export default function BatchesPage() {
	const [batches, setBatches] = useState<IBatch[]>();
	console.log(batches);

	useEffect(() => {
		listBatches().then(({ data }) => setBatches(data));
	}, []);
	return (
		<PageLayout>
			<Container>
				<Header title={"Lotes"} />
				<Content>
					<Section>
						{batches &&
							batches.map((batch) => (
								<BatchDropdown
									key={batch.id}
									title={batch.name}
									description={batch?.observation}
									id={batch.id}
								/>
							))}
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
