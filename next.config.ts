import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		domains: ["cloud.appwrite.io"], // Add Appwrite domain to allowed list
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cloud.appwrite.io",
				pathname: "/v1/storage/**",
			},
		],
	},
};

export default nextConfig;
