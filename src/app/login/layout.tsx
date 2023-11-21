"use client";
import { Cover } from "@/components/Cover";
import { AuthContainer } from "@/components/AuthContainer";
import { DesktopOnly } from "@/components/utils/DesktopOnly";
import { AuthPageLayout } from "@/layout/AuthPageLayout";

export default function LoginLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<AuthPageLayout>
			<DesktopOnly>
				<Cover />
			</DesktopOnly>
			<AuthContainer>{children}</AuthContainer>
		</AuthPageLayout>
	);
}
