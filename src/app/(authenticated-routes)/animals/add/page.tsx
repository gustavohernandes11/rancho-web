"use client"

import { AnimalForm } from "@/components/forms/AnimalForm"
import { AddButton } from "@/components/Button/AddButton"
import { Aside } from "@/layout/Aside"
import { CancelButton } from "@/components/Button/CancelButton"
import { ContainerAsideAtBottom } from "@/layout/ContainerAsideAtBottom"
import { Content } from "@/layout/Content"
import { Header } from "@/components/Header"
import { IAddAnimalData } from "@/types/IAddAnimalData"
import { Menu } from "@/components/Menu"
import { PageLayout } from "@/layout/PageLayout"
import { Span } from "@/components/Span"
import { addAnimal } from "@/requests"
import { usePopupContext } from "@/hooks/usePopupContext"
import { Suspense } from "react"
import { Loading } from "@/components/Loading"

export default function AddAnimalPage() {
    const { dispatchAlert } = usePopupContext()
    const handleSubmit = async (
        values: IAddAnimalData,
        resetForm: Function
    ) => {
        const res = await addAnimal(values)
        if (res.response?.ok) {
            dispatchAlert("Adicionado com sucesso!")
            resetForm()
        } else {
            dispatchAlert("Houve um erro ao tentar adicionar!")
        }
    }

    return (
        <PageLayout>
            <ContainerAsideAtBottom>
                <Header title={"Adicionar animal"} />
                <Content>
                    <Suspense fallback={<Loading />}>
                        <AnimalForm handleSubmit={handleSubmit} />
                    </Suspense>
                </Content>
                <Aside>
                    <Span>
                        <AddButton type="submit" form="AnimalForm" />
                        <CancelButton />
                    </Span>
                </Aside>
            </ContainerAsideAtBottom>
            <Menu />
        </PageLayout>
    )
}
