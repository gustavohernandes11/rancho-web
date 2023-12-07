import { IApiResponse } from "@/types/IAPIResponse"

interface ISignUpCredentials {
    name: string
    email: string
    password: string
    passwordConfirmation: string
}

export const signUp = async (
    credentials: ISignUpCredentials,
): Promise<IApiResponse> => {
    let data
    let response = null

    const error = validate(credentials)
    if (error) {
        return {
            data: { error },
            response: null,
        }
    }

    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/signup`
    response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
            passwordConfirmation: credentials.passwordConfirmation,
        }),
    })

    data = await response.json()

    return { response, data }
}

type ErrorOrNull = string | undefined

const validate = (credentials: ISignUpCredentials): ErrorOrNull => {
    if (credentials.password !== credentials.passwordConfirmation) {
        return "A senha e sua confirmação deve ser igual"
    }
    if (credentials.password.length < 5) {
        return "Senha muito curta"
    }
    if (credentials.password.length > 24) {
        return "Senha muito longa"
    }
    if (!credentials.password.match(/(?=.*[0-9])/)) {
        return "Utilize pelo menos um número na senha"
    }
    if (!credentials.password.match(/(?=.*[!@#$%^&*_=+-])/)) {
        return "Utilize pelo menos um caractere especial na senha (!@#$%^&*_=+-)"
    } else {
        return
    }
}
