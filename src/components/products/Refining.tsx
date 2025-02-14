import React from "react";
import Image from "next/image";

// Creating a type for our feature card props to ensure type safety
type FeatureCardProps = {
	title: string;
	description: string;
};

// Feature Card component for the three info boxes
const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
	<div className="bg-gray-100 rounded-lg p-6 flex flex-col gap-3">
		<h3 className="text-xl font-semibold text-[#AD8330]">{title}</h3>
		<p className="text-gray-700 leading-relaxed">{description}</p>
	</div>
);

const Refining: React.FC = () => {
	// Data for our feature cards
	const features = [
		{
			title: "Advanced Techniques",
			description:
				"Cutting-edge refining technology ensures exceptional quality.",
		},
		{
			title: "Sustainability",
			description:
				"Eco-friendly processes minimize waste and environmental impact.",
		},
		{
			title: "Trusted Expertise",
			description:
				"Decades of experience in gold refining guarantee reliability and precision.",
		},
	];

	return (
		<div className="max-w-7xl mx-auto px-4 py-12">
			{/* Hero Section */}
			<div className="mb-16">
				<h1 className="text-5xl font-bold mb-4">
					<span className="text-[#AD8330]">Products & Services</span>
				</h1>
			</div>

			{/* Refining Section */}
			<div className="relative mb-16">
				<div className="flex flex-col md:flex-row justify-between items-center gap-8">
					<div className="md:w-1/3">
						<h2 className="text-3xl font-bold mb-4">
							Purity Perfected,
							<br />
							Every Time
						</h2>
						<h2 className="absolute bottom-6 left-48 text-2xl md:text-[96px] font-bold text-[#AD8330]">
							REFINING
						</h2>
					</div>
					<div className="md:w-2/3">
						<Image
							src="/refining.svg"
							alt="Gold Refining Process"
							width={774}
							height={345}
							className="rounded-lg object-cover"
						/>
					</div>
				</div>
			</div>

			{/* Description Section */}
			<div className="mb-16">
				<p className="text-lg text-gray-700 mb-12">
					At Valuemount, gold refining is more than a process - it&apos;s a
					commitment to excellence. We transform raw and unrefined gold into its
					purest form, ensuring superior quality and unmatched precision with
					every batch.
				</p>

				<h2 className="text-4xl font-bold text-[#AD8330] mb-8">
					Our Refining Process
				</h2>

				<p className="text-lg text-gray-700 mb-12">
					Using advanced technologies and sustainable methods, we carefully
					extract impurities to deliver gold that meets the highest industry
					standards. From industrial applications to fine jewelry, our refined
					gold is trusted by businesses and artisans worldwide.
				</p>
			</div>

			{/* Feature Cards */}
			<div className="grid md:grid-cols-3 gap-6">
				{features.map((feature, index) => (
					<FeatureCard
						key={index}
						title={feature.title}
						description={feature.description}
					/>
				))}
			</div>
		</div>
	);
};

export default Refining;
