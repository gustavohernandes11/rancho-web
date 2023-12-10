import * as Yup from "yup"

export const validationSchema = Yup.object().shape({
    name: Yup.string()
        .trim()
        .max(35, "Nome muito longo.")
        .min(3, "Nome muito curto.")
        .required("Campo requerido."),
    email: Yup.string()
        .trim()
        .email("Use um email válido.")
        .matches(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Use um email válido."
        )
        .max(100, "Email muito longo.")
        .required("Campo requerido."),
    password: Yup.string()
        .trim()
        .min(5, "Senha muito curta.")
        .max(24, "Senha muito longa")
        .matches(
            /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{5,24}$/,
            "Formato inválido. Use pelo menos 1 letra maiúscula, um número e um símbolo."
        ),
    passwordConfirmation: Yup.string()
        .trim()
        .oneOf(
            [Yup.ref("password"), ""],
            "A confirmação de senha deve ser igual a senha."
        )
        .required("Campo requerido."),
    acceptedTerms: Yup.boolean()
        .notRequired()
        .oneOf([true], "Você deve aceitar os termos antes de continuar."),
})
