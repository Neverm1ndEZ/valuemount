import Image from "next/image";
import React from "react";

// Define our TypeScript interfaces for type safety
interface NewsItem {
	date: string;
	month: string;
	year: string;
	title: string;
	description: string;
	imageUrl: string;
}

const NewsTimeline: React.FC = () => {
	// In a real application, this would come from props or an API
	const newsItems: NewsItem[] = [
		{
			date: "28 November 2024",
			month: "Nov",
			year: "2024",
			title: "Global Gold Demand Reaches Record High in 2024",
			description:
				"The global gold market has witnessed an unprecedented rise in demand, with investors and industries driving the surge. Valuemount continues to meet this demand with unmatched quality and precision in gold refining.",
			imageUrl: "/gold-graph.jpg",
		},
		{
			date: "22 November 2024",
			month: "Nov",
			year: "2024",
			title: "Valuemount Unveils AI-Powered Refining Solutions",
			description:
				"Valuemount has integrated AI technology into its refining processes, ensuring superior precision, reduced waste, and enhanced efficiency. This marks a major step in combining tradition with innovation.",
			imageUrl: "/ai-refining.jpg",
		},
		{
			date: "30 September 2024",
			month: "Sept",
			year: "2024",
			title: "Valuemount Becomes a Leader in Sustainable Refining Practices",
			description:
				"Sustainability is at the heart of Valuemount's operations. With innovative eco-friendly techniques, we are setting benchmarks in reducing environmental impact without compromising quality.",
			imageUrl: "/sustainable.jpg",
		},
		{
			date: "5 September 2024",
			month: "Sept",
			year: "2024",
			title: "Strategic Collaboration with Jewelers Across the Globe",
			description:
				"Valuemount has partnered with leading jewelers worldwide, supplying them with premium refined gold that inspires the creation of timeless pieces.Valuemount is now offering bespoke gold products tailored for niche markets, catering to unique needs with precision and creativity.",
			imageUrl: "/globe.jpg",
		},
	];

	return (
		<div className="max-w-7xl mx-auto px-4 py-12">
			{/* Main section with responsive padding */}
			<h1 className="text-3xl md:text-4xl font-bold text-[#AD8330] mb-8 md:mb-12">
				Latest News
			</h1>

			{/* Timeline container with responsive positioning */}
			<div className="relative">
				{/* Vertical timeline line with responsive positioning */}
				<div className="absolute left-4 md:left-24 top-0 bottom-0 w-0.5 bg-[#AD8330]"></div>

				{/* News items with improved spacing for mobile */}
				<div className="space-y-8 md:space-y-12">
					{newsItems.map((item, index) => (
						<div key={index} className="relative">
							{/* Date marker with responsive positioning and visibility */}
							<div className="hidden md:block absolute left-0 w-48 text-left pr-8">
								<div className="font-bold text-xl text-[#AD8330]">
									{item.month}
								</div>
								<div className="font-bold text-xl text-[#AD8330]">
									{item.year}
								</div>
							</div>

							{/* Timeline dot with responsive positioning */}
							<div className="absolute left-4 md:left-24 -translate-x-2.5 w-4 md:w-5 h-4 md:h-5 rounded-full bg-[#AD8330] border-4 border-white shadow-md"></div>

							{/* Content card with responsive margin and padding */}
							<div className="ml-8 md:ml-36 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
								<div className="p-4 md:p-6">
									{/* Mobile date display */}
									<div className="block md:hidden text-sm text-[#AD8330] mb-4">
										<span className="font-medium">{item.month}</span>{" "}
										<span className="text-gray-600">{item.year}</span>
									</div>

									{/* News content with responsive layout */}
									<div className="flex flex-col md:flex-row gap-4 md:gap-6">
										{/* Image with responsive sizing */}
										<div className="w-full md:w-32 h-48 md:h-32 overflow-hidden rounded-lg">
											<Image
												src="/refining.svg"
												alt={item.title}
												width={384}
												height={384}
												className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
											/>
										</div>

										{/* Text content */}
										<div className="flex-1">
											<div className="text-sm font-semibold text-[#AD8330] mb-2">
												{item.date}
											</div>
											<h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-[#AD8330] transition-colors">
												{item.title}
											</h3>
											<p className="text-gray-600 text-sm">
												{item.description}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default NewsTimeline;
