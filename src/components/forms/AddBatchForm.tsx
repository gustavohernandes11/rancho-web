import { useFormik } from "formik"
import { Input } from "../Input"
import { TextArea } from "../TextArea"
import * as Yup from "yup"
import { ErrorMessage } from "../ErrorMessage"
import { Form } from "../Form"
import { IAddBatchData } from "@/types/IAddBatchData"

type IFormProps = {
    handleSubmit: (values: IAddBatchData, resetForm: Function) => void
}

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .max(35, "Nome muito longo")
        .min(3, "Nome muito curto")
        .required("Campo requerido"),
    observation: Yup.string().max(100, "Descrição muito longa"),
})

export const AddBatchForm = ({ handleSubmit, ...props }: IFormProps) => {
    const formik = useFormik({
        initialValues: { name: "", observation: "" },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            handleSubmit(values, resetForm)
        },
    })
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
