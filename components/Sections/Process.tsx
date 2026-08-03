"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    { num: "01", title: "Discovery", desc: "Understanding your business goals and identifying AI integration opportunities." },
    { num: "02", title: "Strategy", desc: "Mapping out the technical architecture and user experience flow." },
    { num: "03", title: "Design", desc: "Creating a premium, modern visual direction optimized for conversion." },
    { num: "04", title: "Development", desc: "Engineering the platform using Next.js and high-performance libraries." },
    { num: "05", title: "AI Integration", desc: "Embedding automation, chatbots, or intelligent workflows." },
    { num: "06", title: "Deployment", desc: "Launching securely on edge networks with monitoring in place." },
    { num: "07", title: "Support", desc: "Continuous optimization and technical partnership." }
  ];

  return (
    <section id="process" className="py-24 bg-secondary">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-accent text-sm font-bold tracking-widest uppercase mb-4">How We Work</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">A clear path to launch.</h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-[30px] top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 md:pl-20 group"
              >
                {/* Node */}
                <div className="absolute left-0 md:left-[16px] top-1 w-8 h-8 rounded-full bg-primary border-2 border-white/20 group-hover:border-accent flex items-center justify-center transition-colors shadow-lg z-10">
                  <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-accent transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-4">
                  <span className="text-accent/50 font-mono text-sm">{step.num}</span>
                  {step.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
