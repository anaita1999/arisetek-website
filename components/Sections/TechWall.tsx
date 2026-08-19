"use client";

import { motion } from "framer-motion";

export default function TechWall() {
  const technologies = [
    "React", "Next.js", "TypeScript", "Three.js", "WebGL", "GLSL", 
    "GSAP", "Node.js", "Firebase", "Supabase", "OpenAI", "Gemini", 
    "Claude", "Docker", "GitHub", "Vercel", "Framer Motion", "Tailwind"
  ];

  return (
    <section className="py-40 relative z-10 w-full overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="text-center mb-24">
          <p className="text-[#00E5FF] text-xs font-mono tracking-[0.3em] uppercase mb-4">
            // Infrastructure
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Powered by modern <span className="text-white/30 italic font-serif tracking-normal">technology.</span>
          </h2>
        </div>

        <div className="relative w-full flex flex-wrap justify-center gap-2 md:gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255,255,255,0.1)",
                color: "#fff" 
              }}
              className="px-6 py-4 border border-white/10 rounded-full text-white/50 font-mono text-xs uppercase tracking-widest cursor-crosshair transition-colors duration-300 backdrop-blur-sm bg-black/20"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
