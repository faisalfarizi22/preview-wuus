"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Ruler, 
  ClipboardList, 
  ArrowRight, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight,
  Menu as MenuIcon,
  X,
  Construction,
  Layers,
  Briefcase,
  Monitor
} from 'lucide-react';

// --- HELPERS & CONSTANTS ---

const COLORS = {
  navy: "#0F172A",
  slate: "#334155",
  blue: "#2563EB",
  accent: "#3B82F6",
  white: "#FFFFFF",
  gray: "#F8FAFC",
  outline: "#E2E8F0"
};

type PageType = 'Home' | 'About' | 'Services' | 'Portfolio' | 'Contact';

// --- COMPONENTS ---

const Nav = ({ activePage, setPage }: { activePage: PageType, setPage: (p: PageType) => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: PageType[] = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-[60] transition-all duration-500 ${scrolled ? 'bg-[#0F172A]/90 py-4 shadow-xl backdrop-blur-md' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="cursor-pointer flex items-center gap-3 group"
          onClick={() => setPage('Home')}
        >
          <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
            <Building2 className="text-white" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white leading-none">TRUST</span>
            <span className="text-[10px] tracking-[0.2em] text-white/60 uppercase">ARCHITECT</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setPage(item)}
              className={`text-xs uppercase tracking-widest font-semibold transition-all duration-300 relative group
                ${activePage === item ? 'text-blue-500' : 'text-white/70 hover:text-white'}`}
            >
              {item}
              <span className={`absolute -bottom-2 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-500 group-hover:w-full ${activePage === item ? 'w-full' : ''}`} />
            </button>
          ))}
        </div>

        {/* CTA */}
        <button 
          onClick={() => setPage('Contact')}
          className="hidden sm:block bg-blue-600 text-white px-8 py-3 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-900/40"
        >
          Schedule Consultation
        </button>

        {/* Mobile Menu Icon */}
        <button className="lg:hidden text-white">
          <MenuIcon size={24} />
        </button>
      </div>
    </nav>
  );
};

