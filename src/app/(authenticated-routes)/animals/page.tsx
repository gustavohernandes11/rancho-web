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
import { Suspense, useState } from "react"
import { Loading } from "@/components/Loading"

export default function AnimalsPage() {
    const { animals, refetchAnimals } = useAnimalContext()
    const [search, setSearch] = useState("")

    const handleRefreshClick: React.MouseEventHandler<
        HTMLButtonElement
    > = () => {
        refetchAnimals()
        setSearch("")
    }

    const handleSearch = (e: any) => {
        setSearch(() => e.target.value)
        refetchAnimals({ search })
    }
    return (
        <PageLayout>
            <Container>
                <Header title={"Animais"} />
                <Content>
                    <InlineBox>
                        <Search onChange={handleSearch} value={search} />
                        <IconButton
                            type="light"
                            icon={<Refresh size={14} />}
                            onClick={handleRefreshClick}
                        />
                    </InlineBox>
                    <Suspense fallback={<Loading />}>
                        {animals && animals.length > 0 ? (
                            <AnimalTable animals={animals} />
                        ) : (
                            <p>Nenhum resultado.</p>
                        )}
                    </Suspense>
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
