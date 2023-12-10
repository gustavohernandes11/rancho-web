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
import { signUp } from "@/requests"
import { SignupForm } from "@/components/forms/SignupForm"
import { IUserSignupCredentials } from "@/types/IUserSignupCredentials"
import { useRouter } from "next/navigation"
import { usePopupContext } from "@/hooks/usePopupContext"

const LoginPage: NextPage = () => {
    const router = useRouter()
    const { dispatchAlert } = usePopupContext()
    const handleSubmit = async ({
        name,
        email,
        password,
        passwordConfirmation,
    }: IUserSignupCredentials) => {
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
            dispatchAlert(data.error)
        }
    }

    return (
        <>
            <Brand />
            <Title>Crie sua conta</Title>
            <SignupForm handleSubmit={handleSubmit} />
            <p>
                Já possui uma conta? <Link href="/login">Faça login aqui</Link>.
            </p>
        </>
    )
}

export default LoginPage
