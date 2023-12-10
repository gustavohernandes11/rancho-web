import { useFormik } from "formik"
import Link from "next/link"
import { Button } from "@/components/Button"
import { CheckBox } from "@/components/CheckBox"
import { Form } from "@/components/Form"
import { Input } from "@/components/Input"
import { Center } from "@/components/utils/Center"
import { ISignupFormProps } from "./ISignupFormProps"
import { validationSchema } from "./validationSchema"

export const SignupForm = ({ handleSubmit, ...props }: ISignupFormProps) => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            acceptedTerms: false,
        },
        validationSchema,
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
