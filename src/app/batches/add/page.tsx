"use client";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";
import { useRouter } from "next/navigation";
import { Span } from "@/components/Span";
import { IAnimal } from "@/types/IAnimal";
import { AnimalCheckBox } from "@/components/AnimalCheckbox";
import { Title } from "@/components/Title";
import { Section } from "@/layout/Section";
import { Aside } from "@/layout/Aside";
import { Content } from "@/layout/Content";
import { ContainerAsideAtBottom } from "@/layout/ContainerAsideAtBottom";
import { PageLayout } from "@/layout/PageLayout";

const mockedAnimals: IAnimal[] = [
	{
		name: "Amarelinha",
		age: "4 anos",
		gender: "F",
		id: "1",
	},
	{
		name: "Bezerro da amarelinha",
		age: "7 meses",
		gender: "F",
		id: "2",
	},
	{
		name: "Talismã",
		age: "3 anos",
		gender: "M",
		id: "3",
	},
	{
		name: "Turquesa",
		age: "2 anos",
		gender: "F",
		id: "4",
	},
];

export default function AddBatchPage() {
	const router = useRouter();
	return (
		<PageLayout>
			<ContainerAsideAtBottom>
				<Header title={"Adicionar lote"} />
				<Content>
					<Form>
						<Input
							label="Nome*"
							placeholder="ex: Bezerros desmamados"
							autoCapitalize="true"
							maxLength={50}
							minLength={3}
							autoFocus={true}
						/>
						<TextArea label="Descrição" maxLength={250} />
					</Form>
					<Section>
						<Title marginBottom="1rem" as={"h3"}>
							Selecione os animais:
						</Title>
						{mockedAnimals.map((animal) => (
							<AnimalCheckBox animal={animal} key={animal.id} />
						))}
					</Section>
				</Content>
				<Aside>
					<Span>
						<Button>Adicionar</Button>
						<Button light onClick={() => router.back()}>
							Cancelar
						</Button>
					</Span>
				</Aside>
			</ContainerAsideAtBottom>
			<Menu />
		</PageLayout>
	);
}
