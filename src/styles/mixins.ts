import { css } from "styled-components"

export const Mixins = {
    inputAspect: css`
        display: flex;
        padding: 0.75rem;
        border-radius: 0.25rem;
        border: 1px solid ${({ theme }) => theme.color.border};
        background-color: ${({ theme }) => theme.color.surface};
    `,
    flexCenter: css`
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    absoluteCenter: css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `,
    boxAspect: css`
        background-color: ${({ theme }) => theme.color.surface};
        border: 1px solid ${({ theme }) => theme.color.border};
        border-radius: 0.25rem;
    `,
}
