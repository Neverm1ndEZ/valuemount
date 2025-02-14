import React from "react";
import Image from "next/image"; // or regular <img> if you prefer

interface CardProps {
	heading: string;
	icon: string;
	description: string;
}

export default function Card({ heading, icon, description }: CardProps) {
	return (
		<div className="flex flex-col items-start p-6 bg-[#dcdcdcaf] rounded-md shadow-sm hover:shadow-md transition-shadow">
			{/* Icon in a circle */}
			<div className="mb-4 flex items-center justify-between w-full">
				{/* If using next/image, adjust width/height */}
				<h2 className="text-[#AD8330] text-xl font-bold mb-2">{heading}</h2>
				<Image src={icon} alt={heading} width={52} height={52} />
			</div>

			{/* Heading in gold */}

			{/* Description */}
			<p className="text-gray-700 leading-relaxed">{description}</p>
		</div>
	);
}
