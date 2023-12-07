"use client"

import { AuthContainer } from "@/components/AuthContainer"
import { AuthPageLayout } from "@/layout/AuthPageLayout"
import { Cover } from "@/components/Cover"
import { DesktopOnly } from "@/components/utils/DesktopOnly"

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AuthPageLayout>
            <DesktopOnly>
                <Cover />
            </DesktopOnly>
            <AuthContainer>{children}</AuthContainer>
        </AuthPageLayout>
    )
}
