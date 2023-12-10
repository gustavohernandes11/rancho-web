import styled, { css } from "styled-components"
import { Button } from "./Button"
import { Span } from "./Span"

type IConfirmPopupProps = {
    text: string
    onConfirm?: () => void
    onDeniedConfirmation?: () => void
}

export const ConfirmPopup = ({
    text,
    onDeniedConfirmation,
    onConfirm,
}: IConfirmPopupProps) => {
    return (
        <StyledBackground onClick={onDeniedConfirmation}>
            <StyledConfirmPopup>
                <p>{text}</p>
                <Span>
                    <Button light={true} onClick={onDeniedConfirmation}>
                        Cancelar
                    </Button>
                    <Button primary={true} onClick={onConfirm}>
                        Confirmar
                    </Button>
                </Span>
            </StyledConfirmPopup>
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

const StyledConfirmPopup = styled.div`
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
