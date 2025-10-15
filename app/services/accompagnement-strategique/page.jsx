import HeroSection from "./components/HeroSection";

import CTA from "./components/CTA";
import ForWhoSection from "./components/ForWhoSection";
import ServiceStrat from "./components/ServiceStrat";
import ApproachSection from "./components/ApproachSection";

export const metadata = {
  title: "Accompagnement Stratégique | Aurenyx Studio",
  description: "Découvrez notre expertise en accompagnement stratégique.",
};

export default function IntegrationIAPage() {
  return (
    <main className="bg-blackDeep text-whiteSoft">
      <HeroSection />
      <ForWhoSection />
      <ServiceStrat />
      <ApproachSection />
      <CTA />
    </main>
  );
}
