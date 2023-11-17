"use client";

import { Cover } from "@/components/Cover";
import { AuthContainer } from "@/components/AuthContainer";
import { DesktopOnly } from "@/components/containers/DesktopOnly";
import styled from "styled-components";

export default function LoginLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SignupContainer>
			<DesktopOnly>
				<Cover />
			</DesktopOnly>
			<AuthContainer>{children}</AuthContainer>
		</SignupContainer>
	);
}

const SignupContainer = styled.main`
	width: 100vw;
	height: 100vh;
	display: inline-flex;
	justify-content: space-between;
`;
