"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, 
  Plus, 
  Minus,
  MessageCircle, 
  Phone, 
  CheckCircle, 
  Truck, 
  Star, 
  Utensils, 
  MapPin, 
  Clock as ClockIcon, 
  Camera, 
  Globe, 
  ChevronDown,
  Info,
  Heart,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

// --- DATA ---
const products = [
  { id: 1, name: "Tahu Goreng Original", price: 12000, desc: "Rasa gurih original, cocok untuk semua selera.", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Tahu Goreng Pedas", price: 14000, desc: "Pedas nampol di mulut, makin nikmat!", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Tahu Goreng Daun Jeruk", price: 14000, desc: "Aroma daun jeruk yang wangi dan menggoda.", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Tahu Goreng Isi Keju", price: 16000, desc: "Lumer keju di setiap gigitan, spesial dan creamy!", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" }
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
          <div className="w-12 h-12 bg-[#F9C02E] rounded-2xl flex items-center justify-center text-[#4E342E] shadow-lg shadow-yellow-500/20">
             <Utensils size={24} />
          </div>
          <div>
            <h1 className="text-xl font-black text-[#4E342E] tracking-tight leading-none uppercase">Tahu Goreng</h1>
            <p className="text-[10px] font-bold text-[#F9C02E] tracking-widest uppercase">Gurih & Nagih</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {["Beranda", "Produk", "Cara Pesan", "Tentang Kami", "Kontak"].map((item) => (
            <a key={item} href="#" className="text-sm font-bold text-[#4E342E] hover:text-[#F9C02E] transition-colors">{item}</a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-[#F9C02E] text-[#4E342E] px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#4E342E] hover:text-white transition-all shadow-lg shadow-yellow-500/20 flex items-center gap-2">
            <MessageCircle size={16} fill="currentColor" /> Pesan Sekarang
          </button>
          <button className="lg:hidden p-2 text-[#4E342E]">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#4E342E] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-[#F9C02E] rounded-xl flex items-center justify-center text-[#4E342E]">
                <Utensils size={20} />
             </div>
             <h2 className="text-xl font-black tracking-tighter">TAHU GORENG</h2>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Pilihan tahu goreng terbaik dengan bahan berkualitas dan digoreng fresh setiap hari. Cocok untuk camilan, lauk, atau ide jualan!
          </p>
          <div className="flex gap-4">
            <Camera size={20} className="text-white/60 hover:text-[#F9C02E] cursor-pointer" />
            <Globe size={20} className="text-white/60 hover:text-[#F9C02E] cursor-pointer" />
            <MessageCircle size={20} className="text-white/60 hover:text-[#F9C02E] cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="text-[#F9C02E] font-bold mb-8 uppercase tracking-widest text-sm">Menu</h3>
          <ul className="space-y-4 text-sm text-white/60">
            <li><a href="#" className="hover:text-white transition-colors">Beranda</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Produk</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cara Pesan</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Kontak</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#F9C02E] font-bold mb-8 uppercase tracking-widest text-sm">Informasi</h3>
          <ul className="space-y-4 text-sm text-white/60">
            <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cara Pemesanan</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pengiriman & Pembayaran</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#F9C02E] font-bold mb-8 uppercase tracking-widest text-sm">Hubungi Kami</h3>
          <ul className="space-y-6 text-sm text-white/60">
            <li className="flex items-center gap-4"><Phone size={18} className="text-[#F9C02E]" /> 0812-3456-7890</li>
            <li className="flex items-center gap-4"><Camera size={18} className="text-[#F9C02E]" /> @tahu.goreng.enak</li>
            <li className="flex items-center gap-4"><MapPin size={18} className="text-[#F9C02E]" /> Bandung, Jawa Barat</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 text-center text-xs text-white/40 uppercase tracking-widest">
        © 2024 Tahu Goreng. All rights reserved.
      </div>
    </footer>
  );
};

export default function TahuGoreng() {
  const [quantities, setQuantities] = useState<Record<number, number>>({ 1: 0, 2: 0, 3: 0, 4: 0 });

  const updateQty = (id: number, delta: number) => {
    setQuantities(prev => ({ ...prev, [id]: Math.max(0, prev[id] + delta) }));
  };

  return (
    <div className="bg-[#FFFAF0] text-[#4E342E] font-sans selection:bg-[#F9C02E]/20 selection:text-[#4E342E]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Bricolage+Grotesque:wght@800&display=swap');
        .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-heading { font-family: 'Bricolage Grotesque', sans-serif; }
      `}</style>

      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white rounded-full shadow-sm border border-yellow-100"
            >
              <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center text-[#F9C02E]">
                 <Star size={20} fill="currentColor" />
              </div>
              <span className="text-xs font-black text-[#4E342E] uppercase tracking-widest">100% Puas Dijamin</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-heading text-[#4E342E] leading-none uppercase"
            >
              Tahu Goreng <br />
              <span className="text-[#F9C02E]">Enak, Gurih,</span> <br />
              Nagih!
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg max-w-xl leading-relaxed"
            >
              Tahu goreng pilihan dengan bahan berkualitas dan digoreng fresh setiap hari. Cocok untuk camilan, lauk, atau ide jualan!
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-[#F9C02E]"><CheckCircle size={20} /></div>
                <span className="text-xs font-bold uppercase tracking-widest">Bahan Pilihan</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-[#F9C02E]"><Utensils size={20} /></div>
                <span className="text-xs font-bold uppercase tracking-widest">Digoreng Fresh</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-[#F9C02E]"><Star size={20} /></div>
                <span className="text-xs font-bold uppercase tracking-widest">Renyah & Lembut</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-6"
            >
               <button className="bg-[#4E342E] text-white px-10 py-5 rounded-[2rem] font-black text-sm tracking-widest uppercase hover:bg-[#F9C02E] hover:text-[#4E342E] transition-all shadow-2xl shadow-black/10 flex items-center gap-4">
                 Lihat Produk <ChevronDown size={20} />
               </button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 p-4 bg-white rounded-[3rem] shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200" 
                 alt="Tahu Goreng" 
                 className="w-full h-auto rounded-[2.5rem]"
               />
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F9C02E] rounded-full border-8 border-white flex flex-col items-center justify-center text-[#4E342E] shadow-xl">
                  <p className="text-2xl font-black leading-none">100%</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest">Puas</p>
                  <p className="text-[8px] font-bold uppercase tracking-widest">Dijamin</p>
               </div>
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl z-20 hidden md:block">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-500"><Truck size={24} /></div>
                  <h4 className="font-bold">Pengiriman Cepat</h4>
               </div>
               <p className="text-xs text-gray-400 leading-relaxed max-w-[150px]">Dikirim dalam kondisi hangat ke lokasi Anda.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu List */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-4">
             <h2 className="text-4xl md:text-5xl font-heading text-[#4E342E] uppercase">Pilihan Tahu Goreng</h2>
             <p className="text-gray-500 max-w-2xl mx-auto">Berbagai varian tahu goreng favorit untuk Anda.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((p) => (
              <div key={p.id} className="group bg-[#FFFAF0] rounded-[2.5rem] p-4 flex flex-col hover:shadow-2xl transition-all border border-transparent hover:border-yellow-100">
                 <div className="aspect-square rounded-[2rem] overflow-hidden mb-6 relative">
                    <img src={p.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
                       <Heart size={20} />
                    </button>
                 </div>
                 <div className="px-4 pb-4 space-y-4 flex-grow">
                    <div>
                       <h3 className="text-xl font-bold text-[#4E342E] mb-2">{p.name}</h3>
                       <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{p.desc}</p>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                       <p className="text-xl font-black text-[#4E342E]">Rp{p.price.toLocaleString()} <span className="text-[10px] text-gray-400 font-normal">/ 10 pcs</span></p>
                    </div>
                 </div>
                 <div className="bg-white rounded-2xl p-2 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-4 px-4">
                       <button onClick={() => updateQty(p.id, -1)} className="p-1 hover:text-[#F9C02E] transition-colors"><Minus size={16} /></button>
                       <span className="text-sm font-black w-4 text-center">{quantities[p.id]}</span>
                       <button onClick={() => updateQty(p.id, 1)} className="p-1 hover:text-[#F9C02E] transition-colors"><Plus size={16} /></button>
                    </div>
                    <button className="bg-[#F9C02E] text-[#4E342E] px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#4E342E] hover:text-white transition-all">Tambah</button>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-32 px-6 bg-[#FFFAF0]">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-3">
           <div className="lg:col-span-2 p-10 md:p-16 space-y-12">
              <div className="space-y-4">
                 <h2 className="text-3xl font-heading text-[#4E342E] uppercase">Formulir Pemesanan</h2>
                 <p className="text-gray-500">Lengkapi data Anda untuk memesan tahu goreng favorit.</p>
              </div>
              <form className="space-y-8">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Pilih Produk</label>
                       <div className="relative">
                          <select className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 text-sm focus:bg-white focus:ring-1 focus:ring-yellow-400 outline-none appearance-none">
                             <option>-- Pilih Produk --</option>
                             {products.map(p => <option key={p.id}>{p.name}</option>)}
                          </select>
                          <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Jumlah</label>
                       <div className="flex items-center bg-gray-50 rounded-2xl px-4 py-4 justify-between">
                          <button className="p-1"><Minus size={16} /></button>
                          <span className="text-sm font-black">1</span>
                          <button className="p-1"><Plus size={16} /></button>
                       </div>
                    </div>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Nama Lengkap</label>
                       <input type="text" placeholder="Masukkan nama lengkap Anda" className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 text-sm focus:bg-white focus:ring-1 focus:ring-yellow-400 outline-none" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">No. WhatsApp</label>
                       <input type="text" placeholder="Contoh: 0812xxxxxxxx" className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 text-sm focus:bg-white focus:ring-1 focus:ring-yellow-400 outline-none" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Alamat Pengiriman</label>
                    <textarea placeholder="Masukkan alamat lengkap pengiriman" rows={3} className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 text-sm focus:bg-white focus:ring-1 focus:ring-yellow-400 outline-none resize-none" />
                 </div>
                 <button className="w-full bg-[#F9C02E] text-[#4E342E] py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#4E342E] hover:text-white transition-all shadow-xl shadow-yellow-500/20 flex items-center justify-center gap-3">
                    <ShoppingBag size={18} /> Pesan Sekarang
                 </button>
              </form>
           </div>
           <div className="bg-[#FFF9E5] p-10 md:p-16 space-y-12 flex flex-col justify-between">
              <div className="space-y-8">
                 <h3 className="text-xl font-heading text-[#4E342E] uppercase border-b border-yellow-200 pb-4">Ringkasan Pesanan</h3>
                 <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                       <span className="text-gray-500">Produk</span>
                       <span className="font-bold">-</span>
                    </div>
                    <div className="flex justify-between text-sm">
                       <span className="text-gray-500">Jumlah</span>
                       <span className="font-bold">-</span>
                    </div>
                    <div className="flex justify-between text-sm">
                       <span className="text-gray-500">Harga Satuan</span>
                       <span className="font-bold">-</span>
                    </div>
                    <hr className="border-yellow-200" />
                    <div className="flex justify-between items-center pt-2">
                       <span className="font-black uppercase tracking-widest text-xs">Total</span>
                       <span className="text-3xl font-black text-[#4E342E]">Rp0</span>
                    </div>
                 </div>
              </div>
              <div className="space-y-6">
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#F9C02E] shrink-0 shadow-sm"><ClockIcon size={20} /></div>
                    <p className="text-[10px] text-gray-500 leading-relaxed font-medium">Pesanan akan diproses maksimal 1x24 jam setelah konfirmasi.</p>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#F9C02E] shrink-0 shadow-sm"><CheckCircle size={20} /></div>
                    <p className="text-[10px] text-gray-500 leading-relaxed font-medium">Pembayaran dilakukan saat pesanan diterima (COD) atau via transfer.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Why Us Bottom */}
      <section className="py-32 px-6 bg-white">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
               {[
                 { icon: Heart, title: "Bahan Berkualitas", desc: "Kami menggunakan bahan pilihan yang sehat dan aman dikonsumsi." },
                 { icon: ClockIcon, title: "Digoreng Setiap Hari", desc: "Tahu digoreng fresh setiap hari agar tetap renyah dan gurih." },
                 { icon: Truck, title: "Pengiriman Cepat", desc: "Kami melayani pengiriman cepat dan aman ke lokasi Anda." },
                 { icon: Star, title: "Pelanggan Puas", desc: "Ribuan pelanggan sudah puas dengan tahu goreng kami." }
               ].map((f, i) => (
                 <div key={i} className="text-center space-y-6">
                    <div className="w-20 h-20 bg-[#FFFAF0] rounded-full flex items-center justify-center text-[#F9C02E] mx-auto group-hover:scale-110 transition-transform"><f.icon size={32} /></div>
                    <h4 className="text-xl font-bold">{f.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Contact Bottom */}
      <section className="py-12 px-6 border-t border-gray-100 bg-white">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="flex items-center gap-6 group cursor-pointer">
               <div className="w-16 h-16 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all"><MessageCircle size={32} fill="currentColor" /></div>
               <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Hubungi WhatsApp</p>
                  <p className="text-xl font-black">0812-3456-7890</p>
               </div>
            </div>
            <div className="w-[1px] h-12 bg-gray-100 hidden md:block" />
            <div className="flex items-center gap-6 group cursor-pointer">
               <div className="w-16 h-16 bg-yellow-50 text-[#F9C02E] rounded-2xl flex items-center justify-center group-hover:bg-[#F9C02E] group-hover:text-white transition-all"><MapPin size={32} /></div>
               <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Area Pengiriman</p>
                  <p className="text-xl font-black">Kota Bandung & Sekitarnya</p>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
