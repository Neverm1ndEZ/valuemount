"use client";
import Image from "next/image";
import React, { useMemo, useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Define type for carousel items
interface CarouselItem {
	id: number | string;
	type: "image" | "video";
	src: string;
	alt?: string;
	posterSrc?: string; // For video poster images
}

// Base carousel items
const baseCarouselItems: CarouselItem[] = [
	{
		id: 1,
		type: "image",
		src: "/home-carousel/1.svg",
		alt: "Gold bar 1",
	},
	{
		id: 2,
		type: "video",
		src: "/home-carousel/2.mp4",
		alt: "Gold bar 2",
		posterSrc: "/home-carousel/2-poster.png",
	},
	{
		id: 3,
		type: "image",
		src: "/home-carousel/3.svg",
		alt: "Gold bar 3",
	},
	{
		id: 4,
		type: "video",
		src: "/home-carousel/4.mp4",
		alt: "Gold bar 4",
		posterSrc: "/home-carousel/4-poster.png",
	},
	{
		id: 5,
		type: "image",
		src: "/home-carousel/5.png",
		alt: "Gold bar 5",
	},
	{
		id: 6,
		type: "image",
		src: "/home-carousel/6.png",
		alt: "Gold bar 6",
	},
];

// Individual carousel item component with lazy loading for videos
const CarouselItemComponent = ({
	item,
	isPaused,
}: {
	item: CarouselItem;
	isPaused: boolean;
}) => {
	// Use intersection observer to lazy load videos
	const [inViewRef, inView] = useInView({
		triggerOnce: false,
		threshold: 0.1,
	});

	const videoRef = useRef<HTMLVideoElement>(null);

	// Handle video playback based on visibility and pause state
	useEffect(() => {
		if (item.type === "video" && videoRef.current) {
			if (inView && !isPaused) {
				videoRef.current.play().catch((e) => {
					console.log("Auto-play prevented:", e);
				});
			} else {
				videoRef.current.pause();
			}
		}
	}, [inView, isPaused, item.type]);

	if (item.type === "image") {
		return (
			<div ref={inViewRef} className="h-full w-full">
				<Image
					src={item.src}
					alt={item.alt || "Carousel Image"}
					fill
					className="object-cover rounded-xl"
					sizes="(max-width: 640px) 200px, (max-width: 768px) 200px, 200px"
					loading="eager" // Eager load visible images
					quality={item.src.endsWith(".svg") ? undefined : 80}
					priority={typeof item.id === "number" && item.id <= 2} // Prioritize first two items
				/>
			</div>
		);
	} else {
		return (
			<div ref={inViewRef} className="h-full w-full">
				<video
					ref={videoRef}
					className="w-full h-full object-cover rounded-xl"
					muted
					loop
					playsInline
					poster={item.posterSrc}
					aria-label={item.alt || "Carousel Video"}
					preload="none" // Don't preload video data
				>
					{/* Only add source when in viewport */}
					{inView && <source src={item.src} type="video/mp4" />}
					Your browser does not support the video tag.
				</video>
			</div>
		);
	}
};

export default function InfiniteScrollCarousel() {
	// State for pausing the carousel on hover
	const [isPaused, setIsPaused] = useState(false);

	// Create duplicated items array once using useMemo
	const allItems = useMemo(() => {
		return [
			...baseCarouselItems,
			...baseCarouselItems.map((item) => ({
				...item,
				id: `dup-${item.id}`,
			})),
		];
	}, []);

	// Calculate carousel width based on number of items and item width
	const carouselWidth = useMemo(() => {
		return baseCarouselItems.length * 200 * 2; // 200px per item, doubled for the clone
	}, []);

	return (
		<div
			className="relative overflow-hidden h-[330px] w-full"
			aria-label="Carousel of gold bar images and videos"
			role="region"
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
		>
			{/* The track that scrolls from right to left */}
			<div
				className={`flex ${isPaused ? "" : "animate-carousel-scroll"}`}
				style={{ width: `${carouselWidth}px` }}
			>
				{allItems.map((item) => (
					<div
						key={item.id}
						className="flex-shrink-0 w-[200px] h-[330px] relative"
					>
						<CarouselItemComponent item={item} isPaused={isPaused} />
					</div>
				))}
			</div>
		</div>
	);
}
