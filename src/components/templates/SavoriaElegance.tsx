"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Menu as MenuIcon, 
  X, 
  Calendar, 
  Users, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Wine, 
  UtensilsCrossed, 
  Camera,
  ChefHat,
  GlassWater,
  Star,
  ChevronRight,
  ConciergeBell,
  Lock,
  Palette,
  ExternalLink
} from 'lucide-react';

// --- HELPERS & CONSTANTS ---

const COLORS = {
  surface: "#131313",
  onSurface: "#e5e2e1",
  onSurfaceVariant: "#d1c5b4",
  primary: "#e9c176",
  primaryContainer: "#c5a059",
  surfaceContainerLow: "#1c1b1b",
  surfaceContainerHigh: "#2a2a2a",
  surfaceContainerLowest: "#0e0e0e",
  surfaceContainerHighest: "#353534",
  outline: "#9a8f80",
  onPrimary: "#412d00",
  onTertiary: "#363022",
};

type PageType = 'Home' | 'Menu' | 'Private Dining' | 'Reservations' | 'About';

// --- COMPONENTS ---

const Nav = ({ activePage, setPage }: { activePage: PageType, setPage: (p: PageType) => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: PageType[] = ['Home', 'Menu', 'Private Dining', 'Reservations', 'About'];

  return (
    <nav className={`fixed top-0 w-full z-[60] transition-all duration-500 ${scrolled ? 'bg-[#131313]/90 py-4 shadow-2xl backdrop-blur-md' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="cursor-pointer flex flex-col items-center group"
          onClick={() => setPage('Home')}
        >
          <div className="text-xl md:text-2xl font-bold tracking-[0.2em] text-[#e9c176] font-sans leading-tight transition-transform duration-500 group-hover:scale-105">
            SAVORIA
          </div>
          <div className="text-[10px] tracking-[0.4em] text-[#e9c176] font-sans uppercase -mt-1 opacity-90">
            ELEGANCE
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setPage(item)}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 relative group
                ${activePage === item ? 'text-[#e9c176]' : 'text-[#9a8f80] hover:text-[#e9c176]'}`}
            >
              {item}
              <span className={`absolute -bottom-2 left-0 w-0 h-[1px] bg-[#e9c176] transition-all duration-500 group-hover:w-full ${activePage === item ? 'w-full' : ''}`} />
            </button>
          ))}
        </div>

        {/* CTA */}
        <button 
          onClick={() => setPage('Reservations')}
          className="hidden sm:block border border-[#e9c176]/30 text-[#e9c176] px-8 py-3 rounded-lg text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#e9c176] hover:text-[#131313] transition-all duration-500 active:scale-95 shadow-lg shadow-black/20"
        >
          Book a Table
        </button>

        {/* Mobile Menu Icon */}
        <button className="lg:hidden text-[#e9c176]">
          <MenuIcon size={24} />
        </button>
      </div>
    </nav>
  );
};

