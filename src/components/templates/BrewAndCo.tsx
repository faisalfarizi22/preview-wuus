"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Coffee, 
  MapPin, 
  Calendar, 
  Heart, 
  ChevronRight,
  Menu as MenuIcon,
  ShoppingBag
} from 'lucide-react';

// --- CONSTANTS ---

const COLORS = {
  espresso: "#1A0F0D",
  wood: "#2C1B18",
  accent: "#D35400", // Burnt Orange
  cream: "#FCFCFC",
  beige: "#FCFCFC",
  slate: "#4A3B37"
};

const BENTO_CARDS = [
  {
    title: "Our Story",
    desc: "Crafted with passion since 1994.",
    img: "/Brew&Co-Asset2.png",
    icon: <Heart size={20} />,
    gridSize: "col-span-1 md:col-span-1"
  },
  {
    title: "Local Sourcing",
    desc: "Directly from the world's best farms.",
    img: "/Brew&Co-Asset3.png",
    icon: <MapPin size={20} />,
    gridSize: "col-span-1 md:col-span-1"
  },
  {
    title: "Roast Calendar",
    desc: "Find your perfect batch this week.",
    img: "/Brew&Co-Asset4.png",
    icon: <Calendar size={20} />,
    gridSize: "col-span-1 md:col-span-1"
  }
];

// --- COMPONENTS ---

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full z-50 py-8 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-12">
        <div className="text-2xl font-serif text-[#FCFCFC] italic tracking-tighter cursor-pointer">
          Brew & Co.
        </div>
        <div className="hidden lg:flex items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-[#FCFCFC]/80">
          <a href="#" className="hover:text-white transition-colors">Our Roasts</a>
          <a href="#" className="hover:text-white transition-colors">Locations</a>
          <a href="#" className="hover:text-white transition-colors">Journal</a>
          <a href="#" className="hover:text-white transition-colors">Wholesale</a>
        </div>
      </div>
      <div className="flex items-center gap-6 text-[#FCFCFC]/80">
        <button className="hover:text-white"><ShoppingBag size={20} /></button>
        <button className="lg:hidden hover:text-white"><MenuIcon size={24} /></button>
        <button className="hidden lg:block bg-[#D35400] px-6 py-2.5 rounded-full text-[10px] uppercase font-black tracking-widest hover:scale-105 transition-transform shadow-lg shadow-accent/20">
          Shop Coffee
        </button>
      </div>
    </nav>
  );
};

const BentoCard = ({ card }: { card: typeof BENTO_CARDS[0] }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className={`relative group bg-wood rounded-3xl overflow-hidden aspect-square md:aspect-[4/5] shadow-2xl border border-white/5 cursor-pointer`}
    >
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
      <img 
        src={card.img} 
        alt={card.title} 
        className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-80"
      />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 space-y-3">
         <div className="w-10 h-10 bg-[#D35400]">
            {card.icon}
         </div>
         <h3 className="text-2xl font-serif text-[#FCFCFC] tracking-tight group-hover:translate-x-1 transition-transform">{card.title}</h3>
         <p className="text-xs text-[#FCFCFC]/90 font-light leading-relaxed group-hover:translate-x-1 transition-transform delay-75">{card.desc}</p>
         <div className="flex items-center gap-2 text-[10px] text-[#D35400] font-black uppercase tracking-widest pt-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
            Explore <ChevronRight size={12} />
         </div>
      </div>
    </motion.div>
  );
};

