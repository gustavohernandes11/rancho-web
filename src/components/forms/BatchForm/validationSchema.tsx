import * as Yup from "yup"

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .max(35, "Nome muito longo")
        .min(3, "Nome muito curto")
        .required("Campo requerido"),
    observation: Yup.string().max(100, "Descrição muito longa"),
})
