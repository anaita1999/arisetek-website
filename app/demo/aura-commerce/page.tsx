"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, ArrowUpRight, TrendingUp, ArrowLeft } from "lucide-react";
import Link from "next/link";

const products = [
  { id: 1, name: "VELOURS D'OR COAT", price: "₹11,60,000", image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&q=80&w=400" },
  { id: 2, name: "AURORA SAPPHIRE WATCH", price: "₹24,00,000", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=400" },
  { id: 3, name: "LEATHER KAIROS TOTE", price: "₹6,50,000", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=400" },
  { id: 4, name: "SILK SERENITY DRESS", price: "₹5,10,000", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=400" },
  { id: 5, name: "DIAMOND ECLIPSE CUFF", price: "₹15,80,000", image: "https://images.unsplash.com/photo-1599643478514-4a11011c77f0?auto=format&fit=crop&q=80&w=400" },
  { id: 6, name: "VELVET LUNA LOAFERS", price: "₹2,80,000", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=400" },
];

export default function AuraCommerceDemo() {
  return (
    <div className="min-h-screen bg-[#111113] font-serif text-white overflow-x-hidden selection:bg-[#d4af37]/30">
      
      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#d4af37]/10 to-transparent pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-6 max-w-[1400px] mx-auto z-50 relative border-b border-white/5">
        <Link href="/#portfolio" className="flex items-center gap-2 group">
          <ArrowLeft className="w-4 h-4 text-white/50 group-hover:text-[#d4af37] transition-colors" />
          <span className="text-xl md:text-2xl font-normal tracking-widest text-[#d4af37]">
            AURA <span className="text-white">Commerce</span>
          </span>
        </Link>
        <div className="hidden lg:flex items-center gap-8 text-xs font-sans uppercase tracking-[0.15em] text-white/70">
          <span className="text-[#d4af37] cursor-default">Collections</span>
          <span className="hover:text-white transition-colors cursor-crosshair">New Arrivals</span>
          <span className="hover:text-white transition-colors cursor-crosshair">Accessories</span>
          <span className="hover:text-white transition-colors cursor-crosshair">Men</span>
          <span className="hover:text-white transition-colors cursor-crosshair">Women</span>
          <span className="hover:text-white transition-colors cursor-crosshair">Journal</span>
        </div>
        <div className="flex items-center gap-6 text-xs font-sans uppercase tracking-[0.15em] text-white/70">
          <span className="hover:text-white transition-colors cursor-crosshair hidden md:block">Account</span>
          <span className="hover:text-white transition-colors cursor-crosshair">Cart [4]</span>
          <Search className="w-4 h-4 text-white/70 hover:text-white cursor-pointer" />
        </div>
      </nav>

      <main className="max-w-[1200px] mx-auto px-6 pt-16 pb-32 relative z-10">
        
        {/* Intelligent Selections Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl tracking-widest text-[#d4af37] uppercase font-light">Intelligent Selections</h1>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                key={product.id} 
                className="group relative bg-gradient-to-b from-white/10 to-transparent p-[1px] rounded-2xl overflow-hidden"
              >
                <div className="bg-[#1a1a1c] h-full rounded-2xl p-6 flex flex-col items-center justify-between transition-colors group-hover:bg-[#222225]">
                  <div className="w-full h-48 md:h-56 relative mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1c] via-transparent to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-500" />
                  </div>
                  <div className="w-full flex justify-between items-end">
                    <div>
                      <h3 className="text-sm font-sans tracking-[0.2em] uppercase text-white/90 mb-2">{product.name}</h3>
                      <p className="text-xl font-bold font-sans text-white">{product.price}</p>
                    </div>
                    <button className="text-[#d4af37] text-sm font-sans tracking-widest hover:text-white transition-colors flex items-center gap-2">
                      Shop Now
                    </button>
                  </div>
                </div>
                {/* Glowing border effect on hover */}
                <div className="absolute inset-0 border border-[#d4af37] rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none shadow-[0_0_20px_rgba(212,175,55,0.2)]" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Dynamic Pricing Dashboard Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl tracking-widest text-[#d4af37] uppercase font-light">Dynamic Pricing Dashboard</h2>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent mx-auto mt-6" />
          </div>

          <div className="bg-gradient-to-br from-white/10 to-transparent p-[1px] rounded-3xl">
            <div className="bg-[#151517] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12">
              
              {/* Chart Area */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-sans tracking-wide">Velours D'Or Coat</h3>
                  <select className="bg-transparent border border-white/20 text-white text-sm font-sans rounded px-3 py-1 outline-none">
                    <option>Velours D'Or Coat</option>
                  </select>
                </div>
                
                {/* Mock Chart */}
                <div className="relative h-[250px] w-full border-b border-l border-white/10">
                  <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                    <path 
                      d="M 0 200 C 50 200, 100 150, 150 150 C 200 150, 250 180, 300 120 C 350 60, 400 80, 450 60 C 500 40, 550 50, 600 20" 
                      fill="none" 
                      stroke="#d4af37" 
                      strokeWidth="3"
                      className="drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                      vectorEffect="non-scaling-stroke"
                    />
                    <circle cx="450" cy="60" r="4" fill="#d4af37" className="animate-pulse" />
                  </svg>
                  
                  {/* Grid Lines */}
                  <div className="absolute left-0 right-0 top-0 h-[1px] bg-white/5" />
                  <div className="absolute left-0 right-0 top-1/4 h-[1px] bg-white/5" />
                  <div className="absolute left-0 right-0 top-2/4 h-[1px] bg-white/5" />
                  <div className="absolute left-0 right-0 top-3/4 h-[1px] bg-white/5" />
                  
                  {/* Tooltip Mock */}
                  <div className="absolute top-[30px] right-[20%] bg-[#222] border border-[#d4af37]/30 text-white text-xs font-sans px-3 py-1 rounded shadow-lg">
                    ₹11,60,000
                  </div>
                </div>
                <div className="flex justify-between text-[10px] font-sans text-white/40 mt-4 uppercase tracking-widest">
                  <span>Sep 1</span>
                  <span>Sep 7</span>
                  <span>Sep 14</span>
                  <span>Sep 21</span>
                  <span>Sep 28</span>
                </div>
              </div>

              {/* Stats Area */}
              <div className="w-full md:w-1/3 flex flex-col justify-center gap-8">
                <div>
                  <p className="text-sm font-sans text-white/70 mb-2">Current Price</p>
                  <p className="text-5xl font-sans font-bold text-[#d4af37] drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">₹11,60,000</p>
                </div>
                
                <div className="h-[1px] w-full bg-white/10" />
                
                <div>
                  <p className="text-sm font-sans text-white/70 mb-2">Price Trend</p>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="text-2xl font-sans font-bold text-white">+8.2%</span>
                  </div>
                  <p className="text-xs font-sans text-white/40 mt-1">since yesterday</p>
                </div>

                <div className="h-[1px] w-full bg-white/10" />

                <div>
                  <p className="text-sm font-sans text-white/90 font-bold mb-2">Live Market Indicators</p>
                  <p className="text-sm font-sans text-white/50">High-end luxury market experiencing low supply.</p>
                </div>
              </div>

            </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}
