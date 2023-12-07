"use client"

import AddAnimalImage from "@/assets/AddAnimal.svg"
import AddBarnImage from "@/assets/AddBarn.svg"
import AnimalImage from "@/assets/Animal.svg"
import BarnImage from "@/assets/Barn.svg"
import { Card } from "@/components/Card"
import { ContainerNoAside } from "@/layout/ContainerNoAside"
import { Content } from "@/layout/Content"
import { Grid } from "@/components/Grid"
import { Header } from "@/components/Header"
import { Menu } from "@/components/Menu"
import { PageLayout } from "@/layout/PageLayout"

export default function Home() {
    return (
        <PageLayout>
            <ContainerNoAside>
                <Header title={"Início"} />
                <Content>
                    <Grid>
                        <Card
                            image={AddBarnImage}
                            alt="Visualizar lotes"
                            text="Visualizar Lotes"
                            href="/batches"
                        />
                        <Card
                            image={AnimalImage}
                            alt="Visualizar Rebanho"
                            text="Visualizar Rebanho"
                            href="/animals"
                        />

                        <Card
                            image={BarnImage}
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
                </Content>
            </ContainerNoAside>
            <Menu />
        </PageLayout>
    )
}