const Footer = ({ setPage }: { setPage: (p: PageType) => void }) => {
  return (
    <footer className="bg-[#0e0e0e] pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 mb-20">
        <div className="max-w-xs space-y-6">
          <div className="text-xl font-bold tracking-[0.2em] text-[#e9c176] uppercase">Savoria Elegance</div>
          <p className="text-[#9a8f80] text-sm leading-relaxed opacity-80">
            Defined by rarity. Sculpted by tradition. The ultimate expression of fine dining and atmospheric depth.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#e9c176]">Explore</h4>
            <ul className="space-y-3">
              {['Home', 'Menu', 'Private Dining', 'About'].map((item) => (
                <li key={item}>
                  <button onClick={() => setPage(item as PageType)} className="text-[#9a8f80] text-sm hover:text-[#e9c176] transition-colors">{item}</button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#e9c176]">Connect</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#9a8f80] text-sm hover:text-[#e9c176] transition-colors">Instagram</a></li>
              <li><a href="#" className="text-[#9a8f80] text-sm hover:text-[#e9c176] transition-colors">Facebook</a></li>
              <li><a href="#" className="text-[#9a8f80] text-sm hover:text-[#e9c176] transition-colors">LinkedIn</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#e9c176]">Location</h4>
            <p className="text-[#9a8f80] text-sm leading-relaxed">
              Jl. Senopati No. 12, Kebayoran Baru<br/>Jakarta Selatan, 12190
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-10 border-t border-[#9a8f80]/10 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] text-[#9a8f80] uppercase tracking-widest">
        <span>© 2024 Savoria Elegance. Masterpiece of Taste.</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-[#e9c176] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#e9c176] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

// --- PAGES ---

const HomePage = ({ setPage }: { setPage: (p: PageType) => void }) => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-start text-left px-6 md:px-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#131313] via-[#131313]/40 to-transparent z-10" />
          <img 
            src="/Savoria-hero.png" 
            alt="Interior" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-6xl w-full pt-32">
          <div className="max-w-3xl space-y-8">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[#e9c176] text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] block"
            >
              Epicurean excellence since 2012
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] text-[#e5e2e1]"
            >
              Savoria Elegance:<br/>
              <span className="text-[#e9c176] italic font-serif font-light">A Modern Fine-Dining Experience.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-[#d1c5b4] text-lg md:text-xl max-w-2xl font-light leading-relaxed opacity-80"
            >
              Where Culinary Artistry Meets Unforgettable Moments.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="pt-4"
            >
              <button 
                onClick={() => setPage('Reservations')}
                className="bg-[#c5a059] text-[#131313] px-12 py-5 rounded-lg text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#e9c176] hover:scale-105 transition-all duration-300 shadow-2xl shadow-black/50"
              >
                Reservations: Make Your Booking
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Feature Cards Section */}
      <section className="bg-[#131313] py-12 px-6 md:px-24">
        <div className="max-w-6xl mx-auto -mt-16 relative z-30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                eyebrow: "Chef's Tasting Menu",
                title: "A Journey of Flavors",
                desc: "Seasonal creations crafted with precision and passion.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ2S3w0DExLSUUXz9f5c0TuPQl7Ry1v0cb3OnGplQmUf5eykgodQdE3x3t5Z7VqBYPQKIvn9pcvFX5hIm84LffeNeLlvZpBrvsDLWxmaOXmMBtrB4PbLxFb4ktcFkL8GbrOZwWFnxTSRDoNySSi5-6k7n5KgDGvM_W0hQOsZSQSh069WA1NxS0cGkNzveXkX25Kvh0dmqs1qSUj_0RovItJ1KF0pHsWDqjBeCA5uAm5XU5RUV_gnFew-D69Go79XjwJEytOC2DRduN"
              },
              {
                eyebrow: "Private Dining",
                title: "Exclusively Yours",
                desc: "Intimate spaces for extraordinary occasions.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlrmEuSTo8hbNb3OMJtAYahjOYzOq5rvzENER9kvEJfdeIjrxF5qD72IWaxYuAnb_Rt5fmhctsGy6uW0Yc5ltzHGzoJstJXLFiUwDgxCHLpvL_kvHKQpx1xm2C6qIoZJwxSWRsHcjQtzQBWomv4YyV8ddtMKDYs9U7vfevUpUm2iCqZuIX1krJwsT9RDpQhGphDQsWxR-cp4aBIangUf-50ENH_rAv5l8yUHEmabz1_-cQ2itoeARg1boS-AsMP8CsaEwtu2OaNjl-"
              },
              {
                eyebrow: "Meet The Chef",
                title: "Giovanni Rossi",
                desc: "A vision of innovation. A legacy of excellence.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEBiWVdFyOifR5uwsZ6_9hB4bxEI35khZqCVSc57dssFISo40b2k0mjzPZT0p9sNqgRKQX2Et-K-GyDdXU8ODCy3oggh35vfP8dpNv3MMX_exsMWVdCJuBKtAs61I1DUP9nQMrjHYrnyM2aA0bPSxC1nKuvcTIYiecTHhBYkKzUMVRslh8oL109RM5n3W6LSHQtasOTnJGWyYq5vKiYlbjOfUsmI3hWaVgVwG4cvSdysQ9yhAPN1zuNdo2d6CteD7CU6JOLz-5mMQQ"
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * idx }}
                className="group relative h-48 rounded-2xl overflow-hidden bg-[#1c1b1b] border border-[#9a8f80]/10 hover:border-[#e9c176]/30 transition-all duration-500 shadow-2xl"
              >
                <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 group-hover:opacity-50 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent" />
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <span className="text-[#e9c176] text-[8px] uppercase tracking-[0.2em] font-bold mb-1 opacity-70">{card.eyebrow}</span>
                  <h4 className="text-lg font-bold text-[#e5e2e1] mb-1">{card.title}</h4>
                  <p className="text-[10px] text-[#d1c5b4] opacity-60 line-clamp-2">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Bento Showcase */}
      <section className="bg-[#131313] py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl space-y-4">
              <span className="text-[#d1c5b2] text-[10px] uppercase tracking-[0.4em] font-bold block">The Sensory Gallery</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#e5e2e1]">The Art of the Experience</h2>
            </div>
            <p className="text-[#d1c5b4] max-w-xs text-xs uppercase tracking-[0.2em] leading-relaxed opacity-60">
              Where every detail is orchestrated to create moments of profound clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[350px]">
            {/* Lg Feature */}
            <div className="md:col-span-8 md:row-span-2 group relative overflow-hidden rounded-3xl bg-[#2a2a2a] cursor-pointer">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700 z-10" />
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuABnRWJ-OGU_pYeDADadVOBFJ8XJXvnvxICrAYMyt44iv5cMYEdlWeBHIIqmZpxFIy_f-zU0sb560ns7pRuLCEBarupkoMiwnTfPU97wLdhWTfPZvPYPw8vL6v4gknbeiCpoiC04mw6w_blZ4hfGDDzX84FwgeqMqcIduuBfJm0MTnzYkn3rGnwcMS0pWMVySvILEf_glQiNTk_Dj8PthHczqOScZ7g0JSrih4PwVL2WhWtmVldRuhQdX-KYhxhX5qXTrfgIx3Z9_E_" 
                alt="Plating" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 origin-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent z-20" />
              <div className="absolute bottom-0 left-0 p-12 z-30 w-full">
                <h3 className="text-4xl font-bold text-[#e5e2e1] mb-4">Chef's Tasting Journey</h3>
                <p className="text-[#d1c5b4] max-w-md mb-8 leading-relaxed opacity-90">An eleven-course odyssey exploring the heritage of local terroir through modern global perspectives.</p>
                <button onClick={() => setPage('Menu')} className="flex items-center gap-4 text-[#e9c176] text-[10px] font-bold uppercase tracking-widest border-b border-[#e9c176]/30 pb-2 hover:border-[#e9c176] transition-all">
                  View the Menu <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Med Content 1 */}
            <div 
              role="button"
              onClick={() => setPage('Private Dining')}
              className="md:col-span-4 md:row-span-1 group relative overflow-hidden rounded-3xl bg-[#1c1b1b] cursor-pointer p-10 flex flex-col justify-end"
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500 z-10" />
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlrmEuSTo8hbNb3OMJtAYahjOYzOq5rvzENER9kvEJfdeIjrxF5qD72IWaxYuAnb_Rt5fmhctsGy6uW0Yc5ltzHGzoJstJXLFiUwDgxCHLpvL_kvHKQpx1xm2C6qIoZJwxSWRsHcjQtzQBWomv4YyV8ddtMKDYs9U7vfevUpUm2iCqZuIX1krJwsT9RDpQhGphDQsWxR-cp4aBIangUf-50ENH_rAv5l8yUHEmabz1_-cQ2itoeARg1boS-AsMP8CsaEwtu2OaNjl-" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform" 
              />
              <div className="relative z-20 space-y-2">
                <UtensilsCrossed className="text-[#e9c176] mb-4" size={32} />
                <h3 className="text-2xl font-bold text-[#e5e2e1]">Private Suites</h3>
                <p className="text-[#d1c5b4] text-xs leading-relaxed">Discrete spaces for exclusive gatherings.</p>
              </div>
            </div>

            {/* Med Content 2 */}
            <div className="md:col-span-4 md:row-span-1 group relative overflow-hidden rounded-3xl bg-[#353534] p-10 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <ChefHat className="text-[#e9c176]" size={32} />
                <span className="text-[8px] uppercase tracking-[0.3em] text-[#9a8f80]">Featured</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#e5e2e1]">The Visionary</h3>
                <p className="text-[#d1c5b4] text-xs">Executive Chef Julian Vane's pursuit of perfection.</p>
              </div>
            </div>

            {/* Mini Stat Card */}
            <div className="md:col-span-12 md:row-span-1 bg-[#1c1b1b] rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-12 group">
              <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-bold text-[#e5e2e1]">Reserve Your Evening</h3>
                <p className="text-[#d1c5b4] text-sm opacity-60 leading-relaxed max-w-xl">Located in the heart of the historic district, Savoria offers an escape from the daily ordinary. Secure bookings are available up to three months in advance.</p>
                <div className="flex gap-8 pt-4">
                  <div className="flex items-center gap-2 text-[10px] text-[#e9c176] uppercase tracking-[0.2em] font-bold">
                    <MapPin size={14} /> London SW1J
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-[#e9c176] uppercase tracking-[0.2em] font-bold">
                    <Clock size={14} /> 18:00 — 23:00
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setPage('Reservations')}
                className="w-full md:w-auto bg-[#c5a059] text-[#131313] px-10 py-5 rounded-xl text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#e9c176] transition-all"
              >
                Inquire Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const MenuPage = () => {
  const categories = ["Grand Tasting", "Appetizers", "Main Course", "Desserts", "Signature Cellar"];
  const [activeCat, setActiveCat] = useState("Grand Tasting");

  const menuItems = {
    "Appetizers": [
      { name: "Wagyu Carpaccio", price: "42", desc: "A5 Kobe, truffle emulsion, caper berries, aged parmesan shards." },
      { name: "Roasted Marrow Bone", price: "38", desc: "Herb crust, parsley shallot salad, grilled sourdough, sea salt." },
      { name: "Golden Beet Tartare", price: "34", desc: "Avocado mousse, citrus segments, toasted pine nuts, vinalgrette." },
      { name: "Wild Mushroom Velouté", price: "36", desc: "Porcini dust, chive oil, delicate porcini foam, crispy leeks." },
    ],
    "Main Course": [
      { name: "Dover Sole Meunière", price: "85", desc: "Tableside deboned, brown butter, lemon, capers, seasonal vegetables." },
      { name: "Herb-Crusted Lamb Rack", price: "78", desc: "Pea purée, heritage carrots, rich red wine reduction." },
      { name: "Truffle Risotto", price: "62", desc: "Acquerello rice, seasonal black truffles, 36-month aged Parmigiano." },
      { name: "Dry-Aged Ribeye", price: "95", desc: "45-day aged, bone marrow butter, garlic confit, smoked fleur de sel." },
    ],
    "Desserts": [
      { name: "Valrhona Soufflé", price: "26", desc: "Dark chocolate, Madagascar vanilla bean crème anglaise." },
      { name: "Lemon Tart", price: "22", desc: "Meyer lemon curd, basil crystals, toasted meringue shards." },
      { name: "Lavender Crème Brûlée", price: "24", desc: "Honey lavender custard, burnt sugar crust, fresh berries." },
    ]
  };

  return (
    <div className="bg-[#131313] min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <header className="text-center space-y-6">
          <span className="text-[#e9c176] text-[10px] uppercase tracking-[0.5em] block">Epicurean Journey</span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-[#e5e2e1]">Le Menu d'Artiste</h1>
          <p className="text-[#d1c5b4] max-w-2xl mx-auto font-light leading-relaxed opacity-60">A curation of seasonal excellence, where traditional techniques meet contemporary imagination.</p>
        </header>

        {/* Tasting Highlight */}
        <section className="bg-[#1c1b1b] rounded-[3rem] p-10 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center overflow-hidden relative group">
          <div className="space-y-10 relative z-10">
            <div className="space-y-2">
              <span className="text-[#primary] text-[10px] uppercase tracking-widest opacity-60">The Signature</span>
              <h2 className="text-4xl md:text-6xl font-bold text-[#e5e2e1]">Grand Tasting Menu</h2>
            </div>
            <p className="text-[#d1c5b4] leading-relaxed text-lg opacity-80">An eight-course odyssey through the terroir, guided by Executive Chef Julian Vane. Each dish is a testament to the pursuit of culinary perfection.</p>
            <div className="flex items-center gap-10 pt-4 border-t border-[#9a8f80]/10">
              <div className="space-y-1">
                <p className="text-[#e5e2e1] text-2xl font-bold">$285</p>
                <p className="text-[10px] uppercase tracking-widest text-[#9a8f80]">Per Guest</p>
              </div>
              <div className="h-10 w-[1px] bg-[#9a8f80]/10" />
              <div className="space-y-1">
                <p className="text-[#e5e2e1] text-lg font-bold">11 Courses</p>
                <p className="text-[10px] uppercase tracking-widest text-[#9a8f80]">Wine Pairing Available</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEBiWVdFyOifR5uwsZ6_9hB4bxEI35khZqCVSc57dssFISo40b2k0mjzPZT0p9sNqgRKQX2Et-K-GyDdXU8ODCy3oggh35vfP8dpNv3MMX_exsMWVdCJuBKtAs61I1DUP9nQMrjHYrnyM2aA0bPSxC1nKuvcTIYiecTHhBYkKzUMVRslh8oL109RM5n3W6LSHQtasOTnJGWyYq5vKiYlbjOfUsmI3hWaVgVwG4cvSdysQ9yhAPN1zuNdo2d6CteD7CU6JOLz-5mMQQ" 
              className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[2000ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-8 left-8 space-y-1">
              <p className="text-[#e9c176] text-[10px] uppercase tracking-widest font-bold">Signature Course</p>
              <h4 className="text-xl font-bold text-[#e5e2e1]">Butter-Poached Langoustine</h4>
            </div>
          </div>
        </section>

        {/* Categories Menu */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {Object.entries(menuItems).map(([category, items]) => (
            <section key={category} className="space-y-16">
              <div className="flex items-center gap-8">
                <h3 className="text-3xl md:text-5xl font-bold text-[#e5e2e1] whitespace-nowrap">{category}</h3>
                <div className="h-[1px] flex-1 bg-[#9a8f80]/10" />
              </div>
              <div className="space-y-12">
                {items.map((item) => (
                  <div key={item.name} className="group cursor-default space-y-3">
                    <div className="flex justify-between items-baseline gap-4">
                      <h4 className="text-xl font-bold text-[#e5e2e1] group-hover:text-[#e9c176] transition-colors">{item.name}</h4>
                      <div className="flex-1 h-[1px] border-b border-dotted border-[#9a8f80]/30" />
                      <span className="text-[#e9c176] font-bold text-lg">${item.price}</span>
                    </div>
                    <p className="text-[#d1c5b4] text-sm font-light opacity-60 leading-relaxed group-hover:opacity-100 transition-opacity">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

const PrivateDiningPage = () => {
  const suites = [
    { name: "The Vault", cap: "12", desc: "Intimate stone-walled ambience within our private cellar.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZu575EWKd5E4OtgBz7vEKiQ3kKfxyhpK9cRb2CiviV_xCnZKXTQlvTGtIOWY9aTgsOTV7nwYEJMcIHr_SkDz78esAJUbcPFkp5utJVwZVdk8KDqWx3MeWx5BJTFtxYmHjWTBtycX9qIi3AnZc4EjT8d8xmwFfkC7Ky24AJq_CsJbcxkaK3yUVFpPEpMOkgN29J3V49zKHsCmw8hlEjCelJX69ZElsr5sYMMxzBCdRmni3YtYcfKSi2CBNMNoK46tL5eKNXmkD2KOE" },
    { name: "The Library", cap: "8", desc: "Surrounded by first-edition classics and soft lamplight.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXNzY-IkKzhSsHitlPbR_N09s9jGa0Tdsd75ISBpVx6IlKU4iHkBm90fTboulLLeCtvc7kDsP1DvBN-bcFSia9Kl6WCsCGwWbL0n0_tmSZoTrdy8WHBpM9aufWXAMWnB7n5DBQApPw5I_oiyObHhUZjhG15VR7NmpEw_FS1z16TlxZ_7QjBMP3QRqkLjDkaQHa5yuj90QO2X4oFLMulyqi8FsFuQsbf0VeATVcaLMMIxe3d4Pn672QcPdFgZ6u_xwS5YhTvhWExCNy" },
    { name: "Moonlit Terrace", cap: "20", desc: "Open-air elegance overlooking the city skyline.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8UgjJLkHGomfFVBPjmG_6PmY9zYhE9NlkZFP5E7VRbxxnsFxQsMfqPft7A7V4CMJ0aTz5tRcMht5bYDmk1M0VzujSwOeEvmJohjEZk4YVf-G6OGfVBJJlsEX3V7gD4046lV3X9zJ73A4A740LT11eWLTLlyPbo9AOLcVWfSgmwN9wY2nxaXIxnJbGHg_6zwYrgZ3ZxUwlnzIx3srV7sShXiifqynzd8OGe40qu_33SQySjzhnC57bmEJmtrxUOhrXnSWEKv5RCWOH" },
    { name: "The Atelier", cap: "14", desc: "Minimalist aesthetic surrounded by abstract art galleries.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqPaelgZFytppHoCKNlnP1hK6CeCfmliEiC_qzBHx-riOYKUnPu1nz6rGe6nlwgFC5hjDkr7hcvFPOOaGLe5EGIKjnH8WvCv46MyOWi__fUG9vIw5TbUGXEyfQxh2Ab1UmPEnq0lNb8zUKQdiP3EQErSG_1j9rVXSPESprs_nOf9MuRFhRdss4x2x1KsMHddd0pxxZHMYH8ZVWCUKTWe_5C4Fgl3E-LvRrqbFSyHkuwLKQh33djcqm6HJahf8z7Iu5zf6jdpIHoHym" },
  ];

  return (
    <div className="bg-[#131313] min-h-screen">
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlrmEuSTo8hbNb3OMJtAYahjOYzOq5rvzENER9kvEJfdeIjrxF5qD72IWaxYuAnb_Rt5fmhctsGy6uW0Yc5ltzHGzoJstJXLFiUwDgxCHLpvL_kvHKQpx1xm2C6qIoZJwxSWRsHcjQtzQBWomv4YyV8ddtMKDYs9U7vfevUpUm2iCqZuIX1krJwsT9RDpQhGphDQsWxR-cp4aBIangUf-50ENH_rAv5l8yUHEmabz1_-cQ2itoeARg1boS-AsMP8CsaEwtu2OaNjl-" alt="Private Dining" className="w-full h-full object-cover grayscale-[0.3]" />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] to-transparent z-10" />
        </div>
        <div className="relative z-20 text-center space-y-8 px-6">
          <span className="text-[#e9c176] text-[10px] uppercase tracking-[0.5em] block">Exclusive Experiences</span>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-[#e5e2e1]">The Art of <br/><span className="text-[#e9c176] font-serif italic font-light">Discretion</span></h1>
          <p className="text-[#d1c5b4] max-w-xl mx-auto font-light leading-relaxed opacity-80 text-lg">Where conversation flows as smoothly as the vintage. Our private suites offer a sanctuary for elite celebrations.</p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-auto md:h-[600px]">
          {suites.map((suite, idx) => (
            <div key={suite.name} className={`relative group overflow-hidden rounded-3xl bg-[#1c1b1b] cursor-pointer ${idx % 2 === 0 ? 'md:row-span-1 lg:row-span-1' : 'md:row-span-1 lg:row-span-1'}`}>
              <img src={suite.img} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 w-full space-y-3 z-20">
                <span className="text-[#e9c176] text-[8px] uppercase tracking-[0.3em] font-bold">Capacity: {suite.cap} Guests</span>
                <h3 className="text-2xl font-bold text-[#e5e2e1]">{suite.name}</h3>
                <p className="text-[#d1c5b4] text-[10px] leading-relaxed opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">{suite.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 py-24 border-t border-[#9a8f80]/10">
          <div className="space-y-6">
            <ConciergeBell className="text-[#e9c176]" size={40} />
            <h4 className="text-xl font-bold text-[#e5e2e1]">Dedicated Concierge</h4>
            <p className="text-[#d1c5b4] opacity-60 text-sm leading-relaxed">Each private booking includes a dedicated server and wine expert to curate every moment.</p>
          </div>
          <div className="space-y-6">
            <Lock className="text-[#e9c176]" size={40} />
            <h4 className="text-xl font-bold text-[#e5e2e1]">Discrete Entry</h4>
            <p className="text-[#d1c5b4] opacity-60 text-sm leading-relaxed">Private entrances and soundproofing ensure complete confidentiality for high-level discussions.</p>
          </div>
          <div className="space-y-6">
            <Palette className="text-[#e9c176]" size={40} />
            <h4 className="text-xl font-bold text-[#e5e2e1]">Custom Orchestration</h4>
            <p className="text-[#d1c5b4] opacity-60 text-sm leading-relaxed">Collaborate directly with our Executive Chef to create a bespoke multi-course culinary journey.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const ReservationsPage = () => {
  return (
    <div className="bg-[#131313] min-h-screen pt-32 pb-24 px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-4xl w-full space-y-16">
        <header className="text-center space-y-6">
          <span className="text-[#e9c176] text-[10px] uppercase tracking-[0.5em] block">Reserve your presence</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#e5e2e1]">Secure Your Table</h1>
          <p className="text-[#d1c5b4] max-w-2xl mx-auto font-light leading-relaxed opacity-60 text-lg italic">Each reservation is a curated journey through taste and atmosphere.</p>
        </header>

        <div className="bg-[#1c1b1b] p-8 md:p-16 rounded-[3rem] shadow-2xl space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.3em] text-[#9a8f80] font-bold">Select Date</label>
              <div className="bg-[#0e0e0e] rounded-xl p-5 flex items-center gap-4 border border-transparent focus-within:border-[#e9c176]/30 transition-all group">
                <Calendar className="text-[#e9c176] opacity-50 group-focus-within:opacity-100 transition-opacity" size={18} />
                <input type="date" className="bg-transparent border-none focus:ring-0 text-[#e5e2e1] w-full text-sm font-light h-10" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.3em] text-[#9a8f80] font-bold">Party Size</label>
              <div className="bg-[#0e0e0e] rounded-xl p-5 flex items-center gap-4 border border-transparent focus-within:border-[#e9c176]/30 transition-all group">
                <Users className="text-[#e9c176] opacity-50 group-focus-within:opacity-100 transition-opacity" size={18} />
                <select className="bg-transparent border-none focus:ring-0 text-[#e5e2e1] w-full text-sm font-light h-10 appearance-none">
                  <option>2 Guests</option>
                  <option>4 Guests</option>
                  <option>6 Guests</option>
                  <option>Private Room (7+)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-[0.3em] text-[#9a8f80] font-bold">Available Times (Evening)</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['18:00', '18:30', '19:00', '20:15', '20:45', '21:30', '22:00'].map((time) => (
                <button key={time} className={`py-4 rounded-xl text-xs font-bold tracking-widest border transition-all
                  ${time === '19:00' ? 'bg-[#e9c176] border-[#e9c176] text-[#131313] shadow-lg shadow-[#e9c176]/10' : 'bg-[#131313] border-[#9a8f80]/10 text-[#d1c5b4] hover:border-[#e9c176]/50'}`}>
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] uppercase tracking-[0.3em] text-[#9a8f80] font-bold">Special Requests</label>
            <textarea 
              rows={4}
              placeholder="Allergies, special occasions, seat preferences..."
              className="w-full bg-[#0e0e0e] border-none rounded-xl p-6 text-[#e5e2e1] text-sm font-light focus:ring-1 focus:ring-[#e9c176]/30 placeholder:opacity-30"
            />
          </div>

          <button className="w-full bg-[#c5a059] text-[#131313] py-6 rounded-2xl text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[#e9c176] hover:scale-[0.98] transition-all flex items-center justify-center gap-4 group">
            Confirm Reservation <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="bg-[#1c1b1b]/50 p-10 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center border border-[#9a8f80]/5">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-[#e5e2e1]">Need Assistance?</h4>
            <p className="text-[#d1c5b4] opacity-60 text-xs leading-relaxed">Our concierge is available 24/7 to help you with bespoke arrangements or last-minute bookings.</p>
          </div>
          <div className="flex justify-end gap-6">
             <div className="text-right">
                <p className="text-[8px] uppercase tracking-widest text-[#9a8f80] mb-1">Hubungi Kami</p>
                <p className="text-[#e9c176] font-bold">+62 811-xxxx-xxxx</p>
             </div>
             <div className="text-right">
                <p className="text-[8px] uppercase tracking-widest text-[#9a8f80] mb-1">Email</p>
                <p className="text-[#e9c176] font-bold">concierge@savoria-jakarta.com</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN TEMPLATE COMPONENT ---

export default function SavoriaElegance() {
  const [activePage, setActivePage] = useState<PageType>('Home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activePage]);

  return (
    <div className="bg-[#131313] text-[#e5e2e1] font-sans selection:bg-[#e9c176]/30 selection:text-[#e9c176]">
      {/* Dynamic Font Import (Simulation) */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
        .font-sans { font-family: 'Manrope', sans-serif; }
      `}</style>

      <Nav activePage={activePage} setPage={setActivePage} />
      
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {activePage === 'Home' && <HomePage setPage={setActivePage} />}
            {activePage === 'Menu' && <MenuPage />}
            {activePage === 'Private Dining' && <PrivateDiningPage />}
            {activePage === 'Reservations' && <ReservationsPage />}
            {/* simple about if active */}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setPage={setActivePage} />
    </div>
  );
}
