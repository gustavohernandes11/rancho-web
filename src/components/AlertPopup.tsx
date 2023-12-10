import styled, { css } from "styled-components"
import { Button } from "./Button"
import { Span } from "./Span"
import { Mixins } from "@/styles/mixins"

type IAlertPopupProps = {
    text: string
    onAlertClose?: () => void
}

export const AlertPopup = ({ text, onAlertClose }: IAlertPopupProps) => {
    return (
        <StyledBackground onClick={onAlertClose}>
            <StyledAlertPopup>
                <p>{text}</p>
                <Span>
                    <Button primary={true} onClick={onAlertClose}>
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
    ${Mixins.flexCenter};
    ${Mixins.absoluteCenter};
    ${Mixins.boxAspect};
    justify-content: space-around;
    flex-direction: column;
    padding: 2rem;
    min-height: 12rem;
    min-width: 15rem;
    z-index: 10;
`
