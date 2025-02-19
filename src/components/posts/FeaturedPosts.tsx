import Image from "next/image";
import React from "react";

// Define TypeScript interfaces for our data structures
interface BlogPost {
	title: string;
	category: string;
	date: string;
	description: string;
	imageUrl: string;
	$id: string;
	$createdAt: string;
	$updatedAt: string;
}

// Helper function to format the date
const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
};

// Main featured posts component
const FeaturedPosts: React.FC<{ blogs: BlogPost[] }> = ({ blogs }) => {
	// Ensure we have data to display
	if (!blogs || blogs.length === 0) {
		return <div>No posts available</div>;
	}

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
							{blogs.map((post) => (
								<div
									key={post.$id}
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
												{post.category.trim()}
											</span>
											<span className="text-[#AD8330] text-4xl">•</span>
											<span className="text-[#1b1b1b] font-semibold">
												{formatDate(post.date)}
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
							{blogs.slice(0, 2).map((post) => (
								<div
									key={post.$id}
									className="rounded-xl p-4 lg:max-w-[416px] overflow-hidden bg-[#ad8330d2] text-white cursor-pointer group"
								>
									<div className="h-48 overflow-hidden">
										<Image
											src={post.imageUrl}
											alt={post.title}
											width={300}
											height={192}
											className="w-full h-full rounded-xl object-cover transform transition-transform group-hover:scale-105"
										/>
									</div>
									<div className="py-4">
										<div className="flex items-center gap-x-3 text-sm mb-2 font-semibold">
											<span className="max-w-[60px]">
												{post.category.trim()}
											</span>
											<span className="text-4xl">•</span>
											<span>{formatDate(post.date)}</span>
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
