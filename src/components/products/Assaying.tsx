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

const Assaying: React.FC = () => {
	// Data for our feature cards
	const features = [
		{
			title: "Accuracy",
			description:
				"Advanced analytical tools ensure precision down to the smallest detail.",
		},
		{
			title: "Transparency",
			description:
				"Our detailed reports give you full visibility of your gold's quality.",
		},
		{
			title: "Speed",
			description:
				"Fast and efficient services without compromising on reliability.",
		},
	];

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center lg:text-left">
			{/* Main Section */}
			<div className="relative mb-12 md:mb-16">
				<div className="flex flex-col md:flex-row justify-between items-center gap-4 lg:gap-8">
					<div className="text-left block lg:hidden">
						<h2 className="text-2xl lg:text-[96px] font-bold text-[#AD8330]">
							ASSAYING
						</h2>
					</div>
					<div className="block lg:hidden relative z-10">
						<h2 className="text-2xl sm:text-3xl font-bold text-center">
							Unmatched Accuracy, Absolute Trust
						</h2>
					</div>
					<div className="hidden lg:block w-full md:w-1/3 relative z-10">
						<h2 className="text-2xl sm:text-3xl font-bold mb-4">
							Unmatched Accuracy,
							<br />
							Absolute Trust
						</h2>
					</div>
					<div className="w-full md:w-2/3">
						<Image
							src="/assaying.svg"
							alt="Gold Assaying Process"
							width={774}
							height={345}
							className="rounded-lg object-cover"
						/>
					</div>
				</div>
				<div className="hidden lg:flex absolute bottom-8 left-48">
					<h2 className="text-2xl lg:text-[96px] font-bold text-[#AD8330]">
						Assa
					</h2>
					<h2
						className="text-2xl lg:text-[96px] font-bold text-transparent"
						style={{ WebkitTextStroke: "1px white" }}
					>
						ying
					</h2>
				</div>
			</div>

			{/* Description Section */}
			<div className="mb-12 md:mb-16 mt-24 md:mt-0">
				<p className="text-base md:text-lg text-gray-700 mb-8 md:mb-12">
					Determining the purity of gold is a crucial step in ensuring its value
					and reliability. At Valuemount, our assaying services provide precise
					and transparent analysis, offering complete confidence in your
					gold&apos;s quality.
				</p>

				<h2 className="text-3xl md:text-4xl font-bold text-[#AD8330] mb-6 md:mb-8">
					Our Assaying Approach
				</h2>

				<p className="text-base md:text-lg text-gray-700 mb-8 md:mb-12">
					We use state-of-the-art equipment and certified techniques to deliver
					comprehensive reports on gold composition and purity. Every assay is
					conducted by industry-certified experts who adhere to international
					standards of accuracy and professionalism.
				</p>
			</div>

			{/* Feature Cards */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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

export default Assaying;
