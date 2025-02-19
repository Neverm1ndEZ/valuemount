import FeaturedPosts from "@/components/posts/FeaturedPosts";
import { getBlogs } from "@/libs/actions/blogs.action";
import React from "react";

async function fetchBlogs() {
	return await getBlogs();
}

export default async function Sustainability() {
	const blogs = await fetchBlogs();

	return (
		<div>
			<FeaturedPosts
				blogs={
					blogs?.documents?.map((doc) => ({
						title: doc.title,
						category: doc.category,
						date: doc.date,
						description: doc.description,
						imageUrl: doc.imageUrl,
						$id: doc.$id,
						$createdAt: doc.$createdAt,
						$updatedAt: doc.$updatedAt,
					})) || []
				}
			/>
		</div>
	);
}
