"use client";
import React, { useState, useEffect } from "react";

export default function SectionNavigator() {
	// State to track which section is currently active
	const [activeSection, setActiveSection] = useState(0);

	// Array of section names matching your components
	const sections = [
		{ id: "hero", name: "Hero" },
		{ id: "collection", name: "Collection" },
		{ id: "purification", name: "Purification" },
		{ id: "quality-testing", name: "Quality Testing" },
		{ id: "shaping-excellence", name: "Shaping Excellence" },
		{ id: "delivery-with-trust", name: "Delivery with Trust" },
		{ id: "why-value-mount", name: "Why ValueMount" },
	];

	// Function to handle click on a circle
	const handleCircleClick = (index: number): void => {
		// Get the section element
		const sectionElement: HTMLElement | null = document.getElementById(
			sections[index].id,
		);
		if (sectionElement) {
			// Scroll to the section with smooth behavior
			sectionElement.scrollIntoView({ behavior: "smooth" });
			setActiveSection(index);
		}
	};

	// Effect to update active section based on scroll position
	useEffect(() => {
		const handleScroll = () => {
			// Get all section elements
			const sectionElements = sections.map((section) =>
				document.getElementById(section.id),
			);

			// Get current scroll position
			// const scrollPosition = window.scrollY;

			// Find which section is currently in view
			// We're using a more robust approach that works better with sticky positioning
			let currentSectionIndex = -1;

			sectionElements.forEach((element, index) => {
				if (!element) return;

				const rect = element.getBoundingClientRect();
				const topOffset = rect.top;
				const bottomOffset = rect.bottom;

				// Check if this section is currently in the viewport
				// For sticky sections, we want to detect when they're "active" in the viewport
				if (
					(topOffset <= 100 && bottomOffset >= 100) || // Section is currently visible
					(topOffset <= 0 && index === sectionElements.length - 1) // Last section
				) {
					currentSectionIndex = index;
				}
			});

			if (currentSectionIndex !== -1) {
				setActiveSection(currentSectionIndex);
			}
		};

		// Add scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Initial check for active section
		handleScroll();

		// Clean up event listener
		return () => window.removeEventListener("scroll", handleScroll);
	}, [sections]);

	return (
		<div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
			<div className="flex flex-col items-center space-y-6">
				{sections.map((section, index) => (
					<div
						key={index}
						className="group relative"
						onClick={() => handleCircleClick(index)}
					>
						{/* Circle */}
						<div
							className={`w-4 h-4 rounded-full border-2 border-[#AD8330] cursor-pointer transition-all duration-300 ${
								activeSection === index
									? "bg-[#AD8330]"
									: "bg-white hover:bg-[#AD8330]/20"
							}`}
						/>

						{/* Tooltip */}
						<div className="absolute left-6 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
							<span className="bg-white text-[#AD8330] text-sm py-1 px-2 rounded shadow">
								{section.name}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
