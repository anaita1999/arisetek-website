"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Stethoscope, Utensils, GraduationCap, Dumbbell, Scissors, ArrowRight } from "lucide-react";

export default function IndustryShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const industries = [
    { id: 0, name: "Healthcare", sub: "Clinics & Tech", icon: <Stethoscope className="w-8 h-8" />, color: "from-blue-600/40 to-black", features: ["Patient Portal", "AI Appointment Booking", "Telemedicine"] },
    { id: 1, name: "Dining", sub: "Restaurants", icon: <Utensils className="w-8 h-8" />, color: "from-orange-600/40 to-black", features: ["Online Ordering", "Table Reservations", "Menu Management"] },
    { id: 2, name: "Education", sub: "Schools & LMS", icon: <GraduationCap className="w-8 h-8" />, color: "from-green-600/40 to-black", features: ["Student Dashboard", "Course Catalogs", "Event Calendar"] },
    { id: 3, name: "Real Estate", sub: "Agencies", icon: <Building2 className="w-8 h-8" />, color: "from-purple-600/40 to-black", features: ["Property Listings", "Virtual Tours", "Lead CRM"] },
    { id: 4, name: "Fitness", sub: "Gyms & Trainers", icon: <Dumbbell className="w-8 h-8" />, color: "from-red-600/40 to-black", features: ["Class Scheduling", "Member Portals", "Trainer Bios"] },
    { id: 5, name: "Salons", sub: "Spas & Beauty", icon: <Scissors className="w-8 h-8" />, color: "from-pink-600/40 to-black", features: ["Service Menus", "Stylist Portfolios", "Booking Integration"] },
  ];

  return (
    <section id="industries" className="relative w-full py-32 flex flex-col overflow-hidden bg-transparent z-10">
      
      <div className="max-w-[1400px] mx-auto px-6 w-full mb-16">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[#00E5FF] text-xs font-mono tracking-[0.3em] uppercase mb-4 ml-2">
          // Industry Architecture
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-7xl font-black text-white tracking-tighter">
          Engineered for <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/10">specific sectors.</span>
        </motion.h2>
      </div>

      {/* Cinematic Accordion Container */}
      <div className="w-full max-w-[1600px] mx-auto px-6 h-[600px] flex gap-2 md:gap-4">
        {industries.map((ind, i) => {
          const isHovered = hoveredIndex === ind.id;
          
          return (
            <motion.div
              key={ind.id}
              onHoverStart={() => setHoveredIndex(ind.id)}
              onHoverEnd={() => setHoveredIndex(null)}
              animate={{ 
                flex: isHovered ? 4 : 1,
                opacity: hoveredIndex !== null && !isHovered ? 0.5 : 1
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full rounded-[2rem] overflow-hidden border border-white/10 cursor-crosshair group flex items-end"
            >
              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-t ${ind.color} opacity-20 group-hover:opacity-100 transition-opacity duration-700`} />
              
              {/* Vertical Title (when collapsed) */}
              <motion.div 
                animate={{ opacity: isHovered ? 0 : 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-4 pointer-events-none"
              >
                <div className="text-white/50 mb-8">{ind.icon}</div>
                <h3 className="text-white font-bold tracking-widest uppercase text-sm whitespace-nowrap -rotate-90 transform origin-center">
                  {ind.name}
                </h3>
              </motion.div>

              {/* Expanded Content */}
              <motion.div 
                animate={{ 
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 50
                }}
                className="relative z-10 p-8 md:p-12 w-full min-w-[300px] pointer-events-none"
              >
                <div className="text-white mb-6">{ind.icon}</div>
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none mb-2">{ind.name}</h3>
                <p className="text-white/60 font-mono text-sm tracking-widest uppercase mb-8">{ind.sub}</p>
                
                <div className="space-y-4 mb-8">
                  <p className="text-xs text-white/40 font-bold uppercase tracking-wider border-b border-white/10 pb-2">Core Features</p>
                  {ind.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center text-white/80">
                      <ArrowRight className="w-4 h-4 mr-4 text-[#00E5FF]" />
                      <span className="text-lg font-light">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
