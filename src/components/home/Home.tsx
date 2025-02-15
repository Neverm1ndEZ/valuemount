import Hero from "./Hero";
import Collection from "./processes/Collection";
import DeliveryWithTrust from "./processes/DeliveryWithTrust";
import Purification from "./processes/Purification";
import QualityTesting from "./processes/QualityTesting";
import ShapingExcellence from "./processes/ShapingExcellence";
import WhyValueMount from "./WhyValueMount";
import SectionNavigator from "./SectionNavigator";
import Head from "next/head";

export default function Home() {
	return (
		<section className="max-w-7xl mx-auto pt-10 pb-24 space-y-10 relative">
			<Head>
				{/* Preload important carousel images */}
				<link rel="preload" href="/home-carousel/1.svg" as="image" />
				<link rel="preload" href="/home-carousel/3.svg" as="image" />

				{/* Preload video posters */}
				<link rel="preload" href="/home-carousel/2-poster.png" as="image" />
				<link rel="preload" href="/home-carousel/4-poster.png" as="image" />
			</Head>
			{/* Add the SectionNavigator */}
			<SectionNavigator />

			{/* No need for wrapper divs since you've added IDs directly to components */}
			<div id="hero">
				<Hero />
			</div>
			<Collection />
			<Purification />
			<QualityTesting />
			<ShapingExcellence />
			<DeliveryWithTrust />
			<WhyValueMount />
		</section>
	);
}
