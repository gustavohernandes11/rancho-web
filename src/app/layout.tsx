"use client";
import { ThemeWrapper } from "@/styles/ThemeWrapper";
import { Ubuntu } from "next/font/google";
import StyledComponentsRegistry from "./registry";
import NextAuthSessionProvider from "./providers/sessionProvider";
import { AnimalContextProvider } from "@/contexts/AnimalContext";

const ubuntu = Ubuntu({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
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
					<AnimalContextProvider>
						<NextAuthSessionProvider>
							<ThemeWrapper>{children}</ThemeWrapper>
						</NextAuthSessionProvider>
					</AnimalContextProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
