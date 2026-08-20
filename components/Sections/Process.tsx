"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    { num: "01", title: "Discovery", desc: "Understanding your business goals and identifying AI integration opportunities." },
    { num: "02", title: "Strategy", desc: "Mapping out the technical architecture and user experience flow." },
    { num: "03", title: "Design", desc: "Creating a premium, modern visual direction optimized for conversion." },
    { num: "04", title: "Development", desc: "Engineering the platform using Next.js and high-performance libraries." },
    { num: "05", title: "AI Integration", desc: "Embedding automation, chatbots, or intelligent workflows." },
    { num: "06", title: "Deployment", desc: "Launching securely on edge networks with monitoring in place." },
  ];

  return (
    <section ref={containerRef} id="process" className="py-40 relative z-10 w-full bg-transparent">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="mb-32">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#9D00FF] text-xs font-mono tracking-[0.3em] uppercase mb-4"
          >
            // Execution Protocol
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter"
          >
            A systematic approach <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">to engineering excellence.</span>
          </motion.h2>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Animated central line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/5">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[#00E5FF] to-[#9D00FF] origin-top"
            />
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.num} className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:justify-between w-full`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute -left-10 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-white/20 z-10 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-full h-full rounded-full bg-[#00E5FF]"
                    />
                  </div>

                  {/* Content Container */}
                  <div className={`w-full md:w-[45%] ${isEven ? 'md:text-right' : 'md:text-left'} pl-8 md:pl-0`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="group"
                    >
                      <span className="text-8xl font-black text-white/5 block mb-4 group-hover:text-[#00E5FF]/10 transition-colors duration-500">
                        {step.num}
                      </span>
                      <h3 className="text-3xl font-bold text-white mb-4 tracking-tighter">
                        {step.title}
                      </h3>
                      <p className="text-white/80 text-lg font-normal leading-relaxed">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
