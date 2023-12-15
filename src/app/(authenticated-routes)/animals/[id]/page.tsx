"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"

import { AnimalInfoCard } from "@/components/AnimalInfoCard"
import { AnimalRow } from "@/components/AnimalTable/AnimalRow"
import { Aside } from "@/layout/Aside"
import { BatchDropdown } from "@/components/BatchDropdown"
import { Button } from "@/components/Button"
import { Container } from "@/layout/Container"
import { Content } from "@/layout/Content"
import { DesktopOnly } from "@/components/utils/DesktopOnly"
import { Header } from "@/components/Header"
import { IAnimal } from "@/types/IAnimal"
import { IBatch } from "@/types/IBatch"
import { Menu } from "@/components/Menu"
import { PageLayout } from "@/layout/PageLayout"
import { Span } from "@/components/Span"
import { TextArea } from "@/components/TextArea"
import { Title } from "@/components/Title"
import { getAgeFromISO } from "@/utils/getAgeFromISO"
import { deleteAnimal, updateAnimal, getAnimal, listBatches } from "@/requests"
import { usePopupContext } from "@/hooks/usePopupContext"

export default function AnimalsPage() {
    const { id } = useParams()
    const { dispatchConfirmation, dispatchAlert } = usePopupContext()
    const [animal, setAnimal] = useState<IAnimal>()
    const [batch, setBatch] = useState<IBatch>()
    const [paternity, setPaternity] = useState<IAnimal | undefined>()
    const [maternity, setMaternity] = useState<IAnimal | undefined>()
    const router = useRouter()

    const handleDeleteButtonPressed = () => {
        dispatchConfirmation(
            "Tem certeza que deseja excluir o animal " + animal?.name + "?",
            handleDeleteConfirmed
        )
    }
    const handleDeleteConfirmed = () => {
        deleteAnimal(id as string).then((r) => {
            if (r.response?.ok) {
                router.push("/animals")
            } else {
                dispatchAlert("Não foi possível deletar.")
            }
        })
    }
    const handleEditBatch = (e: any) => {
        updateAnimal(id as string, { batchId: e.target.value || null }).then(
            ({ response }) => {
                if (response?.ok) {
                    router.refresh()
                } else {
                    dispatchAlert("Não foi possível editar o lote.")
                }
            }
        )
    }

    useEffect(() => {
        getAnimal(id as string).then(({ data }) => setAnimal(data))
        getAnimal(animal?.paternityId!).then(({ data }) => setPaternity(data))
        getAnimal(animal?.maternityId!).then(({ data }) => setMaternity(data))
        listBatches().then(({ data }) =>
            setBatch(data.find((b: IBatch) => b.id === animal?.batchId))
        )
    }, [animal?.batchId, animal?.maternityId, animal?.paternityId, id])

    return (
        <PageLayout>
            <Container>
                <Header title={"Visualizando animal"} />
                <Content>
                    <AnimalInfoCard
                        name={animal?.name}
                        age={getAgeFromISO(animal?.age || "")}
                        code={animal?.code}
                        gender={animal?.gender}
                    />
                    {batch && batch.id && (
                        <>
                            <Title
                                marginBottom="0.5rem"
                                marginTop="1rem"
                                as="h3"
                            >
                                Lote
                            </Title>
                            <BatchDropdown
                                id={animal?.batchId!}
                                viewMode={true}
                                title={batch?.name}
                                onClickToEdit={(e) => handleEditBatch(e)}
                            />
                        </>
                    )}
                    {maternity && maternity.id && (
                        <>
                            <Title
                                marginBottom="0.5rem"
                                marginTop="1rem"
                                as="h3"
                            >
                                Maternidade
                            </Title>
                            <AnimalRow animal={maternity} viewMode={true} />
                        </>
                    )}
                    {paternity && paternity.id && (
                        <>
                            <Title
                                marginBottom="0.5rem"
                                marginTop="1rem"
                                as="h3"
                            >
                                Paternidade
                            </Title>
                            <AnimalRow animal={paternity} viewMode={true} />
                        </>
                    )}

                    <Title marginBottom="0.5rem" marginTop="1rem" as="h3">
                        Observação
                    </Title>
                    <TextArea
                        disabled={true}
                        style={{ height: "10rem" }}
                        value={
                            animal?.observation
                                ? animal?.observation
                                : "Não há observação"
                        }
                    />
                </Content>
                <DesktopOnly>
                    <Aside>
                        <Span>
                            <Button
                                primary={true}
                                onClick={() => router.push(`${id}/edit`)}
                            >
                                Editar
                            </Button>

                            <Button
                                light={true}
                                onClick={handleDeleteButtonPressed}
                            >
                                Remover
                            </Button>
                        </Span>
                    </Aside>
                </DesktopOnly>
            </Container>
            <Menu />
        </PageLayout>
    )
}
