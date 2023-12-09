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
import { Menu } from "@/components/Menu"
import { PageLayout } from "@/layout/PageLayout"
import { Section } from "@/layout/Section"
import { useBatchContext } from "@/hooks/useBatchContext"

export default function BatchesPage() {
    const { batches } = useBatchContext()

    return (
        <PageLayout>
            <Container>
                <Header title={"Lotes"} />
                <Content>
                    <Section>
                        {batches.length > 0 ? (
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
