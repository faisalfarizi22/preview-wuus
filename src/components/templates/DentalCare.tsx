"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Clock, 
  MapPin, 
  CircleCheck, 
  HeartPulse, 
  Sparkles, 
  ShieldCheck,
  ChevronRight,
  Star,
  ArrowRight,
  Menu,
  Stethoscope
} from 'lucide-react';

// --- CONSTANTS ---

const SERVICES = [
  {
    title: "General Checkups",
    desc: "Comprehensive exams for lifelong health.",
    icon: <CircleCheck className="text-blue-500" />,
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    grid: "col-span-2 md:col-span-1"
  },
  {
    title: "Professional Whitening",
    desc: "A brighter smile in just one visit.",
    icon: <Sparkles className="text-blue-400" />,
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    grid: "col-span-2 md:col-span-1"
  },
  {
    title: "Orthodontics",
    desc: "Modern solutions for perfectly aligned teeth.",
    icon: <ShieldCheck className="text-blue-600" />,
    img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    grid: "col-span-2 md:col-span-2"
  }
];

// --- COMPONENTS ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-blue-50 py-4 px-6 md:px-12 flex items-center justify-between">
    <div className="flex items-center gap-2 text-2xl font-black text-blue-600 tracking-tighter">
       <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
          <HeartPulse size={24} />
       </div>
       DENTAL<span className="text-gray-400 font-light">CARE</span>
    </div>
    
    <div className="hidden lg:flex items-center gap-10 text-[11px] uppercase tracking-widest font-bold text-gray-400">
       <a href="#" className="text-blue-600">Home</a>
       <a href="#" className="hover:text-blue-600 transition-colors">Services</a>
       <a href="#" className="hover:text-blue-600 transition-colors">Our Doctors</a>
       <a href="#" className="hover:text-blue-600 transition-colors">Testimonials</a>
    </div>

    <div className="flex items-center gap-4">
       <button className="hidden md:flex items-center gap-2 text-blue-600 font-bold text-sm">
          <Phone size={18} /> (021) 555-0123
       </button>
       <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
          Book Now
       </button>
    </div>
  </nav>
);

