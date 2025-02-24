// src/libs/actions/blogs.action.ts
"use server";

import { databases } from "../appwrite.config";

export const getBlogs = async () => {
	try {
		const response = await databases.listDocuments(
			process.env.NEXT_PUBLIC_BLOGS_DATABASE_ID!,
			process.env.NEXT_PUBLIC_BLOGS_COLLECTION_ID!
		);

		return response;
	} catch (error) {
		console.error(error);
	}
};

export const getBlogsById = async (id: string) => {
	try {
		const response = await databases.getDocument(
			process.env.NEXT_PUBLIC_BLOGS_DATABASE_ID!,
			process.env.NEXT_PUBLIC_BLOGS_COLLECTION_ID!,
			id
		);

		return response;
	} catch (error) {
		console.error(error);
	}
};