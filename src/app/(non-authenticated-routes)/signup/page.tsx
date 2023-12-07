"use client"

import { Brand } from "@/components/Brand"
import { Button } from "@/components/Button"
import { Center } from "@/components/utils/Center"
import { CheckBox } from "@/components/CheckBox"
import { ErrorMessage } from "@/components/ErrorMessage"
import { Form } from "@/components/Form"
import { Input } from "@/components/Input"
import Link from "next/link"
import { NextPage } from "next"
import { Title } from "@/components/Title"
import { signIn } from "next-auth/react"
import { signUp } from "@/requests/signUp"
import { useRouter } from "next/navigation"
import { useState } from "react"

const LoginPage: NextPage = () => {
    const router = useRouter()
    const [error, setError] = useState<string | null>(null)
    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")
    const [acceptTerms, setAcceptTerms] = useState<boolean>(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setError(null)

        if (!acceptTerms) {
            setError("Você deve aceitar os termos antes de continuar")
            return
        }

        const { response, data } = await signUp({
            name,
            email,
            password,
            passwordConfirmation,
        })

        if (response?.ok) {
            await signIn("credentials", {
                email,
                password,
                redirect: false,
            })

            router.replace("/")
        } else {
            setError(data.error)
        }
    }

    return (
        <>
            <Brand />
            <Title>Crie sua conta</Title>
            <Form>
                <Input
                    required
                    minLength={3}
                    maxLength={50}
                    placeholder="Name"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    required
                    minLength={5}
                    maxLength={50}
                    placeholder="Email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    required
                    minLength={5}
                    maxLength={16}
                    placeholder="Senha"
                    messageOnFocus="Utilize de 5 a 24 caracteres, com símbolos, letras maiúscula e
					números."
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{5,24}$"
                />
                <Input
                    required
                    minLength={5}
                    maxLength={24}
                    placeholder="Confirmar senha"
                    type="password"
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{5,24}$"
                />
                <CheckBox
                    required
                    onChange={(e) => setAcceptTerms(e.target.checked)}
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
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Center>
                    <Button type="submit" onClick={handleSubmit}>
                        Registrar-se
                    </Button>
                </Center>
            </Form>
            <p>
                Já possui uma conta? <Link href="/login">Faça login aqui</Link>.
            </p>
        </>
    )
}

export default LoginPage
