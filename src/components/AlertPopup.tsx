import styled, { css } from "styled-components"
import { Button } from "./Button"
import { Span } from "./Span"

type IAlertPopupProps = {
    text: string
    onClose: () => void
}

export const AlertPopup = ({ text, onClose }: IAlertPopupProps) => {
    return (
        <StyledBackground onClick={onClose}>
            <StyledAlertPopup>
                <p>{text}</p>
                <Span>
                    <Button primary={true} onClick={onClose}>
                        Ok
                    </Button>
                </Span>
            </StyledAlertPopup>
        </StyledBackground>
    )
}

const StyledBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    backdrop-filter: blur(0.04rem);
    height: 100vh;
    z-index: 5;
`

const StyledAlertPopup = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        position: absolute;
        background-color: ${theme.color.surface};
        border: 1px solid ${theme.color.border};
        border-radius: 0.25rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 2rem;
        min-height: 12rem;
        min-width: 15rem;
        z-index: 10;
    `}
`
