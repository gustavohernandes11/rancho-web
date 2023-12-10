"use client"

import { useEffect, useState } from "react"

import { Aside } from "@/layout/Aside"
import { CancelButton } from "@/components/Button/CancelButton"
import { ContainerAsideAtBottom } from "@/layout/ContainerAsideAtBottom"
import { Content } from "@/layout/Content"
import { Header } from "@/components/Header"
import { IBatch } from "@/types/IBatch"
import { Menu } from "@/components/Menu"
import { PageLayout } from "@/layout/PageLayout"
import { SaveButton } from "@/components/Button/SaveButton"
import { Span } from "@/components/Span"
import { deleteBatch, getBatch, updateBatch } from "@/requests/"
import { useParams, useRouter } from "next/navigation"
import { BatchForm } from "@/components/forms/BatchForm/"
import { IAddBatchData } from "@/types/IAddBatchData"
import { Button } from "@/components/Button"
import { usePopupContext } from "@/hooks/usePopupContext"

export default function EditBatchPage() {
    const router = useRouter()
    const { dispatchAlert, dispatchConfirmation } = usePopupContext()
    const [batch, setBatch] = useState<IBatch>()
    const { id } = useParams()

    const handleSubmit = async (
        values: { name?: string; observation?: string },
        resetForm: Function
    ) => {
        const { response } = await updateBatch(id as string, values)
        if (response?.ok) {
            router.back()
            resetForm()
        } else {
            dispatchAlert("Não foi possível editar.")
        }
    }
    useEffect(() => {
        getBatch(id as string).then(({ data }) => setBatch(data))
    }, [id])

    const handleDeleteBatch = () => {
        deleteBatch(id as string).then(({ response }) => {
            if (response?.ok) {
                dispatchAlert("Lote deletado com sucesso!")
                router.push("/batches")
            }
        })
    }
    return (
        <PageLayout>
            <ContainerAsideAtBottom>
                <Header title={"Editar batch: " + batch?.name} />
                <Content>
                    <BatchForm
                        initialValues={batch as IAddBatchData}
                        handleSubmit={handleSubmit}
                    />
                </Content>
                <Aside>
                    <Span>
                        <SaveButton type="submit" form="BatchForm" />
                        <CancelButton />
                        <Button
                            type="button"
                            light={true}
                            onClick={() =>
                                dispatchConfirmation(
                                    "Deseja realmente deletar esse lote? (animais não serão afetados)",
                                    handleDeleteBatch
                                )
                            }
                        >
                            Deletar lote
                        </Button>
                    </Span>
                </Aside>
            </ContainerAsideAtBottom>
            <Menu />
        </PageLayout>
    )
}
