import React from "react";
import Image from "next/image";
import CustomButton from "@/components/global/button";
import Pagination from "@/components/global/Pagination";

export default function Collection() {
	return (
		<section
			id="collection"
			className="min-h-screen flex flex-col justify-center items-center space-y-6 md:space-y-10 sticky top-0"
		>
			<div className="bg-white p-4 w-full max-w-7xl">
				{/* Header section with responsive layout */}
				<div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 md:gap-0">
					<div>
						<h1 className="text-[#AD8330] text-3xl md:text-5xl font-bold text-center md:text-left">
							Our Processes
						</h1>
					</div>
					<div className="w-[150px] md:w-[250px]">
						<Image
							src={"/One.gif"}
							alt={"page number"}
							width={250}
							height={250}
							unoptimized
							className="w-full h-auto"
						/>
					</div>
				</div>

				{/* Main content with responsive layout */}
				<div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-6 mt-6">
					<div className="w-full md:w-auto">
						<Image
							src={"/process.svg"}
							alt="Collection"
							width={480}
							height={510}
							className="w-full max-w-[480px] h-auto mx-auto"
						/>
					</div>
					<div className="grid justify-between h-full pt-4 w-full md:w-auto">
						<div className="space-y-4 text-center md:text-left">
							<h1 className="text-[#AD8330] text-3xl md:text-4xl font-bold">
								Collection
							</h1>
							<h2 className="text-lg md:text-xl text-[#000] font-bold">
								Trusted sourcing for quality assurance.
							</h2>
							<p className="font-meta text-sm md:text-base max-w-[500px] mx-auto md:mx-0">
								We source raw gold from reliable and ethical suppliers, ensuring
								every material meets our stringent quality standards. This first
								step lays the foundation for the excellence we deliver in every
								refined product.
							</p>
							<div className="flex justify-center md:justify-start">
								<CustomButton>Explore More</CustomButton>
							</div>
						</div>
						<div className="mt-20 md:mt-40">
							<Pagination page={"01"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
