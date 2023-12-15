"use client"

import AddAnimalImage from "@/assets/AddAnimal.svg"
import AddBarnImage from "@/assets/AddBarn.svg"
import { AnimalTable } from "@/components/AnimalTable"
import { Aside } from "@/layout/Aside"
import { Card } from "@/components/Card"
import { Container } from "@/layout/Container"
import { Content } from "@/layout/Content"
import { Grid } from "@/components/Grid"
import { Header } from "@/components/Header"
import { IconButton } from "@/components/IconButton"
import { InlineBox } from "@/components/InlineBox"
import { Menu } from "@/components/Menu"
import { PageLayout } from "@/layout/PageLayout"
import { Refresh } from "@styled-icons/fa-solid"
import { Search } from "@/components/Search"
import { useAnimalContext } from "@/hooks/useAnimalContext"

export default function AnimalsPage() {
    const { animals, refetchAnimals } = useAnimalContext()

    return (
        <PageLayout>
            <Container>
                <Header title={"Animais"} />
                <Content>
                    <InlineBox>
                        <Search />
                        <IconButton
                            type="light"
                            icon={<Refresh size={14} />}
                            onClick={refetchAnimals}
                        />
                    </InlineBox>
                    {animals && animals.length > 0 ? (
                        <AnimalTable animals={animals} />
                    ) : (
                        <p>Nenhum animal registrado por enquanto.</p>
                    )}
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
