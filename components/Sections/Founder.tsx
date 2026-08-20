"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Founder() {
  return (
    <section className="py-24 border-y border-white/5 ">
      <div className="max-w-4xl mx-auto px-6 text-center ">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[#00E5FF] text-sm font-bold tracking-widest uppercase mb-4 drop-shadow-sm">
          Meet the Founder
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-white mb-8 drop-shadow-lg">
          Honest engineering. No fluff.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="bg-black/40 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden text-left"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E5FF]/10 blur-[100px] rounded-full " />
          
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
            <div className="flex flex-col items-center gap-3">
              <div className="w-32 h-32 rounded-full flex-shrink-0 border-4 border-[#9D00FF]/50 shadow-[0_0_20px_rgba(157,0,255,0.3)] overflow-hidden relative">
                <Image 
                  src="/founder.jpg" 
                  alt="Anaita Pal" 
                  fill 
                  className="object-cover object-[center_top]" 
                  sizes="128px"
                />
              </div>
              <span className="text-white font-bold tracking-wide text-lg mt-2">Anaita Pal</span>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-2 px-5 py-2.5 bg-white/5 text-white/90 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full border border-white/20 hover:bg-white/20 hover:text-white transition-all backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center gap-2 group"
              >
                View Portfolio 
                <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#00E5FF] group-hover:text-black transition-colors">
                  ↗
                </span>
              </a>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">B.Tech Engineer</h3>
              <p className="text-[#00E5FF] text-sm font-bold mb-6">AI-First Developer</p>
              
              <div className="space-y-4 text-white/80 leading-relaxed font-medium">
                <p>
                  I'm passionate about modern web technologies and focused on solving real business problems with automation. 
                  I believe in building software that doesn't just look good, but actively works to grow your business.
                </p>
                <p>
                  No pretending there's a massive team here—just direct, high-quality engineering and a partnership focused on your success.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
