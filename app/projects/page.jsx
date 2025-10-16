import HeroSection from "./components/HeroSection";
import ProjectsGrid from "./components/ProjectsGrid";
import CTA from "./components/CTA";

export const metadata = {
  title: "Nos Projets - Aurenyx Studio",
  description:
    "Découvrez nos projets d’exception, où l’innovation rencontre le design. Chaque réalisation est une preuve de notre exigence et créativité.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-blackDeep text-whiteSoft overflow-hidden">
      <HeroSection />
      <ProjectsGrid />
      <CTA />
    </main>
  );
}
