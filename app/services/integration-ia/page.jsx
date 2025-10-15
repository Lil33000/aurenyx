import HeroSection from "./components/HeroSection";
import ForWhoSection from "./components/ForWhoSection";
import UseCasesSection from "./components/UseCasesSection";
import WhyNowSection from "./components/WhyNowSection";
import CTA from "./components/CTA";

export const metadata = {
  title: "Intégration IA | Aurenyx Studio",
  description: "Découvrez notre expertise en intégration d'intelligence artificielle.",
};

export default function IntegrationIAPage() {
  return (
    <main className="bg-blackDeep text-whiteSoft">
      <HeroSection />
      <ForWhoSection />
      <UseCasesSection />
      <WhyNowSection />
      <CTA />
    </main>
  );
}
