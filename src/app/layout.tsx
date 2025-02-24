import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreenWrapper from "@/components/SplashScreenWrapper";

// Configure Cabinet Grotesk as the main font
const cabinet = localFont({
	src: [
		{
			path: "./fonts/cabinet/Fonts/TTF/CabinetGrotesk-Variable.ttf",
			weight: "100 900", // Specify the weight range for the variable font
			style: "normal",
		},
	],
	variable: "--main-font", // Main font variable
});

// Configure Gilroy as the meta font
const gilroy = localFont({
	src: [
		{
			path: "./fonts/gilroy/Gilroy-Light.otf",
			weight: "300",
			style: "normal",
		},
		{
			path: "./fonts/gilroy/Gilroy-ExtraBold.otf",
			weight: "800",
			style: "normal",
		},
		// Add other weights as needed
	],
	variable: "--meta-font", // Meta font variable
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
				className={`${cabinet.variable} ${gilroy.variable} antialiased font-main`}
			>
				<SplashScreenWrapper>
					<Navbar />
					<div className="mt-40 lg:mt-32">{children}</div>
				</SplashScreenWrapper>
				<Footer />
			</body>
		</html>
	);
}
