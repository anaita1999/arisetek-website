"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Code, Clock, Star } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "MedSync",
      type: "Healthcare Portal",
      description: "A secure, HIPAA-compliant patient portal featuring AI-driven symptom checking and automated appointment scheduling.",
      image: "/placeholder-1.jpg", // We would use actual project screenshots here
      stack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "OpenAI"],
      time: "6 Weeks",
      features: ["AI Triage", "Real-time Chat", "EHR Integration"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Aura Commerce",
      type: "E-Commerce Platform",
      description: "High-performance headless e-commerce site with an intelligent recommendation engine and dynamic pricing.",
      image: "/placeholder-2.jpg",
      stack: ["React", "Shopify Plus", "Framer Motion", "Stripe"],
      time: "4 Weeks",
      features: ["Sub-second Loads", "AI Recommendations", "Custom Checkout"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-highlight text-sm font-bold tracking-widest uppercase mb-4">Live Portfolio</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Interactive case studies.</h2>
          </div>
          <p className="text-foreground/60 max-w-md">We don't just build websites; we engineer digital products that solve complex business logic.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-primary rounded-3xl overflow-hidden border border-white/5 hover:border-accent/30 transition-colors"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full bg-[#1A2333] overflow-hidden flex items-center justify-center">
                {/* Fallback placeholder visual */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-highlight/20 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 text-foreground/40 font-mono text-sm">Project Interface Preview</div>
                
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm z-20">
                  <a href={project.link} className="p-3 bg-accent text-primary rounded-full hover:scale-110 transition-transform">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a href={project.github} className="p-3 bg-white/10 text-white rounded-full hover:scale-110 transition-transform hover:bg-white/20">
                    <GitBranch className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">{project.type}</span>
                    <h3 className="text-2xl font-bold text-foreground mt-2">{project.title}</h3>
                  </div>
                  <div className="flex items-center text-xs text-foreground/50 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <Clock className="w-3 h-3 mr-1.5" />
                    {project.time}
                  </div>
                </div>
                
                <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-foreground/40 uppercase mb-2 flex items-center"><Star className="w-3 h-3 mr-1.5" /> Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map(f => (
                        <span key={f} className="text-xs font-medium text-highlight bg-highlight/10 px-2 py-1 rounded-md">{f}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-bold text-foreground/40 uppercase mb-2 flex items-center"><Code className="w-3 h-3 mr-1.5" /> Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map(tech => (
                        <span key={tech} className="text-xs text-foreground/60 bg-white/5 px-2 py-1 rounded-md border border-white/5">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
