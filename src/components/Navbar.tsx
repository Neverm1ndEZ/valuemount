"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef(null);

	const navItems = [
		{ label: "About Us", href: "/about-us" },
		{ label: "Products & Services", href: "/products-and-services" },
		{ label: "Sustainability", href: "/sustainability" },
		{ label: "News & Insights", href: "/news-and-insights" },
	];

	// Close the menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent): void => {
			if (
				menuRef.current &&
				!(menuRef.current as HTMLElement).contains(event.target as Node)
			) {
				setIsMenuOpen(false);
			}
		};

		// Add event listener when menu is open
		if (isMenuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		// Cleanup the event listener
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMenuOpen]);

	// Handle clicking the menu button
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	// Fix for mobile navigation - close menu when a link is clicked
	const handleNavItemClick = () => {
		setIsMenuOpen(false);
	};

	return (
		<div
			ref={menuRef}
			className="relative px-4 md:px-10 py-3 flex items-center justify-between border-b border-[#AD8330]"
		>
			<div>
				<Link href="/">
					<Image src={"/logo.svg"} alt="ValueMount" width={62} height={56} />
				</Link>
			</div>

			{/* Mobile Menu Button - improved touch area */}
			<button
				className="md:hidden p-2"
				onClick={toggleMenu}
				aria-expanded={isMenuOpen}
				aria-label="Toggle navigation menu"
			>
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					{isMenuOpen ? (
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					) : (
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					)}
				</svg>
			</button>

			{/* Desktop Navigation */}
			<nav className="hidden md:flex items-center justify-around gap-x-9">
				<ul className="flex items-center gap-x-9">
					{navItems.map((nav, index) => (
						<li key={index} className="text-lg font-semibold">
							<Link href={nav.href} className="block py-2">
								{nav.label}
							</Link>
						</li>
					))}
				</ul>
				<Link href="/contact-us">
					<button className="px-8 py-3 rounded-full bg-white text-lg text-black font-semibold shadow-[0_4px_20px_0_#AD8330]">
						Contact Us
					</button>
				</Link>
			</nav>

			{/* Mobile Navigation - Fixed for better touch response */}
			{isMenuOpen && (
				<div className="absolute top-[72px] left-0 right-0 bg-white z-50 md:hidden shadow-lg">
					<nav className="flex flex-col items-center py-4 border-b border-[#AD8330]">
						<ul className="flex flex-col items-center gap-y-4 w-full">
							{navItems.map((nav, index) => (
								<li
									key={index}
									className="text-lg font-semibold w-full text-center"
									onClick={handleNavItemClick}
								>
									<Link href={nav.href} className="block py-3 px-4 w-full">
										{nav.label}
									</Link>
								</li>
							))}
						</ul>
						<div
							className="mt-4 w-full text-center"
							onClick={handleNavItemClick}
						>
							<Link href="/contact-us" className="inline-block">
								<button className="px-8 py-3 rounded-full bg-white text-lg text-black font-semibold shadow-[0_4px_20px_0_#AD8330]">
									Contact Us
								</button>
							</Link>
						</div>
					</nav>
				</div>
			)}
		</div>
	);
}
