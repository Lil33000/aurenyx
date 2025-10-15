import CTA from "./components/CTA";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import ProcessSection from "./components/ProcessSection";

export const metadata = {
  title: "Saas sur mesure | Aurenyx Studio",
  description: "Découvrez notre expertise en développement SaaS sur mesure.",
};

export default function SaasPage() {
  return (
    <main className="bg-blackDeep text-whiteSoft">
      <HeroSection />
      <PricingSection />
      <ProcessSection />
      <CTA />
    </main>
  );
}
