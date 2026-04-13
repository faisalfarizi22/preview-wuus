"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Layers, 
  Monitor, 
  ArrowUpRight, 
  Plus, 
  Menu,
  ChevronRight
} from 'lucide-react';

// --- CONSTANTS ---

const PROJECTS = [
  {
    title: "Brand Identity",
    tag: "Creative",
    img: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=800",
    size: "col-span-2 md:col-span-1 row-span-2",
    color: "#FF007A" // Neon Pink
  },
  {
    title: "Work Portfolio",
    tag: "Digital",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    size: "col-span-2 md:col-span-1 row-span-1",
    color: "#00D1FF" // Neon Blue
  },
  {
    title: "Creative Team",
    tag: "Studio",
    img: "https://images.unsplash.com/photo-1522071823991-b9671f9d7d17?auto=format&fit=crop&q=80&w=800",
    size: "col-span-2 md:col-span-1 row-span-1",
    color: "#39FF14" // Neon Green
  }
];

// --- COMPONENTS ---

const BackgroundShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
        x: [0, 100, 0],
        y: [0, -50, 0]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-pink-500/10 blur-[120px]" 
    />
    <motion.div 
      animate={{ 
        scale: [1.2, 1, 1.2],
        rotate: [90, 0, 90],
        x: [0, -100, 0],
        y: [0, 100, 0]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-blue-500/10 blur-[150px]" 
    />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-150 pointer-events-none mix-blend-overlay" />
  </div>
);

const ProjectCard = ({ project }: { project: typeof PROJECTS[0] }) => (
  <motion.div 
    whileHover={{ scale: 0.98 }}
    className={`${project.size} relative group rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 cursor-pointer`}
  >
    <div className="absolute inset-0 z-0">
      <img src={project.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
    </div>
    
    <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
      <div className="flex justify-between items-start">
        <span className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-widest text-white/80 border border-white/5">
          {project.tag}
        </span>
        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 shadow-xl" style={{ border: `1px solid ${project.color}44` }}>
          <ArrowUpRight size={20} />
        </div>
      </div>
      
      <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform">
        <h3 className="text-4xl font-black text-white leading-tight">{project.title}</h3>
        <p className="text-white/40 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Explore Project Details</p>
      </div>
    </div>
    
    {/* Inner Glow on Hover */}
    <div 
      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" 
      style={{ boxShadow: `inset 0 0 100px ${project.color}` }}
    />
  </motion.div>
);

export default function NeonStudio() {
  return (
    <div className="bg-[#050505] text-white font-sans selection:bg-pink-500/30 selection:text-white min-h-screen overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap');
        .font-sans { font-family: 'Space Grotesk', sans-serif; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-8 flex justify-between items-center mix-blend-difference">
        <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
           <Zap className="text-[#FF007A]" fill="#FF007A" size={24} />
           NEON<span className="text-white/40">STUDIO</span>
        </div>
        <div className="hidden md:flex gap-10 text-[10px] uppercase font-black tracking-[0.4em] text-white/60">
           <a href="#" className="hover:text-[#FF007A] transition-colors">Work</a>
           <a href="#" className="hover:text-[#00D1FF] transition-colors">Services</a>
           <a href="#" className="hover:text-[#39FF14] transition-colors">Studio</a>
           <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
           <Menu size={20} />
        </button>
      </nav>

      <main className="relative">
        <BackgroundShapes />

        {/* HERO */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-32 text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="relative z-10 space-y-8 max-w-5xl"
           >
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
                 Open for new bold ideas
              </div>
              
              <h1 className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter text-white">
                LET'S BUILD<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF007A] via-[#00D1FF] to-[#39FF14]">BOLD IDEAS.</span>
              </h1>
              
              <p className="text-white/40 text-lg md:text-2xl max-w-2xl mx-auto font-medium">
                Premier creative studio based in the digital future. We transform complex problems into high-energy experiences.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center pt-8">
                 <motion.button 
                   whileHover={{ scale: 1.05 }}
                   className="bg-[#FF007A] text-white px-12 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-[0_0_40px_rgba(255,0,122,0.4)] hover:shadow-[0_0_60px_rgba(255,0,122,0.6)] transition-all"
                 >
                   Let's Work Together
                 </motion.button>
                 <motion.button 
                   whileHover={{ scale: 1.05 }}
                   className="bg-white/5 border border-white/10 text-white px-12 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
                 >
                   View Showreel
                 </motion.button>
              </div>
           </motion.div>
           
           {/* Scroll Indicator */}
           <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/20">
              <span className="text-[10px] uppercase font-bold tracking-[0.4em]">Scroll</span>
              <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent" />
           </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="relative py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div className="space-y-4">
                 <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic">SELECTED WORK</h2>
                 <p className="text-white/20 text-lg uppercase tracking-[0.3em] font-bold">Volume 01 — 2024</p>
              </div>
              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/20 hover:text-white cursor-pointer transition-colors"><ChevronRight className="rotate-180" size={20} /></div>
                 <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-white cursor-pointer transition-colors"><ChevronRight size={20} /></div>
              </div>
           </div>

           <div className="grid grid-cols-2 gap-8 h-auto">
              {PROJECTS.map((project, i) => (
                <motion.div 
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={project.size}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
           </div>
        </section>

        {/* MARQUEE */}
        <div className="py-20 border-y border-white/5 overflow-hidden whitespace-nowrap bg-white/5">
           <motion.div 
             animate={{ x: [0, -1000] }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="flex gap-20 text-6xl md:text-8xl font-black italic text-white/5 uppercase"
           >
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="flex items-center gap-20 leading-none">
                  <span>Innovation</span>
                  <Zap size={60} fill="currentColor" />
                  <span>Creativity</span>
                  <Plus size={60} />
                  <span>Execution</span>
                </div>
              ))}
           </motion.div>
        </div>

        {/* CTA */}
        <section className="py-40 px-6 text-center">
           <h3 className="text-5xl md:text-9xl font-black tracking-tighter mb-12 mix-blend-difference">READY TO FLIP THE<br /><span className="text-[#00D1FF]">SWITCH?</span></h3>
           <button className="group text-4xl md:text-6xl font-black italic flex items-center gap-6 mx-auto hover:text-[#FF007A] transition-colors">
              START A PROJECT <ArrowUpRight size={60} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
           </button>
        </section>
      </main>

      <footer className="p-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
         <div className="text-xl font-black tracking-tighter flex items-center gap-2">
            <Zap className="text-[#39FF14]" fill="#39FF14" size={20} />
            NEON<span className="text-white/40">STUDIO</span>
         </div>
         
         <div className="flex gap-12 text-[10px] uppercase font-black tracking-[0.4em] text-white/40">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Dribbble</a>
            <a href="#" className="hover:text-white transition-colors">Behance</a>
         </div>

         <div className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20">
            © 2024 NEONSTUDIO DEPT.
         </div>
      </footer>
    </div>
  );
}
