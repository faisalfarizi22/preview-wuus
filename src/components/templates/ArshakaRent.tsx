"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  Clock as ClockIcon, 
  Shield, 
  DollarSign, 
  User as UserIcon, 
  Car, 
  CheckCircle, 
  Menu, 
  X, 
  MessageCircle,
  ChevronRight,
  ArrowRight,
  Star,
  Users,
  Settings,
  Mail,
  Camera,
  Globe,
  Video,
  Tag,
} from 'lucide-react';

// --- CONSTANTS ---
const COLORS = {
  primary: "#002D62", // Deep Navy Blue
  secondary: "#FFC107", // Golden Yellow
  background: "#FFFFFF",
  accent: "#F8F9FA", // Light Gray
};

// --- DATA ---
const cars = [
  { 
    id: 1, 
    name: "Toyota Avanza Veloz", 
    type: "Manual / AC / 7 Seat", 
    price: "350.000", 
    image: "/images/arshaka/catalog-avanza.png" 
  },
  { 
    id: 2, 
    name: "Daihatsu Xenia", 
    type: "Manual / AC / 7 Seat", 
    price: "330.000", 
    image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 3, 
    name: "Honda Brio RS", 
    type: "Matic / AC / 5 Seat", 
    price: "300.000", 
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 4, 
    name: "Toyota Innova Reborn", 
    type: "Manual / AC / 7 Seat", 
    price: "550.000", 
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 5, 
    name: "Mitsubishi Xpander", 
    type: "Matic / AC / 7 Seat", 
    price: "500.000", 
    image: "https://images.unsplash.com/photo-1562141989-c5c79ac8f576?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 6, 
    name: "Suzuki Ertiga", 
    type: "Manual / AC / 7 Seat", 
    price: "400.000", 
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800" 
  },
];

const brands = ["Toyota", "Daihatsu", "Honda", "Mitsubishi", "Suzuki", "Nissan", "Hyundai", "Isuzu"];

