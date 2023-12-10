"use client"

import { AnimalForm } from "@/components/forms/AnimalForm/AnimalForm"
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
            dispatchAlert("Não foi adicionado!")
        }
    }

    return (
        <PageLayout>
            <ContainerAsideAtBottom>
                <Header title={"Adicionar animal"} />
                <Content>
                    <AnimalForm handleSubmit={handleSubmit} />
                </Content>
                <Aside>
                    <Span>
                        <AddButton type="submit" form="addAnimalForm" />
                        <CancelButton />
                    </Span>
                </Aside>
            </ContainerAsideAtBottom>
            <Menu />
        </PageLayout>
    )
}
