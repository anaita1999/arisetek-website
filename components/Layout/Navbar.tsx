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
      <Link href="/" className="flex items-center gap-3">
        <img src="/logo.png" alt="Arisetek Logo" className="h-10 w-auto" />
        <span className="text-xl font-bold text-foreground">Arisetek IT Solutions</span>
      </Link>
      
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
        <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
        <Link href="#portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
        <Link href="#process" className="hover:text-primary transition-colors">Process</Link>
        <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
      </nav>

      <a
        href="#contact"
        className="px-5 py-2.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-semibold hover:bg-primary hover:text-background transition-all duration-300"
      >
        Start a Project
      </a>
    </motion.header>
  );
}