// --- COMPONENTS ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[70] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-black tracking-tighter" style={{ color: COLORS.primary }}>CV ARSHAKA</h1>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {["Beranda", "Tentang Kami", "Katalog Mobil", "Layanan", "Kontak"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-sm font-semibold transition-colors hover:opacity-70"
              style={{ color: COLORS.primary }}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/6281234567890" 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-white px-6 py-3 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg"
            style={{ backgroundColor: COLORS.primary }}
          >
            <MessageCircle size={18} fill="currentColor" /> 0812-3456-7890
          </a>
          <button 
            className="lg:hidden p-2" 
            style={{ color: COLORS.primary }}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
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
              <h1 className="text-2xl font-black tracking-tighter" style={{ color: COLORS.primary }}>CV ARSHAKA</h1>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={32} style={{ color: COLORS.primary }} />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {["Beranda", "Tentang Kami", "Katalog Mobil", "Layanan", "Kontak"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold"
                  style={{ color: COLORS.primary }}
                >
                  {item}
                </a>
              ))}
              <hr className="border-gray-100" />
              <a 
                href="https://wa.me/6281234567890"
                className="text-white py-5 rounded-2xl text-center font-bold text-lg shadow-xl flex items-center justify-center gap-3"
                style={{ backgroundColor: COLORS.primary }}
              >
                <MessageCircle size={24} fill="currentColor" /> Hubungi WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="pt-20 pb-10" style={{ backgroundColor: COLORS.primary, color: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <h2 className="text-2xl font-black tracking-tighter">CV ARSHAKA</h2>
          <p className="text-blue-100/70 text-sm leading-relaxed font-light">
            Rental mobil terpercaya untuk segala kebutuhan perjalanan Anda. Armada lengkap, harga transparan, dan layanan profesional selama 24 jam.
          </p>
          <div className="flex gap-4">
            {[Camera, Globe, X, Video].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#002D62] transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-6 text-lg" style={{ color: COLORS.secondary }}>Layanan Kami</h3>
          <ul className="space-y-4 text-sm text-blue-100/70 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Sewa Mobil Lepas Kunci</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sewa Mobil + Driver</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sewa Mobil Harian/Mingguan</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sewa Mobil Bulanan</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Antar Jemput Bandara</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-6 text-lg" style={{ color: COLORS.secondary }}>Informasi Kontak</h3>
          <ul className="space-y-4 text-sm text-blue-100/70 font-medium">
            <li className="flex items-start gap-3"><Phone size={18} style={{ color: COLORS.secondary }} className="shrink-0" /> 0812-3456-7890</li>
            <li className="flex items-start gap-3"><Mail size={18} style={{ color: COLORS.secondary }} className="shrink-0" /> info@cvarshaka.com</li>
            <li className="flex items-start gap-3"><MapPin size={18} style={{ color: COLORS.secondary }} className="shrink-0" /> Jl. Raya Contoh No. 123, Kota Bandung, Jawa Barat</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-6 text-lg" style={{ color: COLORS.secondary }}>Jam Operasional</h3>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
             <p className="text-sm mb-2 font-bold opacity-70">Senin - Minggu</p>
             <p className="text-2xl font-black" style={{ color: COLORS.secondary }}>00.00 - 24.00</p>
             <p className="text-[10px] uppercase tracking-widest font-bold mt-4 opacity-50">Layanan 24 Jam Siap Melayani Anda!</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/10 text-center">
        <p className="text-xs text-blue-100/40 uppercase tracking-widest font-bold">© 2026 CV ARSHAKA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default function ArshakaRent() {
  return (
    <div className="bg-white text-[#1C2733] font-sans selection:bg-[#FFC107]/30 selection:text-[#002D62]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        .font-sans { font-family: 'Inter', sans-serif; }
        html { scroll-behavior: smooth; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .hero-curve {
          position: absolute;
          top: 0;
          left: 0;
          width: 55%;
          height: 100%;
          background: #002D62;
          clip-path: url(#hero-mask);
          z-index: -20;
        }
      `}</style>

      <Navbar />
      {/* 2. Hero Section */}
      <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full Background Photo */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/arshaka/hero.png" 
            alt="Toyota Avanza Veloz" 
            className="w-full h-full object-cover object-right lg:object-center scale-110"
          />
          <div className="absolute inset-0 bg-black/20" /> {/* Darken slightly for depth */}
        </div>

        {/* SVG Mask Definition */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="hero-mask-complex" clipPathUnits="objectBoundingBox">
              <path d="M0,0 H0.6 Q0.3,0.5 0.6,1 H0 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* Left Masked Overlay */}
        <div 
          className="absolute inset-0 z-10 w-full lg:w-[120%] h-full bg-[#002D62]/90 backdrop-blur-sm hidden lg:block" 
          style={{ clipPath: 'url(#hero-mask-complex)' }}
        />
        
        {/* Mobile Overlay (Full width, simple) */}
        <div className="absolute inset-0 z-10 bg-[#002D62]/80 backdrop-blur-md lg:hidden" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="space-y-10 py-20">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full shadow-sm border border-white/20"
              >
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: COLORS.secondary }} />
                <span className="text-[10px] font-black uppercase tracking-widest text-white">CV Arshaka Rental</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
              >
                <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-white">
                  Drive Your <br />
                  <span style={{ color: COLORS.secondary }}>Perfect</span> Journey
                </h1>
                <p className="text-blue-50 text-xl max-w-xl leading-relaxed font-medium opacity-80">
                  Premium car rental services in Bandung. Experience the ultimate comfort and reliability with our modern fleet and professional services.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4"
              >
                {[
                  { icon: Shield, label: "Safety First" },
                  { icon: DollarSign, label: "Best Price" },
                  { icon: ClockIcon, label: "24/7 Service" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/90">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20">
                      <item.icon size={18} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider">{item.label}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-8 flex flex-col sm:flex-row gap-4"
              >
                 <a 
                  href="https://wa.me/6281234567890"
                  className="inline-flex items-center justify-center gap-4 px-10 py-5 rounded-2xl font-black text-sm tracking-widest uppercase transition-all shadow-2xl hover:scale-105 active:scale-95 group"
                  style={{ backgroundColor: COLORS.secondary, color: COLORS.primary }}
                 >
                   <MessageCircle size={20} fill="currentColor" /> Pesan via WhatsApp
                 </a>
                 <a 
                  href="#katalog-mobil"
                  className="inline-flex items-center justify-center gap-4 px-10 py-5 rounded-2xl font-black text-sm tracking-widest uppercase transition-all border-2 border-white/30 text-white hover:bg-white hover:text-[#002D62]"
                 >
                   Lihat Armada <ArrowRight size={20} />
                 </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Decorative Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden lg:block"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* 3. Brand Slider */}
      <section className="py-16 bg-white border-y border-gray-50 overflow-hidden">
        <div className="flex items-center gap-20 animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex items-center gap-4 grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer group">
               <span className="text-2xl font-black tracking-tighter" style={{ color: COLORS.primary }}>{brand}</span>
               <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS.secondary }} />
            </div>
          ))}
        </div>
      </section>

      {/* 4. Kenapa Memilih Kami? (Asymmetric Bento Grid) */}
      <section id="layanan" className="py-32 px-6" style={{ backgroundColor: COLORS.accent }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: COLORS.primary }}>Our Excellence</span>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none" style={{ color: COLORS.primary }}>
                Why People <span style={{ color: COLORS.secondary }}>Choose</span> Us
              </h2>
            </div>
            <p className="text-gray-500 max-w-sm font-medium">We deliver more than just a car. We deliver a seamless journey experience with professional care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Card 1 - Large (2x2) */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="md:col-span-2 md:row-span-2 rounded-[40px] p-12 flex flex-col justify-end relative overflow-hidden group shadow-2xl"
              style={{ backgroundColor: COLORS.primary }}
            >
               <img 
                 src="/images/arshaka/bento-armada.png" 
                 className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000" 
                 alt="Fleet"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
               <div className="relative z-10 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white">
                    <Car size={32} />
                  </div>
                  <h3 className="text-4xl font-black text-white">Armada Lengkap</h3>
                  <p className="text-gray-300 max-w-sm text-lg leading-relaxed">Pilihan armada terbaru mulai dari City Car hingga MPV mewah yang selalu dalam kondisi prima.</p>
               </div>
            </motion.div>

            {/* Card 2 - Wide (2x1) */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="md:col-span-2 rounded-[40px] p-10 flex flex-col justify-center relative overflow-hidden group shadow-xl bg-white border border-gray-100"
            >
               <img 
                 src="/images/arshaka/bento-driver.png" 
                 className="absolute top-0 right-0 w-1/2 h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-1000 pointer-events-none" 
                 alt="Driver"
               />
               <div className="relative z-10 space-y-4 max-w-xs">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center" style={{ color: COLORS.primary }}>
                    <UserIcon size={28} />
                  </div>
                  <h3 className="text-2xl font-black" style={{ color: COLORS.primary }}>Driver Profesional</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">Driver ramah dan berpengalaman yang siap mengantar Anda dengan aman.</p>
               </div>
            </motion.div>

            {/* Card 3 - Small (1x1) */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="rounded-[40px] p-10 flex flex-col items-center text-center justify-center space-y-4 shadow-xl bg-white border border-gray-100"
            >
               <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center" style={{ color: COLORS.secondary }}>
                  <Tag size={32} />
               </div>
               <div>
                  <h3 className="text-xl font-black" style={{ color: COLORS.primary }}>Harga Transparan</h3>
                  <p className="text-gray-400 text-sm font-medium">Tanpa biaya tambahan tersembunyi.</p>
               </div>
            </motion.div>

            {/* Card 4 - Small (1x1) */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="rounded-[40px] p-10 flex flex-col justify-center space-y-4 shadow-xl text-white"
              style={{ backgroundColor: COLORS.primary }}
            >
               <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <ClockIcon size={28} />
               </div>
               <div>
                  <h3 className="text-xl font-black">Layanan 24 Jam</h3>
                  <p className="text-blue-100/60 text-sm font-medium leading-relaxed">Support darurat dan pemesanan kapan saja.</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Tentang Kami */}
      <section id="tentang-kami" className="py-32 px-6 bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
               <div className="relative z-10 rounded-[60px] overflow-hidden shadow-2xl">
                  <img 
                    src="/images/arshaka/about-office.png" 
                    alt="CV Arshaka Office" 
                    className="w-full h-auto hover:scale-110 transition-transform duration-1000"
                  />
               </div>
               <div 
                 className="absolute -top-10 -left-10 w-40 h-40 rounded-full blur-[80px] -z-10"
                 style={{ backgroundColor: COLORS.secondary + '30' }}
               />
               <div 
                 className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full blur-[100px] -z-10"
                 style={{ backgroundColor: COLORS.primary + '20' }}
               />
            </motion.div>

            <div className="space-y-12">
               <div className="space-y-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: COLORS.secondary }}>Our Legacy</span>
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none" style={{ color: COLORS.primary }}>About <br />CV Arshaka</h2>
               </div>
               
               <p className="text-gray-500 text-xl leading-relaxed font-medium italic">
                 "Commitment to quality and customer safety is our DNA."
               </p>
               
               <p className="text-gray-600 text-lg leading-relaxed font-medium">
                 Berdiri sejak tahun 2020, kami telah melayani ribuan perjalanan pelanggan dengan standar profesionalisme yang tinggi. Kami percaya bahwa setiap perjalanan memiliki cerita, dan kami ingin menjadi bagian dari cerita indah Anda.
               </p>

               <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4">
                  {[
                    { num: "100+", label: "Armada Unit" },
                    { num: "2.5k", label: "Happy Trips" },
                    { num: "5+", label: "Years Exp" }
                  ].map((stat, i) => (
                    <div key={i} className="space-y-2 group cursor-default">
                       <p className="text-4xl font-black transition-colors group-hover:text-[#FFC107]" style={{ color: COLORS.primary }}>{stat.num}</p>
                       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 6. Katalog Mobil */}
      <section id="katalog-mobil" className="py-32 px-6" style={{ backgroundColor: COLORS.accent }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none" style={{ color: COLORS.primary }}>Our <span style={{ color: COLORS.secondary }}>Fleet</span></h2>
              <p className="text-gray-500 font-medium">Find the perfect ride for your next destination.</p>
            </div>
            <button className="px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all border border-gray-200 hover:border-[#002D62] bg-white shadow-sm">Explore All</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {cars.map((car) => (
              <motion.div 
                key={car.id} 
                whileHover={{ y: -10 }}
                className="group bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-50 flex flex-col"
              >
                 <div className="aspect-[16/10] relative overflow-hidden bg-gray-50 p-8 flex items-center justify-center">
                    <img 
                      src={car.image} 
                      alt={car.name} 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm border border-white/50" style={{ color: COLORS.primary }}>Ready to Drive</div>
                 </div>
                 <div className="p-10 space-y-8 flex-grow flex flex-col justify-between">
                    <div>
                       <h3 className="text-3xl font-black mb-3 leading-none" style={{ color: COLORS.primary }}>{car.name}</h3>
                       <div className="flex items-center gap-4 text-gray-400 text-[11px] font-bold uppercase tracking-widest">
                          <div className="flex items-center gap-1.5"><Settings size={14} /> {car.type.split(' / ')[0]}</div>
                          <div className="flex items-center gap-1.5"><Users size={14} /> {car.type.split(' / ')[2]}</div>
                       </div>
                    </div>
                    
                    <div className="flex justify-between items-end">
                       <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Starting from</p>
                          <p className="text-3xl font-black leading-none" style={{ color: COLORS.primary }}>Rp{car.price}</p>
                       </div>
                       <a 
                          href={`https://wa.me/6281234567890?text=Halo%20CV%20Arshaka,%20saya%20ingin%20memesan%20${car.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-14 h-14 rounded-2xl flex items-center justify-center text-white transition-all shadow-lg hover:scale-110 active:scale-95"
                          style={{ backgroundColor: COLORS.primary }}
                       >
                          <MessageCircle size={24} />
                       </a>
                    </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div 
            className="rounded-[60px] p-16 md:p-32 overflow-hidden relative flex flex-col md:flex-row items-center gap-16 shadow-2xl"
            style={{ backgroundColor: COLORS.primary }}
          >
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
               <img src="/images/arshaka/hero.png" className="w-full h-full object-cover scale-150 rotate-12" alt="Background Car" />
            </div>
            <div className="relative z-10 flex-grow space-y-8 text-center md:text-left">
              <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                Need a Car <br /><span style={{ color: COLORS.secondary }}>Fast?</span>
              </h2>
              <p className="text-blue-100/70 text-xl max-w-xl font-medium mx-auto md:mx-0 leading-relaxed">
                Experience the quickest booking process in the city. Your adventure starts here.
              </p>
            </div>
            <div className="relative z-10 shrink-0">
               <a 
                 href="https://wa.me/6281234567890"
                 className="flex items-center gap-4 px-14 py-7 rounded-3xl font-black text-sm tracking-widest uppercase transition-all shadow-2xl hover:scale-105 active:scale-95"
                 style={{ backgroundColor: COLORS.secondary, color: COLORS.primary }}
               >
                 <MessageCircle size={24} fill="currentColor" /> Chat via WhatsApp
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/6281234567890" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] w-20 h-20 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform group"
      >
        <MessageCircle size={36} fill="currentColor" />
        <span className="absolute right-full mr-6 bg-white text-[#1C2733] px-6 py-3 rounded-2xl text-[11px] font-bold shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100 uppercase tracking-widest">
          Customer Support
        </span>
      </a>

      <Footer />
    </div>
  );
}
