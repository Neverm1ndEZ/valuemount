"use server";

// import { revalidatePath } from "next/cache";
import { databases } from "../appwrite.config";

export const getBlogs = async () => {
	try {
		const response = await databases.listDocuments(
			process.env.NEXT_PUBLIC_DATABASE_ID!,
			process.env.NEXT_PUBLIC_BLOGS_COLLECTION_ID!,
		);

		// revalidatePath("/");

		return response;
	} catch (error) {
		console.error(error);
	}
};
