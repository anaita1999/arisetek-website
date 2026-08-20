"use client";

import { motion } from "framer-motion";
import { User, Cpu, CalendarCheck, Send, CheckCircle2, MessageSquare } from "lucide-react";

export default function AIExperience() {
  const workflowSteps = [
    { id: 1, icon: <User />, text: "I want to book an appointment tomorrow.", label: "Customer (Website)" },
    { id: 2, icon: <Cpu />, text: "Processing intent. Checking availability...", label: "AI Assistant" },
    { id: 3, icon: <CalendarCheck />, text: "Appointment scheduled for 2:00 PM.", label: "Calendar System" },
    { id: 4, icon: <Send />, text: "Confirmation email sent.", label: "CRM System" },
    { id: 5, icon: <MessageSquare />, text: "WhatsApp notification dispatched.", label: "Notification Engine" }
  ];

  return (
    <section className="relative py-32 overflow-hidden ">
      <div className="max-w-4xl mx-auto px-6 relative z-10 ">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg"
          >
            See AI working for you in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#9D00FF]">real-time.</span>
          </motion.h2>
          <p className="text-white text-lg drop-shadow-md">Watch how a single customer inquiry automatically triggers a flawless operational workflow.</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00E5FF]/40 to-transparent -translate-x-1/2" />
          
          <div className="space-y-8">
            {workflowSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Step Content */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? "justify-start md:justify-end" : "justify-start"}`}>
                    <div className="bg-black/30 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] w-[90%] md:w-[85%] ml-16 md:ml-0 group hover:border-[#00E5FF]/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-[#00E5FF]/20 text-[#00E5FF] rounded-lg shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                          {step.icon}
                        </div>
                        <span className="text-xs font-bold text-white/80 uppercase tracking-widest">{step.label}</span>
                      </div>
                      <p className="text-white/90 font-medium">{step.text}</p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black/50 backdrop-blur-sm border-2 border-[#00E5FF] flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.8)] z-10">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.2) + 0.3 }}
                      className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: workflowSteps.length * 0.2 }}
            className="flex justify-center mt-16"
          >
            <div className="bg-[#9D00FF]/20 backdrop-blur-md text-[#d580ff] px-8 py-4 rounded-full flex items-center gap-3 font-bold border border-[#9D00FF]/40 shadow-[0_0_30px_rgba(157,0,255,0.4)]">
              <CheckCircle2 className="w-6 h-6" /> Workflow Complete — 0 human intervention
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
