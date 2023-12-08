"use client"

import { AddAnimalForm } from "@/components/forms/AddAnimalForm"
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
import { addAnimal } from "@/requests/addAnimal"

export default function AddAnimalPage() {
    const handleSubmit = async (
        values: IAddAnimalData,
        resetForm: Function
    ) => {
        const res = await addAnimal(values)
        if (res.response?.ok) {
            resetForm()
        } else {
            alert("Não foi adicionado!")
        }
    }

    return (
        <PageLayout>
            <ContainerAsideAtBottom>
                <Header title={"Adicionar animal"} />
                <Content>
                    <AddAnimalForm handleSubmit={handleSubmit} />
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
