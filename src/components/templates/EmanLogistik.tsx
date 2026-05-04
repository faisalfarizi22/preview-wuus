"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Ship, 
  Plane, 
  Truck, 
  Warehouse, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Users, 
  DollarSign, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Send,
  Menu,
  X,
  Star,
  Quote,
  Camera,
  Globe,
  Briefcase,
  Play
} from 'lucide-react';

// --- DATA ---
const services = [
  { 
    title: "Pengiriman Laut", 
    desc: "Layanan pengiriman barang dalam jumlah besar melalui jalur laut dengan harga kompetitif.", 
    icon: Ship,
    img: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Pengiriman Udara", 
    desc: "Pengiriman cepat dan aman melalui jalur udara untuk kebutuhan mendesak Anda.", 
    icon: Plane,
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Pengiriman Darat", 
    desc: "Jangkauan luas ke seluruh wilayah Indonesia dengan armada yang andal.", 
    icon: Truck,
    img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Pergudangan", 
    desc: "Fasilitas gudang modern dan aman untuk kebutuhan penyimpanan barang Anda.", 
    icon: Warehouse,
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  { 
    title: "Customs Clearance", 
    desc: "Layanan pengurusan dokumen kepabeanan yang cepat dan terpercaya.", 
    icon: FileText,
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800"
  }
];

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Supply Chain Manager",
    company: "PT. Sumber Makmur",
    text: "Eman Logistik membantu kami mengirimkan barang tepat waktu dengan harga yang sangat kompetitif. Layanan mereka sangat profesional!",
    img: "https://i.pravatar.cc/150?u=budi"
  },
  {
    name: "Dewi Lestari",
    role: "Import Manager",
    company: "PT. Sejahtera Abadi",
    text: "Proses pengiriman mudah dan transparan. Tim Eman Logistik selalu responsif dan siap membantu kapan saja.",
    img: "https://i.pravatar.cc/150?u=dewi"
  },
  {
    name: "Arif Nugroho",
    role: "Operations Director",
    company: "PT. Global Indo",
    text: "Kami sangat puas dengan layanan pergudangan dari Eman Logistik. Sangat direkomendasikan untuk partner bisnis.",
    img: "https://i.pravatar.cc/150?u=arif"
  }
];

