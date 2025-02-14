import Hero from "./Hero";
import Collection from "./processes/Collection";
import DeliveryWithTrust from "./processes/DeliveryWithTrust";
import Purification from "./processes/Purification";
import QualityTesting from "./processes/QualityTesting";
import ShapingExcellence from "./processes/ShapingExcellence";
import WhyValueMount from "./WhyValueMount";

export default function Home() {
	return (
		<section className="max-w-7xl mx-auto pt-10 pb-24 space-y-10">
			<Hero />
			<Collection />
			<Purification />
			<QualityTesting />
			<ShapingExcellence />
			<DeliveryWithTrust />
			<WhyValueMount />
		</section>
	);
}
