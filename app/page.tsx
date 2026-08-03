import Hero from "../components/Sections/Hero";
import Services from "../components/Sections/Services";
import IndustryShowcase from "../components/Sections/IndustryShowcase";
import AIExperience from "../components/Sections/AIExperience";
import Portfolio from "../components/Sections/Portfolio";
import Stats from "../components/Sections/Stats";
import TechWall from "../components/Sections/TechWall";
import Process from "../components/Sections/Process";
import Founder from "../components/Sections/Founder";
import Contact from "../components/Sections/Contact";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-primary">
      <Hero />
      <Services />
      <IndustryShowcase />
      <AIExperience />
      <Portfolio />
      <Stats />
      <TechWall />
      <Process />
      <Founder />
      <Contact />
    </main>
  );
}
