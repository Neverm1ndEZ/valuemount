import Image from "next/image";
import React from "react";

// Define TypeScript interfaces for our data structures
interface BlogPost {
	category: string;
	date: string;
	title: string;
	description: string;
	imageUrl: string;
}

// Main featured posts component
const FeaturedPosts: React.FC = () => {
	// Sample data - in a real app, this would likely come from props or an API
	const posts: BlogPost[] = [
		{
			category: "Gold Refining",
			date: "28 November 2024",
			title: "The Science of Gold Refining: What Makes It Pure?",
			description:
				"Ever wondered how raw gold is transformed into its purest form? Discover the intricate process of gold refining, where precision meets innovation. Learn about the technologies we use...",
			imageUrl: "/featured/1.svg",
		},
		{
			category: "Assaying",
			date: "28 November 2024",
			title: "Custom Gold Solutions: Turning Ideas into Reality",
			description:
				"Your vision deserves the best execution. From bespoke designs to personalized compositions, explore how our custom gold solutions cater to your unique needs.",
			imageUrl: "/featured/2.svg",
		},
		{
			category: "Industry Insights",
			date: "28 November 2024",
			title: "How to Choose the Right Refining Partner",
			description:
				"What should you look for in a gold refining partner? From trust to technology, explore the key factors that make Valuemount a leader in the industry.",
			imageUrl: "/featured/3.svg",
		},
		{
			category: "Gold Refining",
			date: "28 November 2024",
			title: "The Science of Gold Refining: What Makes It Pure?",
			description:
				"Ever wondered how raw gold is transformed into its purest form? Discover the intricate process of gold refining, where precision meets innovation. Learn about the technologies we use...",
			imageUrl: "/featured/1.svg",
		},
		{
			category: "Assaying",
			date: "28 November 2024",
			title: "Custom Gold Solutions: Turning Ideas into Reality",
			description:
				"Your vision deserves the best execution. From bespoke designs to personalized compositions, explore how our custom gold solutions cater to your unique needs.",
			imageUrl: "/featured/2.svg",
		},
		{
			category: "Industry Insights",
			date: "28 November 2024",
			title: "How to Choose the Right Refining Partner",
			description:
				"What should you look for in a gold refining partner? From trust to technology, explore the key factors that make Valuemount a leader in the industry.",
			imageUrl: "/featured/3.svg",
		},
	];

	return (
		<div className="max-w-7xl mx-auto px-4 py-12">
			{/* Main section */}
			<div className="space-y-12">
				<h1 className="text-4xl font-bold text-[#AD8330]">Featured Post</h1>

				{/* Left column - Explore More */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="space-y-8">
						<h2 className="text-2xl font-bold text-[#AD8330]">Explore More</h2>

						{/* Blog post cards */}
						<div className="space-y-8">
							{posts.map((post, index) => (
								<div
									key={index}
									className="flex items-end space-x-4 group cursor-pointer"
								>
									<div className="w-32 h-32 overflow-hidden rounded-lg">
										<Image
											src={post.imageUrl}
											alt={post.title}
											width={128}
											height={128}
											className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
										/>
									</div>
									<div className="flex-1">
										<div className="flex items-center gap-3 text-sm mb-2">
											<span className="text-[#AD8330] font-semibold">
												{post.category}
											</span>
											<span className="text-[#AD8330] text-4xl">•</span>
											<span className="text-[#1b1b1b] font-semibold">
												{post.date}
											</span>
										</div>
										<h3 className="font-semibold text-lg mb-2 group-hover:text-[#AD8330] transition-colors">
											{post.title}
										</h3>
										<p className="text-gray-600 text-sm line-clamp-2">
											{post.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Right column - In case you missed it */}
					<div className="space-y-8">
						<h2 className="text-2xl font-bold text-[#A16A59]">
							In case you missed it
						</h2>

						{/* Featured cards */}
						<div className="space-y-6">
							{posts.slice(0, 2).map((post, index) => (
								<div
									key={index}
									className="rounded-xl p-4 overflow-hidden bg-[#AD8330] text-white cursor-pointer group"
								>
									<div className="h-48 overflow-hidden">
										<Image
											src={post.imageUrl}
											alt={post.title}
											width={400}
											height={192}
											className="w-full h-full rounded-xl object-cover transform transition-transform group-hover:scale-105"
										/>
									</div>
									<div className="py-4">
										<div className="flex items-center gap-x-3 text-sm mb-2 font-semibold">
											<span className="max-w-[60px]">{post.category}</span>
											<span className="text-4xl">•</span>
											<span>{post.date}</span>
										</div>
										<h3 className="font-bold text-xl mb-2">{post.title}</h3>
										<p className="text-sm">{post.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedPosts;
