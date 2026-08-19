"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <Link href="/" className="flex items-center gap-3 group">
        <img src="/logo.png" alt="Arisetek Logo" className="h-8 w-auto group-hover:scale-110 transition-transform duration-500" />
        <span className="text-xl md:text-2xl font-black tracking-tighter text-white">
          Arisetek <span className="font-light text-white/50 tracking-widest text-sm uppercase ml-1">IT Solutions</span>
        </span>
      </Link>
      
      <nav className="hidden md:flex items-center gap-10 text-xs font-mono uppercase tracking-[0.2em] text-white/60">
        <Link href="#services" className="hover:text-[#00E5FF] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-[#00E5FF] hover:after:w-full after:transition-all after:duration-300">Services</Link>
        <Link href="#portfolio" className="hover:text-[#00E5FF] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-[#00E5FF] hover:after:w-full after:transition-all after:duration-300">Portfolio</Link>
        <Link href="#process" className="hover:text-[#00E5FF] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-[#00E5FF] hover:after:w-full after:transition-all after:duration-300">Process</Link>
        <Link href="#contact" className="hover:text-[#00E5FF] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-[#00E5FF] hover:after:w-full after:transition-all after:duration-300">Contact</Link>
      </nav>

      <a
        href="#contact"
        className="px-6 py-2.5 bg-transparent border border-white/20 text-white rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white/10 hover:border-white/40 transition-all duration-300"
      >
        Start a Project
      </a>
    </motion.header>
  );
}
