"use client"

type IGenderOptions = "F" | "M"
export type IAddAnimalData = {
    name: string
    age: string
    gender: IGenderOptions
    batchId?: string
    maternityId?: string
    paternityId?: string
    observation?: string
    code?: string
}
