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
import { AlertPopup } from "@/components/AlertPopup"
import { AddBatchForm } from "@/components/forms/AddBatchForm"
import { IAddBatchData } from "@/types/IAddBatchData"
import { Button } from "@/components/Button"
import { ConfirmPopup } from "@/components/ConfirmPopup"

export default function EditBatchPage() {
    const router = useRouter()
    const [batch, setBatch] = useState<IBatch>()
    const [alertMessage, setAlertMessage] = useState("")
    const [deleteConfirmationMessage, setDeleteConfirmationMessage] =
        useState("")
    const { id } = useParams()

    const handleSubmit = async (
        values: { name?: string; observation?: string },
        resetForm: Function
    ) => {
        const res = await updateBatch(id as string, values)
        if (res.response?.ok) {
            router.back()
            resetForm()
        } else {
            setAlertMessage("Não foi possível editar.")
        }
    }
    useEffect(() => {
        getBatch(id as string).then(({ data }) => setBatch(data))
    }, [id])

    const handleDeleteBatch = () => {
        deleteBatch(id as string).then((r) => {
            if (r.response?.ok) router.push("/batches")
        })
    }
    return (
        <>
            {alertMessage && (
                <AlertPopup
                    text={alertMessage}
                    onClose={() => setAlertMessage("")}
                />
            )}
            {deleteConfirmationMessage && (
                <ConfirmPopup
                    text={deleteConfirmationMessage}
                    onCancel={() => setDeleteConfirmationMessage("")}
                    onConfirm={() => handleDeleteBatch()}
                />
            )}
            <PageLayout>
                <ContainerAsideAtBottom>
                    <Header title={"Editar batch: " + batch?.name} />
                    <Content>
                        <AddBatchForm
                            initialValues={batch as IAddBatchData}
                            handleSubmit={handleSubmit}
                        />
                    </Content>
                    <Aside>
                        <Span>
                            <SaveButton type="submit" form="addBatchForm" />
                            <CancelButton />
                            <Button
                                light={true}
                                onClick={() =>
                                    setDeleteConfirmationMessage(
                                        "Deseja realmente deletar esse lote? (animais não serão afetados)"
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
        </>
    )
}
