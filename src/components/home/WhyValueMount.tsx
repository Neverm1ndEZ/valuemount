import React from "react";
import Card from "@/components/global/Card";

export default function WhyValueMount() {
	const cardData = [
		{
			id: 1,
			heading: "Expertise.",
			icon: "/expertise.svg",
			description:
				"Our team has decades of experience in the precious metals industry.",
		},
		{
			id: 2,
			heading: "Integrity.",
			icon: "/integrity.svg",
			description:
				"We are committed to honesty, fairness, and transparency in all our dealings.",
		},
		{
			id: 3,
			heading: "Quality.",
			icon: "/quality.svg",
			description:
				"We adhere to the highest standards of quality in our refining, melting, and casting processes.",
		},
		{
			id: 4,
			heading: "Service.",
			icon: "/service.svg",
			description:
				"We provide personalized service and support to help you achieve your goals.",
		},
		{
			id: 5,
			heading: "Speed.",
			icon: "/speed.svg",
			description:
				"We work quickly and efficiently to meet your deadlines and deliver your gold and silver products.",
		},
		{
			id: 6,
			heading: "Value.",
			icon: "/value.svg",
			description:
				"We offer competitive pricing and strive to provide the best value for your gold and silver.",
		},
	];

	return (
		<section className="py-12 h-screen flex flex-col justify-center items-center space-y-10 sticky top-0 mb-[50%]">
			<div className="p-20 bg-white">
				{/* Section Heading */}
				<h1 className="text-[#AD8330] text-5xl font-bold mb-8">
					Why ValueMount?
				</h1>

				{/* Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{cardData.map((card) => (
						<Card
							key={card.id}
							heading={card.heading}
							icon={card.icon}
							description={card.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
