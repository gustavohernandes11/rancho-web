"use client"
import { ThemeWrapper } from "@/styles/ThemeWrapper"
import { Ubuntu } from "next/font/google"
import StyledComponentsRegistry from "./registry"
import NextAuthSessionProvider from "./providers/sessionProvider"
import { AnimalContextProvider } from "@/contexts/AnimalContext"
import { BatchContextProvider } from "@/contexts/BatchContext"
import { PopupContextProvider } from "@/contexts/PopupContext"

const ubuntu = Ubuntu({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt">
            <head>
                <meta charSet="UTF-8" />
                <meta name="description" content="Criado com Next.js" />
                <title>Rancho | Gestão de Gado de Leite</title>
                <link rel="icon" href="/favicon.ico" sizes="32x32" />
            </head>
            <body className={ubuntu.className}>
                <StyledComponentsRegistry>
                    <BatchContextProvider>
                        <AnimalContextProvider>
                            <NextAuthSessionProvider>
                                <ThemeWrapper>
                                    <PopupContextProvider>
                                        {children}
                                    </PopupContextProvider>
                                </ThemeWrapper>
                            </NextAuthSessionProvider>
                        </AnimalContextProvider>
                    </BatchContextProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}
