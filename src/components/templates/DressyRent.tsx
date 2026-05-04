"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  Filter,
  Camera,
  Globe,
  MessageCircle,
  ChevronDown,
  Info,
  CreditCard,
  Truck,
  Clock as ClockIcon,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';

// --- CONSTANTS ---
const COLORS = {
  primary: "#D57E7E",
  primaryHover: "#C46B6B",
  secondary: "#FDF7F7",
  text: "#1C2733",
  textLight: "#6B7280",
  border: "#E5E7EB"
};

type PageType = 'Home' | 'Catalog' | 'HowTo' | 'FAQ' | 'About';

// --- DATA ---
const dresses = [
  {
    id: 1,
    name: "Gaun Pesta Elegan",
    category: "Formal",
    price: "250.000",
    size: "M, L",
    color: "Maroon",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Gaun Maxi Satin",
    category: "Formal",
    price: "200.000",
    size: "S, M, L",
    color: "Navy",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Gaun Brokat Premium",
    category: "Formal",
    price: "275.000",
    size: "M, L",
    color: "Dusty Pink",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Gaun Wedding Guest",
    category: "Semi Formal",
    price: "225.000",
    size: "S, M, L",
    color: "Gold",
    image: "https://images.unsplash.com/photo-1539008835270-29738b44b416?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "Gaun Tulle Floral",
    category: "Casual",
    price: "150.000",
    size: "S, M",
    color: "Sage Green",
    image: "https://images.unsplash.com/photo-1572804013307-a9a111ddae26?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    name: "Kebaya Modern",
    category: "Kebaya",
    price: "180.000",
    size: "S, M, L, XL",
    color: "Peach",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80&w=800"
  }
];

// --- COMPONENTS ---