// --- COMPONENTS ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[70] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FF8C00] rounded-lg flex items-center justify-center text-white font-black text-2xl italic">E</div>
          <div>
            <h1 className="text-xl font-black text-[#0A1931] tracking-tighter leading-none">EMAN</h1>
            <p className="text-[10px] font-bold text-[#FF8C00] tracking-widest uppercase">Logistik</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {["Beranda", "Layanan", "Keunggulan", "Testimonial", "Lokasi", "Kontak"].map((item) => (
            <a key={item} href="#" className="text-xs font-bold text-[#0A1931]/70 hover:text-[#FF8C00] transition-colors uppercase tracking-widest">{item}</a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-[#FF8C00] text-white px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20">
            Hubungi Kami
          </button>
          <button className="lg:hidden p-2 text-[#0A1931]">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0A1931] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-8">
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-[#FF8C00] rounded-lg flex items-center justify-center text-white font-black text-2xl italic">E</div>
             <h2 className="text-xl font-bold tracking-tighter">EMAN LOGISTIK</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Eman Logistik adalah mitra terpercaya untuk solusi logistik terintegrasi yang mendukung pertumbuhan bisnis Anda.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF8C00] transition-colors cursor-pointer"><Camera size={18} /></div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF8C00] transition-colors cursor-pointer"><Globe size={18} /></div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF8C00] transition-colors cursor-pointer"><Briefcase size={18} /></div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#FF8C00] transition-colors cursor-pointer"><Play size={18} /></div>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-8 text-sm uppercase tracking-widest border-l-4 border-[#FF8C00] pl-4">Navigasi</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Beranda</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Layanan</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Keunggulan</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Testimonial</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Lokasi</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Kontak</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-8 text-sm uppercase tracking-widest border-l-4 border-[#FF8C00] pl-4">Layanan</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Pengiriman Laut</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pengiriman Udara</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pengiriman Darat</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pergudangan</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Customs Clearance</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-8 text-sm uppercase tracking-widest border-l-4 border-[#FF8C00] pl-4">Kontak</h3>
          <ul className="space-y-6 text-sm text-gray-400">
            <li className="flex items-start gap-4">
               <MapPin className="text-[#FF8C00] shrink-0" size={20} />
               <span>Jl. Industri Raya No. 88, Kawasan Pergudangan Cakung, Jakarta Timur 13910, Indonesia</span>
            </li>
            <li className="flex items-center gap-4">
               <Phone className="text-[#FF8C00] shrink-0" size={20} />
               <span>(021) 8888 1234</span>
            </li>
            <li className="flex items-center gap-4">
               <Mail className="text-[#FF8C00] shrink-0" size={20} />
               <span>info@emanlogistik.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-gray-500 uppercase tracking-widest">© 2024 Eman Logistik. All rights reserved.</p>
        <div className="flex gap-8 text-[10px] text-gray-500 uppercase tracking-widest">
           <a href="#" className="hover:text-white">Privacy Policy</a>
           <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default function EmanLogistik() {
  return (
    <div className="bg-white text-[#0A1931] font-sans selection:bg-[#FF8C00]/20 selection:text-[#0A1931]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1600" 
             className="w-full h-full object-cover grayscale-[0.5]" 
           />
           <div className="absolute inset-0 bg-[#0A1931]/80 backdrop-blur-[2px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 border border-white/20 backdrop-blur-md rounded-full text-white"
            >
              <div className="w-2 h-2 bg-[#FF8C00] rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest">Global Logistics Solution</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black text-white leading-[1.05] tracking-tight"
            >
              Solusi Logistik <br />
              <span className="text-[#FF8C00]">Terpercaya</span> <br />
              untuk Bisnis Anda
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg max-w-xl leading-relaxed"
            >
              Eman Logistik menyediakan layanan pengiriman barang yang cepat, aman, dan efisien untuk mendukung pertumbuhan bisnis Anda.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5 pt-4"
            >
              <button className="bg-[#FF8C00] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all shadow-2xl shadow-orange-500/30">
                Lihat Layanan Kami
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all flex items-center justify-center gap-3">
                <Send size={18} /> Tentang Kami
              </button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:grid grid-cols-2 gap-6"
          >
             <div className="space-y-6 pt-12">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 space-y-4">
                   <div className="w-14 h-14 rounded-2xl bg-[#FF8C00] flex items-center justify-center text-white"><Ship size={28} /></div>
                   <h3 className="text-xl font-bold text-white">Laut</h3>
                   <p className="text-gray-400 text-sm">Pengiriman kargo internasional.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 space-y-4">
                   <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white"><Plane size={28} /></div>
                   <h3 className="text-xl font-bold text-white">Udara</h3>
                   <p className="text-gray-400 text-sm">Prioritas pengiriman kilat.</p>
                </div>
             </div>
             <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 space-y-4">
                   <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white"><Truck size={28} /></div>
                   <h3 className="text-xl font-bold text-white">Darat</h3>
                   <p className="text-gray-400 text-sm">Distribusi domestik handal.</p>
                </div>
                <div className="bg-[#FF8C00] p-8 rounded-3xl space-y-4">
                   <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white"><Warehouse size={28} /></div>
                   <h3 className="text-xl font-bold text-white">Gudang</h3>
                   <p className="text-white/70 text-sm">Fasilitas storage modern.</p>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-32 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-6">
             <span className="text-[#FF8C00] text-xs font-black uppercase tracking-[0.4em]">Layanan Kami</span>
             <h2 className="text-4xl md:text-6xl font-black text-[#0A1931]">Solusi Logistik <span className="text-[#FF8C00]">Terlengkap</span></h2>
             <div className="w-24 h-1 bg-[#FF8C00] mx-auto rounded-full" />
             <p className="text-gray-500 max-w-2xl mx-auto text-lg">Kami menyediakan berbagai layanan logistik yang dapat disesuaikan dengan kebutuhan bisnis Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all flex flex-col">
                 <div className="aspect-video overflow-hidden relative">
                    <img src={s.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-[#0A1931]/20 group-hover:bg-transparent transition-all" />
                    <div className="absolute top-6 right-6 w-14 h-14 bg-[#FF8C00] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-orange-500/30">
                       <s.icon size={28} />
                    </div>
                 </div>
                 <div className="p-10 space-y-6 flex-grow">
                    <h3 className="text-2xl font-black text-[#0A1931]">{s.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{s.desc}</p>
                    <button className="flex items-center gap-3 text-[#FF8C00] font-black text-xs uppercase tracking-widest group-hover:gap-5 transition-all">
                       Selengkapnya <ArrowRight size={16} />
                    </button>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-[#FF8C00] p-12 rounded-[2.5rem] shadow-2xl text-white hidden md:block">
                 <p className="text-6xl font-black mb-2">15+</p>
                 <p className="text-sm font-bold uppercase tracking-widest opacity-80">Tahun Pengalaman</p>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-500/5 rounded-full blur-3xl -z-10" />
           </div>
           <div className="space-y-12">
              <div className="space-y-6">
                 <span className="text-[#FF8C00] text-xs font-black uppercase tracking-[0.4em]">Keunggulan Kami</span>
                 <h2 className="text-4xl md:text-5xl font-black text-[#0A1931] leading-tight">Mengapa Memilih <br /> <span className="text-[#FF8C00]">Eman Logistik?</span></h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                 {[
                   { icon: CheckCircle2, title: "Aman & Terpercaya", desc: "Keamanan barang Anda adalah prioritas utama kami." },
                   { icon: Clock, title: "Tepat Waktu", desc: "Kami berkomitmen untuk pengiriman yang tepat waktu." },
                   { icon: Users, title: "Tim Profesional", desc: "Didukung oleh tim berpengalaman di bidangnya." },
                   { icon: DollarSign, title: "Harga Kompetitif", desc: "Layanan berkualitas dengan harga yang bersaing." }
                 ].map((f, i) => (
                   <div key={i} className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF8C00]"><f.icon size={24} /></div>
                      <h4 className="text-lg font-bold text-[#0A1931]">{f.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-[#0A1931]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-6">
             <span className="text-[#FF8C00] text-xs font-black uppercase tracking-[0.4em]">Testimonial</span>
             <h2 className="text-4xl md:text-6xl font-black text-white">Apa Kata <span className="text-[#FF8C00]">Klien</span> Kami?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 space-y-8 relative group hover:bg-white/10 transition-all">
                 <Quote className="absolute top-10 right-10 text-[#FF8C00]/20 group-hover:text-[#FF8C00]/40 transition-all" size={60} />
                 <p className="text-gray-300 leading-relaxed relative z-10 italic">"{t.text}"</p>
                 <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <img src={t.img} className="w-14 h-14 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                    <div>
                       <h4 className="text-white font-bold">{t.name}</h4>
                       <p className="text-xs text-[#FF8C00] font-bold uppercase tracking-widest">{t.role}</p>
                       <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">{t.company}</p>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Map */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
           <div className="bg-gray-50 p-10 md:p-16 rounded-[3rem] border border-gray-100 space-y-12">
              <div className="space-y-4">
                 <h2 className="text-4xl font-black text-[#0A1931]">Kirim Pesan</h2>
                 <p className="text-gray-500">Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda.</p>
              </div>
              <form className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Nama Lengkap" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-sm focus:ring-1 focus:ring-[#FF8C00] outline-none" />
                    <input type="email" placeholder="Email Perusahaan" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-sm focus:ring-1 focus:ring-[#FF8C00] outline-none" />
                 </div>
                 <input type="text" placeholder="Perusahaan" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-sm focus:ring-1 focus:ring-[#FF8C00] outline-none" />
                 <textarea placeholder="Pesan Anda" rows={5} className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-sm focus:ring-1 focus:ring-[#FF8C00] outline-none resize-none" />
                 <button className="w-full bg-[#0A1931] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#FF8C00] transition-all flex items-center justify-center gap-3">
                    <Send size={18} /> Kirim Pesan
                 </button>
              </form>
           </div>
           
           <div className="flex flex-col gap-8">
              <div className="flex-grow rounded-[3rem] overflow-hidden border border-gray-100 min-h-[400px] relative group">
                 <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                 <div className="absolute inset-0 bg-[#0A1931]/10" />
                 <div className="absolute bottom-10 left-10 right-10 bg-white p-8 rounded-3xl shadow-2xl space-y-4">
                    <div className="flex items-center gap-3">
                       <MapPin className="text-[#FF8C00]" />
                       <h3 className="font-bold text-[#0A1931]">Kantor Pusat</h3>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">Jl. Industri Raya No. 88, Kawasan Pergudangan Cakung, Jakarta Timur 13910, Indonesia</p>
                    <button className="text-[10px] font-black text-[#FF8C00] uppercase tracking-widest flex items-center gap-2">Petunjuk Arah <ArrowRight size={12} /></button>
                 </div>
              </div>
              <div className="bg-[#FF8C00] p-10 rounded-[3rem] text-white flex justify-between items-center">
                 <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-2">Emergency Service</p>
                    <p className="text-3xl font-black">0800 1234 567</p>
                 </div>
                 <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center animate-bounce">
                    <Phone size={32} />
                 </div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
