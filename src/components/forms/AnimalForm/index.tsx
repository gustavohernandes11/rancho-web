import { useEffect, useRef, useState } from "react"

import { Form } from "@/components/Form"
import { GridTwoColumns } from "@/components/GridTwoColumns"
import { Input } from "@/components/Input"
import { Option } from "@/components/Option"
import { RadioContainer } from "@/components/RadioContainer"
import { Select } from "@/components/Select"
import { Span } from "@/components/Span"
import { TextArea } from "@/components/TextArea"
import { WrappableDoubleRow } from "@/components/WrappableDoubleRow"
import { useFormik } from "formik"
import { IAgeType } from "@/types/IAgeType"
import { IAnimalFormInitialValues } from "./IAnimalFormInitialValues"
import { IAnimalFormProps } from "./IAnimalFormProps"
import { useAnimalContext } from "@/hooks/useAnimalContext"
import { useBatchContext } from "@/hooks/useBatchContext"
import {
    formatISOString,
    getBirthdateFromYearsAndMonths,
    getMonthsDiffFromISO,
    getYearsDiffFromISO,
} from "@/utils"
import { validationSchema } from "./validationSchema"

export const AnimalForm = ({
    handleSubmit,
    initialValues,
    onClearFields,
    ...props
}: IAnimalFormProps) => {
    const [animalDataToEdit, setAnimalDataToEdit] = useState(initialValues)
    const birthdateInputRef = useRef<HTMLInputElement>(null)

    const { animals } = useAnimalContext()
    const { batches } = useBatchContext()
    useEffect(() => {
        setAnimalDataToEdit(initialValues)
    }, [initialValues])

    useEffect(() => {
        setMonths(
            initialValues?.age ? getMonthsDiffFromISO(initialValues.age) : 0
        )
        setYears(
            initialValues?.age ? getYearsDiffFromISO(initialValues.age) : 0
        )
    }, [initialValues?.age])

    const getAnimalDataToEdit = (): IAnimalFormInitialValues => {
        return Object.assign({}, emptyFieldValues, animalDataToEdit)
    }

    const emptyFieldValues: IAnimalFormInitialValues = {
        name: "",
        age: "",
        gender: "F",
        batchId: "",
        maternityId: "",
        paternityId: "",
        observation: "",
        code: "",
    }

    const formik = useFormik({
        initialValues: getAnimalDataToEdit(),
        enableReinitialize: true,
        validationSchema,
        onSubmit: (values) => {
            handleSubmit(values, resetForm)
        },
    })

    const [ageType, setAgeType] = useState<IAgeType>("birthdate")

    const [years, setYears] = useState<number>(0)
    const [months, setMonths] = useState<number>(0)

    // set years in numbers
    const handleChangeYears = (e: any) => {
        setYears(() => e.target.value)
        formik.setFieldValue(
            "age",
            getBirthdateFromYearsAndMonths(e.target.value, months)
        )
    }

    // set months in numbers
    const handleChangeMonths = (e: any) => {
        setMonths(() => e.target.value)
        formik.setFieldValue(
            "age",
            getBirthdateFromYearsAndMonths(years, e.target.value)
        )
    }

    const resetForm = () => {
        formik.resetForm()
        setMonths(0)
        setYears(0)
        formik.setFieldValue("age", "")
        formik.setFieldValue("bachId", "")
        setAnimalDataToEdit(emptyFieldValues)
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
                        error={
                            formik.touched.observation
                                ? formik.errors.name
                                : null
                        }
                        {...formik.getFieldProps("name")}
                    />
                </span>
                <span>
                    <Select
                        label="Lote"
                        error={
                            formik.touched.batchId
                                ? formik.errors.batchId
                                : null
                        }
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
                        error={
                            formik.touched.paternityId
                                ? formik.errors.paternityId
                                : null
                        }
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
                        error={
                            formik.touched.maternityId
                                ? formik.errors.maternityId
                                : null
                        }
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
                        error={
                            formik.touched.observation
                                ? formik.errors.code
                                : null
                        }
                        defaultValue={initialValues?.code}
                        {...formik.getFieldProps("code")}
                    />
                </span>
                <span>
                    <Select
                        label="Sexo*"
                        error={
                            formik.touched.gender ? formik.errors.gender : null
                        }
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
                        onChange={() => {
                            setAgeType(() => "age")
                            formik.setFieldValue("age", "")
                        }}
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
                        onChange={() => {
                            setAgeType(() => "birthdate")
                            formik.setFieldValue("age", "")
                        }}
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
                            type="number"
                            label="Anos*"
                            error={
                                formik.touched.observation
                                    ? formik.errors.age
                                    : null
                            }
                            max={50}
                            defaultValue={
                                initialValues?.age
                                    ? getYearsDiffFromISO(initialValues.age)
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
                            type="number"
                            label="Meses"
                            max={12}
                            defaultValue={
                                initialValues?.age
                                    ? getYearsDiffFromISO(initialValues.age)
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
                    error={formik.touched.age ? formik.errors.age : null}
                    ref={birthdateInputRef}
                    defaultValue={
                        initialValues?.age! &&
                        formatISOString(initialValues?.age)
                    }
                    onChange={(e: any) => {
                        formik.setFieldValue(
                            "age",
                            new Date(e.target.value as string).toISOString()
                        )
                    }}
                />
            )}

            <TextArea
                {...formik.getFieldProps("observation")}
                defaultValue={initialValues?.observation}
                error={
                    formik.touched.observation
                        ? formik.errors.observation
                        : null
                }
                id="observation"
                label="Observação"
                maxLength={250}
            />
        </Form>
    )
}
