import type { Metadata } from "next";
import { Montserrat, Mulish } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import SplashScreen from "@/components/SplashScreen";

const montserrat = Montserrat({
	variable: "--main-font",
	subsets: ["latin"],
	display: "swap",
});

const mulish = Mulish({
	variable: "--meta-font",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Value Mount Lixiviate",
	description: "Gold",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${montserrat.variable} ${mulish.variable} antialiased font-main`}
			>
				<Navbar />
				<Suspense fallback={<SplashScreen />}>
					<div className="mt-24 lg:mt-32">{children}</div>
				</Suspense>
			</body>
		</html>
	);
}
