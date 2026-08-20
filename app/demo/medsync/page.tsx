"use client";

import { motion } from "framer-motion";
import { Activity, Calendar, Clock, ChevronRight, Stethoscope, FileText, UserCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function MedSyncDemo() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white overflow-x-hidden selection:bg-[#00E5FF]/30">
      
      {/* Background Cinematic Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#00E5FF]/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-6 max-w-7xl mx-auto z-50 relative">
        <Link href="/#portfolio" className="flex items-center gap-2 group">
          <ArrowLeft className="w-4 h-4 text-white/50 group-hover:text-[#00E5FF] transition-colors" />
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-[#00E5FF]" />
            <span className="text-xl font-bold tracking-tight">MedSync</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <span className="text-[#00E5FF] border-b-2 border-[#00E5FF] pb-1 cursor-default">Home</span>
          <span className="hover:text-white transition-colors cursor-crosshair">Symptom Checker</span>
          <span className="hover:text-white transition-colors cursor-crosshair">Appointments</span>
          <span className="hover:text-white transition-colors cursor-crosshair">Records</span>
          <span className="hover:text-white transition-colors cursor-crosshair">Doctors</span>
          <button className="px-5 py-2 rounded-full border border-white/20 hover:border-[#00E5FF] hover:text-[#00E5FF] transition-all">
            Profile / Login
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="flex flex-col items-center justify-center pt-20 pb-16 text-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Your Health, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-400 drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]">Synced.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-light tracking-wide max-w-2xl mx-auto">
            AI-Powered Diagnostics & Effortless Appointment Scheduling
          </p>
        </motion.div>
      </header>

      {/* Main Dashboard Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        
        {/* Left Column: AI Diagnostics */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 backdrop-blur-md">
            <p className="text-[#00E5FF] text-xs font-bold tracking-[0.2em] uppercase mb-2">MedSync AI Diagnostics</p>
            <h2 className="text-2xl font-semibold mb-8">AI-driven Symptom Checker</h2>
            
            <div className="bg-black/40 border border-white/10 rounded-2xl p-4 mb-6">
              <textarea 
                className="w-full bg-transparent text-white placeholder-white/30 resize-none outline-none text-sm leading-relaxed" 
                rows={4}
                placeholder="Describe your symptoms... e.g., 'I've had a headache for 2 days and a slight fever.'"
                readOnly
              />
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-[#00E5FF] to-blue-500 rounded-xl text-black font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-shadow">
              Analyze Symptoms
            </button>

            <div className="mt-8 pt-8 border-t border-white/10">
              <h3 className="text-sm text-white/70 font-medium mb-4">Common Symptoms</h3>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { icon: <Activity className="w-5 h-5"/>, label: "Fever" },
                  { icon: <UserCircle2 className="w-5 h-5"/>, label: "Cough" },
                  { icon: <Activity className="w-5 h-5"/>, label: "Headache" },
                  { icon: <Activity className="w-5 h-5"/>, label: "Fatigue" }
                ].map((sym, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/5 rounded-xl hover:border-[#00E5FF]/50 transition-colors cursor-crosshair">
                    <div className="text-[#00E5FF] mb-2">{sym.icon}</div>
                    <span className="text-[10px] text-white/60 tracking-wider uppercase">{sym.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Scheduling */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-6"
        >
          <div className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 backdrop-blur-md h-full flex flex-col">
            <p className="text-[#00E5FF] text-xs font-bold tracking-[0.2em] uppercase mb-2">Schedule an Appointment</p>
            <h2 className="text-2xl font-semibold mb-8">Appointment Scheduling</h2>

            {/* Mock Calendar */}
            <div className="bg-black/40 border border-white/10 rounded-2xl p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <ChevronRight className="w-4 h-4 text-white/50 rotate-180" />
                <span className="font-medium text-sm">October 2023</span>
                <ChevronRight className="w-4 h-4 text-white/50" />
              </div>
              <div className="grid grid-cols-7 gap-y-4 text-center text-xs">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                  <span key={d} className="text-white/40">{d}</span>
                ))}
                {/* Blank days */}
                <span/><span/><span/>
                {/* Days */}
                {[...Array(31)].map((_, i) => (
                  <span key={i} className={`flex items-center justify-center w-6 h-6 mx-auto rounded-full ${i+1 === 9 ? 'bg-[#00E5FF] text-black font-bold shadow-[0_0_10px_rgba(0,229,255,0.5)]' : 'text-white/80 hover:bg-white/10'}`}>
                    {i+1}
                  </span>
                ))}
              </div>
            </div>

            {/* Doctors */}
            <div className="mb-8">
              <h3 className="text-sm text-white/70 font-medium mb-4">Available Doctors</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-[#00E5FF] flex items-center justify-center">
                      <Stethoscope className="w-5 h-5 text-white/70" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Dr. Sarah Chen</p>
                      <p className="text-xs text-white/50">General Practitioner</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[#00E5FF] text-xs font-bold">
                    4.9 ★
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-white/20 flex items-center justify-center">
                      <Stethoscope className="w-5 h-5 text-white/70" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Dr. Michael Lee</p>
                      <p className="text-xs text-white/50">Cardiologist</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[#00E5FF] text-xs font-bold">
                    4.9 ★
                  </div>
                </div>
              </div>
            </div>

            {/* Time Slots */}
            <div className="mt-auto">
              <h3 className="text-sm text-white/70 font-medium mb-4">Select Time Slot</h3>
              <div className="flex gap-3">
                <span className="px-4 py-2 bg-[#00E5FF] text-black text-xs font-bold rounded-full">9:00 AM</span>
                <span className="px-4 py-2 border border-white/20 text-white/70 text-xs font-bold rounded-full">10:30 AM</span>
                <span className="px-4 py-2 border border-white/20 text-white/70 text-xs font-bold rounded-full">2:00 PM</span>
              </div>
            </div>

          </div>
        </motion.div>
      </main>

    </div>
  );
}
