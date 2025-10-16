import HeroSection from "./components/HeroSection";
import { projects } from "@/data/projects";
import OverviewSection from "./components/OverviewSection";
import ImpactSection from "./components/ImpactSection";
import CTA from "./components/CTA";

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center text-grayMedium">
        Projet introuvable.
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-blackDeep text-whiteSoft">
      <HeroSection project={project} />
      <OverviewSection project={project} />
      <ImpactSection project={project} />
      {/* <CTA /> */}
    </main>
  );
}
