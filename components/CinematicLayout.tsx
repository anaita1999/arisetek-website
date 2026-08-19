"use client";

import { Canvas } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import CinematicScene from "./3D/CinematicScene";

import Hero from "./Sections/Hero";
import Services from "./Sections/Services";
import IndustryShowcase from "./Sections/IndustryShowcase";
import AIExperience from "./Sections/AIExperience";
import Portfolio from "./Sections/Portfolio";
import Stats from "./Sections/Stats";
import TechWall from "./Sections/TechWall";
import Process from "./Sections/Process";
import Founder from "./Sections/Founder";
import Contact from "./Sections/Contact";

export default function CinematicLayout() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="w-full relative bg-[#030509]">

      {/* 3D Background - Fixed behind content */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <CinematicScene scrollYProgress={scrollYProgress} />
        </Canvas>
      </div>

      {/* Global Film Grain Overlay */}
      <div
        className="fixed inset-0 z-50 pointer-events-none opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* HTML Foreground - Native Scrolling */}
      <div className="relative z-10 w-full flex flex-col">
        <div style={{ minHeight: '100vh' }}>
          <Hero />
        </div>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Services />
        </div>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <IndustryShowcase />
        </div>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="w-full transform scale-90 md:scale-100">
            <AIExperience />
          </div>
        </div>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Portfolio />
        </div>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Stats />
        </div>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <TechWall />
        </div>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Process />
        </div>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Founder />
        </div>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '100px' }}>
          <Contact />
        </div>
      </div>

    </div>
  );
}
