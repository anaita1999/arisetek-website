"use client";

import { motion } from "framer-motion";
import { Bot, Code2, Cpu } from "lucide-react";

export default function Services() {
  const pillars = [
    {
      id: "ai",
      title: "AI Automation",
      number: "01",
      icon: <Bot className="w-12 h-12 text-[#00E5FF]" />,
      description: "We deploy intelligent agents that handle support, qualify leads, and automate internal workflows.",
      examples: ["AI Chatbots", "Workflow Automation", "Lead Qualification", "Customer Support"],
      gradient: "from-[#00E5FF]/20 to-transparent",
    },
    {
      id: "web",
      title: "Web Development",
      number: "02",
      icon: <Code2 className="w-12 h-12 text-[#9D00FF]" />,
      description: "Cinematic digital experiences engineered for performance, SEO, and massive conversion rates.",
      examples: ["Business Websites", "Landing Pages", "Dashboards", "E-commerce"],
      gradient: "from-[#9D00FF]/20 to-transparent",
    },
    {
      id: "software",
      title: "Custom Software",
      number: "03",
      icon: <Cpu className="w-12 h-12 text-white" />,
      description: "Bespoke internal tools and CRM integrations that eliminate business friction.",
      examples: ["Internal Tools", "CRM Integration", "Inventory Systems", "Business Portals"],
      gradient: "from-white/10 to-transparent",
    }
  ];

  return (
    <section id="services" className="relative w-full py-32 bg-transparent z-10">
      
      <div className="max-w-[1200px] mx-auto px-6 mb-32">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-5xl md:text-7xl font-black text-white tracking-tighter max-w-3xl leading-[0.9]"
        >
          Everything your business needs to operate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#9D00FF]">intelligently.</span>
        </motion.h2>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 pb-32">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="sticky top-24 w-full min-h-[500px] rounded-[3rem] p-1 mb-12 shadow-2xl overflow-hidden group"
            style={{ 
              top: `calc(100px + ${index * 30}px)`,
              zIndex: index 
            }}
          >
            {/* Card Background Wrapper */}
            <div className="absolute inset-0 bg-[#050505] border border-white/10 rounded-[3rem] overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-30`} />
              {/* Noise */}
              <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row h-full p-10 md:p-16 gap-12 items-center">
              
              <div className="flex-1 flex flex-col justify-center h-full">
                <span className="text-6xl md:text-8xl font-black text-white/5 tracking-tighter mb-4 block">
                  {pillar.number}
                </span>
                {pillar.icon}
                <h3 className="text-4xl md:text-5xl font-bold text-white mt-8 mb-6 tracking-tighter">{pillar.title}</h3>
                <p className="text-xl text-white/60 font-light leading-relaxed max-w-md">
                  {pillar.description}
                </p>
              </div>

              <div className="flex-1 w-full bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                <h4 className="text-sm tracking-[0.2em] uppercase text-white/40 mb-8 border-b border-white/10 pb-4">Core Capabilities</h4>
                <ul className="space-y-6">
                  {pillar.examples.map((item, i) => (
                    <li key={i} className="flex items-center group/item cursor-default">
                      <div className="w-8 h-[1px] bg-white/20 mr-4 group-hover/item:w-16 group-hover/item:bg-[#00E5FF] transition-all duration-300" />
                      <span className="text-lg md:text-xl text-white/80 group-hover/item:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
