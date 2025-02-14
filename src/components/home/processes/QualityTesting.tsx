import Image from "next/image";
import React from "react";
import CustomButton from "@/components/global/button";
import Pagination from "@/components/global/Pagination";

export default function QualityTesting() {
	return (
		<section className="h-screen flex flex-col justify-center items-center space-y-10 sticky top-0">
			<div className="bg-white p-4">
				<div className="flex justify-between items-center w-full">
					<div>
						<h1 className="text-[#AD8330] text-5xl font-bold">Our Processes</h1>
					</div>
					<div>
						<Image
							src={"/three.gif"}
							alt={"page number"}
							width={250}
							height={250}
							unoptimized
						/>
					</div>
				</div>
				<div className="flex items-start justify-between w-full gap-x-6">
					<div className="">
						<Image
							src={"/qa.svg"}
							alt="Quality Testing"
							width={480}
							height={510}
						/>
					</div>
					<div className="grid justify-between h-full pt-4">
						<div className="space-y-4">
							<h1 className="text-[#AD8330] text-4xl font-bold">
								Quality Testing
							</h1>
							<h2 className="text-xl text-[#000] font-bold">
								Ensuring excellence through rigorous testing.
							</h2>
							<p className="font-meta text-base max-w-[500px]">
								Our refined gold undergoes comprehensive testing in
								state-of-the-art laboratories. Each piece is checked for purity,
								consistency, and adherence to industry benchmarks, guaranteeing
								flawless results.
							</p>
							<div>
								<CustomButton>Explore More</CustomButton>
							</div>
						</div>
						<div className="mt-40">
							<Pagination page={"03"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
