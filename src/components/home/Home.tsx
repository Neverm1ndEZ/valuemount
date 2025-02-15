import Hero from "./Hero";
import Collection from "./processes/Collection";
import DeliveryWithTrust from "./processes/DeliveryWithTrust";
import Purification from "./processes/Purification";
import QualityTesting from "./processes/QualityTesting";
import ShapingExcellence from "./processes/ShapingExcellence";
import WhyValueMount from "./WhyValueMount";
import SectionNavigator from "./SectionNavigator";

export default function Home() {
	return (
		<section className="max-w-7xl mx-auto pt-10 pb-24 space-y-10 relative">
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
