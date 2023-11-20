"use client";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import styled from "styled-components";
import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";
import { useRouter } from "next/navigation";
import { Span } from "@/components/Span";
import { IAnimal } from "@/types/IAnimal";
import { AnimalCheckBox } from "@/components/AnimalCheckbox";
import { Title } from "@/components/Title";

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
		<Layout>
			<Container>
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
			</Container>
			<Menu />
		</Layout>
	);
}
const Layout = styled.main`
	display: grid;
	height: 100vh;
	overflow-y: auto;
	background-color: #e9e9e9;
	grid-template-columns: 1fr;
	grid-template-rows: 3.75rem 1fr 3.75rem;
	grid-template-areas: "container" "container" "menu";
	column-gap: 0.5rem;

	@media (min-width: ${({ theme }) => theme.screen.laptop}) {
		padding: 0.5rem;
		grid-template-columns: 5rem 1fr;
		grid-template-rows: 1fr;
		grid-auto-flow: column;
		grid-template-areas: "menu container";
	}
`;

const Container = styled.section`
	display: grid;
	grid-area: container;
	border-radius: 0.5rem;
	overflow-y: auto;
	background-color: white;
	width: 100%;
	height: 100%;

	grid-template-rows: 1fr;
	grid-template-rows: 3.75rem 1fr auto;
	grid-template-areas:
		"header"
		"content"
		"aside";
	padding: 1rem;

	@media (min-width: ${({ theme }) => theme.screen.laptop}) {
		grid-template-rows: 3.75rem 1fr;
		grid-template-columns: 2fr 1fr;

		grid-template-areas:
			"header header"
			"content aside";
		padding: 3rem 5rem;
		gap: 3rem;
	}
`;
const Section = styled.section`
	padding-block: 1rem;
`;
const Aside = styled.aside`
	grid-area: aside;
`;

const Content = styled.main`
	grid-area: content;
`;
