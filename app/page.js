// app/page.jsx
import HeroSection from "./components/HeroSection";
import WhySection from "./components/WhySection";
import ComparisonSection from "./components/ComparisonSection";
import MethodSection from "./components/MethodSection";
import ProjectsSection from "./components/ProjectsSection";
import CallToActionSection from "./components/CallToActionSection";


export const metadata = {
  title: "Aurenyx Studio — SaaS & IA sur mesure",
  description:
    "Aurenyx Studio conçoit des solutions digitales puissantes et élégantes, alliant expertise humaine et intelligence artificielle.",
};

export default function HomePage() {
  return (
    <main className="bg-blackDeep text-whiteSoft overflow-hidden">
      <HeroSection />
      <WhySection />
      <ComparisonSection />
      <MethodSection />
      <ProjectsSection />
      <CallToActionSection />
    </main>
  );
}