const Navbar = ({ activePage, setPage }: { activePage: PageType, setPage: (p: PageType) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string, value: PageType }[] = [
    { label: "Beranda", value: "Home" },
    { label: "Katalog", value: "Catalog" },
    { label: "Cara Sewa", value: "HowTo" },
    { label: "FAQ", value: "FAQ" },
    { label: "Tentang Kami", value: "About" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-[70] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('Home')}>
          <div className="w-10 h-10 bg-[#D57E7E] rounded-full flex items-center justify-center">
            <ShoppingBag className="text-white" size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-[#1C2733]">DressyRent</h1>
            <p className="text-[8px] uppercase tracking-widest text-[#D57E7E] font-semibold -mt-1">Sewa Gaun, Tampil Percaya Diri</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button 
              key={item.value}
              onClick={() => setPage(item.value)}
              className={`text-sm font-medium transition-colors hover:text-[#D57E7E] ${activePage === item.value ? 'text-[#D57E7E]' : 'text-gray-600'}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:text-[#D57E7E] transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:text-[#D57E7E] transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute top-0 right-0 w-4 h-4 bg-[#D57E7E] text-white text-[10px] rounded-full flex items-center justify-center">3</span>
          </button>
          <button 
            onClick={() => setPage('Catalog')}
            className="hidden lg:flex items-center gap-2 bg-[#D57E7E] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#C46B6B] transition-all shadow-lg shadow-[#D57E7E]/20"
          >
            Sewa Sekarang
          </button>
          <button className="md:hidden p-2 text-gray-600" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed inset-0 bg-white z-[80] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <h1 className="text-2xl font-bold text-[#1C2733]">DressyRent</h1>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={28} className="text-gray-600" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button 
                  key={item.value}
                  onClick={() => { setPage(item.value); setMobileMenuOpen(false); }}
                  className="text-xl font-bold text-gray-800 text-left"
                >
                  {item.label}
                </button>
              ))}
              <hr className="border-gray-100" />
              <button className="bg-[#D57E7E] text-white py-4 rounded-xl text-lg font-bold shadow-lg">
                Sewa Sekarang
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setPage }: { setPage: (p: PageType) => void }) => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#D57E7E] rounded-full flex items-center justify-center">
              <ShoppingBag className="text-white" size={16} />
            </div>
            <h2 className="text-xl font-bold text-[#1C2733]">DressyRent</h2>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Solusi terbaik untuk kebutuhan gaunmu. Tersedia berbagai gaun untuk berbagai acara spesial dengan kualitas terbaik.
          </p>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#D57E7E] hover:border-[#D57E7E] transition-all cursor-pointer"><Camera size={16} /></div>
            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#D57E7E] hover:border-[#D57E7E] transition-all cursor-pointer"><Globe size={16} /></div>
            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#D57E7E] hover:border-[#D57E7E] transition-all cursor-pointer"><MessageCircle size={16} /></div>
          </div>
        </div>

        <div>
          <h3 className="text-[#1C2733] font-bold mb-6">Informasi</h3>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><button onClick={() => setPage('About')} className="hover:text-[#D57E7E] transition-colors">Tentang Kami</button></li>
            <li><button className="hover:text-[#D57E7E] transition-colors">Kebijakan Privasi</button></li>
            <li><button className="hover:text-[#D57E7E] transition-colors">Syarat & Ketentuan</button></li>
            <li><button className="hover:text-[#D57E7E] transition-colors">Pengembalian & Refund</button></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#1C2733] font-bold mb-6">Bantuan</h3>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><button onClick={() => setPage('FAQ')} className="hover:text-[#D57E7E] transition-colors">FAQ</button></li>
            <li><button onClick={() => setPage('HowTo')} className="hover:text-[#D57E7E] transition-colors">Cara Sewa</button></li>
            <li><button className="hover:text-[#D57E7E] transition-colors">Pengiriman</button></li>
            <li><button className="hover:text-[#D57E7E] transition-colors">Hubungi Kami</button></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#1C2733] font-bold mb-6">Metode Pembayaran</h3>
          <div className="grid grid-cols-4 gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <div key={i} className="aspect-[3/2] bg-gray-50 rounded border border-gray-100 flex items-center justify-center">
                <CreditCard size={20} className="text-gray-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-[0.2em]">© 2024 DressyRent. All rights reserved.</p>
        <div className="flex items-center gap-8 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
           <div className="flex items-center gap-2"><Phone size={12} /> 0812-3456-7890</div>
           <div className="flex items-center gap-2"><Mail size={12} /> hello@dressyrent.com</div>
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FDF7F7] z-0 hidden lg:block" />
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDF7F7] text-[#D57E7E] border border-[#D57E7E]/20"
            >
              <Star size={14} className="fill-[#D57E7E]" />
              <span className="text-xs font-bold uppercase tracking-widest">Premium Dress Rental</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-[#1C2733] leading-[1.1]"
            >
              Temukan Gaun Impianmu <br />
              <span className="text-[#D57E7E] font-serif italic font-light">Untuk Setiap Momen Spesial</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-lg max-w-xl leading-relaxed"
            >
              Sewa gaun berkualitas dengan berbagai pilihan model, warna dan ukuran untuk acara spesialmu. Tampil memukau tanpa harus mahal.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button 
                onClick={() => setPage('Catalog')}
                className="bg-[#D57E7E] text-white px-10 py-5 rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-[#C46B6B] transition-all shadow-2xl shadow-[#D57E7E]/30 flex items-center justify-center gap-3 group"
              >
                Lihat Katalog Gaun <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-4 px-6 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
                 <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                    <Star size={20} fill="currentColor" />
                 </div>
                 <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Mulai Dari</p>
                    <p className="text-lg font-bold text-[#1C2733]">Rp150.000 <span className="text-xs font-normal text-gray-400">/hari</span></p>
                 </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-10 pt-12 border-t border-gray-100"
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-[#1C2733]">700+</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Koleksi Gaun</p>
              </div>
              <div className="w-[1px] h-10 bg-gray-100" />
              <div className="text-center">
                <p className="text-2xl font-bold text-[#1C2733]">15k+</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Happy Clients</p>
              </div>
              <div className="w-[1px] h-10 bg-gray-100" />
              <div className="text-center">
                <p className="text-2xl font-bold text-[#1C2733]">4.9</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Rating App</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(213,126,126,0.3)]">
              <img 
                src="https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=1200" 
                alt="Woman in dress" 
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl z-20 max-w-[200px]">
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-xs font-bold text-[#1C2733]">Ready Stock</p>
               </div>
               <p className="text-[10px] text-gray-500 leading-relaxed">Tersedia berbagai pilihan model yang siap pakai untuk acaramu hari ini.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories / Quick Features */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
             <h2 className="text-3xl md:text-4xl font-bold text-[#1C2733]">Mengapa Memilih DressyRent?</h2>
             <p className="text-gray-500 max-w-2xl mx-auto">Kami memberikan layanan terbaik untuk memastikan Anda tampil mempesona di setiap momen berharga.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShoppingBag, title: "Pilihan Lengkap", desc: "Tersedia lebih dari 700 koleksi gaun dari berbagai brand dan desainer ternama." },
              { icon: Star, title: "Kualitas Premium", desc: "Setiap gaun dirawat secara profesional untuk menjamin kebersihan dan kualitas kain." },
              { icon: ClockIcon, title: "Proses Cepat", desc: "Pemesanan mudah melalui website dan pengiriman cepat ke lokasi Anda." }
            ].map((f, i) => (
              <div key={i} className="p-10 rounded-[2rem] bg-[#FDF7F7] border border-transparent hover:border-[#D57E7E]/20 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#D57E7E] mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <f.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#1C2733] mb-4">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-[#F9FAFB] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4 text-left">
               <span className="text-[#D57E7E] text-xs font-bold uppercase tracking-[0.3em]">Koleksi Terbaru</span>
               <h2 className="text-4xl md:text-5xl font-bold text-[#1C2733]">Gaun Pilihan Untukmu</h2>
            </div>
            <button 
              onClick={() => setPage('Catalog')}
              className="flex items-center gap-2 text-[#D57E7E] font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all"
            >
              Lihat Semua <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {dresses.slice(0, 3).map((dress) => (
              <div key={dress.id} className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img src={dress.image} alt={dress.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 right-6">
                    <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
                      <Heart size={20} />
                    </button>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                     <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl flex justify-between items-center transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500 shadow-lg">
                        <button className="flex-grow text-center text-[#D57E7E] font-bold text-xs uppercase tracking-widest">Detail Gaun</button>
                        <div className="w-[1px] h-4 bg-gray-200" />
                        <button className="flex-grow text-center text-[#1C2733] font-bold text-xs uppercase tracking-widest">Sewa</button>
                     </div>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-1">{dress.category}</p>
                      <h3 className="text-xl font-bold text-[#1C2733]">{dress.name}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Harga Sewa</p>
                      <p className="text-lg font-bold text-[#D57E7E]">Rp{dress.price}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2">
                     <span className="text-[10px] bg-gray-50 text-gray-500 px-3 py-1.5 rounded-full border border-gray-100 uppercase font-bold tracking-widest">{dress.size}</span>
                     <span className="text-[10px] bg-gray-50 text-gray-500 px-3 py-1.5 rounded-full border border-gray-100 uppercase font-bold tracking-widest">{dress.color}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-[#1C2733]">Mudahnya Sewa di DressyRent</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 relative">
              {/* Connector line for desktop */}
              <div className="absolute top-10 left-[15%] right-[15%] h-[1px] bg-dashed-gray hidden lg:block border-t border-dashed border-gray-200" />
              
              {[
                { step: "01", icon: Search, title: "Pilih Gaun", desc: "Cari dan pilih gaun favoritmu dari koleksi eksklusif kami." },
                { step: "02", icon: Calendar, title: "Pilih Tanggal", desc: "Tentukan tanggal acara dan durasi sewa yang Anda inginkan." },
                { step: "03", icon: Info, title: "Isi Data", desc: "Lengkapi data pengiriman dan pilih metode pembayaran." },
                { step: "04", icon: CreditCard, title: "Pembayaran", desc: "Lakukan pembayaran aman melalui berbagai pilihan metode." },
                { step: "05", icon: Truck, title: "Pengiriman", desc: "Gaun akan dikirim ke lokasimu dalam kondisi bersih dan rapi." },
                { step: "06", icon: CheckCircle2, title: "Selesai!", desc: "Tampil memukau di acaramu dan kembalikan gaun setelah selesai." }
              ].map((s, i) => (
                <div key={i} className="text-center relative">
                   <div className="w-20 h-20 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center mx-auto mb-8 relative z-10 shadow-sm group-hover:border-[#D57E7E] transition-all">
                      <s.icon size={28} className="text-[#D57E7E]" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#D57E7E] text-white rounded-full flex items-center justify-center text-xs font-bold border-4 border-white">{s.step}</div>
                   </div>
                   <h3 className="text-xl font-bold text-[#1C2733] mb-3">{s.title}</h3>
                   <p className="text-gray-500 text-sm leading-relaxed max-w-[250px] mx-auto">{s.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#1C2733] rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
               <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 max-w-2xl space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">Siap Tampil <span className="text-[#D57E7E]">Memukau</span> di Hari Istimewamu?</h2>
              <p className="text-gray-400 text-lg">Jangan lewatkan kesempatan untuk mengenakan gaun impianmu. Pesan sekarang untuk mengamankan slot tanggalmu!</p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => setPage('Catalog')}
                  className="bg-[#D57E7E] text-white px-10 py-5 rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-[#C46B6B] transition-all shadow-xl shadow-[#D57E7E]/20"
                >
                  Sewa Sekarang
                </button>
                <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-all">
                  <MessageCircle size={20} /> Tanya Lewat WA
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const CatalogPage = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const categories = ["Semua", "Formal", "Semi Formal", "Casual", "Kebaya", "Wedding"];

  return (
    <div className="pt-32 pb-24 px-6 bg-[#F9FAFB] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
           <h1 className="text-4xl md:text-5xl font-bold text-[#1C2733]">Katalog Gaun</h1>
           <p className="text-gray-500">Temukan berbagai koleksi gaun terbaik kami untuk momen berharga Anda.</p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
             {categories.map(cat => (
               <button 
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`px-6 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap
                   ${activeCategory === cat 
                     ? 'bg-[#1C2733] text-white shadow-md' 
                     : 'text-gray-500 hover:bg-gray-50 hover:text-[#D57E7E]'
                   }`}
               >
                 {cat}
               </button>
             ))}
           </div>
           <div className="relative w-full md:w-[300px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Cari gaun..." 
                className="w-full bg-gray-50 border border-transparent rounded-2xl pl-12 pr-6 py-3 text-sm focus:bg-white focus:ring-1 focus:ring-[#D57E7E]/30 transition-all"
              />
           </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {dresses.map((dress) => (
             <motion.div 
               layout
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               key={dress.id} 
               className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
             >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img src={dress.image} alt={dress.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4">
                    <button className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
                      <Heart size={16} />
                    </button>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                     <button className="w-full bg-[#1C2733] text-white py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-lg">Lihat Detail</button>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-bold text-[#1C2733] line-clamp-1">{dress.name}</h3>
                    <p className="text-xs font-bold text-[#D57E7E]">Rp{dress.price}</p>
                  </div>
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{dress.category}</span>
                     <div className="flex gap-1">
                        <span className="w-3 h-3 rounded-full bg-red-800" />
                        <span className="w-3 h-3 rounded-full bg-blue-900" />
                        <span className="w-3 h-3 rounded-full bg-pink-300" />
                     </div>
                  </div>
                </div>
             </motion.div>
           ))}
        </div>

        <div className="flex justify-center pt-12">
           <button className="bg-white border border-gray-200 text-gray-500 px-10 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:border-[#D57E7E] hover:text-[#D57E7E] transition-all">Muat Lebih Banyak</button>
        </div>
      </div>
    </div>
  );
};

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: "Bagaimana cara menyewa gaun?", a: "Pilih gaun di katalog, tentukan tanggal, isi data pengiriman, dan lakukan pembayaran. Gaun akan dikirim ke alamat Anda." },
    { q: "Apakah bisa sewa tanpa login?", a: "Ya, Anda bisa menyewa sebagai tamu, namun kami sarankan membuat akun untuk melacak pesanan lebih mudah." },
    { q: "Kapan saya akan menerima konfirmasi?", a: "Konfirmasi akan dikirim melalui Email dan WhatsApp segera setelah pembayaran berhasil diverifikasi." },
    { q: "Apa yang terjadi jika gaun rusak atau kotor?", a: "Kotoran ringan (noda makanan/debu) sudah termasuk dalam biaya perawatan. Namun kerusakan berat (robek/hilang) akan dikenakan biaya perbaikan atau ganti rugi sesuai ketentuan." },
    { q: "Berapa lama durasi sewa biasanya?", a: "Durasi sewa standar adalah 3 hari. Anda bisa menambah durasi dengan biaya tambahan harian." }
  ];

  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen flex flex-col items-center">
       <div className="max-w-3xl w-full space-y-12">
          <div className="text-center space-y-4">
             <h1 className="text-4xl font-bold text-[#1C2733]">Pertanyaan Umum</h1>
             <p className="text-gray-500">Semua yang perlu Anda ketahui tentang layanan sewa kami.</p>
          </div>

          <div className="space-y-4">
             {faqs.map((faq, i) => (
               <div key={i} className="border border-gray-100 rounded-3xl overflow-hidden">
                  <button 
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full p-8 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-[#1C2733]">{faq.q}</span>
                    <ChevronDown className={`text-gray-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} size={20} />
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-8 pt-0 text-gray-500 text-sm leading-relaxed border-t border-gray-50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
               </div>
             ))}
          </div>
       </div>
    </div>
  );
};

