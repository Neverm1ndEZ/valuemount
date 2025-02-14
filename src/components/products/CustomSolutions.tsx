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

const CustomSolutions: React.FC = () => {
	// Data for our feature cards
	const features = [
		{
			title: "Personalization",
			description: "Gold products tailored to your specifications.",
		},
		{
			title: "Expertise",
			description:
				"A team of specialists dedicated to meeting your unique demands.",
		},
		{
			title: "Flexibility",
			description: "Services designed to adapt to your needs and timelines.",
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
							Crafted for Your
							<br />
							Unique Needs
						</h2>
						<div className="text-6xl font-bold mb-4">
							<span className="text-[#AD8330]">Cust</span>om Solutions
						</div>
					</div>
					<div className="md:w-2/3">
						<Image
							src="/custom-solution.svg"
							alt="Gold Custom Solution"
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
					At Valuemount, we believe every client has unique requirements. That’s
					why we offer custom solutions to meet your specific needs, from
					bespoke gold products to personalized refining and consulting
					services.
				</p>

				<h2 className="text-4xl font-bold text-[#AD8330] mb-8">
					Tailored for You
				</h2>

				<p className="text-lg text-gray-700 mb-12">
					Whether you’re a jeweler looking for a specific alloy, an investor
					seeking a custom bar design, or a business with specialized refining
					requirements, we deliver precision, creativity, and expertise.
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

export default CustomSolutions;
