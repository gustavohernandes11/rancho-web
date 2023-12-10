import { IApiResponse } from "@/types/IAPIResponse"
import { getSession } from "next-auth/react"

interface IUpdateAnimalProps {
    name?: string
    gender?: string
    age?: string
    batchId?: string
    maternityId?: string
    paternityId?: string
    observation?: string
    code?: string
}

export const updateAnimal = async (
    id: string,
    updateData: IUpdateAnimalProps
): Promise<IApiResponse> => {
    const session = await getSession()

    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/animals/${id}`
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
            "x-access-token": session?.accessToken!,
        },
        body: JSON.stringify(updateData),
    })

    const data = response?.status === 200 ? await response.json() : {}

    return { response, data }
}
