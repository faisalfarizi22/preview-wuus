"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Star, 
  CheckCircle2, 
  Truck, 
  Users, 
  Award, 
  Settings, 
  Plus, 
  Minus, 
  Heart,
  Phone,
  Mail,
  MapPin,
  Camera,
  Globe,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  LayoutGrid,
  FileText,
  Clock as ClockIcon,
  BookOpen,
  DollarSign
} from 'lucide-react';

// --- DATA ---
const products = [
  { id: 1, name: "Kaos Kaki Sport", price: "25.000", material: "Cotton Combed", img: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Kaos Kaki Invisible", price: "20.000", material: "Bambu Premium", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Kaos Kaki Sekolah", price: "15.000", material: "Poliester Tebal", img: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Kaos Kaki Formal", price: "22.000", material: "Katun Halus", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "Kaos Kaki Custom", price: "35.000", material: "Desain Sesuai Keinginan", img: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&q=80&w=800" }
];

const categories = [
  { name: "Sport", icon: Award },
  { name: "Formal", icon: Users },
  { name: "Sekolah", icon: BookOpen },
  { name: "Casual", icon: Heart },
  { name: "Ankle", icon: Settings },
  { name: "Custom", icon: LayoutGrid },
  { name: "Baby & Kids", icon: Users }
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
    <nav className={`fixed top-0 w-full z-[70] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#0F2C59] rounded-xl flex items-center justify-center text-white">
             <ShoppingBag size={24} />
          </div>
          <div>
            <h1 className="text-xl font-black text-[#0F2C59] tracking-tighter leading-none uppercase">Socks</h1>
            <p className="text-[10px] font-bold text-[#F8DE22] tracking-widest uppercase -mt-1">Indonesia</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {["Beranda", "Produk", "Desain", "Layanan", "Tentang Kami", "Kontak"].map((item) => (
            <a key={item} href="#" className="text-sm font-bold text-[#0F2C59] hover:text-[#F8DE22] transition-colors">{item}</a>
          ))}
        </div>

        <div className="flex items-center gap-4">
           <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2 border border-gray-200">
              <Search size={16} className="text-gray-400" />
              <input type="text" placeholder="Cari produk..." className="bg-transparent border-none text-xs focus:ring-0 w-32" />
           </div>
           <button className="relative p-2 text-[#0F2C59]">
              <ShoppingBag size={24} />
              <span className="absolute top-0 right-0 w-4 h-4 bg-[#F8DE22] text-[#0F2C59] text-[10px] rounded-full flex items-center justify-center font-bold">0</span>
           </button>
           <button className="lg:hidden p-2 text-[#0F2C59]">
              <Menu size={24} />
           </button>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#F8F9FA] text-[#0F2C59] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-[#0F2C59] rounded-lg flex items-center justify-center text-white">
                <ShoppingBag size={20} />
             </div>
             <h2 className="text-xl font-black tracking-tighter">SOCKS INDONESIA</h2>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Konveksi kaos kaki berkualitas tinggi dengan desain custom sesuai kebutuhan bisnis, event, komunitas, atau brand Anda.
          </p>
          <div className="flex gap-4">
            <Camera size={20} className="text-gray-400 hover:text-[#0F2C59] cursor-pointer" />
            <Globe size={20} className="text-gray-400 hover:text-[#0F2C59] cursor-pointer" />
            <MessageCircle size={20} className="text-gray-400 hover:text-[#0F2C59] cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="text-[#0F2C59] font-bold mb-8 uppercase tracking-widest text-xs">Menu</h3>
          <ul className="space-y-4 text-sm text-gray-500 font-medium">
            <li><a href="#" className="hover:text-[#0F2C59] transition-colors">Beranda</a></li>
            <li><a href="#" className="hover:text-[#0F2C59] transition-colors">Produk</a></li>
            <li><a href="#" className="hover:text-[#0F2C59] transition-colors">Desain</a></li>
            <li><a href="#" className="hover:text-[#0F2C59] transition-colors">Layanan</a></li>
            <li><a href="#" className="hover:text-[#0F2C59] transition-colors">Tentang Kami</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#0F2C59] font-bold mb-8 uppercase tracking-widest text-xs">Layanan</h3>
          <ul className="space-y-4 text-sm text-gray-500 font-medium">
            <li><a href="#" className="hover:text-[#0F2C59] transition-colors">Produksi Massal</a></li>
            <li><a href="#" className="hover:text-[#0F2C59] transition-colors">Custom Desain</a></li>
            <li><a href="#" className="hover:text-[#0F2C59] transition-colors">Private Label</a></li>
            <li><a href="#" className="hover:text-[#0F2C59] transition-colors">Pengiriman</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#0F2C59] font-bold mb-8 uppercase tracking-widest text-xs">Kontak Kami</h3>
          <ul className="space-y-6 text-sm text-gray-500 font-medium">
            <li className="flex items-start gap-4">
               <MapPin className="text-[#0F2C59] shrink-0" size={20} />
               <span>Jl. Industri No. 25, Bandung, Jawa Barat, Indonesia</span>
            </li>
            <li className="flex items-center gap-4">
               <Phone className="text-[#0F2C59] shrink-0" size={20} />
               <span>0812-3456-7890</span>
            </li>
            <li className="flex items-center gap-4">
               <Mail className="text-[#0F2C59] shrink-0" size={20} />
               <span>info@socksindonesia.id</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-gray-200 text-center text-[10px] text-gray-400 uppercase tracking-widest font-bold">
        © 2024 Socks Indonesia. All rights reserved.
      </div>
    </footer>
  );
};

export default function SocksIndonesia() {
  return (
    <div className="bg-white text-[#0F2C59] font-sans selection:bg-[#F8DE22]/20 selection:text-[#0F2C59]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-50 to-transparent -z-10" />
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100"
            >
              <div className="w-2 h-2 bg-[#F8DE22] rounded-full animate-pulse" />
              <span className="text-[10px] font-black text-[#0F2C59] uppercase tracking-widest">Konveksi Kaos Kaki Terbaik</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-[#0F2C59] leading-[1.05] tracking-tight uppercase"
            >
              Konveksi Kaos Kaki <br />
              <span className="text-[#F8DE22]">Berkualitas</span> <br />
              <span className="text-white bg-[#0F2C59] px-4 py-1 inline-block -rotate-1">Terbaik</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-lg max-w-xl leading-relaxed"
            >
              Kami memproduksi kaos kaki berkualitas tinggi dengan bahan pilihan dan jahitan rapi untuk kenyamanan maksimal setiap langkah Anda.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-5 pt-4"
            >
              <button className="bg-[#0F2C59] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#F8DE22] hover:text-[#0F2C59] transition-all shadow-2xl shadow-blue-900/20">
                Lihat Produk
              </button>
              <button className="bg-white border border-gray-200 text-[#0F2C59] px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:border-[#0F2C59] transition-all flex items-center justify-center gap-3">
                <FileText size={18} /> Tentang Kami
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-gray-100"
            >
               {[
                 { icon: Award, label: "Kualitas Terjamin", sub: "Bahan terbaik & jahitan rapi" },
                 { icon: Settings, label: "Produksi Sendiri", sub: "Dikerjakan oleh tenaga ahli" },
                 { icon: Truck, label: "Pengiriman Cepat", sub: "Ke seluruh Indonesia" }
               ].map((item, i) => (
                 <div key={i} className="space-y-2">
                    <item.icon size={24} className="text-[#F8DE22]" />
                    <h4 className="text-xs font-black uppercase tracking-widest">{item.label}</h4>
                    <p className="text-[10px] text-gray-400 font-medium">{item.sub}</p>
                 </div>
               ))}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 grid grid-cols-2 gap-4">
               <div className="space-y-4 pt-12">
                  <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                     <img src="https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-[#F8DE22] p-8 rounded-[3rem] shadow-xl text-[#0F2C59] space-y-4">
                     <p className="text-xs font-black uppercase tracking-widest">Produk Baru</p>
                     <h3 className="text-2xl font-black leading-tight">Kaos Kaki Sport Pro</h3>
                     <button className="text-[10px] font-black uppercase tracking-widest border-b-2 border-[#0F2C59] pb-1">Lihat Sekarang</button>
                  </div>
               </div>
               <div className="space-y-4">
                  <div className="bg-[#0F2C59] p-8 rounded-[3rem] shadow-xl text-white space-y-4">
                     <div className="flex justify-between items-start">
                        <Star size={32} className="text-[#F8DE22]" fill="currentColor" />
                        <span className="text-5xl font-black">10+</span>
                     </div>
                     <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/50">Tahun Pengalaman</p>
                  </div>
                  <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                     <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
                  </div>
               </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-500/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 px-6 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
               <h2 className="text-4xl md:text-5xl font-black text-[#0F2C59] uppercase tracking-tighter">Produk <span className="text-[#F8DE22]">Unggulan</span></h2>
               <p className="text-gray-500 font-medium">Pilihan terbaik kami untuk Anda</p>
            </div>
            <button className="flex items-center gap-2 text-[#0F2C59] font-black text-xs uppercase tracking-widest hover:gap-4 transition-all group">
               Lihat Semua Produk <ArrowRight size={16} className="text-[#F8DE22]" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {products.map((p) => (
              <div key={p.id} className="group bg-white rounded-[2rem] p-4 flex flex-col border border-transparent hover:border-gray-200 transition-all hover:shadow-xl">
                 <div className="aspect-square rounded-[1.5rem] bg-[#F8F9FA] overflow-hidden mb-6 relative">
                    <img src={p.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[#0F2C59] translate-y-12 group-hover:translate-y-0 transition-transform">
                       <ShoppingBag size={18} />
                    </button>
                 </div>
                 <div className="px-2 space-y-2 flex-grow">
                    <h3 className="text-sm font-bold text-[#0F2C59]">{p.name}</h3>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{p.material}</p>
                    <p className="text-lg font-black text-[#0F2C59]">Rp{p.price}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
             <h2 className="text-4xl font-black text-[#0F2C59] uppercase">Kategori Produk</h2>
             <div className="w-20 h-1 bg-[#F8DE22] mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6">
             {categories.map((c, i) => (
               <div key={i} className="group cursor-pointer text-center space-y-4">
                  <div className="aspect-square rounded-3xl bg-[#F8F9FA] flex items-center justify-center text-gray-400 group-hover:bg-[#0F2C59] group-hover:text-white group-hover:scale-110 transition-all shadow-sm">
                     <c.icon size={32} />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-[#0F2C59]">{c.name}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Gallery Design */}
      <section className="py-32 px-6 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl font-black text-[#0F2C59] uppercase">Galeri Desain</h2>
              <p className="text-gray-500">Beragam pilihan desain yang bisa kamu jadikan inspirasi</p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden group relative">
                   <img src={`https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&q=80&w=400&u=${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                   <div className="absolute inset-0 bg-[#0F2C59]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <LayoutGrid size={24} className="text-white" />
                   </div>
                </div>
              ))}
              <div className="aspect-square rounded-2xl bg-[#0F2C59] flex flex-col items-center justify-center text-white p-6 text-center cursor-pointer hover:bg-[#F8DE22] hover:text-[#0F2C59] transition-all group">
                 <LayoutGrid size={24} className="mb-2 group-hover:scale-110 transition-transform" />
                 <p className="text-[10px] font-black uppercase tracking-widest">Lihat Semua Desain</p>
              </div>
           </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-12">
              <div className="space-y-6">
                 <span className="text-[#F8DE22] text-xs font-black uppercase tracking-[0.4em]">Mengapa Kami</span>
                 <h2 className="text-4xl md:text-5xl font-black text-[#0F2C59] leading-tight uppercase">Mengapa Memilih <br /> Socks Indonesia?</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                 {[
                   { icon: Star, value: "10+", label: "Tahun Pengalaman" },
                   { icon: Users, value: "1000+", label: "Klien Terpercaya" },
                   { icon: CheckCircle2, value: "100%", label: "Produksi Dalam Negeri" },
                   { icon: Award, value: "Bahan", label: "Berkualitas" }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6 items-start">
                      <div className="w-12 h-12 rounded-2xl bg-[#F8F9FA] flex items-center justify-center text-[#F8DE22] shrink-0 shadow-sm"><item.icon size={24} /></div>
                      <div>
                         <p className="text-2xl font-black text-[#0F2C59]">{item.value}</p>
                         <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{item.label}</p>
                      </div>
                   </div>
                 ))}
              </div>
              <button className="bg-[#0F2C59] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#F8DE22] hover:text-[#0F2C59] transition-all shadow-xl shadow-blue-900/10">
                 Tentang Kami
              </button>
           </div>
           
           <div className="relative">
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 rounded-full blur-3xl -z-10" />
           </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0F2C59] rounded-[3rem] p-12 md:p-24 overflow-hidden relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
               <img src="https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase">Butuh Kaos Kaki <br /><span className="text-[#F8DE22]">Custom?</span></h2>
              <p className="text-white/60 text-lg font-medium">Kami siap membantu mewujudkan desain kaos kaki sesuai kebutuhan bisnis, event, komunitas, atau brand Anda.</p>
              <button className="bg-[#F8DE22] text-[#0F2C59] px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-2xl shadow-yellow-500/20">
                 Konsultasi Sekarang
              </button>
            </div>
            <div className="relative z-10 grid grid-cols-2 gap-6">
               {[
                 { icon: LayoutGrid, label: "Desain Gratis" },
                 { icon: Settings, label: "Minimal Order Fleksibel" },
                 { icon: ClockIcon, label: "Waktu Produksi Tepat" },
                 { icon: DollarSign, label: "Harga Bersaing" }
               ].map((item, i) => (
                 <div key={i} className="p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 space-y-4">
                    <item.icon size={24} className="text-[#F8DE22]" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-white leading-relaxed">{item.label}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
