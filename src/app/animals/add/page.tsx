"use client";
import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";
import { Span } from "@/components/Span";
import { Select } from "@/components/Select";
import { Option } from "@/components/Option";
import { GridTwoColumns } from "@/components/GridTwoColumns";
import { WrappableDoubleRow } from "@/components/WrappableDoubleRow";
import { Aside } from "@/layout/Aside";
import { Content } from "@/layout/Content";
import { ContainerAsideAtBottom } from "@/layout/ContainerAsideAtBottom";
import { PageLayout } from "@/layout/PageLayout";
import { CancelButton } from "@/components/Button/CancelButton";
import { AddButton } from "@/components/Button/AddButton";

export default function AddAnimalPage() {
	const [ageType, SetAgeType] = useState("age");

	const router = useRouter();

	return (
		<PageLayout>
			<ContainerAsideAtBottom>
				<Header title={"Adicionar animal"} />
				<Content>
					<Form>
						<WrappableDoubleRow>
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
						</WrappableDoubleRow>
						<WrappableDoubleRow>
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
						</WrappableDoubleRow>
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
						<AddButton />
						<CancelButton />
					</Span>
				</Aside>
			</ContainerAsideAtBottom>
			<Menu />
		</PageLayout>
	);
}

const RadioContainer = styled.div`
	display: grid;
	legend {
		margin-bottom: 0.5rem;
	}
`;
