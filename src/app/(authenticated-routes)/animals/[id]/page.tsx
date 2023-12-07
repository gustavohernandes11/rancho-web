"use client";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import { AnimalInfoCard } from "@/components/AnimalInfoCard";
import { DesktopOnly } from "@/components/utils/DesktopOnly";
import { Button } from "@/components/Button";
import { Span } from "@/components/Span";
import { Aside } from "@/layout/Aside";
import { Content } from "@/layout/Content";
import { Container } from "@/layout/Container";
import { PageLayout } from "@/layout/PageLayout";
import { Title } from "@/components/Title";
import { BatchDropdown } from "@/components/BatchDropdown";
import { TextArea } from "@/components/TextArea";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getAnimal } from "@/requests/getAnimal";
import { IAnimal } from "@/types/IAnimal";
import { IBatch } from "@/types/IBatch";
import { AnimalRow } from "@/components/AnimalTable/AnimalRow";
import { getAgeFromISO } from "@/utils/getAgeFromISO";
import { listBatches } from "@/requests/listBatches";

export default function AnimalsPage() {
	const { id } = useParams();
	const [animal, setAnimal] = useState<IAnimal>();
	const [batch, setBatch] = useState<IBatch>();
	const [paternity, setPaternity] = useState<IAnimal | undefined>();
	const [maternity, setMaternity] = useState<IAnimal | undefined>();
	console.log(batch);

	useEffect(() => {
		getAnimal(id as string).then(({ data }) => setAnimal(data));
		getAnimal(animal?.paternityId!).then(({ data }) => setPaternity(data));
		getAnimal(animal?.maternityId!).then(({ data }) => setMaternity(data));
		listBatches().then(({ data }) =>
			setBatch(data.find((b: IBatch) => b.id === animal?.batchId))
		);
	}, [animal?.batchId, animal?.maternityId, animal?.paternityId, id]);

	return (
		<PageLayout>
			<Container>
				<Header title={"Visualizando animal"} />
				<Content>
					<AnimalInfoCard
						name={animal?.name}
						age={getAgeFromISO(animal?.age || "")}
						code={animal?.code}
						gender={animal?.gender}
					/>
					{batch && batch.id && (
						<>
							<Title
								marginBottom="0.5rem"
								marginTop="1rem"
								as="h3"
							>
								Lote
							</Title>
							<BatchDropdown
								viewMode={true}
								title={batch?.name}
							/>
						</>
					)}
					{maternity && maternity.id && (
						<>
							<Title
								marginBottom="0.5rem"
								marginTop="1rem"
								as="h3"
							>
								Maternidade
							</Title>
							<AnimalRow animal={maternity} viewMode={true} />
						</>
					)}
					{paternity && paternity.id && (
						<>
							<Title
								marginBottom="0.5rem"
								marginTop="1rem"
								as="h3"
							>
								Paternidade
							</Title>
							<AnimalRow animal={paternity} viewMode={true} />
						</>
					)}

					<Title marginBottom="0.5rem" marginTop="1rem" as="h3">
						Observação
					</Title>
					<TextArea
						disabled={true}
						style={{ height: "10rem" }}
						value={
							animal?.observation
								? animal?.observation
								: "Não há observação"
						}
					/>
				</Content>
				<DesktopOnly>
					<Aside>
						<Span>
							<Button primary={true}>Editar</Button>
							<Button light={true}>Remover</Button>
						</Span>
					</Aside>
				</DesktopOnly>
			</Container>
			<Menu />
		</PageLayout>
	);
}
