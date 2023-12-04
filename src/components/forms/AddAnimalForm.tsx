import { useEffect, useState } from "react";
import { Form } from "../Form";
import { GridTwoColumns } from "../GridTwoColumns";
import { Input } from "../Input";
import { Select } from "../Select";
import { Span } from "../Span";
import { TextArea } from "../TextArea";
import { WrappableDoubleRow } from "../WrappableDoubleRow";
import { listAnimals } from "@/requests/listAnimals";
import { listBatches } from "@/requests/listBatches";
import { IAnimal } from "@/types/IAnimal";
import { IBatch } from "@/types/IBatch";
import { RadioContainer } from "../RadioContainer";
import { Option } from "../Option";
import { useFormik } from "formik";

type IAgeType = "age" | "birthdate";

type IFormProps = {
	handleSubmit: Function;
};

export const AddAnimalForm = ({ handleSubmit, ...props }: IFormProps) => {
	useEffect(() => {
		listAnimals().then(({ data }) => setAnimals(data));
		listBatches().then(({ data }) => setBatches(data));
	}, []);

	const formik = useFormik({
		initialValues: {
			name: "",
			age: "",
			gender: "F",
			batchId: "",
			maternityId: "",
			paternityId: "",
			observation: "",
			code: "",
		},
		onSubmit: (values) => handleSubmit(values),
	});

	const [ageType, setAgeType] = useState<IAgeType>("age");
	const [animals, setAnimals] = useState<IAnimal[]>([]);
	const [batches, setBatches] = useState<IBatch[]>([]);

	console.log(animals);

	const [years, setYears] = useState<number>(0);
	const [months, setMonths] = useState<number>(0);

	const getBirthdate = (years: number, months: number) => {
		const dateNow = new Date();

		var birthYear = dateNow.getFullYear() - years;
		var birthMonth = dateNow.getMonth() - months;

		while (birthMonth < 0) {
			birthMonth += 12;
			birthYear--;
		}

		return new Date(birthYear, birthMonth, dateNow.getDate()).toISOString();
	};

	const handleChangeYears = (e: any) => {
		setYears(() => e.target.value);
		formik.setFieldValue("age", getBirthdate(e.target.value, months));
	};
	const handleChangeMonths = (e: any) => {
		setMonths(() => e.target.value);
		formik.setFieldValue("age", getBirthdate(years, e.target.value));
	};
	const handleChangeAgeType = (e: any) => {
		setAgeType(e.target.value as IAgeType);
		formik.setFieldValue("age", "");
	};

	return (
		<Form
			id="addAnimal"
			onReset={formik.handleReset}
			onSubmit={formik.handleSubmit}
			{...props}
		>
			<WrappableDoubleRow>
				<span>
					<Input
						id="name"
						label="Nome*"
						autoCapitalize="true"
						required
						autoFocus={true}
						{...formik.getFieldProps("name")}
					/>
				</span>
				<span>
					<Select label="Lote" {...formik.getFieldProps("batchId")}>
						<Option value="">Nenhum lote selecionado.</Option>
						<>
							{batches &&
								batches.length > 0 &&
								batches.map((batch) => {
									<Option value={batch?.id}>
										{batch?.name}
									</Option>;
								})}
						</>
					</Select>
				</span>
			</WrappableDoubleRow>
			<WrappableDoubleRow>
				<span>
					<Select
						label="Paternidade"
						{...formik.getFieldProps("paternityId")}
					>
						<Option value="">Nenhum animal selecionado.</Option>
						<>
							{animals &&
								animals.length > 0 &&
								animals
									.filter((al) => al.gender === "M")
									.map((animal) => {
										return (
											<Option
												key={animal?.id}
												value={animal?.id}
											>
												{animal?.name}
											</Option>
										);
									})}
						</>
					</Select>
				</span>
				<span>
					<Select
						label="Maternidade"
						{...formik.getFieldProps("maternityId")}
					>
						<Option value="">Nenhum animal selecionado.</Option>
						<>
							{animals &&
								animals.length > 0 &&
								animals
									.filter((al) => al.gender === "F")
									.map((animal) => {
										return (
											<Option
												key={animal?.id}
												value={animal?.id}
											>
												{animal?.name}
											</Option>
										);
									})}
						</>
					</Select>
				</span>
			</WrappableDoubleRow>
			<GridTwoColumns>
				<span>
					<Input label="Código" {...formik.getFieldProps("code")} />
				</span>
				<span>
					<Select
						label="Sexo*"
						required={true}
						defaultValue="F"
						{...formik.getFieldProps("gender")}
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
						onChange={handleChangeAgeType}
					/>
					<label htmlFor="age-radio-option">Anos e meses</label>
				</Span>
				<Span>
					<input
						name="age-or-birthdate"
						id="birthdate-radio-option"
						type="radio"
						value="birthdate"
						onChange={(e) => setAgeType(e.target.value as IAgeType)}
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
							id="years"
							required={true}
							type="number"
							label="Anos*"
							max={50}
							onChange={handleChangeYears}
						/>
					</span>
					<span>
						<Input
							id="months"
							required={true}
							type="number"
							label="Meses"
							max={12}
							onChange={handleChangeMonths}
						/>
					</span>
				</GridTwoColumns>
			) : (
				<Input
					id="birthdate"
					type="date"
					label="Data de Nascimento*"
					onChange={(e) => {
						formik.setFieldValue(
							"age",
							new Date(e.target.value).toISOString()
						);
					}}
				/>
			)}

			<TextArea
				{...formik.getFieldProps("observation")}
				id="observation"
				label="Observação"
				maxLength={250}
			/>
		</Form>
	);
};