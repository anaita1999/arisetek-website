"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Stethoscope, Utensils, GraduationCap, Dumbbell, Scissors, ArrowRight } from "lucide-react";

export default function IndustryShowcase() {
  const [activeBuilding, setActiveBuilding] = useState<number | null>(null);

  const industries = [
    { id: 0, name: "Healthcare & Clinics", icon: <Stethoscope className="w-8 h-8" />, color: "bg-blue-500/20 text-blue-400", features: ["Patient Portal", "AI Appointment Booking", "Telemedicine Ready"] },
    { id: 1, name: "Restaurants & Dining", icon: <Utensils className="w-8 h-8" />, color: "bg-orange-500/20 text-orange-400", features: ["Online Ordering", "Table Reservations", "Menu Management"] },
    { id: 2, name: "Education & Schools", icon: <GraduationCap className="w-8 h-8" />, color: "bg-green-500/20 text-green-400", features: ["Student Dashboard", "Course Catalogs", "Event Calendar"] },
    { id: 3, name: "Real Estate", icon: <Building2 className="w-8 h-8" />, color: "bg-purple-500/20 text-purple-400", features: ["Property Listings", "Virtual Tours", "Lead Generation CRM"] },
    { id: 4, name: "Fitness & Gyms", icon: <Dumbbell className="w-8 h-8" />, color: "bg-red-500/20 text-red-400", features: ["Class Scheduling", "Member Portals", "Trainer Bios"] },
    { id: 5, name: "Salons & Spas", icon: <Scissors className="w-8 h-8" />, color: "bg-pink-500/20 text-pink-400", features: ["Service Menus", "Stylist Portfolios", "Booking Integration"] },
  ];

  return (
    <section id="industries" className="relative w-full min-h-[90vh] bg-[#070A11] py-24 flex items-center overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col md:flex-row gap-12">
        
        {/* Left Side: Buildings (Grid) */}
        <div className="flex-1">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-highlight text-sm font-bold tracking-widest uppercase mb-4">
            Interactive City
          </motion.p>
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-3xl md:text-5xl font-bold text-foreground mb-12">
            Built for your specific industry.
          </motion.h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {industries.map((ind, i) => (
              <motion.button
                key={ind.id}
                onClick={() => setActiveBuilding(activeBuilding === ind.id ? null : ind.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-300 ${
                  activeBuilding === ind.id
                    ? "bg-secondary border-highlight shadow-[0_0_30px_rgba(108,99,255,0.2)]"
                    : "bg-secondary/30 border-white/5 hover:border-white/20 hover:bg-secondary/50"
                }`}
              >
                <div className={`p-4 rounded-full mb-4 ${ind.color}`}>
                  {ind.icon}
                </div>
                <span className="text-sm font-semibold text-foreground/90 text-center">{ind.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Right Side: Active Detail Panel */}
        <div className="flex-1 flex items-center justify-center min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeBuilding !== null ? (
              <motion.div
                key="detail"
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -20 }}
                className="w-full bg-secondary/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-highlight/10 blur-[80px] rounded-full" />
                
                <div className={`inline-block p-3 rounded-2xl mb-6 ${industries[activeBuilding].color}`}>
                  {industries[activeBuilding].icon}
                </div>
                
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  {industries[activeBuilding].name}
                </h3>
                <p className="text-foreground/70 mb-8">
                  We create tailored digital experiences that solve the unique challenges of the {industries[activeBuilding].name.toLowerCase()} sector.
                </p>
                
                <h4 className="text-sm font-bold text-accent uppercase tracking-wider mb-4">Included Features</h4>
                <ul className="space-y-3 mb-8">
                  {industries[activeBuilding].features.map((feat, i) => (
                    <li key={i} className="flex items-center text-foreground/80">
                      <ArrowRight className="w-4 h-4 mr-3 text-accent" />
                      {feat}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-4 bg-white/5 hover:bg-highlight hover:text-white text-foreground transition-colors font-bold rounded-xl border border-white/10 flex items-center justify-center gap-2">
                  View Live Demo
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-foreground/40 border border-dashed border-white/10 rounded-3xl p-12 w-full h-full flex flex-col items-center justify-center"
              >
                <Building2 className="w-16 h-16 mb-4 opacity-50" />
                <p>Select an industry building to see its capabilities.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
