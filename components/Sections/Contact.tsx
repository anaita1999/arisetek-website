"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 w-full overflow-hidden ">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-16 items-center ">
        
        <div className="flex-1">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
          >
            Let's build <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#9D00FF]">together.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="text-lg text-white/70 mb-12 max-w-md drop-shadow-md"
          >
            Ready to upgrade your digital presence? Send a message or schedule a quick discovery call.
          </motion.p>
          
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <a href="mailto:hello@arisetek.in" className="inline-flex items-center gap-4 text-2xl font-bold text-[#00E5FF] hover:text-white transition-colors group drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">
              hello@arisetek.in
              <span className="w-10 h-10 rounded-full bg-[#00E5FF]/20 flex items-center justify-center group-hover:bg-[#00E5FF] group-hover:text-black transition-colors border border-[#00E5FF]/40">
                ↗
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          className="flex-1 w-full max-w-md bg-black/40 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.8)]"
        >
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-bold text-white/60 uppercase tracking-widest mb-2">Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00E5FF] transition-colors shadow-inner" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs font-bold text-white/60 uppercase tracking-widest mb-2">Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00E5FF] transition-colors shadow-inner" placeholder="john@company.com" />
            </div>
            <div>
              <label className="block text-xs font-bold text-white/60 uppercase tracking-widest mb-2">Project Details</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00E5FF] transition-colors shadow-inner" placeholder="Tell me about your goals..."></textarea>
            </div>
            <button className="w-full py-4 bg-[#00E5FF]/20 text-[#00E5FF] font-bold rounded-xl hover:bg-[#00E5FF] hover:text-black transition-colors border border-[#00E5FF]/40 shadow-[0_0_15px_rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)]">
              Send Message
            </button>
            
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink-0 mx-4 text-white/40 text-xs uppercase font-bold">Or</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            <button className="w-full py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
               Schedule a Meeting 📅
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
