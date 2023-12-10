import { ReactNode } from "react"
import { getServerSession } from "next-auth"
import { nextAuthOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { AnimalContextProvider } from "@/contexts/AnimalContext"
import { BatchContextProvider } from "@/contexts/BatchContext"

interface PrivateLayoutProps {
    children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
    const session = await getServerSession(nextAuthOptions)

    if (!session) {
        redirect("/login")
    }

    return (
        <AnimalContextProvider>
            <BatchContextProvider>{children}</BatchContextProvider>
        </AnimalContextProvider>
    )
}
