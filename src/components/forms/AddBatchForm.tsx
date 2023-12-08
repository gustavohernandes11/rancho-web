import { useFormik } from "formik"
import { Input } from "../Input"
import { TextArea } from "../TextArea"
import * as Yup from "yup"
import { ErrorMessage } from "../ErrorMessage"
import { Form } from "../Form"
import { IAddBatchData } from "@/types/IAddBatchData"
import { useEffect, useState } from "react"

type EditPropBatch = {
    name?: string
    observation?: string
}

type IFormProps = {
    handleSubmit: (values: EditPropBatch, resetForm: Function) => void
    initialValues?: EditPropBatch
    onClearFields?: () => void
}

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .max(35, "Nome muito longo")
        .min(3, "Nome muito curto")
        .required("Campo requerido"),
    observation: Yup.string().max(100, "Descrição muito longa"),
})

export const AddBatchForm = ({
    handleSubmit,
    initialValues,
    ...props
}: IFormProps) => {
    const [editingBatchData, setEditingBatchData] = useState(initialValues)
    useEffect(() => {
        setEditingBatchData(initialValues)
    }, [initialValues])

    const getEditingBatchData = (): EditPropBatch => {
        return {
            name: editingBatchData?.name || "",
            observation: editingBatchData?.observation || "",
        }
    }

    const formik = useFormik({
        initialValues: getEditingBatchData(),
        enableReinitialize: true,
        validationSchema,
        onSubmit: ({ name, observation }) => {
            handleSubmit({ name, observation }, resetForm)
        },
    })
    const resetForm = () => {
        formik.resetForm()
    }
    return (
        <Form
            id="addBatchForm"
            onReset={formik.handleReset}
            onSubmit={formik.handleSubmit}
            {...props}
        >
            <Input
                label="Nome*"
                placeholder="ex: Bezerros desmamados"
                autoComplete="false"
                autoCapitalize="true"
                autoFocus={true}
                required={true}
                {...formik.getFieldProps("name")}
            />
            {formik.errors.name ? (
                <ErrorMessage>{formik.errors.name}</ErrorMessage>
            ) : null}
            <TextArea
                autoComplete="false"
                label="Descrição"
                maxLength={250}
                {...formik.getFieldProps("observation")}
            />
            {formik.errors.observation ? (
                <ErrorMessage>{formik.errors.observation}</ErrorMessage>
            ) : null}
        </Form>
    )
}
