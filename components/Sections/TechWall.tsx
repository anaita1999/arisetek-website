"use client";

import { motion } from "framer-motion";

export default function TechWall() {
  const technologies = [
    "React", "Next.js", "TypeScript", "Three.js", "WebGL", "GLSL", 
    "GSAP", "Node.js", "Firebase", "Supabase", "OpenAI", "Gemini", 
    "Claude", "Docker", "GitHub", "Vercel", "Framer Motion", "Tailwind"
  ];

  return (
    <section className="py-32 bg-primary overflow-hidden relative flex flex-col items-center justify-center min-h-[50vh]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-highlight/10 via-primary to-primary pointer-events-none" />
      
      <div className="text-center mb-16 relative z-10">
        <p className="text-highlight text-sm font-bold tracking-widest uppercase mb-4">Technology Stack</p>
        <h2 className="text-3xl font-bold text-foreground">Powered by modern infrastructure.</h2>
      </div>

      <div className="relative w-full max-w-5xl mx-auto flex flex-wrap justify-center gap-4 px-6 z-10">
        {technologies.map((tech, i) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.random() * 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(108, 99, 255, 0.2)", borderColor: "rgba(108, 99, 255, 0.5)" }}
            className="px-6 py-3 bg-secondary/80 backdrop-blur-md border border-white/10 rounded-full text-foreground/80 font-mono text-sm shadow-xl cursor-default transition-colors"
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
