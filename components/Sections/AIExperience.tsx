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
    <section className="relative py-32 bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-highlight/5 via-primary to-primary pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            See AI working for you in <span className="text-accent">real-time.</span>
          </motion.h2>
          <p className="text-foreground/60 text-lg">Watch how a single customer inquiry automatically triggers a flawless operational workflow.</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent -translate-x-1/2" />
          
          <div className="space-y-8">
            {workflowSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.4, duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Step Content */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? "justify-start md:justify-end" : "justify-start"}`}>
                    <div className="bg-secondary border border-white/10 p-6 rounded-2xl shadow-xl w-[90%] md:w-[85%] ml-16 md:ml-0 group hover:border-accent/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-accent/10 text-accent rounded-lg">
                          {step.icon}
                        </div>
                        <span className="text-xs font-bold text-foreground/50 uppercase tracking-widest">{step.label}</span>
                      </div>
                      <p className="text-foreground/90 font-medium">{step.text}</p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary border-2 border-accent flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.5)] z-10">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.4) + 0.3 }}
                      className="w-1.5 h-1.5 rounded-full bg-accent"
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
            transition={{ delay: workflowSteps.length * 0.4 }}
            className="flex justify-center mt-12"
          >
            <div className="bg-highlight/20 text-highlight px-6 py-3 rounded-full flex items-center gap-2 font-bold border border-highlight/30">
              <CheckCircle2 className="w-5 h-5" /> Workflow Complete — 0 human intervention
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
