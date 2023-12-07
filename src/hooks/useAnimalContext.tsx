"use client"
import { useContext } from "react"
import { AnimalContext } from "../contexts/AnimalContext"

export const useAnimalContext = () => useContext(AnimalContext)
