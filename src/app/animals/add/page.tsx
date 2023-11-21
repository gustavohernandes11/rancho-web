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
import { Select } from "@/components/Select";
import { Option } from "@/components/Option";
import { useState } from "react";
import { GridTwoColumns } from "@/components/GridTwoColumns";
import { WrappableFormRow } from "@/components/WrappableFormRow";

export default function AddAnimalPage() {
	const [ageType, SetAgeType] = useState("age");

	const router = useRouter();

	return (
		<Layout>
			<Container>
				<Header title={"Adicionar animal"} />
				<Content>
					<Form>
						<WrappableFormRow>
							<span>
								<Input
									label="Nome*"
									placeholder="ex: Bezerros desmamados"
									autoCapitalize="true"
									maxLength={50}
									minLength={3}
									required
									autoFocus={true}
								/>
							</span>
							<span>
								<Select label="Lote">
									<Option value="">
										Nenhum lote selecionado.
									</Option>
									<Option value="batch_id_1">batch 1</Option>
									<Option value="batch_id_2">batch 2</Option>
									<Option value="batch_id_3">batch 3</Option>
									<Option value="batch_id_4">batch 4</Option>
								</Select>
							</span>
						</WrappableFormRow>
						<WrappableFormRow>
							<span>
								<Select label="Paternidade">
									<Option value="">
										Nenhum animal selecionado.
									</Option>
									<Option value="animal_id_1">
										animal 1
									</Option>
									<Option value="animal_id_2">
										animal 2
									</Option>
									<Option value="animal_id_3">
										animal 3
									</Option>
									<Option value="animal_id_4">
										animal 4
									</Option>
								</Select>
							</span>
							<span>
								<Select label="Maternidade">
									<Option value="">
										Nenhum animal selecionado.
									</Option>
									<Option value="animal_id_1">
										animal 1
									</Option>
									<Option value="animal_id_2">
										animal 2
									</Option>
									<Option value="animal_id_3">
										animal 3
									</Option>
									<Option value="animal_id_4">
										animal 4
									</Option>
								</Select>
							</span>
						</WrappableFormRow>
						<GridTwoColumns>
							<span>
								<Input label="Código" />
							</span>
							<span>
								<Select
									label="Sexo*"
									required={true}
									defaultValue=""
								>
									<Option value="F">Fêmea</Option>
									<Option value="M">Macho</Option>
								</Select>
							</span>
						</GridTwoColumns>
						<RadioContainer>
							<legend>Como deseja marcar a idade?</legend>
							<Span>
								<input
									name="age-or-birthdate"
									id="age-radio-option"
									defaultChecked={true}
									type="radio"
									value="age"
									onChange={(e) => SetAgeType(e.target.value)}
								/>
								<label htmlFor="age-radio-option">
									Anos e meses
								</label>
							</Span>
							<Span>
								<input
									name="age-or-birthdate"
									id="birthdate-radio-option"
									type="radio"
									value="birthdate"
									onChange={(e) => SetAgeType(e.target.value)}
								/>
								<label htmlFor="birthdate-radio-option">
									Data de nascimento
								</label>
							</Span>
						</RadioContainer>
						{ageType === "age" ? (
							<GridTwoColumns>
								<span>
									<Input
										required={true}
										type="number"
										label="Anos*"
									/>
								</span>
								<span>
									<Input
										required={true}
										type="number"
										label="Meses"
									/>
								</span>
							</GridTwoColumns>
						) : (
							<Input type="date" label="Data de Nascimento*" />
						)}

						<TextArea
							id="observation"
							label="Observação"
							maxLength={250}
						/>
					</Form>
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

const Aside = styled.aside`
	grid-area: aside;
`;

const Content = styled.main`
	grid-area: content;
`;

const RadioContainer = styled.div`
	display: grid;
	legend {
		margin-bottom: 0.5rem;
	}
`;