export default function DentalCare() {
  return (
    <div className="bg-[#FFFFFF] text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-600 overflow-x-hidden pt-20">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative min-h-[85vh] flex items-center px-6 md:px-12 bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden">
           {/* Abstract shapes */}
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] -mr-60 -mt-40" />
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[80px] -ml-20 -mb-20" />

           <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-20 relative z-10 w-full">
              <div className="space-y-10">
                 <div className="inline-flex items-center gap-3 bg-blue-600/5 border border-blue-600/10 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600">
                    <StarsIcon /> ISO Certified Dental Clinic
                 </div>
                 
                 <h1 className="text-6xl md:text-8xl font-extrabold leading-[1] tracking-tighter text-gray-900">
                    A Brighter, <br />
                    <span className="text-blue-600 italic">Healthier Smile.</span>
                 </h1>
                 
                 <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed font-medium">
                    Experience world-class dental care in a calm, modern environment. Our experts use high-tech equipment to ensure your comfort and safety.
                 </p>
                 
                 <div className="flex flex-col md:flex-row gap-6">
                    <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-transform shadow-xl shadow-blue-600/20">
                       Book Appointment <ArrowRight size={18} />
                    </button>
                    <div className="flex -space-x-3 items-center">
                       {[1, 2, 3].map(i => (
                         <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-gray-100 shadow-sm">
                            <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Patient" />
                         </div>
                       ))}
                       <div className="pl-6 space-y-1">
                          <div className="flex text-yellow-400"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-sans">Trusted by 5,000+ patients</p>
                       </div>
                    </div>
                 </div>
                 
                 <div className="grid grid-cols-3 gap-8 pt-6">
                    {[
                      { icon: <CircleCheck className="text-green-500"/>, text: "High-Tech Tools" },
                      { icon: <CircleCheck className="text-green-500"/>, text: "Expert Doctors" },
                      { icon: <CircleCheck className="text-green-500"/>, text: "Painless Care" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
                        {item.icon} {item.text}
                      </div>
                    ))}
                 </div>
              </div>
              
              <div className="relative">
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 1 }}
                   className="relative aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group"
                 >
                    <img 
                      src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                      alt="Dentist" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/90 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl translate-y-10 group-hover:translate-y-0 transition-transform">
                       <h4 className="text-xl font-black mb-1">Dr. Sarah Johnson</h4>
                       <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Lead Orthodontist — 15+ Yrs Exp</p>
                    </div>
                 </motion.div>
                 
                 {/* Floating Badges */}
                 <div className="absolute -top-10 -left-10 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 border border-blue-50">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                       <Stethoscope size={24} />
                    </div>
                    <div>
                       <p className="text-2xl font-black leading-none">99%</p>
                       <p className="text-[10px] uppercase font-bold text-gray-400">Success Rate</p>
                    </div>
                 </div>
                 
                 <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-blue-50">
                    <p className="text-sm font-bold text-gray-900 italic">"Best experience ever!"</p>
                 </div>
              </div>
           </div>
        </section>

        {/* BENTO GRID SERVICES */}
        <section className="py-32 px-6 md:px-12 bg-white relative">
           <div className="max-w-[1400px] mx-auto">
              <div className="text-center space-y-4 mb-20">
                 <h5 className="text-[11px] font-black uppercase tracking-[0.5em] text-blue-600">Our Expertise</h5>
                 <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Comprehensive Dental Care.</h2>
                 <p className="text-gray-400 max-w-2xl mx-auto font-medium">We offer a wide range of services to keep your smile healthy and bright at every stage of life.</p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                 {SERVICES.map((s, i) => (
                   <motion.div 
                     key={s.title}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className={`${s.grid} group relative overflow-hidden rounded-[2.5rem] bg-gray-50 border border-gray-100 h-80 md:h-[450px]`}
                   >
                      <img src={s.img} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt={s.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                      
                      <div className="absolute inset-x-0 bottom-0 p-10 space-y-4">
                         <div className="w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                            {s.icon}
                         </div>
                         <h3 className="text-3xl font-black tracking-tight">{s.title}</h3>
                         <p className="text-gray-500 font-medium max-w-sm">{s.desc}</p>
                         <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 hover:gap-4 transition-all pt-2">
                            View Details <ChevronRight size={16} />
                         </button>
                      </div>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* STATS & INFO BAR */}
        <section className="bg-blue-600 py-16 px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 max-w-[1400px] mx-auto rounded-[3rem] -mb-20 relative z-20 overflow-hidden shadow-2xl shadow-blue-600/40">
           {/* Abstract pattern */}
           <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:40px_40px]" />
           </div>

           {[
             { label: "Checkups", val: "12k+" },
             { label: "Surgeries", val: "4.5k+" },
             { label: "Team Members", val: "30+" },
             { label: "Awards Win", val: "15" }
           ].map((stat, i) => (
             <div key={i} className="text-center relative z-10 space-y-2">
                <div className="text-5xl font-black text-white">{stat.val}</div>
                <div className="text-[10px] uppercase font-black tracking-widest text-blue-100">{stat.label}</div>
             </div>
           ))}
        </section>

        {/* CLINIC TOUR / CTA BRIGHT */}
        <section className="bg-gray-50 pt-48 pb-32 px-6 text-center">
           <div className="max-w-4xl mx-auto space-y-12">
              <h3 className="text-5xl md:text-8xl font-black tracking-tighter text-gray-900 leading-[0.9]">Start Your Journey to a <br/>Healthy Smile.</h3>
              <p className="text-gray-500 text-lg md:text-xl font-medium">Join thousands of patients who trust us with their dental health every year.</p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                 <button className="bg-blue-600 text-white px-12 py-5 rounded-3xl text-xs font-black uppercase tracking-widest shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform">
                    Schedule Appointment
                 </button>
                 <button className="bg-white border border-gray-100 text-gray-900 px-12 py-5 rounded-3xl text-xs font-black uppercase tracking-widest shadow-sm hover:bg-gray-50 transition-all">
                    Virtual Clinic Tour
                 </button>
              </div>
           </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-100 pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 border-b border-gray-100 pb-20 mb-12">
           <div className="space-y-8">
              <div className="flex items-center gap-2 text-2xl font-black text-blue-600 tracking-tighter">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                    <HeartPulse size={24} />
                </div>
                DENTALCARE
              </div>
              <p className="text-sm text-gray-400 font-medium leading-relaxed">
                 Providing premium dental services since 2010. We use science and art to create beautiful, healthy smiles.
              </p>
              <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 cursor-pointer transition-colors"><ChevronRight size={18} /></div>
                 <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 cursor-pointer transition-colors"><ChevronRight size={18} /></div>
                 <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 cursor-pointer transition-colors"><ChevronRight size={18} /></div>
              </div>
           </div>
           
           <div className="space-y-8">
              <h6 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-900">Clinics</h6>
              <ul className="space-y-4 text-xs font-bold text-gray-400">
                <li className="hover:text-blue-600 transition-colors"><a href="#">Downtown Office</a></li>
                <li className="hover:text-blue-600 transition-colors"><a href="#">Northside Clinic</a></li>
                <li className="hover:text-blue-600 transition-colors"><a href="#">Dental Lab</a></li>
                <li className="hover:text-blue-600 transition-colors"><a href="#">Children Wing</a></li>
              </ul>
           </div>
           
           <div className="space-y-8">
              <h6 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-900">Schedule</h6>
              <div className="space-y-4 text-xs font-bold text-gray-400">
                <p>Mon - Fri: 8am — 8pm</p>
                <p>Saturday: 10am — 4pm</p>
                <p className="text-red-400 uppercase italic">Sunday: Closed</p>
              </div>
           </div>

           <div className="space-y-8">
              <h6 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-900">Emergency</h6>
              <p className="text-sm text-gray-500 font-bold leading-relaxed">
                 Available 24/7 for dental emergencies. Call us immediately.
              </p>
              <button className="w-full py-4 border-2 border-dashed border-gray-100 rounded-3xl text-sm font-black text-gray-400 hover:border-blue-600 hover:text-blue-600 transition-all">
                 +1 (800) HELP-SMILE
              </button>
           </div>
        </div>
        
        <div className="text-[11px] text-gray-400 uppercase font-black tracking-[0.5em] text-center">
           © 2024 DENTALCARE MEDICAL GROUP — PRIVACY & TERMS
        </div>
      </footer>
    </div>
  );
}

const StarsIcon = () => (
   <div className="flex gap-1 text-blue-600">
      <Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/>
   </div>
)
