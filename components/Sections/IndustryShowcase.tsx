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
      <div className="w-full max-w-[1600px] mx-auto px-6 h-[800px] md:h-[600px] flex flex-col md:flex-row gap-2 md:gap-4">
        {industries.map((ind, i) => {
          const isHovered = hoveredIndex === ind.id;
          
          return (
            <motion.div
              key={ind.id}
              onHoverStart={() => setHoveredIndex(ind.id)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setHoveredIndex(hoveredIndex === ind.id ? null : ind.id)}
              animate={{ 
                flex: isHovered ? 4 : 1,
                opacity: hoveredIndex !== null && !isHovered ? 0.5 : 1
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full rounded-[2rem] overflow-hidden border border-white/10 cursor-pointer md:cursor-crosshair group flex items-end"
            >
              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-t ${ind.color} opacity-20 group-hover:opacity-100 transition-opacity duration-700`} />
              
              {/* Collapsed Title */}
              <motion.div 
                animate={{ opacity: isHovered ? 0 : 1 }}
                className="absolute inset-0 flex md:flex-col items-center justify-start md:justify-center p-6 md:p-4 gap-4 md:gap-0 pointer-events-none"
              >
                <div className="text-white/80 md:mb-8">{ind.icon}</div>
                <h3 className="text-white font-bold tracking-widest uppercase text-sm md:whitespace-nowrap md:-rotate-90 md:transform md:origin-center">
                  {ind.name}
                </h3>
              </motion.div>

              {/* Expanded Content */}
              <motion.div 
                animate={{ 
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 50
                }}
                className="relative z-10 p-6 md:p-12 w-full min-w-[280px] md:min-w-[300px] pointer-events-none"
              >
                <div className="text-white mb-4 md:mb-6 hidden md:block">{ind.icon}</div>
                <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none mb-1 md:mb-2">{ind.name}</h3>
                <p className="text-white/90 font-mono text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-8">{ind.sub}</p>
                
                <div className="space-y-3 md:space-y-4 mb-4 md:mb-8">
                  <p className="text-[10px] md:text-xs text-white font-bold uppercase tracking-wider border-b border-white/10 pb-2 hidden md:block">Core Features</p>
                  {ind.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center text-white/80">
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 mr-3 md:mr-4 text-[#00E5FF]" />
                      <span className="text-sm md:text-lg font-normal">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="hidden md:flex w-12 h-12 rounded-full border border-white/20 items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300">
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
