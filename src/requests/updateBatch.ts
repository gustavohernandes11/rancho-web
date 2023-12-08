import { IApiResponse } from "@/types/IAPIResponse"
import { getSession } from "next-auth/react"

interface IUpdateBatchProps {
    name?: string
    observation?: string
}

export const updateBatch = async (
    id: string,
    updateData: IUpdateBatchProps
): Promise<IApiResponse> => {
    const session = await getSession()
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/batches/${id}`
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
            "x-access-token": session?.accessToken!,
        },
        body: JSON.stringify(updateData),
    })

    const data = await response.json()

    return { response, data }
}
