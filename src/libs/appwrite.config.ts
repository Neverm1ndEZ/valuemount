import { Client, Databases } from "appwrite";

const client = new Client()
	.setEndpoint(process.env.NEXT_PUBLIC_ENPOINT!)
	.setProject(process.env.NEXT_PUBLIC_PROJECT_ID!);

const databases = new Databases(client);

export { databases };
