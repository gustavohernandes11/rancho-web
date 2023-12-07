"use client";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import { Form } from "@/components/Form";
import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";
import { Span } from "@/components/Span";
import { Aside } from "@/layout/Aside";
import { Content } from "@/layout/Content";
import { ContainerAsideAtBottom } from "@/layout/ContainerAsideAtBottom";
import { PageLayout } from "@/layout/PageLayout";
import { CancelButton } from "@/components/Button/CancelButton";
import { AddButton } from "@/components/Button/AddButton";

export default function AddBatchPage() {
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
				</Content>
				<Aside>
					<Span>
						<AddButton />
						<CancelButton />
					</Span>
				</Aside>
			</ContainerAsideAtBottom>
			<Menu />
		</PageLayout>
	);
}
