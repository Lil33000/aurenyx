import HeroSection from "./_components/HeroSection";
import FounderSection from "./_components/FounderSection";
import TeamGrid from "./_components/TeamGrid";
import JoinUsSection from "./_components/JoinUsSection";
import ValuesSection from "./_components/ValuesSection";

export const metadata = {
  title: "Notre équipe | Aurenyx Studio",
  description: "Découvrez les talents derrière Aurenyx Studio — une équipe passionnée, exigeante et créative.",
};

export default function EquipePage() {
  return (
    <main className="bg-blackDeep text-whiteSoft">
      <HeroSection />
      <FounderSection />
      <TeamGrid />
      <JoinUsSection />
      <ValuesSection />
    </main>
  );
}
