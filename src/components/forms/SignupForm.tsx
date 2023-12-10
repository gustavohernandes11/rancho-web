import { useFormik } from "formik"
import Link from "next/link"
import { Button } from "../Button"
import { CheckBox } from "../CheckBox"
import { Form } from "../Form"
import { Input } from "../Input"
import { Center } from "../utils/Center"
import * as Yup from "yup"
import { IUserSignupCredentials } from "@/types/IUserSignupCredentials"

type IFormProps = {
    handleSubmit: (values: IUserSignupCredentials, resetForm: Function) => void
    onClearFields?: () => void
}

const formSchema = Yup.object().shape({
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

export const SignupForm = ({ handleSubmit, ...props }: IFormProps) => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            acceptedTerms: false,
        },
        validationSchema: formSchema,
        onSubmit: (values, { resetForm }) => handleSubmit(values, resetForm),
    })
    return (
        <Form
            id="singupForm"
            onReset={formik.handleReset}
            onSubmit={formik.handleSubmit}
            {...props}
        >
            <Input
                required
                placeholder="Name"
                type="text"
                error={formik.touched.name ? formik.errors.name : ""}
                {...formik.getFieldProps("name")}
            />
            <Input
                required
                minLength={5}
                maxLength={50}
                placeholder="Email"
                type="email"
                error={formik.touched.email ? formik.errors.email : ""}
                {...formik.getFieldProps("email")}
            />

            <Input
                required
                placeholder="Senha"
                messageOnFocus="Utilize de 5 a 24 caracteres, com símbolos, letras maiúscula e
        números."
                type="password"
                error={formik.touched.password ? formik.errors.password : ""}
                {...formik.getFieldProps("password")}
            />
            <Input
                required
                minLength={5}
                maxLength={24}
                placeholder="Confirmar senha"
                type="password"
                error={
                    formik.touched.passwordConfirmation
                        ? formik.errors.passwordConfirmation
                        : ""
                }
                {...formik.getFieldProps("passwordConfirmation")}
            />
            <CheckBox
                error={
                    formik.touched.acceptedTerms
                        ? formik.errors.acceptedTerms
                        : ""
                }
                {...formik.getFieldProps("acceptedTerms")}
            >
                <small>
                    Concordo com os
                    <Link href="/terms-of-use">
                        {" "}
                        Termos de Uso e Política de Privacidade
                    </Link>
                    .
                </small>
            </CheckBox>
            <Center>
                <Button type="submit" form="singupForm">
                    Registrar-se
                </Button>
            </Center>
        </Form>
    )
}