export default function BrewAndCo() {
  return (
    <div className="bg-[#1A0F0D] text-[#FCFCFC] selection:text-[#D35400]/30 selection:text-[#D35400] font-sans overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Inter:wght@300;400;700;900&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center px-6 md:px-12 pt-20 overflow-hidden">
          {/* Background Image with Texture Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/Brew&Co-Asset1.png" 
              alt="Artisan Coffee" 
              className="w-full h-full object-cover opacity-40 scale-105"
            />
            {/* Dark vignette gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/80 to-transparent" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-30 pointer-events-none" />
          </div>

          <div className="max-w-[1400px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
            <div className="space-y-8">
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 className="flex items-center gap-3 text-[#D35400]"
               >
                 <div className="w-12 h-[1px] text-[#D35400]" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em]">Hand-Roasted in Small Batches</span>
               </motion.div>

               <motion.h1 
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8 }}
                 className="text-6xl md:text-8xl xl:text-9xl font-serif text-[#FCFCFC] font-black italic first-letter:not-italic leading-[0.9] tracking-tighter"
               >
                 Brew & Co.<br />
                 <span className="text-[#D35400] not-italic font-sans text-4xl md:text-6xl tracking-widest uppercase block mt-4 font-black">Roasters</span>
               </motion.h1>

               <motion.p 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.4 }}
                 className="text-[#FCFCFC]/90 text-lg md:text-xl max-w-xl leading-relaxed italic"
               >
                 Crafting the perfect ritual, one bean at a time. Experience the true essence of artisan coffee roasting.
               </motion.p>

               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.6 }}
                 className="pt-6"
               >
                 <button className="bg-[#D35400] px-12 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform flex items-center gap-4 shadow-2xl shadow-accent/20">
                   Explore Our Menu <ArrowRight size={20} />
                 </button>
               </motion.div>
            </div>
            
            {/* Decorative Element */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               className="hidden lg:flex justify-end"
            >
               <div className="w-64 h-[500px] border border-white/10 rounded-full flex flex-col items-center justify-between p-12 bg-white/5 backdrop-blur-sm self-end mb-20 rotate-6">
                  <div className="w-px h-24 bg-gradient-to-t from-[#D35400] to-transparent" />
                  <div className="rotate-90 text-[10px] uppercase tracking-[0.5em] text-[#FCFCFC]/70 whitespace-nowrap font-bold">ESTD. MCMXCIV</div>
                  <div className="w-px h-24 bg-gradient-to-b from-[#D35400] to-transparent" />
               </div>
            </motion.div>
          </div>
        </section>

        {/* BENTO GRID SECTION */}
        <section className="py-32 px-6 md:px-12 bg-espresso relative overflow-hidden">
          <div className="max-w-7xl mx-auto space-y-16 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-[#FCFCFC]">
               <div className="space-y-4">
                 <h2 className="text-4xl md:text-6xl font-serif font-black italic tracking-tighter">Small Batches, <br />Big Stories.</h2>
                 <p className="text-[#FCFCFC]/70 text-sm max-w-sm">From the seed to the cup, every step is a labor of love and precision.</p>
               </div>
               <button className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D35400] border-b border-[#D35400]/20 pb-2 hover:text-white hover:border-white transition-all">
                  Join the Membership
               </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {BENTO_CARDS.map((card, i) => (
                  <motion.div 
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <BentoCard card={card} />
                  </motion.div>
               ))}
            </div>
          </div>
          
          {/* Background accents */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] text-[#D35400]/5 rounded-full blur-[150px] -mr-96 -mt-96" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] text-[#D35400]/5 rounded-full blur-[150px] -ml-40 -mb-40" />
        </section>
        
        {/* STATS SECTION */}
        <section className="py-24 px-6 md:px-12 bg-espresso border-t border-white/5">
           <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {[
                { label: "Direct Farms", val: "24+" },
                { label: "Annual Roast", val: "12T" },
                { label: "Global Shops", val: "86" },
                { label: "Artisans", val: "150+" }
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                   <div className="text-4xl md:text-5xl font-serif font-black text-[#D35400] tracking-tighter">{stat.val}</div>
                   <div className="text-[10px] uppercase tracking-[0.4em] text-[#FCFCFC]/60 font-bold">{stat.label}</div>
                </div>
              ))}
           </div>
        </section>
      </main>

      <footer className="bg-espresso pt-32 pb-12 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1 space-y-8">
            <h4 className="text-2xl font-serif text-[#FCFCFC] italic tracking-tighter">Brew & Co.</h4>
            <p className="text-[#FCFCFC]/70 text-sm leading-relaxed font-light">
              Elevating the coffee experience through artisan roasting and sustainable sourcing. Join us in our pursuit of the perfect cup.
            </p>
            <div className="flex gap-8">
               <a href="#" className="text-[10px] uppercase tracking-[0.4em] text-[#FCFCFC]/70 hover:text-[#D35400] transition-all font-bold">Instagram</a>
               <a href="#" className="text-[10px] uppercase tracking-[0.4em] text-[#FCFCFC]/70 hover:text-[#D35400] transition-all font-bold">Facebook</a>
            </div>
          </div>
          
          <div className="space-y-8">
            <h5 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#FCFCFC]">Discover</h5>
            <ul className="space-y-4 text-xs text-[#FCFCFC]/70">
               <li className="hover:text-[#D35400] transition-colors"><a href="#">Our Roastery</a></li>
               <li className="hover:text-[#D35400] transition-colors"><a href="#">Brew Guide</a></li>
               <li className="hover:text-[#D35400] transition-colors"><a href="#">Subscription</a></li>
               <li className="hover:text-[#D35400] transition-colors"><a href="#">Gift Cards</a></li>
            </ul>
          </div>
          
          <div className="space-y-8">
            <h5 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#FCFCFC]">Support</h5>
            <ul className="space-y-4 text-xs text-[#FCFCFC]/70">
               <li className="hover:text-[#D35400] transition-colors"><a href="#">Contact Us</a></li>
               <li className="hover:text-[#D35400] transition-colors"><a href="#">Shipping Policy</a></li>
               <li className="hover:text-[#D35400] transition-colors"><a href="#">FAQ</a></li>
               <li className="hover:text-[#D35400] transition-colors"><a href="#">Privacy</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h5 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#FCFCFC]">Community</h5>
            <p className="text-xs text-[#FCFCFC]/70 italic">Subscribe for early access to new batches and roasting notes.</p>
            <div className="relative">
               <input 
                 type="email" 
                 placeholder="Enter Email" 
                 className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-full text-xs text-[#FCFCFC] focus:outline-none focus:border-accent transition-all font-light"
               />
               <button className="absolute right-2 top-2 bottom-2 bg-[#D35400] hover:bg-white hover:text-[#D35400] text-white px-6 rounded-full text-[10px] font-black uppercase tracking-widest transition-all">
                  Sign Up
               </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-[#FCFCFC]/20 uppercase tracking-[0.4em] font-bold">
          <span>© 2024 Brew & Co Roastery.</span>
          <div className="flex gap-8 italic lowercase">
            <a href="#" className="hover:text-[#D35400]">Terms of service</a>
            <a href="#" className="hover:text-[#D35400]">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
