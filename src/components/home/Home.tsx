import React from "react";
import CustomButton from "../global/button";

export default function Home() {
	return (
		<section className="">
			<div className="flex flex-col items-center justify-center w-full">
				<div className="h-[330px]">Carousel</div>
				<div className="flex items-center gap-x-6">
					<div className="space-y-4">
						<h1 className="text-4xl text-[#AD8330] font-bold">Value Mount</h1>
						<h2 className="text-xl text-[#000] font-bold">
							Refining Gold with Precision and Integrity
						</h2>
						<CustomButton>Discover Our Process</CustomButton>
					</div>
					<div className="font-meta text-base max-w-[500px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
						fringilla augue sed efficitur faucibus. Vivamus mi ipsum, gravida a
						massa vel, iaculis aliquam nisi. Pellentesque euismod lorem a lectus
						tempor, vitae volutpat velit lobortis. Curabitur pellentesque metus
						sed odio venenatis tincidunt. Morbi sit amet elit libero
					</div>
				</div>
			</div>
		</section>
	);
}
