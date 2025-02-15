"use client";
import Image from "next/image";
import React from "react";

interface CarouselItem {
	id: number;
	type: "image" | "video";
	src: string;
	alt?: string; // optional alt text for images
}

const carouselItems: CarouselItem[] = [
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
		alt: "Gold bar 3",
	},
	{
		id: 5,
		type: "image",
		src: "/home-carousel/5.png",
		alt: "Gold bar 3",
	},
	{
		id: 6,
		type: "image",
		src: "/home-carousel/6.png",
		alt: "Gold bar 3",
	},
];

export default function InfiniteScrollCarousel() {
	return (
		<div className="relative overflow-hidden h-[330px] w-full">
			{/* The "track" that will scroll from right to left */}
			<div className="flex w-[200%] animate-scroll">
				{/* 1st copy of items */}
				<div className="flex">
					{carouselItems.map((item) => (
						<div
							key={item.id}
							className="flex-shrink-0 w-[200px] h-[330px] relative"
						>
							{item.type === "image" ? (
								<Image
									src={item.src}
									alt={item.alt || "Carousel Image"}
									fill
									className="object-cover rounded-xl"
									sizes="(max-width: 768px) 200px, 200px"
								/>
							) : (
								<video
									src={item.src}
									autoPlay
									loop
									muted
									className="w-full h-full object-cover rounded-xl"
								/>
							)}
						</div>
					))}
				</div>
				{/* 2nd copy of items for seamless looping */}
				<div className="flex w-1/2">
					{carouselItems.map((item) => (
						<div
							key={`dup-${item.id}`}
							className="flex-shrink-0 w-[200px] h-[330px] relative"
						>
							{item.type === "image" ? (
								<Image
									src={item.src}
									alt={item.alt || "Carousel Image"}
									fill
									className="object-cover rounded-xl"
									sizes="(max-width: 768px) 200px, 200px"
								/>
							) : (
								<video
									src={item.src}
									autoPlay
									loop
									muted
									className="w-full h-full object-cover rounded-xl"
								/>
							)}
						</div>
					))}
				</div>
			</div>

			{/* Custom keyframes and animation classes for the marquee effect */}
			<style jsx>{`
				.animate-scroll {
					animation: scroll 30s linear infinite;
				}

				@keyframes scroll {
					0% {
						transform: translateX(0%);
					}
					100% {
						transform: translateX(-50%);
					}
				}
			`}</style>
		</div>
	);
}
