import NewsTimeline from "@/components/news/NewsTimeline";
import { getNews } from "@/libs/actions/news.action";
import React from "react";

async function fetchNews() {
	return await getNews();
}

export default async function NewsAndInsights() {
	const news = await fetchNews();
	interface CMSNewsItem {
		title: string;
		date: string;
		imageUrl: string;
		description: string;
		link: string;
		category: string;
		month: string | null;
		year: number | null;
		$id: string;
	}

	const mappedNews: CMSNewsItem[] =
		news?.documents.map((doc) => ({
			title: doc.title,
			date: doc.date,
			imageUrl: doc.imageUrl,
			description: doc.description,
			link: doc.link,
			category: doc.category,
			month: doc.month,
			year: doc.year,
			$id: doc.$id,
		})) ?? [];
	return (
		<div>
			<NewsTimeline news={mappedNews} />
		</div>
	);
}
