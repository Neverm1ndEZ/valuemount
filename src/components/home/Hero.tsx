import React from "react";
import InfiniteScrollCarousel from "./InfiniteScrollCarousel";
import CustomButton from "../global/button";

export default function Hero() {
	return (
		// Added padding for mobile and desktop layouts
		<section className="px-4 md:px-6 lg:px-8" id="hero">
			{/* Carousel Section - Added responsive margin */}
			<div className="mb-8 md:mb-12">
				<InfiniteScrollCarousel />
			</div>

			{/* Main content container - Changed to column layout on mobile */}
			<div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-6 md:gap-8">
				{/* Left content section - Full width on mobile */}
				<div className="space-y-4 w-full md:w-1/2">
					{/* Responsive typography for better readability */}
					<h1 className="text-3xl md:text-4xl lg:text-5xl text-[#AD8330] font-bold text-center lg:text-left">
						Value Mount
					</h1>
					<h2 className="text-lg md:text-xl lg:text-2xl text-[#000] font-bold text-center lg:text-left">
						Refining Gold with Precision and Integrity
					</h2>
					{/* Added margin for better spacing on mobile */}
					<div className="mt-6 md:mt-4 lg:block flex items-center justify-center w-full">
						<CustomButton>Discover Our Process</CustomButton>
					</div>
				</div>

				{/* Right content section - Full width on mobile */}
				<div className="font-meta text-sm md:text-base w-full md:w-1/2 md:max-w-[500px]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla
					augue sed efficitur faucibus. Vivamus mi ipsum, gravida a massa vel,
					iaculis aliquam nisi. Pellentesque euismod lorem a lectus tempor,
					vitae volutpat velit lobortis. Curabitur pellentesque metus sed odio
					venenatis tincidunt. Morbi sit amet elit libero.
				</div>
			</div>
		</section>
	);
}
