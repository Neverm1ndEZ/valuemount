"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Head from "next/head";
import Hero from "./Hero";
import Collection from "./processes/Collection";
import DeliveryWithTrust from "./processes/DeliveryWithTrust";
import Purification from "./processes/Purification";
import QualityTesting from "./processes/QualityTesting";
import ShapingExcellence from "./processes/ShapingExcellence";
import WhyValueMount from "./WhyValueMount";
import Footer from "../Footer";

// Define our section components in the order we want them to appear
const SECTION_COMPONENTS = [
	{ id: "hero", Component: Hero },
	{ id: "collection", Component: Collection },
	{ id: "purification", Component: Purification },
	{ id: "quality-testing", Component: QualityTesting },
	{ id: "shaping-excellence", Component: ShapingExcellence },
	{ id: "delivery-with-trust", Component: DeliveryWithTrust },
	{ id: "why-value-mount", Component: WhyValueMount },
	{ id: "footer", Component: Footer },
];

export default function Home() {
	// State to manage our section groups
	const [sectionGroups, setSectionGroups] = useState([0]);
	const containerRef = useRef<HTMLDivElement>(null);

	// Calculate navbar height for proper positioning
	const [navbarHeight, setNavbarHeight] = useState(0);

	// Set up our intersection observers with appropriate margins
	const [topTriggerRef, topTriggerInView] = useInView({
		threshold: 0,
		rootMargin: "500px 0px 0px 0px", // Increased margin for smoother loading
	});

	const [bottomTriggerRef, bottomTriggerInView] = useInView({
		threshold: 0,
		rootMargin: "0px 0px 500px 0px",
	});

	// Effect to measure and update navbar height
	useEffect(() => {
		const updateNavbarHeight = () => {
			const navbar = document.querySelector(
				'div[class*="border-b border-[#AD8330]"]',
			);
			if (navbar) {
				const height = navbar.getBoundingClientRect().height;
				setNavbarHeight(height);
			}
		};

		// Update on mount and window resize
		updateNavbarHeight();
		window.addEventListener("resize", updateNavbarHeight);

		return () => window.removeEventListener("resize", updateNavbarHeight);
	}, []);

	// Handle adding sections at the top
	useEffect(() => {
		if (topTriggerInView) {
			setSectionGroups((prev) => {
				const firstGroup = prev[0];
				if (prev.includes(firstGroup - 1)) return prev;

				// Use requestAnimationFrame for smooth scroll position maintenance
				requestAnimationFrame(() => {
					if (containerRef.current) {
						const firstGroupHeight =
							containerRef.current.children[1].getBoundingClientRect().height;
						window.scrollBy(0, firstGroupHeight);
					}
				});

				return [firstGroup - 1, ...prev];
			});
		}
	}, [topTriggerInView]);

	// Handle adding sections at the bottom
	useEffect(() => {
		if (bottomTriggerInView) {
			setSectionGroups((prev) => {
				const lastGroup = prev[prev.length - 1];
				if (prev.includes(lastGroup + 1)) return prev;
				return [...prev, lastGroup + 1];
			});
		}
	}, [bottomTriggerInView]);

	// Clean up off-screen sections while accounting for navbar
	useEffect(() => {
		const cleanup = setInterval(() => {
			if (!containerRef.current) return;

			const viewportHeight = window.innerHeight;
			const scrollPosition = window.scrollY;

			setSectionGroups((prev) =>
				prev.filter((groupIndex) => {
					const groupElement = document.getElementById(
						`section-group-${groupIndex}`,
					);
					if (!groupElement) return false;

					const { top, bottom } = groupElement.getBoundingClientRect();
					const elementTop = top + scrollPosition;
					const elementBottom = bottom + scrollPosition;

					return (
						elementBottom >= scrollPosition - viewportHeight * 2 &&
						elementTop <= scrollPosition + viewportHeight * 2 + navbarHeight
					);
				}),
			);
		}, 1000);

		return () => clearInterval(cleanup);
	}, [navbarHeight]);

	return (
		// Main content container positioned below navbar
		<main
			className="relative w-full"
			style={{
				marginTop: `${navbarHeight}px`,
				minHeight: `calc(100vh - ${navbarHeight}px)`,
			}}
		>
			<Head>
				<link rel="preload" href="/home-carousel/1.svg" as="image" />
				<link rel="preload" href="/home-carousel/3.svg" as="image" />
				<link rel="preload" href="/home-carousel/2-poster.png" as="image" />
				<link rel="preload" href="/home-carousel/4-poster.png" as="image" />
			</Head>

			<div ref={containerRef} className="relative">
				{/* Top trigger for infinite scroll */}
				<div ref={topTriggerRef} className="absolute top-0 h-1 w-full" />

				{/* Section groups */}
				{sectionGroups.map((groupIndex) => (
					<div
						key={groupIndex}
						id={`section-group-${groupIndex}`}
						className="max-w-7xl mx-auto pt-10 pb-24 space-y-10"
					>
						{SECTION_COMPONENTS.map(({ id, Component }) => (
							<div key={`${groupIndex}-${id}`} id={`${groupIndex}-${id}`}>
								<Component />
							</div>
						))}
					</div>
				))}

				{/* Bottom trigger for infinite scroll */}
				<div ref={bottomTriggerRef} className="absolute bottom-0 h-1 w-full" />
			</div>
		</main>
	);
}
