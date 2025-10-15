import CTA from "./components/CTA";
import HeroSection from "./components/HeroSection";

export const metadata = {
  title: "Nos Projets - Aurenyx",
  description:
    "Découvrez nos projets innovants alliant technologie et design pour transformer vos idées en succès concrets avec Aurenyx Studio.",
};

export default function IntegrationIAPage() {
  return (
    <main className="bg-blackDeep text-whiteSoft">
      <HeroSection />
      <CTA />
    </main>
  );
}
