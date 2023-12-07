"use client"

import { listBatches } from "@/requests/listBatches"
import { IBatch } from "@/types/IBatch"
import { createContext, useEffect, useState } from "react"

type IBatchContext = {
    batches: IBatch[]
    setBatches: Function
    refetchBatches: () => void
}

export const BatchContext = createContext<IBatchContext>(
    null as unknown as IBatchContext,
)

export const BatchContextProvider = ({ children }: any) => {
    const [batches, setBatches] = useState<IBatch[]>([])

    const refetchBatches = () => {
        listBatches().then(({ data }) => {
            setBatches(data)
        })
    }

    useEffect(() => {
        refetchBatches()
    }, [])

    return (
        <BatchContext.Provider value={{ batches, setBatches, refetchBatches }}>
            {children}
        </BatchContext.Provider>
    )
}
