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
import { useState } from "react"
import { AlertPopup } from "@/components/AlertPopup"

export default function AddAnimalPage() {
    const [alertMessage, setAlertMessage] = useState("")
    const handleSubmit = async (
        values: IAddAnimalData,
        resetForm: Function
    ) => {
        const res = await addAnimal(values)
        if (res.response?.ok) {
            setAlertMessage("Adicionado com sucesso!")
            resetForm()
        } else {
            setAlertMessage("Não foi adicionado!")
        }
    }

    return (
        <>
            {alertMessage && (
                <AlertPopup
                    text={alertMessage}
                    onClose={() => setAlertMessage("")}
                />
            )}
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
        </>
    )
}
