import moment from "moment"
import * as Yup from "yup"

export const validationSchema = Yup.object({
    name: Yup.string()
        .min(3, "Nome muito curto!")
        .max(45, "Nome muito longo!")
        .required("Campo obrigatório"),
    age: Yup.date()
        .required("Campo obrigatório")
        .test(
            "is-future-date",
            "A data deve ser menor que a atual",
            function (value) {
                return moment(value).isBefore(moment.now())
            }
        )
        .test(
            "is-too-early-date",
            "Use uma data mais próxima da atualidade.",
            function (value) {
                return moment(value).isAfter(moment().year(1950))
            }
        ),
})
