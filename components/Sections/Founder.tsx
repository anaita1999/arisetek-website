"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Founder() {
  return (
    <section className="py-24 bg-primary border-y border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-highlight text-sm font-bold tracking-widest uppercase mb-4">
          Meet the Founder
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Honest engineering. No fluff.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="bg-secondary/50 p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden text-left"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
            <div className="flex flex-col items-center gap-3">
              <div className="w-32 h-32 rounded-full flex-shrink-0 border-4 border-primary shadow-xl overflow-hidden relative">
                <Image 
                  src="/founder.jpg" 
                  alt="Anaita Pal" 
                  fill 
                  className="object-cover object-[center_top]" 
                  sizes="128px"
                />
              </div>
              <span className="text-foreground font-bold tracking-wide">Anaita Pal</span>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">B.Tech Engineer</h3>
              <p className="text-accent text-sm font-bold mb-6">AI-First Developer</p>
              
              <div className="space-y-4 text-foreground/70 leading-relaxed">
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
