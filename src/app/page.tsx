import Home from "@/components/Home";
import Collection from "@/components/Processes/Collection";
import DeliveryWithTrust from "@/components/Processes/DeliveryWithTrust";
import Purification from "@/components/Processes/Purification";
import QualityTesting from "@/components/Processes/QualityTesting";
import ShapingExcellence from "@/components/Processes/ShapingExcellence";
import WhyValueMount from "@/components/WhyValueMount";

export default function page() {
  return (
    <main className=" flex flex-col items-center justify-center">
      <Home />
      <Collection />
      <Purification />
      <QualityTesting />
      <ShapingExcellence />
      <DeliveryWithTrust />
      <WhyValueMount />
    </main>
  );
}
