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
