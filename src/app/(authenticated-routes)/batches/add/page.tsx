"use client"

import { AddBatchForm } from "@/components/forms/AddBatchForm"
import { AddButton } from "@/components/Button/AddButton"
import { Aside } from "@/layout/Aside"
import { CancelButton } from "@/components/Button/CancelButton"
import { ContainerAsideAtBottom } from "@/layout/ContainerAsideAtBottom"
import { Content } from "@/layout/Content"
import { Header } from "@/components/Header"
import { Menu } from "@/components/Menu"
import { PageLayout } from "@/layout/PageLayout"
import { Span } from "@/components/Span"
import { addBatch } from "@/requests"
import { IAddBatchData } from "@/types/IAddBatchData"

export default function AddBatchPage() {
    const handleSubmit = async (values: IAddBatchData, resetForm: Function) => {
        const res = await addBatch(values)
        if (res.response?.ok) resetForm()
    }

    return (
        <PageLayout>
            <ContainerAsideAtBottom>
                <Header title={"Adicionar lote"} />
                <Content>
                    <AddBatchForm handleSubmit={handleSubmit} />
                </Content>
                <Aside>
                    <Span>
                        <AddButton type="submit" form="addBatchForm" />
                        <CancelButton />
                    </Span>
                </Aside>
            </ContainerAsideAtBottom>
            <Menu />
        </PageLayout>
    )
}
