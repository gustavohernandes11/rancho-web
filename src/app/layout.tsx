import { ThemeWrapper } from "@/styles/ThemeWrapper";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import StyledComponentsRegistry from "./registry";

const ubuntu = Ubuntu({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Rancho | Gestão de Gado de Leite",
	description: "Criado com Next.js",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt">
			<head>
				<meta charSet="UTF-8" />
				<link rel="icon" href="/favicon.ico" sizes="32x32" />
			</head>
			<body className={ubuntu.className}>
				<StyledComponentsRegistry>
					<ThemeWrapper>{children}</ThemeWrapper>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
