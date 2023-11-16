"use client";

import { PageCenterer } from "@/components/containers/PageCenterer";

export default function LoginLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <PageCenterer>{children}</PageCenterer>;
}
