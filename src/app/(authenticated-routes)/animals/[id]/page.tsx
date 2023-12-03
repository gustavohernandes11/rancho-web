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
import { AnimalRow } from "@/components/AnimalTable/AnimalRow";
import { BatchDropdown } from "@/components/BatchDropdown";
import { TextArea } from "@/components/TextArea";

export default function AnimalsPage() {
	return (
		<PageLayout>
			<Container>
				<Header title={"Visualizando animal"} />
				<Content>
					<AnimalInfoCard
						name={"Amarelinha"}
						age={"3 anos"}
						code={"123"}
						gender={"F"}
					/>
					<Title marginBottom="0.5rem" marginTop="1rem" as="h3">
						Lote
					</Title>
					<BatchDropdown
						viewMode={true}
						title={"Vacas de leite"}
						animals={[]}
					/>
					<Title marginBottom="0.5rem" marginTop="1rem" as="h3">
						Maternidade
					</Title>
					{/* <AnimalRow viewMode={true} /> */}
					<Title marginBottom="0.5rem" marginTop="1rem" as="h3">
						Paternidade
					</Title>
					{/* <AnimalRow viewMode={true} /> */}
					<Title marginBottom="0.5rem" marginTop="1rem" as="h3">
						Observação
					</Title>
					<TextArea
						disabled={true}
						value={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
						}
					/>
				</Content>
				<DesktopOnly>
					<Aside>
						<Span>
							<Button primary>Editar</Button>
							<Button light>Remover</Button>
						</Span>
					</Aside>
				</DesktopOnly>
			</Container>
			<Menu />
		</PageLayout>
	);
}
