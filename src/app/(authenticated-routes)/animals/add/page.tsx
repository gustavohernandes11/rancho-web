"use client";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import { Span } from "@/components/Span";
import { Aside } from "@/layout/Aside";
import { Content } from "@/layout/Content";
import { ContainerAsideAtBottom } from "@/layout/ContainerAsideAtBottom";
import { PageLayout } from "@/layout/PageLayout";
import { CancelButton } from "@/components/Button/CancelButton";
import { AddButton } from "@/components/Button/AddButton";
import { AddAnimalForm } from "@/components/forms/AddAnimalForm";
import { IAddAnimalData } from "@/types/IAddAnimalData";
import { addAnimal } from "@/requests/addAnimal";

export default function AddAnimalPage() {
	const handleSubmit = async (
		values: IAddAnimalData,
		resetForm: Function
	) => {
		const res = await addAnimal(values);
		console.log(res);

		if (res.response?.ok) {
			console.log("Ok!");
			resetForm();
		} else {
			console.log("Not ok!");
		}
	};

	return (
		<PageLayout>
			<ContainerAsideAtBottom>
				<Header title={"Adicionar animal"} />
				<Content>
					<AddAnimalForm handleSubmit={handleSubmit} />
				</Content>
				<Aside>
					<Span>
						<AddButton type="submit" form="addAnimal" />
						<CancelButton />
					</Span>
				</Aside>
			</ContainerAsideAtBottom>
			<Menu />
		</PageLayout>
	);
}
