"use client";

import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

const SplashScreen = () => {
	// State to handle the fade-out animation
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		// Add a class to the body to prevent scrolling while splash screen is visible
		document.body.style.overflow = "hidden";

		// Hide splash screen after 2 seconds
		const timer = setTimeout(() => {
			setIsVisible(false);
		}, 2000);

		// Clean up function to restore scrolling and clear timeout
		return () => {
			document.body.style.overflow = "unset";
			clearTimeout(timer);
		};
	}, []);

	return (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${
				isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
			}`}
		>
			<div className="relative flex flex-col items-center">
				<div className="animate-pulse">
					<Image
						src="/loading.png"
						alt="Value Mount Logo"
						width={300}
						height={150}
						priority
						className="object-contain"
					/>
				</div>
			</div>
		</div>
	);
};

export default SplashScreen;
