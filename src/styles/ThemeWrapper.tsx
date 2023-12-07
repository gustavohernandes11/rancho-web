"use client"
import { useThemeContext } from "@/hooks/useThemeContext"
import { darkTheme, lightTheme } from "@/styles/themes"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./GlobalStyles"

export function ThemeWrapper({ children }: any) {
    const [theme] = useThemeContext()

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
}
