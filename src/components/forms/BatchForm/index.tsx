import { useFormik } from "formik"
import { Input } from "../../Input"
import { TextArea } from "../../TextArea"
import { ErrorMessage } from "../../ErrorMessage"
import { useEffect, useState } from "react"
import { IAddBatchData } from "@/types/IAddBatchData"
import { IBatchFormProps } from "./IBatchFormProps"
import { Form } from "@/components/Form"
import { IEditPropBatch } from "./IEditPropBatch"
import { validationSchema } from "../SignupForm/validationSchema"

export const BatchForm = ({
    handleSubmit,
    initialValues,
    ...props
}: IBatchFormProps) => {
    const [editingBatchData, setEditingBatchData] = useState(initialValues)
    useEffect(() => {
        setEditingBatchData(initialValues)
    }, [initialValues])

    const getEditingBatchData = (): IEditPropBatch => {
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
            handleSubmit({ name, observation } as IAddBatchData, resetForm)
        },
    })
    const resetForm = () => {
        formik.resetForm()
    }
    return (
        <Form
            id="BatchForm"
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
