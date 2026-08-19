"use client";

import { motion } from "framer-motion";
import { Zap, Search, Shield, Cpu, Layout, TrendingUp } from "lucide-react";

export default function Stats() {
  const stats = [
    { id: 1, label: "AI First", icon: <Cpu />, desc: "Built with intelligent automation from day one." },
    { id: 2, label: "Lightning Fast", icon: <Zap />, desc: "Sub-second load times for maximum conversion." },
    { id: 3, label: "SEO Ready", icon: <Search />, desc: "Structurally optimized for search engines." },
    { id: 4, label: "Modern Stack", icon: <Layout />, desc: "Next.js, React, WebGL, and Tailwind." },
    { id: 5, label: "Secure", icon: <Shield />, desc: "Enterprise-grade security and data protection." },
    { id: 6, label: "Business Focused", icon: <TrendingUp />, desc: "Designed purely to generate leads and sales." },
  ];

  return (
    <section className="py-24 border-y border-white/5 ">
      <div className="max-w-7xl mx-auto px-6 text-center ">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[#00E5FF] text-sm font-bold tracking-widest uppercase mb-4 drop-shadow-sm">
          Why Arisetek?
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-bold text-white mb-16 drop-shadow-lg">
          Performance isn't an afterthought.
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center p-6 bg-black/30 backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#00E5FF]/50 hover:bg-black/50 transition-colors group shadow-xl"
            >
              <div className="p-4 bg-black/50 border border-white/5 rounded-full text-[#00E5FF] mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,229,255,0.2)] group-hover:shadow-[0_0_25px_rgba(0,229,255,0.5)]">
                {stat.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{stat.label}</h3>
              <p className="text-sm text-white/60">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
