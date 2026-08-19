"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between ${
          scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 group z-50 relative">
          <img src="/logo.png" alt="Arisetek Logo" className="h-6 md:h-8 w-auto group-hover:scale-110 transition-transform duration-500" />
          <span className="text-lg md:text-2xl font-black tracking-tighter text-white">
            Arisetek <span className="font-light text-white/50 tracking-widest text-[10px] md:text-sm uppercase ml-1 hidden sm:inline-block">IT Solutions</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 text-xs font-mono uppercase tracking-[0.2em] text-white/60">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-[#00E5FF] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-[#00E5FF] hover:after:w-full after:transition-all after:duration-300">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-flex px-6 py-2.5 bg-transparent border border-white/20 text-white rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          >
            Start a Project
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden relative z-50 p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-4 flex flex-col justify-between">
              <span className={`block h-[1px] w-full bg-white transition-transform duration-300 ${mobileMenuOpen ? 'translate-y-[7.5px] rotate-45' : ''}`} />
              <span className={`block h-[1px] w-full bg-white transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-[1px] w-full bg-white transition-transform duration-300 ${mobileMenuOpen ? '-translate-y-[7.5px] -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8 text-lg font-mono uppercase tracking-[0.2em] text-white">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#00E5FF] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8"
              >
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-8 py-4 border border-[#00E5FF] text-[#00E5FF] rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#00E5FF] hover:text-black transition-all duration-300"
                >
                  Start a Project
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