const Footer = ({ setPage }: { setPage: (p: PageType) => void }) => {
  return (
    <footer className="bg-[#0F172A] pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <Building2 className="text-blue-500" size={24} />
             <span className="text-xl font-bold text-white tracking-tight">TRUST ARCHITECT</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Building the foundations of modern B2B success through architectural excellence and strategic partnership.
          </p>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white">Quick Links</h4>
          <ul className="space-y-3">
            {['Home', 'About', 'Services', 'Portfolio'].map((item) => (
              <li key={item}>
                <button onClick={() => setPage(item as PageType)} className="text-slate-400 text-sm hover:text-blue-500 transition-colors uppercase tracking-tight">{item}</button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white">Follow Us</h4>
          <ul className="space-y-3">
            {['LinkedIn', 'Instagram', 'Dribbble'].map((item) => (
              <li key={item}>
                <a href="#" className="text-slate-400 text-sm hover:text-blue-500 transition-colors uppercase tracking-tight">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white">Jakarta Office</h4>
          <p className="text-slate-400 text-sm leading-relaxed italic">
            Sudirman Central Business District (SCBD)<br/>
            Equity Tower, Level 45. Jakarta 12190
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] text-slate-500 uppercase tracking-widest">
        <span>© 2024 Trust Architect. Building Excellence.</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Terms</a>
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
      <section className="relative min-h-screen flex items-center bg-[#0F172A] overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
           <img 
             src="/asset-trust.png" 
             className="w-full h-full object-cover"
             alt="Architecture background"
           />
           <div className="absolute inset-0 bg-slate-900/70 z-10" />
           <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/40 to-transparent z-10" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-20 pt-20">
          <div className="max-w-3xl space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-blue-500"
            >
               <div className="w-12 h-[1px] bg-blue-500" />
               <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Architectural Excellence</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter"
            >
              Trust Architect:<br/>
              <span className="text-blue-600">Building B2B Success.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-slate-400 text-lg md:text-xl font-medium max-w-xl leading-relaxed"
            >
              Architectural Excellence. Strategic Partnership.<br/>Lasting Impact.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button 
                onClick={() => setPage('Contact')}
                className="bg-blue-600 text-white px-10 py-5 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center gap-3 shadow-2xl shadow-blue-900/40"
              >
                Schedule Consultation <ArrowRight size={16} />
              </button>
              <button 
                onClick={() => setPage('Portfolio')}
                className="border border-white/20 text-white px-10 py-5 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all bg-white/5"
              >
                View Projects
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0F172A] py-24 px-6 md:px-12 border-y border-white/5">
         <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { val: "20+", label: "Years Experience" },
              { val: "150+", label: "Projects Delivered" },
              { val: "98%", label: "Client Satisfaction" },
              { val: "12", label: "Global Awards" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-2 border-l border-white/10 pl-8"
              >
                <h3 className="text-4xl md:text-5xl font-black text-white">{stat.val}</h3>
                <p className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.2em]">{stat.label}</p>
              </motion.div>
            ))}
         </div>
      </section>

      {/* Featured Service */}
      <section className="bg-slate-50 py-32 px-6 md:px-12">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-8">
               <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.4em]">Integrated Solutions</span>
               <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">Design. Build. <br/>Consult.</h2>
               <p className="text-slate-600 text-lg leading-relaxed">Comprehensive architectural solutions tailored to your business goals. From initial blueprint to final structural integrity.</p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div className="flex gap-4">
                     <div className="bg-white p-3 rounded-lg shadow-sm w-fit h-fit"><Ruler className="text-blue-600" size={24} /></div>
                     <div>
                        <h4 className="font-bold text-slate-900">Innovative Design</h4>
                        <p className="text-xs text-slate-500">Sustainable and performance-driven.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="bg-white p-3 rounded-lg shadow-sm w-fit h-fit"><Construction className="text-blue-600" size={24} /></div>
                     <div>
                        <h4 className="font-bold text-slate-900">Precision Build</h4>
                        <p className="text-xs text-slate-500">Integrity in every beam.</p>
                     </div>
                  </div>
               </div>
               <button onClick={() => setPage('Services')} className="text-blue-600 text-xs font-bold uppercase tracking-widest flex items-center gap-3 group">
                 Explore Services <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
            <div className="flex-1 relative">
               <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden shadow-2xl rotate-3 scale-95 group-hover:rotate-0 transition-transform duration-700">
                  <img src="/asset-trust-2.png" className="w-full h-full object-cover" alt="Detail" />
               </div>
               <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl -rotate-6 hidden md:block">
                  <img src="/asset-trust-3.png" className="w-full h-full object-cover opacity-80" alt="Blueprint" />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-32">
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <div className="space-y-8">
            <span className="text-blue-600 text-[10px] uppercase tracking-[0.5em] font-bold block">About Our Firm</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-none">Designing Trust. <br/>Delivering Excellence.</h1>
          </div>
          <p className="text-slate-500 text-lg leading-relaxed max-w-md font-medium italic">"At Trust Architect, we believe great architecture builds more than structures - it builds confidence and long-term value."</p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           <div className="lg:col-span-12 h-[500px] rounded-3xl overflow-hidden relative shadow-2xl">
              <img src="/asset-trust.png" className="w-full h-full object-cover" alt="Firm" />
              <div className="absolute inset-0 bg-slate-900/20" />
           </div>
           <div className="lg:col-span-8 bg-slate-900 p-12 md:p-20 rounded-[3rem] text-white space-y-8">
              <h2 className="text-4xl font-bold">A Legacy of Innovation</h2>
              <p className="text-slate-400 text-lg leading-relaxed">For over two decades, we've helped businesses turn vision into reality with precision, integrity, and innovation. Our firm is built on the principle that architectural beauty must be matched by structural resilience and strategic purpose.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10">
                 <div className="space-y-4">
                    <CheckCircle2 className="text-blue-500" size={32} />
                    <h3 className="text-xl font-bold">Strategic Partnership</h3>
                    <p className="text-slate-500 text-sm">We don't just work for you; we work with you to align architectural design with business goals.</p>
                 </div>
                 <div className="space-y-4">
                    <Layers className="text-blue-500" size={32} />
                    <h3 className="text-xl font-bold">Multidisciplinary Approach</h3>
                    <p className="text-slate-500 text-sm">Our team of architects, engineers, and consultants provide a seamless, integrated experience.</p>
                 </div>
              </div>
           </div>
           <div className="lg:col-span-4 bg-slate-50 p-12 rounded-[3rem] space-y-8 border border-slate-200">
              <div className="w-16 h-1 bg-blue-600" />
              <h2 className="text-3xl font-black text-slate-900">Recognitions</h2>
              <div className="space-y-10">
                 {[
                   { year: "2023", award: "Global Excellence in B2B Architecture" },
                   { year: "2021", award: "Innovation in Sustainable Build" },
                   { year: "2018", award: "Firm of the Decade - SE Asia" }
                 ].map((a, i) => (
                   <div key={i} className="space-y-2">
                      <span className="text-blue-600 text-xs font-bold">{a.year}</span>
                      <p className="text-slate-900 font-bold leading-tight">{a.award}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const services = [
    { title: "Architectural Design", Icon: Ruler, desc: "Innovative, sustainable designs that inspire and perform.", details: ["Spatial Strategy", "Sustainable Materials", "Digital Twins"] },
    { title: "Bespoke Construction", Icon: Construction, desc: "Precision construction managed with integrity and expertise.", details: ["Project Management", "Structural Engineering", "Site Oversight"] },
    { title: "Strategic Consultation", Icon: Briefcase, desc: "Strategic guidance to align your vision with execution.", details: ["Feasibility Studies", "Cost Optimization", "Regulatory Planning"] },
    { title: "Digital Modeling", Icon: Monitor, desc: "Advanced 3D visualization and BIM implementation.", details: ["BIM Level 3", "VFX Rendering", "VR walkthroughs"] }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-24">
        <header className="max-w-3xl space-y-6">
          <span className="text-blue-600 text-[10px] uppercase tracking-[0.5em] font-bold">Expertise</span>
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter">Holistic Architectural Solutions.</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[2rem] shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-8">
                 <s.Icon size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">{s.title}</h3>
              <p className="text-slate-500 mb-8 leading-relaxed italic">{s.desc}</p>
              <ul className="space-y-3 pt-6 border-t border-slate-100">
                {s.details.map((d, j) => (
                  <li key={j} className="flex items-center gap-3 text-xs font-bold text-slate-700 uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  const projects = [
    { title: "Commercial Tower Project", category: "Mixed-Use Development", desc: "A landmark commercial tower delivered on time and beyond expectations.", img: "/asset-trust.png" },
    { title: "Client Trust Case Study", category: "Corporate Campus", desc: "How collaboration and transparency delivered lasting value.", img: "/asset-trust-2.png" },
    { title: "Innovation Campus", category: "R&D Facility", desc: "A space designed to foster innovation and growth.", img: "/asset-trust-3.png" },
  ];

  return (
    <div className="bg-slate-900 min-h-screen pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-24">
        <header className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-6">
            <span className="text-blue-500 text-[10px] uppercase tracking-[0.5em] font-bold">Portfolio</span>
            <h1 className="text-6xl font-black text-white tracking-tighter">Real Projects. <br/><span className="text-slate-500">Real Impact.</span></h1>
          </div>
          <p className="text-slate-400 max-w-xs text-xs uppercase tracking-[0.2em] font-medium border-l border-white/20 pl-6 h-fit">Demonstrating our commitment to excellence through every completed structure.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1C2936] rounded-[2.5rem] overflow-hidden group border border-white/5"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                 <img src={p.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#1C2936] to-transparent opacity-60" />
                 <div className="absolute top-8 left-8">
                    <span className="bg-blue-600 text-white text-[8px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">Featured</span>
                 </div>
              </div>
              <div className="p-10 space-y-4">
                 <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest opacity-60">{p.category}</span>
                 <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                 <div className="pt-6 border-t border-white/5">
                    <button className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-3 group/btn hover:text-blue-500 transition-colors">
                      View Case Study <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
           <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-blue-600 text-[10px] uppercase tracking-[0.5em] font-bold">Contact</span>
                <h1 className="text-7xl font-black text-slate-900 tracking-tighter">Let's Build <br/>the Future.</h1>
                <p className="text-slate-500 text-lg leading-relaxed max-w-md">Ready to start your next architectural milestone? Our partners are ready to consult with you.</p>
              </div>

              <div className="space-y-10">
                 <div className="flex gap-6">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600"><Phone size={20} /></div>
                    <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Business Inquiry</p>
                        <p className="text-xl font-bold text-slate-900">+62 21 555-TRUST</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600"><Mail size={20} /></div>
                    <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Email Our Strategy Team</p>
                        <p className="text-xl font-bold text-slate-900">projects@trustarchitect.com</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600"><MapPin size={20} /></div>
                    <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Main Studio</p>
                        <p className="text-xl font-bold text-slate-900">SCBD, Equity Tower. Level 45</p>
                    </div>
                 </div>
              </div>
           </div>

           <div className="bg-slate-900 p-12 md:p-16 rounded-[3rem] shadow-2xl space-y-8">
              <h3 className="text-2xl font-bold text-white">Project Inquiry Form</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <input type="text" placeholder="Your Name" className="bg-slate-800 border-none rounded-xl p-6 text-white text-sm focus:ring-1 focus:ring-blue-500 placeholder:text-slate-500" />
                 <input type="email" placeholder="Business Email" className="bg-slate-800 border-none rounded-xl p-6 text-white text-sm focus:ring-1 focus:ring-blue-500 placeholder:text-slate-500" />
              </div>
              <select className="w-full bg-slate-800 border-none rounded-xl p-6 text-white text-sm focus:ring-1 focus:ring-blue-500 appearance-none">
                 <option>Selection: Architectural Design</option>
                 <option>Selection: Total Build Solution</option>
                 <option>Selection: Consultation Only</option>
              </select>
              <textarea placeholder="Tell us about your project scope..." rows={4} className="w-full bg-slate-800 border-none rounded-xl p-6 text-white text-sm focus:ring-1 focus:ring-blue-500 placeholder:text-slate-500" />
              <button className="w-full bg-blue-600 text-white py-6 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/40">
                Submit Inquiry
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN TEMPLATE COMPONENT ---

export default function TrustArchitect() {
  const [activePage, setActivePage] = useState<PageType>('Home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activePage]);

  return (
    <div className="bg-slate-50 text-slate-900 font-sans selection:bg-blue-500/30 selection:text-blue-600">
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
            transition={{ duration: 0.5 }}
          >
            {activePage === 'Home' && <HomePage setPage={setActivePage} />}
            {activePage === 'About' && <AboutPage />}
            {activePage === 'Services' && <ServicesPage />}
            {activePage === 'Portfolio' && <PortfolioPage />}
            {activePage === 'Contact' && <ContactPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setPage={setActivePage} />
    </div>
  );
}
