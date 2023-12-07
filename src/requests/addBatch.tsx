import { IApiResponse } from "@/types/IAPIResponse"
import { IAddBatchData } from "@/types/IAddBatchData"
import { getSession } from "next-auth/react"

export const addBatch = async (
    updateData: IAddBatchData,
): Promise<IApiResponse> => {
    const session = await getSession()

    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/batches`
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "x-access-token": session?.accessToken!,
        },
        body: JSON.stringify(updateData),
    })

    const data = await response.json()

    return { response, data }
}
