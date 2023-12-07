import styled, { css } from "styled-components"
import { AnimalTableHeader } from "./AnimalTableHeader"
import { IAnimal } from "@/types/IAnimal"
import { AnimalRow } from "./AnimalRow"

interface IAnimalTableProps {
    animals: IAnimal[]
}

export const AnimalTable = ({ animals }: IAnimalTableProps) => {
    return (
        <StyledTable>
            <AnimalTableHeader />
            <StyledTBody>
                {animals &&
                    animals.length > 0 &&
                    animals?.map((al: IAnimal) => (
                        <AnimalRow animal={al} key={al.id} />
                    ))}
            </StyledTBody>
        </StyledTable>
    )
}

const StyledTBody = styled.tbody`
    ${() => css`
        display: block;

        :last-child {
            border-bottom-left-radius: 0.25rem;
            border-bottom-right-radius: 0.25rem;
        }
    `}
`
const StyledTable = styled.table`
    ${() => css`
        display: block;
        border-radius: 0.25rem;
    `}
`
