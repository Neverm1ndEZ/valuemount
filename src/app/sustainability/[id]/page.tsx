import React from "react";
import Image from "next/image";
import { getBlogsById } from "@/libs/actions/blogs.action";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

// Only define the interfaces we actually need for our data
interface Blog {
	title: string;
	category: string;
	date: string;
	imageUrl?: string;
	content: string;
}

interface BlogDocument {
	title: string;
	category: string;
	date: string;
	imageUrl?: string;
	content: string;
	$id: string;
	$createdAt: string;
	$updatedAt: string;
}

const MarkdownComponents = {
	img: (props: { src?: string; alt?: string }) => (
		<div className="relative w-full h-[400px] my-8">
			<Image
				src={props.src || "/placeholder.jpg"}
				alt={props.alt || "Blog content image"}
				fill
				className="object-cover rounded-lg"
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			/>
		</div>
	),
};

function formatDate(date: string) {
	return new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
}

async function fetchBlog(id: string): Promise<Blog | undefined> {
	try {
		const document = (await getBlogsById(id)) as BlogDocument | undefined;

		if (!document) {
			return undefined;
		}

		return {
			title: document.title,
			category: document.category,
			date: document.date,
			imageUrl: document.imageUrl,
			content: document.content,
		};
	} catch (error) {
		console.error("Error fetching blog:", error);
		return undefined;
	}
}

// Let TypeScript infer the page props types from Next.js
export default async function BlogPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const resolvedParams = await params;

	if (!resolvedParams?.id || typeof resolvedParams.id !== "string") {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center text-gray-500 text-lg">Invalid blog ID</div>
			</div>
		);
	}

	const blog = await fetchBlog(resolvedParams.id);

	if (!blog) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center text-gray-500 text-lg">
					Blog post not found
				</div>
			</div>
		);
	}

	// If we have valid blog data, render the full blog post
	return (
		<div className="max-w-3xl mx-auto px-6 py-16">
			<article className="space-y-8">
				{/* Blog Header Section */}
				<header className="space-y-6">
					<h1 className="text-5xl font-extrabold text-[#AD8330] leading-snug">
						{blog.title}
					</h1>

					<div className="flex items-center gap-3 text-sm text-gray-700">
						<span className="bg-[#AD8330] text-white px-4 py-1 rounded-full text-sm font-medium">
							{blog.category.trim()}
						</span>
						<span className="text-[#AD8330] text-xl">•</span>
						<span className="text-gray-600 text-base">
							{formatDate(blog.date)}
						</span>
					</div>
				</header>

				{/* Featured Image Section - Only rendered if an image URL exists */}
				{blog.imageUrl && (
					<div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-md">
						<Image
							src={blog.imageUrl}
							alt={blog.title}
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							priority
						/>
					</div>
				)}

				{/* Blog Content Section - Renders markdown content with custom components */}
				<div className="prose prose-lg prose-gray max-w-none leading-8 tracking-wide">
					<ReactMarkdown
						rehypePlugins={[rehypeRaw]}
						remarkPlugins={[remarkGfm]}
						components={MarkdownComponents}
					>
						{blog.content}
					</ReactMarkdown>
				</div>
			</article>

			{/* Publication Footer */}
			<footer className="border-t mt-12 pt-6 text-gray-600 text-base text-center">
				Published on {formatDate(blog.date)}
			</footer>
		</div>
	);
}
