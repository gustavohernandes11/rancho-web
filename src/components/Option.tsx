import { Mixins } from "@/styles/mixins"
import styled, { css } from "styled-components"

interface IOptionElementProps
    extends React.OptionHTMLAttributes<HTMLOptionElement> {}

export const Option: React.FC<IOptionElementProps> = ({ ...props }) => {
    return <StyledOption {...props} />
}

const StyledOption = styled.option`
    ${Mixins.inputAspect};
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
`
