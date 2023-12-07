import styled, { css } from "styled-components"
import { Button } from "./Button"
import Link from "next/link"

interface IconButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode
    type?: "primary" | "light" | "secondary"
    $active?: boolean
    href?: string
}

export const IconButton: React.FC<IconButtonProps> = ({
    children,
    icon,
    href,
    ...props
}) => {
    return href ? (
        <Link href={href}>
            <StyledIconButton {...props}>{icon}</StyledIconButton>
        </Link>
    ) : (
        <StyledIconButton {...props}>{icon}</StyledIconButton>
    )
}
const StyledIconButton = styled(Button)<any>`
    ${({ theme, type, $active }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        padding: 0.75rem;
        width: fit-content;
        border: none;
        border-radius: 0.25rem;
        transition: background-color ease-in-out 250ms;

        ${type === "primary" &&
        css`
            background-color: ${theme.color.primary};
            path {
                fill: white;
            }
            ${$active &&
            css`
                background-color: ${({ theme }) => theme.color.secondary};
            `}
        `}
        ${type === "light" &&
        css`
            background-color: transparent;
            path {
                fill: ${theme.color.icon};
            }
            &&:hover {
                background-color: ${({ theme }) => theme.color.border};
            }
        `}
            ${type === "secondary" &&
        css`
            background-color: ${theme.color.surface};
            path {
                fill: ${theme.color.iconSecondary};
            }
            &&:active {
                background-color: ${({ theme }) => theme.color.iconSecondary};
            }
        `}
    `}
`
