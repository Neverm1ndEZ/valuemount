"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ label: "About Us", href: "/about-us" },
		{ label: "Products & Services", href: "/products-and-services" },
		{ label: "Sustainability", href: "/sustainability" },
		{ label: "News & Insights", href: "/news-and-insights" },
	];

	return (
		<div className="bg-white sticky top-0 px-4 md:px-10 py-3 flex items-center justify-between border-b border-[#AD8330]">
			<div>
				<Link href="/">
					<Image src={"/logo.svg"} alt="ValueMount" width={62} height={56} />
				</Link>
			</div>

			{/* Mobile Menu Button */}
			<button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
						<li key={index} className="text-lg font-semibold cursor-pointer">
							<Link href={nav.href}>{nav.label}</Link>
						</li>
					))}
				</ul>
				<Link href="/contact-us">
					<button className="px-8 py-3 rounded-full bg-white text-lg text-black font-semibold shadow-[0_4px_20px_0_#AD8330]">
						Contact Us
					</button>
				</Link>
			</nav>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className="absolute top-[72px] left-0 right-0 bg-white z-50 md:hidden">
					<nav className="flex flex-col items-center py-4 border-b border-[#AD8330]">
						<ul className="flex flex-col items-center gap-y-4">
							{navItems.map((nav, index) => (
								<li
									key={index}
									className="text-lg font-semibold cursor-pointer"
								>
									<Link href={nav.href}>{nav.label}</Link>
								</li>
							))}
						</ul>
						<Link href="/contact-us" className="mt-4">
							<button className="px-8 py-3 rounded-full bg-white text-lg text-black font-semibold shadow-[0_4px_20px_0_#AD8330]">
								Contact Us
							</button>
						</Link>
					</nav>
				</div>
			)}
		</div>
	);
}
