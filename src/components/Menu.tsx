import styled, { css } from "styled-components"
import { IconButton } from "./IconButton"
import { House, Plus, List } from "@styled-icons/fa-solid"
import { MobileOnly } from "./utils/MobileOnly"
import { DesktopOnly } from "./utils/DesktopOnly"
import { usePathname } from "next/navigation"
import { Mixins } from "@/styles/mixins"

export const Menu = () => {
    const pathname = usePathname()

    return (
        <>
            <MobileOnly>
                <HorizontalStyledMenu>
                    <IconButton
                        href="/"
                        type="light"
                        icon={<House size={16} />}
                    />
                    <IconButton
                        href="/animals/add"
                        type="primary"
                        icon={<Plus size={16} />}
                    />
                    <IconButton
                        href="/animals"
                        type="light"
                        icon={<List size={16} />}
                    />
                </HorizontalStyledMenu>
            </MobileOnly>
            <DesktopOnly>
                <VerticalStyledMenu>
                    <IconButton
                        href="/"
                        type="primary"
                        $active={pathname === "/"}
                        icon={<House size={16} />}
                    />

                    <IconButton
                        href={"/animals/add"}
                        type="primary"
                        $active={pathname === "/animals/add"}
                        icon={<Plus size={16} />}
                    />
                    <IconButton
                        href="/animals"
                        type="primary"
                        $active={pathname === "/animals"}
                        icon={<List size={16} />}
                    />
                </VerticalStyledMenu>
            </DesktopOnly>
        </>
    )
}

const HorizontalStyledMenu = styled.menu`
    ${() => css`
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        padding: 0;
    `}
`
const VerticalStyledMenu = styled.menu`
    ${() => css`
        ${Mixins.flexCenter};
        flex-direction: column;
        grid-area: menu;
        gap: 0.5rem;
        width: 5rem;
        background-color: ${({ theme }) => theme.color.primary};
        border-radius: 0.25rem;
        padding: 1rem;
        margin: 0;
    `}
`
