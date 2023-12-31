import styled, { css } from "styled-components"
import { IconButton } from "../IconButton"
import { Trash, EllipsisVertical, Eye } from "@styled-icons/fa-solid"
import { DesktopOnly } from "../utils/DesktopOnly"
import { MobileOnly } from "../utils/MobileOnly"
import { DropdownWrapper } from "../DropdownWrapper"
import { IAnimal } from "@/types/IAnimal"
import { deleteAnimal } from "@/requests"
import { useRouter } from "next/navigation"
import { useAnimalContext } from "@/hooks/useAnimalContext"
import { getAgeFromISO } from "@/utils/getAgeFromISO"
import { Mixins } from "@/styles/mixins"
import { usePopupContext } from "@/hooks/usePopupContext"

const Actions = ({ id, name }: { id: string; name: string }) => {
    const router = useRouter()
    const { setAnimals } = useAnimalContext()
    const { dispatchConfirmation } = usePopupContext()

    const handleDeleteConfirmed = () => {
        deleteAnimal(id)
        setAnimals((prev: IAnimal[]) =>
            prev.filter((animal) => animal.id !== id)
        )
    }
    const handleGoToAnimal = () => {
        router.push("animals/" + id)
    }

    return (
        <Span>
            <IconButton
                onClick={() =>
                    dispatchConfirmation(
                        "Tem certeza que deseja excluir o animal " + name + "?",
                        handleDeleteConfirmed
                    )
                }
                type="secondary"
                icon={<Trash color="white" size={16} />}
            />
            <IconButton
                onClick={handleGoToAnimal}
                type="primary"
                icon={<Eye color="white" size={16} />}
            />
        </Span>
    )
}
type IAnimalRowProps = {
    viewMode?: boolean
    animal: IAnimal
}
export const AnimalRow = ({ viewMode, animal }: IAnimalRowProps) => {
    return (
        <StyledTableRow>
            <Item>{animal.name}</Item>
            <Item>{animal.gender === "F" ? "♀ Fêmea" : "♂ Macho"}</Item>
            <Item>{getAgeFromISO(animal.age)}</Item>
            {viewMode ? (
                <Span>
                    <IconButton
                        type="secondary"
                        href={animal?.id}
                        icon={<Eye size={16} />}
                    />
                </Span>
            ) : (
                <>
                    <DesktopOnly>
                        <Actions id={animal?.id} name={animal?.name} />
                    </DesktopOnly>
                    <MobileOnly>
                        <DropdownWrapper
                            itemsToDropDown={
                                <Actions id={animal?.id} name={animal?.name} />
                            }
                        >
                            <IconButton
                                type="secondary"
                                icon={<EllipsisVertical size={16} />}
                            />
                        </DropdownWrapper>
                    </MobileOnly>
                </>
            )}
        </StyledTableRow>
    )
}

const StyledTableRow = styled.tr`
    ${({ theme }) => css`
        ${Mixins.boxAspect};
        display: grid;
        grid-auto-flow: column;
        grid-column-end: auto;
        grid-template-columns: 2fr 2fr 2fr 1fr;
        padding: 0.5rem 0.5rem 0.5rem 1rem;
        outline-color: ${theme.color.border};
        column-gap: 1rem;

        &:last-child {
            justify-content: end;
        }

        &:last-child {
            margin-bottom: 0.5rem;
        }

        &&:hover {
            cursor: pointer;
            transition: outline ease-in-out 150ms;
            outline: 2px solid ${theme.color.border};
        }
    `}
`
const Item = styled.p`
    ${() => css`
        display: inline-flex;
        align-items: center;
        font-size: 0.875rem;
        font-weight: 100;
    `}
`

const Span = styled.span`
    display: flex;
    justify-content: end;
    gap: 0.5rem;
`
