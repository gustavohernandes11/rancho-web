import styled, { css } from "styled-components"
import { useEffect, useState } from "react"
import { IconButton } from "./IconButton"
import {
    ChevronLeft,
    ChevronDown,
    Edit,
    Exchange,
} from "@styled-icons/fa-solid"
import { IAnimal } from "@/types/IAnimal"
import { listAnimalsByBatch } from "@/requests"
import { AnimalRow } from "./AnimalTable/AnimalRow"
import { DropdownWrapper } from "./DropdownWrapper"
import { Option } from "./Option"
import { useBatchContext } from "@/hooks/useBatchContext"
import { useRouter } from "next/navigation"

interface IBatchDropdown {
    title?: string
    viewMode?: boolean
    description?: string
    id: string
    onClickToEdit?: (e: any) => void
}

export const BatchDropdown = ({
    title,
    description,
    viewMode,
    id,
    onClickToEdit,
}: IBatchDropdown) => {
    const [isOpen, setIsOpen] = useState(false)
    const [animals, setAnimals] = useState<IAnimal[]>([])
    const { batches } = useBatchContext()
    const router = useRouter()

    useEffect(() => {
        listAnimalsByBatch(id).then(({ data }) => {
            console.log(data)
            setAnimals(data)
        })
    }, [id])

    const handleSetNewBatch = (e: any) => {
        onClickToEdit && onClickToEdit(e)
    }

    return (
        <>
            <Container>
                <div>
                    <BatchTitle>{title}</BatchTitle>
                    {description && (
                        <BatchDescription>{description}</BatchDescription>
                    )}
                </div>
                <BatchCount>
                    {animals && animals.length}
                    {animals && animals.length > 1 ? " animais" : " animal"}
                </BatchCount>
                <ActionSpan>
                    {viewMode ? (
                        <DropdownWrapper
                            itemsToDropDown={
                                <form>
                                    <Option
                                        value={""}
                                        onClick={(e) => handleSetNewBatch(e)}
                                    >
                                        Remover lote
                                    </Option>
                                    {batches &&
                                        batches.length > 0 &&
                                        batches.map((batch) => {
                                            return (
                                                <Option
                                                    onClick={(e) =>
                                                        handleSetNewBatch(e)
                                                    }
                                                    value={batch.id}
                                                    key={batch.id}
                                                >
                                                    {batch.name}
                                                </Option>
                                            )
                                        })}
                                </form>
                            }
                        >
                            <IconButton
                                type="secondary"
                                icon={<Exchange size={16} />}
                            />
                        </DropdownWrapper>
                    ) : (
                        <>
                            <IconButton
                                type="secondary"
                                icon={<Edit color="white" size={16} />}
                                onClick={() =>
                                    router.push(`batches/${id}/edit`)
                                }
                            />
                            <IconButton
                                onClick={() => setIsOpen(() => !isOpen)}
                                type="secondary"
                                icon={
                                    isOpen ? (
                                        <ChevronDown color="white" size={16} />
                                    ) : (
                                        <ChevronLeft color="white" size={16} />
                                    )
                                }
                            />
                        </>
                    )}
                </ActionSpan>
            </Container>
            {isOpen &&
                animals.map((al) => <AnimalRow key={al.id} animal={al} />)}
        </>
    )
}

const Container = styled.div`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        grid-auto-flow: row;
        column-gap: 1rem;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 0.5rem 0.5rem 1rem;
        border: 1px solid ${theme.color.border};
        outline-color: ${theme.color.border};
        margin-bottom: 0.5rem;
        border-radius: 0.25rem;

        &&:hover {
            cursor: pointer;
            transition: outline ease-in-out 150ms;
            outline: 2px solid ${theme.color.border};
        }
    `}
`

const BatchTitle = styled.h2`
    font-weight: 400;
    font-size: 1rem;
`
const BatchDescription = styled.p`
    font-size: 0.75rem;
    font-weight: 100;
`
const BatchCount = styled.p`
    ${() => css`
        display: inline;
        font-size: 1rem;
        font-weight: 100;
    `}
`

const ActionSpan = styled.span`
    display: flex;
    gap: 0.5rem;
    margin-left: auto;
`

const AnimalsContainer = styled.div`
    padding-left: 1rem;
`
