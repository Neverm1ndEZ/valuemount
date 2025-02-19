import Image from "next/image";
import React from "react";

// Define interfaces for the CMS data structure
interface CMSNewsItem {
	title: string;
	date: string;
	imageUrl: string;
	description: string;
	month: string | null;
	year: number | null;
	$id: string;
}

// Props interface for the component
interface NewsTimelineProps {
	news: CMSNewsItem[];
}

const NewsTimeline: React.FC<NewsTimelineProps> = ({ news }) => {
	// Helper function to format the date string from CMS
	const formatDate = (dateString: string): string => {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			day: "numeric",
			month: "long",
			year: "numeric",
		});
	};

	// Helper function to extract month and year from date
	const getMonthYear = (dateString: string) => {
		const date = new Date(dateString);
		return {
			month: date.toLocaleDateString("en-US", { month: "short" }),
			year: date.getFullYear().toString(),
		};
	};

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
					{news.map((item) => {
						const { month, year } = getMonthYear(item.date);

						return (
							<div key={item.$id} className="relative">
								{/* Date marker with responsive positioning and visibility */}
								<div className="hidden md:block absolute left-0 w-48 text-left pr-8">
									<div className="font-bold text-xl text-[#AD8330]">
										{month}
									</div>
									<div className="font-bold text-xl text-[#AD8330]">{year}</div>
								</div>

								{/* Timeline dot with responsive positioning */}
								<div className="absolute left-4 md:left-24 -translate-x-2.5 w-4 md:w-5 h-4 md:h-5 rounded-full bg-[#AD8330] border-4 border-white shadow-md"></div>

								{/* Content card with responsive margin and padding */}
								<div className="ml-8 md:ml-36 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
									<div className="p-4 md:p-6">
										{/* Mobile date display */}
										<div className="block md:hidden text-sm text-[#AD8330] mb-4">
											<span className="font-medium">{month}</span>{" "}
											<span className="text-gray-600">{year}</span>
										</div>

										{/* News content with responsive layout */}
										<div className="flex flex-col md:flex-row gap-4 md:gap-6">
											{/* Image with responsive sizing */}
											<div className="w-full md:w-32 h-48 md:h-32 overflow-hidden rounded-lg">
												<Image
													src={item.imageUrl}
													alt={item.title}
													width={384}
													height={384}
													className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
												/>
											</div>

											{/* Text content */}
											<div className="flex-1">
												<div className="text-sm font-semibold text-[#AD8330] mb-2">
													{formatDate(item.date)}
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
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default NewsTimeline;
