"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} id="home" className="relative w-full h-screen flex flex-col justify-center overflow-hidden pointer-events-none">
      
      <motion.div 
        style={{ opacity }}
        className="relative z-10 px-6 max-w-[1400px] mx-auto w-full flex flex-col pointer-events-auto"
      >
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[#00E5FF] font-mono text-sm tracking-[0.3em] uppercase mb-12 ml-4"
        >
          // Operating System for Business
        </motion.p>

        <div className="relative w-full">
          {/* First Line */}
          <motion.div style={{ y: y1 }} className="flex justify-start">
            <motion.h1 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10vw] leading-[0.85] font-black tracking-tighter text-transparent bg-clip-text bg-white"
            >
              INTELLIGENT
            </motion.h1>
          </motion.div>

          {/* Second Line */}
          <motion.div style={{ y: y2 }} className="flex justify-end pr-10">
            <motion.h1 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10vw] leading-[0.85] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#9D00FF]"
            >
              DIGITAL
            </motion.h1>
          </motion.div>

          {/* Third Line */}
          <motion.div style={{ y: y3 }} className="flex justify-start ml-[5vw] relative">
            <motion.h1 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10vw] leading-[0.85] font-black tracking-tighter text-transparent bg-clip-text bg-white/90"
            >
              FUTURE.
            </motion.h1>
            
            {/* Context paragraph beside the large text */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute right-0 bottom-0 max-w-xs text-white/50 text-sm hidden md:block tracking-widest leading-relaxed uppercase"
            >
              Automated workflows, AI chat logic, and cinematic digital products engineered to solve business friction.
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 flex gap-8 ml-4 items-center"
        >
          {/* Magnetic Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-white text-black font-bold tracking-widest uppercase text-xs overflow-hidden rounded-full"
          >
            <span className="relative z-10 mix-blend-difference text-white">Initialize Project</span>
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] rounded-full" />
          </motion.a>

          <a href="#portfolio" className="text-white/50 uppercase tracking-[0.2em] text-xs hover:text-[#00E5FF] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-[#00E5FF] hover:after:w-full after:transition-all after:duration-300">
            View Live Portfolio
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
