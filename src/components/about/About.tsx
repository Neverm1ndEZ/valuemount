import Image from "next/image";
import React from "react";

export default function AboutUs() {
	const cardItems = [
		{
			id: 1,
			heading: "Responsible Sourcing",
			description:
				"Our gold sourcing practices are rooted in transparency and ethical partnerships. We work with trusted suppliers who adhere to the highest environmental and social standards, ensuring conflict-free sourcing.",
		},
		{
			id: 2,
			heading: "Sustainable Operations",
			description:
				"Our operations prioritize eco-friendly methods, reducing waste and energy consumption while optimizing efficiency. From recycling byproducts to adopting carbon-neutral practices, sustainability is woven into our DNA.",
		},
		{
			id: 3,
			heading: "Employee Welfare",
			description:
				"Our employees are at the heart of our success. We are committed to providing a safe, inclusive, and empowering workplace where every individual is valued.",
		},
	];

	return (
		<section className="flex flex-col items-center justify-center w-full">
			<div className="mb-16">
				<h1 className="text-5xl text-[#AD8330] font-bold mb-2">About Us</h1>
				<p className="text-sm">
					Discover Valuemount, where precision, integrity, and sustainability
					define every aspect of our operations. As a leading gold refinery, we
					take pride in setting new benchmarks for quality and responsibility in
					the precious metals industry.
				</p>
			</div>
			<div className="">
				<div className="flex w-full items-start justify-between mb-16">
					<p className="max-w-xs font-meta text-base">
						At Valuemount, our mission is to refine and deliver gold with
						uncompromising precision, integrity, and innovation. We strive to
						exceed the expectations of our clients by offering the purest, most
						reliable gold products while upholding the highest standards of
						sustainability and responsibility. We are dedicated to empowering
						industries, investors, and communities.
					</p>
					<div className="relative">
						<Image
							src={"/mission.svg"}
							alt={"Mission Image"}
							width={668}
							height={345}
						/>
					</div>
				</div>
				<div className="flex flex-row-reverse w-full items-start justify-between">
					<p className="max-w-xs font-meta text-base">
						Our vision is to be a global leader in the gold refining industry,
						setting benchmarks for quality, transparency, and sustainability. We
						aspire to redefine the future of precious metals by embracing
						cutting-edge innovation, fostering long-term partnerships, and
						contributing to the economic and environmental well-being of the
						world.Through our relentless pursuit of excellence, we aim to be
						recognized as a trusted partner for industries, jewelers, and
						investors worldwide, while leaving a legacy of responsible practices
						for generations to come.
					</p>
					<div className="relative">
						<Image
							src={"/vision.svg"}
							alt={"Mission Image"}
							width={668}
							height={345}
						/>
					</div>
				</div>
			</div>
			<div>
				<div className="flex justify-between items-center w-full">
					<div className="w-[245px]">
						<h1 className="text-[96px] text-[#AD8330] font-bold text-wrap leading-tight">
							Meet the Team
						</h1>
						<p className="font-meta text-base">
							Meet the visionaries driving Valuemount forward. Our leadership
							team is composed of industry experts and innovators who bring
							decades of experience to ensure that every gold product reflects
							our commitment to quality, sustainability, and customer
							satisfaction.
						</p>
					</div>
					<div>
						<Image
							src={"/team.svg"}
							alt="Team Members"
							width={766}
							height={571}
						/>
					</div>
				</div>
			</div>
			{/* csr */}
			<div className="">
				<h1 className="text-5xl text-[#AD8330] text-center font-bold mb-2">
					Corporate Social Responsibility (CSR)
				</h1>
				<div className="flex justify-center items-center mb-9">
					<Image src={"/csr.svg"} alt="CSR" width={1200} height={376} />
				</div>
				<div className="flex items-center justify-between gap-4 w-full">
					{cardItems.map(({ id, heading, description }) => (
						<div
							key={id}
							className="bg-[url(/Texture.svg)] bg-cover bg-[#d8d8d8] rounded-xl p-8 space-y-9"
						>
							<h1 className="text-[#AD8330] text-2xl font-bold font-main">
								{heading}
							</h1>
							<p className="text-[#1B1B1B] font-meta text-sm">{description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
