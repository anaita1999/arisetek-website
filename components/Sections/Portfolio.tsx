"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const Project = ({ project, index }: { project: any, index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-24 items-center mb-20 md:mb-40 w-full`}>
      
      {/* Image Container with Parallax */}
      <div className="w-full md:w-3/5 h-[40vh] md:h-[80vh] relative overflow-hidden rounded-[2rem] md:rounded-3xl group">
        <div className="absolute inset-0 bg-[#00E5FF]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <motion.div 
          style={{ y }}
          className="absolute -inset-[100px] bg-black border border-white/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-black to-black flex items-center justify-center"
        >
          {/* Conceptual Image Placeholder */}
          <div className="text-white/20 font-mono tracking-widest text-xs md:text-sm uppercase flex flex-col items-center">
            <span>[ Project Render ]</span>
            <span className="mt-2 md:mt-4 opacity-50">{project.type}</span>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="w-full md:w-2/5 flex flex-col justify-center mt-4 md:mt-0">
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <span className="text-[#00E5FF] font-mono text-xs tracking-widest uppercase">{String(index + 1).padStart(2, '0')}</span>
            <div className="h-[1px] bg-white/20 w-8 md:w-12" />
            <span className="text-white/60 font-mono text-xs tracking-widest uppercase">{project.type}</span>
          </div>

          <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 md:mb-8 leading-none">
            {project.title}
          </h3>

          <p className="text-xl text-white/50 font-light leading-relaxed mb-12">
            {project.description}
          </p>

          <div className="flex flex-col gap-8">
            <div>
              <p className="text-xs text-white/30 uppercase tracking-widest mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech: string) => (
                  <span key={tech} className="text-sm text-white/80 border border-white/10 rounded-full px-4 py-2 bg-white/5">{tech}</span>
                ))}
              </div>
            </div>

            <a href={project.link} className="group inline-flex items-center gap-4 text-white hover:text-[#00E5FF] transition-colors w-max">
              <span className="text-sm font-bold uppercase tracking-widest">View Live Site</span>
              <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:bg-[#00E5FF] group-hover:text-black transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "MedSync",
      type: "Healthcare Portal",
      description: "A secure, HIPAA-compliant patient portal featuring AI-driven symptom checking and automated appointment scheduling.",
      stack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "OpenAI"],
      link: "#",
    },
    {
      id: 2,
      title: "Aura Commerce",
      type: "E-Commerce Engine",
      description: "High-performance headless e-commerce site with an intelligent recommendation engine and dynamic pricing.",
      stack: ["React", "Shopify Plus", "Framer Motion", "Stripe"],
      link: "#",
    }
  ];

  return (
    <section id="portfolio" className="relative w-full py-32 bg-transparent z-10">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-white/40 font-mono text-sm tracking-widest uppercase mb-6">Selected Works</p>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
              Featured <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">Digital Products.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/50 max-w-sm text-lg font-light"
          >
            We engineer high-performance platforms that solve complex business logic while maintaining award-winning aesthetics.
          </motion.p>
        </div>

        <div className="flex flex-col w-full">
          {projects.map((project, index) => (
            <Project key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
