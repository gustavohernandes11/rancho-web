"use client"

import { AddAnimalForm, IInitialValues } from "@/components/forms/AddAnimalForm"
import { useEffect, useState } from "react"

import { Aside } from "@/layout/Aside"
import { CancelButton } from "@/components/Button/CancelButton"
import { ContainerAsideAtBottom } from "@/layout/ContainerAsideAtBottom"
import { Content } from "@/layout/Content"
import { Header } from "@/components/Header"
import { IAddAnimalData } from "@/types/IAddAnimalData"
import { IAnimal } from "@/types/IAnimal"
import { Menu } from "@/components/Menu"
import { PageLayout } from "@/layout/PageLayout"
import { SaveButton } from "@/components/Button/SaveButton"
import { Span } from "@/components/Span"
import { getAnimal } from "@/requests/getAnimal"
import { updateAnimal } from "@/requests/updateAnimal"
import { useParams, useRouter } from "next/navigation"
import { AlertPopup } from "@/components/AlertPopup"

export default function AddAnimalPage() {
    const router = useRouter()
    const [animal, setAnimal] = useState<IAnimal>()
    const [alertMessage, setAlertMessage] = useState("")
    const { id } = useParams()

    const handleSubmit = async (
        values: IAddAnimalData,
        resetForm: Function
    ) => {
        const res = await updateAnimal(id as string, values)
        if (res.response?.ok) {
            router.back()
            resetForm()
        } else {
            setAlertMessage("Não foi possível editar.")
        }
    }
    useEffect(() => {
        getAnimal(id as string).then(({ data }) => setAnimal(data))
    }, [id])

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
                    <Header title={"Editar animal: " + animal?.name} />
                    <Content>
                        <AddAnimalForm
                            initialValues={animal as IInitialValues}
                            handleSubmit={handleSubmit}
                        />
                    </Content>
                    <Aside>
                        <Span>
                            <SaveButton type="submit" form="addAnimalForm" />
                            <CancelButton />
                        </Span>
                    </Aside>
                </ContainerAsideAtBottom>
                <Menu />
            </PageLayout>
        </>
    )
}
