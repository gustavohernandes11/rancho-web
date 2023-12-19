import styled from "styled-components"
import { Input } from "./Input"
import { MagnifyingGlass } from "@styled-icons/fa-solid"
import { IconButton } from "./IconButton"
import { Mixins } from "@/styles/mixins"

type ISearchProps = {
    onChange: (e: any) => void
    value: string
}

export const Search = ({ onChange, ...props }: ISearchProps) => {
    return (
        <Container>
            <StyledInput
                placeholder="Buscar..."
                onChange={onChange}
                {...props}
            />
            <SmallIconButton
                type="primary"
                icon={<MagnifyingGlass color="white" size={16} />}
            />
        </Container>
    )
}

const StyledInput = styled(Input)`
    border: none;
`
const Container = styled.div`
    ${Mixins.boxAspect};
    display: flex;
    max-width: 20rem;
`
const SmallIconButton = styled(IconButton)`
    padding: 0.5rem 0.875rem;
    display: flex;
`
