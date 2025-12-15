import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HousingSupport } from "../components/popup/HousingSupport";
import "./globals.css";

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export const metadata: Metadata = {
	icons: {
		icon: "/favicon.webp",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geist.variable} antialiased overflow-x-hidden`}
		>
			<body className="antialiased">
				<Header />
				<HousingSupport />
				<main className="pt-16 bg-brand-white">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
