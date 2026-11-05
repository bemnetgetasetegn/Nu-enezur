import HeroAndDestinations from "@/components/sections/HeroAndDestinations";
import VisualShowcaseSection from "@/components/sections/VisualShowcaseSection";
import PackagesSection from "@/components/sections/PackagesSection";
import WhyChooseNuEnezur from "@/components/sections/WhyChooseNuEnezur";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroAndDestinations />
      <VisualShowcaseSection />
      <PackagesSection />
      <WhyChooseNuEnezur />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
