"use client";

import { motion } from "framer-motion";
import { Bot, Code2, Cpu } from "lucide-react";

export default function Services() {
  const pillars = [
    {
      id: "ai",
      title: "AI Automation",
      icon: <Bot className="w-8 h-8 mb-4 text-accent" />,
      examples: ["AI Chatbots", "Workflow Automation", "Lead Qualification", "Customer Support"],
      gradient: "from-accent/20 via-accent/5 to-transparent",
      glow: "group-hover:shadow-[0_0_40px_rgba(0,229,255,0.3)]",
      border: "group-hover:border-accent/50",
    },
    {
      id: "web",
      title: "Web Development",
      icon: <Code2 className="w-8 h-8 mb-4 text-highlight" />,
      examples: ["Business Websites", "Landing Pages", "Dashboards", "E-commerce"],
      gradient: "from-highlight/20 via-highlight/5 to-transparent",
      glow: "group-hover:shadow-[0_0_40px_rgba(108,99,255,0.3)]",
      border: "group-hover:border-highlight/50",
    },
    {
      id: "software",
      title: "Custom Software",
      icon: <Cpu className="w-8 h-8 mb-4 text-primary" />,
      examples: ["Internal Tools", "CRM Integration", "Inventory Systems", "Business Portals"],
      gradient: "from-white/10 via-white/5 to-transparent",
      glow: "group-hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]",
      border: "group-hover:border-white/30",
    }
  ];

  return (
    <section id="services" className="relative w-full min-h-screen bg-primary flex flex-col items-center justify-center py-24 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-secondary blur-[120px] rounded-full opacity-50 pointer-events-none" />

      <div className="relative z-10 text-center mb-20 px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent text-sm font-bold tracking-widest uppercase mb-4"
        >
          Control Room
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-foreground max-w-2xl mx-auto"
        >
          Everything your business needs to operate intelligently.
        </motion.h2>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-8 px-6 max-w-7xl mx-auto w-full">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            className={`group relative flex-1 bg-secondary/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 overflow-hidden transition-all duration-500 cursor-default ${pillar.glow} ${pillar.border}`}
          >
            {/* Glowing gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-b ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10 flex flex-col h-full">
              {pillar.icon}
              <h3 className="text-2xl font-bold text-foreground mb-6">{pillar.title}</h3>
              
              <ul className="space-y-4 flex-grow">
                {pillar.examples.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.2) + (i * 0.1) + 0.3 }}
                    className="flex items-center text-foreground/70"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 overflow-hidden">
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-transparent via-accent to-transparent w-[200%] -translate-x-[100%] group-hover:animate-[shimmer_2s_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
