import React from "react";
import CustomButton from "../global/button";
import InfiniteScrollCarousel from "./InfiniteScrollCarousel"; // adjust path as needed
import Collection from "./processes/Collection";
import Purification from "./processes/Purification";
import QualityTesting from "./processes/QualityTesting";
import ShapingExcellence from "./processes/ShapingExcellence";
import DeliveryWithTrust from "./processes/DeliveryWithTrust";
import WhyValueMount from "./WhyValueMount";

export default function Home() {
	return (
		<section className="max-w-7xl mx-auto pt-10 pb-24 space-y-10">
			<div className="">
				{/* Carousel Section */}
				<div className="mb-12">
					<InfiniteScrollCarousel />
				</div>

				{/* Headline & Description */}
				<div className="flex items-center justify-between w-full ">
					<div className="space-y-4 md:w-1/2">
						<h1 className="text-4xl text-[#AD8330] font-bold">Value Mount</h1>
						<h2 className="text-xl text-[#000] font-bold">
							Refining Gold with Precision and Integrity
						</h2>
						<CustomButton>Discover Our Process</CustomButton>
					</div>

					<div className="font-meta text-base max-w-[500px] md:w-1/2 mt-4 md:mt-0">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
						fringilla augue sed efficitur faucibus. Vivamus mi ipsum, gravida a
						massa vel, iaculis aliquam nisi. Pellentesque euismod lorem a lectus
						tempor, vitae volutpat velit lobortis. Curabitur pellentesque metus
						sed odio venenatis tincidunt. Morbi sit amet elit libero.
					</div>
				</div>
			</div>
			<Collection />
			<Purification />
			<QualityTesting />
			<ShapingExcellence />
			<DeliveryWithTrust />
			<WhyValueMount />
		</section>
	);
}
