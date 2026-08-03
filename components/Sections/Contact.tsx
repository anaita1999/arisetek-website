"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-[#070A11] overflow-hidden">
      
      {/* 3D Animated Globe Background */}
      <div className="absolute top-1/2 right-[-20%] md:right-0 -translate-y-1/2 w-full md:w-1/2 h-[600px] z-0 opacity-50 pointer-events-none">
        <Canvas>
          <ambientLight intensity={1} />
          <directionalLight position={[2, 1, 1]} />
          <Sphere args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial color="#0B0F19" attach="material" distort={0.5} speed={1.5} roughness={0.2} metalness={0.8} wireframe />
          </Sphere>
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-16 items-center">
        
        <div className="flex-1">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-5xl md:text-7xl font-bold text-foreground mb-6"
          >
            Let's build <br/><span className="text-accent">together.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/60 mb-12 max-w-md"
          >
            Ready to upgrade your digital presence? Send a message or schedule a quick discovery call.
          </motion.p>
          
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <a href="mailto:hello@arisetek.in" className="inline-flex items-center gap-4 text-2xl font-bold text-highlight hover:text-white transition-colors group">
              hello@arisetek.in
              <span className="w-10 h-10 rounded-full bg-highlight/20 flex items-center justify-center group-hover:bg-highlight group-hover:text-primary transition-colors">
                ↗
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          className="flex-1 w-full max-w-md bg-secondary/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl"
        >
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-bold text-foreground/50 uppercase tracking-widest mb-2">Name</label>
              <input type="text" className="w-full bg-primary/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs font-bold text-foreground/50 uppercase tracking-widest mb-2">Email</label>
              <input type="email" className="w-full bg-primary/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors" placeholder="john@company.com" />
            </div>
            <div>
              <label className="block text-xs font-bold text-foreground/50 uppercase tracking-widest mb-2">Project Details</label>
              <textarea rows={4} className="w-full bg-primary/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors" placeholder="Tell me about your goals..."></textarea>
            </div>
            <button className="w-full py-4 bg-accent text-primary font-bold rounded-xl hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]">
              Send Message
            </button>
            
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink-0 mx-4 text-foreground/30 text-xs uppercase font-bold">Or</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            <button className="w-full py-4 bg-white/5 border border-white/10 text-foreground font-bold rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
               Schedule a Meeting 📅
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
