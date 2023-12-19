"use client"

import { IQueryParams, listAnimals } from "@/requests"
import { IAnimal } from "@/types/IAnimal"
import { createContext, useEffect, useState } from "react"

type IAnimalContext = {
    animals: IAnimal[]
    setAnimals: Function
    refetchAnimals: (query?: IQueryParams) => void
}

export const AnimalContext = createContext<IAnimalContext>(
    null as unknown as IAnimalContext
)

export const AnimalContextProvider = ({ children }: any) => {
    const [animals, setAnimals] = useState<IAnimal[]>([])

    const refetchAnimals = (query?: IQueryParams) => {
        listAnimals(query).then(({ data }) => {
            setAnimals(data)
        })
    }

    useEffect(() => {
        refetchAnimals()
    }, [])

    return (
        <AnimalContext.Provider value={{ animals, setAnimals, refetchAnimals }}>
            {children}
        </AnimalContext.Provider>
    )
}
