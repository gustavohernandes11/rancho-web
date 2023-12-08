"use client"

import { useEffect, useState } from "react"

import AddAnimalImage from "@/assets/AddAnimal.svg"
import AddBarnImage from "@/assets/AddBarn.svg"
import { Aside } from "@/layout/Aside"
import { BatchDropdown } from "@/components/BatchDropdown"
import { Card } from "@/components/Card"
import { Container } from "@/layout/Container"
import { Content } from "@/layout/Content"
import { Grid } from "@/components/Grid"
import { Header } from "@/components/Header"
import { IBatch } from "@/types/IBatch"
import { Menu } from "@/components/Menu"
import { PageLayout } from "@/layout/PageLayout"
import { Section } from "@/layout/Section"
import { listBatches } from "@/requests/listBatches"

export default function BatchesPage() {
    const [batches, setBatches] = useState<IBatch[]>()

    useEffect(() => {
        listBatches().then(({ data }) => setBatches(data))
    }, [])
    return (
        <PageLayout>
            <Container>
                <Header title={"Lotes"} />
                <Content>
                    <Section>
                        {batches ? (
                            batches.map((batch) => (
                                <BatchDropdown
                                    key={batch.id}
                                    title={batch.name}
                                    description={batch?.observation}
                                    id={batch.id}
                                />
                            ))
                        ) : (
                            <p>Nenhum lote registrado por enquanto.</p>
                        )}
                    </Section>
                </Content>
                <Aside>
                    <Grid>
                        <Card
                            image={AddBarnImage}
                            alt="Adicionar lote"
                            text="Adicionar Lote"
                            href="/batches/add"
                        />
                        <Card
                            image={AddAnimalImage}
                            alt="Adicionar Animal"
                            text="Adicionar Animal"
                            href="/animals/add"
                        />
                    </Grid>
                </Aside>
            </Container>
            <Menu />
        </PageLayout>
    )
}
