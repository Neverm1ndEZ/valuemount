"use client";

import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";

export default function SplashScreenClient({
	children,
}: {
	children: React.ReactNode;
}) {
	const [showSplash, setShowSplash] = useState(true);

	useEffect(() => {
		// Show splash screen for 1 second (1000ms)
		const timer = setTimeout(() => {
			setShowSplash(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	// Return either the splash screen or the children based on state
	return showSplash ? <SplashScreen /> : children;
}
