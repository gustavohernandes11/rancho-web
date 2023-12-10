import * as Yup from "yup"

import { useEffect, useState } from "react"

import { Form } from "../../Form"
import { GridTwoColumns } from "../../GridTwoColumns"
import { Input } from "../../Input"
import { Option } from "../../Option"
import { RadioContainer } from "../../RadioContainer"
import { Select } from "../../Select"
import { Span } from "../../Span"
import { TextArea } from "../../TextArea"
import { WrappableDoubleRow } from "../../WrappableDoubleRow"
import moment from "moment"
import { useFormik } from "formik"
import { IAgeType } from "@/types/IAgeType"
import { getMonthsDiffFromISO } from "../../../utils/getMonthsDiffFromISO"
import { getYearsDiffFromISO } from "../../../utils/getYearsDiffFromISO"
import { IAnimalFormInitialValues } from "./IAnimalFormInitialValues"
import { IAnimalFormProps } from "./IAnimalFormProps"
import { getBirthdateFromYearsAndMonths } from "../../../utils/getBirthdateFromYearsAndMonths"
import { useAnimalContext } from "@/hooks/useAnimalContext"
import { useBatchContext } from "@/hooks/useBatchContext"

export const AnimalForm = ({
    handleSubmit,
    initialValues,
    onClearFields,
    ...props
}: IAnimalFormProps) => {
    const [editingAnimalData, setEditingAnimalData] = useState(initialValues)

    const { animals } = useAnimalContext()
    const { batches } = useBatchContext()
    useEffect(() => {
        setEditingAnimalData(initialValues)
    }, [initialValues])

    useEffect(() => {
        setMonths(
            initialValues?.age ? getMonthsDiffFromISO(initialValues.age) : 0
        )
        setYears(
            initialValues?.age ? getYearsDiffFromISO(initialValues.age) : 0
        )
    }, [initialValues?.age])

    const getEditingAnimalData = (): IAnimalFormInitialValues => {
        return {
            name: editingAnimalData?.name || "",
            age: editingAnimalData?.age || "",
            gender: editingAnimalData?.gender || "F",
            batchId: editingAnimalData?.batchId || "",
            maternityId: editingAnimalData?.maternityId || "",
            paternityId: editingAnimalData?.paternityId || "",
            observation: editingAnimalData?.observation || "",
            code: editingAnimalData?.code || "",
        }
    }

    const getInitialValues = (): IAnimalFormInitialValues => {
        return {
            name: "",
            age: "",
            gender: "F",
            batchId: "",
            maternityId: "",
            paternityId: "",
            observation: "",
            code: "",
        }
    }
    const formik = useFormik({
        initialValues: getEditingAnimalData(),
        enableReinitialize: true,
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, "Nome muito curto!")
                .max(45, "Nome muito longo!")
                .required("Campo obrigatório"),
            age: Yup.date().required("Campo obrigatório"),
        }),
        onSubmit: (values) => {
            handleSubmit(values, resetForm)
        },
    })

    const [ageType, setAgeType] = useState<IAgeType>("birthdate")

    const [years, setYears] = useState<number>(0)
    const [months, setMonths] = useState<number>(0)

    const handleChangeYears = (e: any) => {
        setYears(() => e.target.value)
        formik.setFieldValue(
            "age",
            getBirthdateFromYearsAndMonths(e.target.value, months)
        )
    }
    const handleChangeMonths = (e: any) => {
        setMonths(() => e.target.value)
        formik.setFieldValue(
            "age",
            getBirthdateFromYearsAndMonths(years, e.target.value)
        )
    }
    const handleChangeAgeType = (e: any) => {
        setAgeType(e.target.value as IAgeType)
        formik.setFieldValue("age", "")
    }
    const resetForm = () => {
        formik.resetForm()
        setMonths(0)
        setYears(0)
        formik.setFieldValue("age", "")
        formik.setFieldValue("bachId", "")
        setEditingAnimalData(getInitialValues())
    }

    return (
        <Form
            id="addAnimalForm"
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
                        defaultValue={initialValues?.name}
                        error={formik.errors.name}
                        {...formik.getFieldProps("name")}
                    />
                </span>
                <span>
                    <Select
                        label="Lote"
                        error={formik.errors.batchId}
                        {...formik.getFieldProps("batchId")}
                    >
                        <Option value="">Nenhum lote selecionado.</Option>
                        {batches &&
                            batches.length > 0 &&
                            batches.map((batch) => {
                                return (
                                    <Option
                                        defaultChecked={
                                            initialValues?.batchId === batch.id
                                        }
                                        value={batch.id}
                                        key={batch.id}
                                    >
                                        {batch.name}
                                    </Option>
                                )
                            })}
                    </Select>
                </span>
            </WrappableDoubleRow>
            <WrappableDoubleRow>
                <span>
                    <Select
                        label="Paternidade"
                        error={formik.errors.paternityId}
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
                                                defaultChecked={
                                                    initialValues?.paternityId ===
                                                    animal.id
                                                }
                                                key={animal?.id}
                                                value={animal?.id}
                                            >
                                                {animal?.name}
                                            </Option>
                                        )
                                    })}
                        </>
                    </Select>
                </span>
                <span>
                    <Select
                        label="Maternidade"
                        error={formik.errors.maternityId}
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
                                                defaultChecked={
                                                    initialValues?.maternityId ===
                                                    animal.id
                                                }
                                                key={animal?.id}
                                                value={animal?.id}
                                            >
                                                {animal?.name}
                                            </Option>
                                        )
                                    })}
                        </>
                    </Select>
                </span>
            </WrappableDoubleRow>
            <GridTwoColumns>
                <span>
                    <Input
                        label="Código"
                        error={formik.errors.code}
                        defaultValue={initialValues?.code}
                        {...formik.getFieldProps("code")}
                    />
                </span>
                <span>
                    <Select
                        label="Sexo*"
                        error={formik.errors.gender}
                        required={true}
                        defaultValue={initialValues?.gender}
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
                        defaultChecked={true}
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
                            itemRef="years"
                            type="number"
                            label="Anos*"
                            error={formik.errors.age}
                            max={50}
                            defaultValue={
                                initialValues?.age
                                    ? moment().diff(
                                          new Date(initialValues?.age),
                                          "years"
                                      )
                                    : 0
                            }
                            value={years}
                            onInput={(e: any) =>
                                setYears(() => e.target.value!)
                            }
                            onChange={handleChangeYears}
                        />
                    </span>

                    <span>
                        <Input
                            id="months"
                            itemRef="months"
                            type="number"
                            label="Meses"
                            max={12}
                            defaultValue={
                                initialValues?.age
                                    ? moment().diff(
                                          new Date(initialValues?.age),
                                          "months"
                                      ) % 12
                                    : 0
                            }
                            value={months}
                            onInput={(e: any) =>
                                setMonths(() => e.target.value!)
                            }
                            onChange={handleChangeMonths}
                        />
                    </span>
                </GridTwoColumns>
            ) : (
                <Input
                    id="birthdate"
                    type="date"
                    label="Data de Nascimento*"
                    error={formik.errors.age}
                    defaultValue={
                        initialValues?.age! &&
                        moment(new Date(initialValues?.age!)).format(
                            "yyyy-MM-DD"
                        )
                    }
                    onChange={(e) => {
                        formik.setFieldValue(
                            "age",
                            new Date(e.target.value).toISOString()
                        )
                    }}
                />
            )}

            <TextArea
                {...formik.getFieldProps("observation")}
                defaultValue={initialValues?.observation}
                error={formik.errors.age}
                id="observation"
                label="Observação"
                maxLength={250}
            />
        </Form>
    )
}