// --- MAIN TEMPLATE COMPONENT ---

export default function DressyRent() {
  const [activePage, setActivePage] = useState<PageType>('Home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activePage]);

  return (
    <div className="bg-white text-[#1C2733] font-sans selection:bg-[#D57E7E]/20 selection:text-[#D57E7E]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>

      <Navbar activePage={activePage} setPage={setActivePage} />
      
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
            {activePage === 'Catalog' && <CatalogPage />}
            {activePage === 'FAQ' && <FAQPage />}
            {activePage === 'HowTo' && (
              <div className="pt-32 pb-24 text-center">
                 <h1 className="text-4xl font-bold">Halaman Cara Sewa</h1>
                 <p className="text-gray-500 mt-4">Konten sedang dalam proses...</p>
                 <button onClick={() => setActivePage('Home')} className="mt-8 text-[#D57E7E] font-bold">Kembali ke Beranda</button>
              </div>
            )}
            {activePage === 'About' && (
              <div className="pt-32 pb-24 text-center">
                 <h1 className="text-4xl font-bold">Tentang Kami</h1>
                 <p className="text-gray-500 mt-4">Kami adalah penyedia layanan sewa gaun terbaik...</p>
                 <button onClick={() => setActivePage('Home')} className="mt-8 text-[#D57E7E] font-bold">Kembali ke Beranda</button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setPage={setActivePage} />
    </div>
  );
}
