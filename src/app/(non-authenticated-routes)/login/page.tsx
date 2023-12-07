"use client"

import { Brand } from "@/components/Brand"
import { Button } from "@/components/Button"
import { Center } from "@/components/utils/Center"
import { ErrorMessage } from "@/components/ErrorMessage"
import { Form } from "@/components/Form"
import { Input } from "@/components/Input"
import { NextPage } from "next"
import { Title } from "@/components/Title"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

const LoginPage: NextPage = () => {
    const [email, setEmail] = useState<string>("")
    const [error, setError] = useState<string | null>()

    const [password, setPassword] = useState<string>("")
    const router = useRouter()

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setError(null)

        const response = await signIn("credentials", {
            email,
            password,
            redirect: false,
        })

        if (response?.error) {
            setError(response.error)
            return
        }

        router.replace("/")
    }
    return (
        <>
            <Brand />
            <Title>Entre na sua conta</Title>
            <Form>
                <Input
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    minLength={3}
                    type="email"
                    placeholder="Email"
                />
                <Input
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha"
                    required
                    minLength={3}
                    type="password"
                />
                {error && (
                    <ErrorMessage>Email ou senha inválidos.</ErrorMessage>
                )}
                <Center>
                    <Button type="submit" onClick={handleSubmit}>
                        Entrar
                    </Button>
                </Center>
            </Form>
            <p>
                Não tem uma conta? <a href="/signup">Crie uma aqui</a>.
            </p>
        </>
    )
}

export default LoginPage
