"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ShoppingBag, 
  User, 
  Heart, 
  Menu, 
  X, 
  ArrowRight, 
  ChevronRight, 
  Star, 
  MapPin, 
  Truck, 
  ShieldCheck, 
  Clock, 
  Plus, 
  Minus, 
  Trash2, 
  ChevronLeft,
  BookOpen,
  Camera,
  Globe,
  MessageCircle,
  Mail,
  ArrowLeft,
  Clock as ClockIcon
} from 'lucide-react';

// --- TYPES ---
type PageType = 'Collection' | 'Detail' | 'Journal' | 'Cart' | 'Checkout' | 'Success';

// --- DATA ---
const collections = [
  { id: 1, name: "The Sumba Collection", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "The Java Collection", img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "The Bali Collection", img: "https://images.unsplash.com/photo-1590736704728-f4730bb3c3af?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "The Sumatra Collection", img: "https://images.unsplash.com/photo-1528459061998-5645adbee61a?auto=format&fit=crop&q=80&w=800" }
];

const journalPosts = [
  { id: 1, title: "Proses Pewarnaan Alami Indigo", date: "12 Mei 2024", tag: "Teknik", img: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Songket Palembang: Kemewahan Dalam Setiap Benang", date: "5 Mei 2024", tag: "Warisan", img: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Perjalanan ke Kampung Tenun Baduy", date: "28 April 2024", tag: "Perjalanan", img: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=800" }
];

const mainProduct = {
  name: "Tenun Ikat Sumba Prai Hingi",
  price: "Rp8.750.000",
  priceNum: 8750000,
  desc: "Tenun Ikat Sumba ini ditenun secara tradisional menggunakan benang katun alami dan pewarna alami dari tumbuhan indigofera, mengkudu, dan mentudu. Motif Prai Hingi melambangkan status dan kehormatan dalam budaya Sumba.",
  specs: [
    { label: "Asal", value: "Sumba, Nusa Tenggara Timur" },
    { label: "Teknik", value: "Ikat Pakan" },
    { label: "Bahan", value: "Katun Alami" },
    { label: "Ukuran", value: "210 x 110 cm" },
    { label: "Pewarna", value: "Alami" }
  ],
  gallery: [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1590736704728-f4730bb3c3af?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1528459061998-5645adbee61a?auto=format&fit=crop&q=80&w=800"
  ]
};

// --- COMPONENTS ---

const Navbar = ({ setPage, cartCount }: { setPage: (p: PageType) => void, cartCount: number }) => {
  return (
    <nav className="fixed top-0 w-full z-[70] bg-white/80 backdrop-blur-md border-b border-gray-100 py-6 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-12">
          <div className="cursor-pointer" onClick={() => setPage('Collection')}>
            <h1 className="text-2xl font-black tracking-[0.2em] text-[#1A1A1A] uppercase">Kain</h1>
            <p className="text-[10px] font-bold tracking-[0.5em] text-[#C5A059] uppercase -mt-1">Nusantara</p>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            {['Katalog', 'Koleksi', 'Cerita', 'Tentang Kami', 'Jurnal'].map((item) => (
              <button 
                key={item} 
                onClick={() => {
                  if (item === 'Koleksi') setPage('Collection');
                  if (item === 'Jurnal') setPage('Journal');
                  if (item === 'Katalog') setPage('Detail');
                }}
                className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#1A1A1A] transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-gray-400 hover:text-[#1A1A1A] transition-colors"><Search size={20} /></button>
          <button className="text-gray-400 hover:text-[#1A1A1A] transition-colors"><User size={20} /></button>
          <button 
            onClick={() => setPage('Cart')}
            className="text-[#1A1A1A] flex items-center gap-2 group relative"
          >
            <ShoppingBag size={20} />
            <span className="text-[10px] font-black uppercase tracking-widest hidden sm:block">Tas Belanja</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#C5A059] text-white text-[8px] rounded-full flex items-center justify-center font-black">{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

// --- SUB-PAGES ---

const CollectionPage = ({ setPage }: { setPage: (p: PageType) => void }) => (
  <div className="space-y-24">
    <header className="text-center space-y-6 pt-32">
       <span className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.4em] block">Arsip Budaya</span>
       <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#1A1A1A] uppercase">Koleksi Warisan Nusantara</h1>
       <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">Koleksi kurasi dari berbagai penjuru Nusantara yang merepresentasikan keragaman budaya, teknik, dan keindahan abadi.</p>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 max-w-[1400px] mx-auto">
      {collections.map((c) => (
        <div key={c.id} className="relative aspect-[16/9] group overflow-hidden rounded-2xl cursor-pointer" onClick={() => setPage('Detail')}>
           <img src={c.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
           <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
           <div className="absolute bottom-10 left-10 space-y-2">
              <h3 className="text-2xl font-black text-white uppercase tracking-wider">{c.name}</h3>
              <button className="flex items-center gap-2 text-white/70 text-[10px] font-black uppercase tracking-widest group-hover:text-white transition-colors">Lihat Koleksi <ArrowRight size={14} /></button>
           </div>
        </div>
      ))}
    </div>

    <div className="bg-[#1A1A1A] text-white py-32 px-6">
       <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Limited Edition & Heritage Pieces</h2>
          <div className="aspect-video rounded-3xl overflow-hidden grayscale opacity-50">
             <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover" />
          </div>
          <button onClick={() => setPage('Detail')} className="bg-[#C5A059] text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all">Eksplor Sekarang</button>
       </div>
    </div>
  </div>
);

const DetailPage = ({ setPage, addToCart }: { setPage: (p: PageType) => void, addToCart: () => void }) => (
  <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
     <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-12">
        <button onClick={() => setPage('Collection')}>Koleksi</button>
        <ChevronRight size={12} />
        <span className="text-[#1A1A1A]">Tenun Ikat Sumba</span>
     </div>

     <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
           {mainProduct.gallery.map((img, i) => (
             <div key={i} className={`rounded-2xl overflow-hidden ${i === 0 ? 'md:col-span-2' : ''}`}>
                <img src={img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
             </div>
           ))}
        </div>
        <div className="lg:col-span-5 space-y-10">
           <div className="space-y-4">
              <span className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.4em]">Tenun Ikat</span>
              <h1 className="text-4xl font-black text-[#1A1A1A] uppercase leading-tight">{mainProduct.name}</h1>
              <p className="text-2xl font-black text-[#1A1A1A]">{mainProduct.price}</p>
           </div>

           <p className="text-gray-500 text-sm leading-relaxed">{mainProduct.desc}</p>

           <div className="grid grid-cols-2 gap-y-6 pt-6 border-t border-gray-100">
              {mainProduct.specs.map((s) => (
                <div key={s.label}>
                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">{s.label}</p>
                   <p className="text-xs font-black text-[#1A1A1A]">{s.value}</p>
                </div>
              ))}
           </div>

           <div className="space-y-6 pt-10">
              <div className="flex items-center gap-4">
                 <div className="flex items-center bg-gray-50 rounded-xl px-6 py-4 gap-8">
                    <button className="text-gray-400 hover:text-[#1A1A1A]"><Minus size={16} /></button>
                    <span className="text-sm font-black">1</span>
                    <button className="text-gray-400 hover:text-[#1A1A1A]"><Plus size={16} /></button>
                 </div>
                 <button onClick={addToCart} className="flex-grow bg-[#1A1A1A] text-white py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-all shadow-xl shadow-black/10">
                    Tambah ke Tas
                 </button>
              </div>
              <button className="w-full border border-gray-200 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:border-[#1A1A1A] transition-all flex items-center justify-center gap-2">
                 <Heart size={16} /> Simpan untuk Nanti
              </button>
           </div>

           <div className="bg-gray-50 p-8 rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                 <img src="https://i.pravatar.cc/150?u=martha" className="w-10 h-10 rounded-full grayscale" />
                 <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Ditenun oleh</p>
                    <h4 className="text-xs font-black text-[#1A1A1A]">Martha Wulla</h4>
                    <p className="text-[10px] text-gray-500">Pengrajin Tenun Sumba</p>
                 </div>
              </div>
              <button className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest border-b border-[#C5A059]/20 pb-1">Lihat Profil <ArrowRight size={12} className="inline ml-1" /></button>
           </div>
        </div>
     </div>
  </div>
);

const JournalPage = () => (
  <div className="pt-32 pb-24 space-y-24">
    <header className="text-center space-y-6 px-6">
       <span className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.4em] block">The Archivist's Journal</span>
       <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#1A1A1A] uppercase">Cerita dari Para Penjaga Warisan</h1>
       <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">Jelajahi kisah, tradisi, dan proses di balik setiap helai kain yang kami kurasi. Setiap motif punya cerita.</p>
    </header>

    <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 gap-20">
       <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden group cursor-pointer">
          <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
          <div className="absolute inset-0 bg-[#1A1A1A]/40 group-hover:bg-[#1A1A1A]/20 transition-all" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 space-y-6">
             <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight max-w-2xl leading-tight">Di Balik Motif Kuda Sumba</h3>
             <p className="text-white/80 max-w-xl text-sm leading-relaxed hidden md:block">Kuda bukan hanya hewan tunggangan. Ia adalah simbol status, kekuatan, dan perjalanan spiritual dalam budaya Sumba.</p>
             <button className="text-white text-[10px] font-black uppercase tracking-widest border-b-2 border-white pb-2 hover:text-[#C5A059] hover:border-[#C5A059] transition-all">Baca Selengkapnya</button>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {journalPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer space-y-6">
               <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <img src={post.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
               </div>
               <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                     <span className="text-[#C5A059]">{post.tag}</span>
                     <span className="text-gray-400">{post.date}</span>
                  </div>
                  <h4 className="text-xl font-black text-[#1A1A1A] uppercase leading-tight group-hover:text-[#C5A059] transition-colors">{post.title}</h4>
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#1A1A1A] pt-4 group-hover:gap-4 transition-all">Mulai Membaca <ArrowRight size={14} /></button>
               </div>
            </div>
          ))}
       </div>
    </div>
  </div>
);

const CartPage = ({ setPage, items, removeItem }: { setPage: (p: PageType) => void, items: any[], removeItem: () => void }) => (
  <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1200px] mx-auto space-y-16">
     <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <h1 className="text-3xl font-black text-[#1A1A1A] uppercase tracking-tight">Tas Belanja ({items.length})</h1>
        <button onClick={() => setPage('Collection')} className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#1A1A1A] transition-colors">Lanjut Belanja</button>
     </div>

     <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-8">
           {items.length === 0 ? (
             <div className="text-center py-20 space-y-6">
                <ShoppingBag size={48} className="mx-auto text-gray-200" />
                <p className="text-gray-400 font-black uppercase tracking-widest">Tas Belanja Anda Kosong</p>
                <button onClick={() => setPage('Collection')} className="bg-[#1A1A1A] text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest">Eksplor Koleksi</button>
             </div>
           ) : (
             items.map((item, i) => (
               <div key={i} className="flex gap-8 border-b border-gray-50 pb-8 last:border-0 group">
                  <div className="w-32 h-40 rounded-xl overflow-hidden shrink-0">
                     <img src={item.img} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow space-y-4">
                     <div className="flex justify-between items-start">
                        <div>
                           <h4 className="text-lg font-black text-[#1A1A1A] uppercase">{item.name}</h4>
                           <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Sumba, NTT • Katun Alami</p>
                        </div>
                        <p className="text-lg font-black text-[#1A1A1A]">{item.price}</p>
                     </div>
                     <div className="flex justify-between items-center pt-8">
                        <div className="flex items-center bg-gray-50 rounded-lg px-4 py-2 gap-6">
                           <button className="text-gray-400 hover:text-[#1A1A1A]"><Minus size={14} /></button>
                           <span className="text-xs font-black">1</span>
                           <button className="text-gray-400 hover:text-[#1A1A1A]"><Plus size={14} /></button>
                        </div>
                        <button onClick={removeItem} className="text-gray-300 hover:text-red-500 transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                           <Trash2 size={14} /> Hapus
                        </button>
                     </div>
                  </div>
               </div>
             ))
           )}
        </div>
        <div className="lg:col-span-4">
           <div className="bg-gray-50 p-10 rounded-[2.5rem] space-y-8">
              <h3 className="text-xl font-black text-[#1A1A1A] uppercase tracking-tight">Ringkasan Pesanan</h3>
              <div className="space-y-4">
                 <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
                    <span>Subtotal ({items.length} item)</span>
                    <span>Rp{items.length * 8750000}</span>
                 </div>
                 <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
                    <span>Ongkos Kirim</span>
                    <span>Hitung di Checkout</span>
                 </div>
                 <hr className="border-gray-200" />
                 <div className="flex justify-between items-center pt-4">
                    <span className="text-xs font-black uppercase tracking-widest text-[#1A1A1A]">Total Estimasi</span>
                    <span className="text-2xl font-black text-[#1A1A1A]">Rp{items.length * 8750000}</span>
                 </div>
              </div>
              <button 
                onClick={() => setPage('Checkout')}
                disabled={items.length === 0}
                className="w-full bg-[#1A1A1A] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#C5A059] transition-all shadow-xl shadow-black/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                 Lanjut ke Pembayaran
              </button>
           </div>
        </div>
     </div>
  </div>
);

const CheckoutPage = ({ setPage, items, finishOrder }: { setPage: (p: PageType) => void, items: any[], finishOrder: () => void }) => (
  <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1200px] mx-auto space-y-16">
     <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-gray-100 pb-8">
        <h1 className="text-3xl font-black text-[#1A1A1A] uppercase tracking-tight">Checkout</h1>
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-2 opacity-100"><span className="w-6 h-6 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center text-[10px] font-bold">1</span> <span className="text-[10px] font-black uppercase tracking-widest">Pengiriman</span></div>
           <div className="w-12 h-[1px] bg-gray-200" />
           <div className="flex items-center gap-2 opacity-30"><span className="w-6 h-6 bg-gray-200 text-[#1A1A1A] rounded-full flex items-center justify-center text-[10px] font-bold">2</span> <span className="text-[10px] font-black uppercase tracking-widest">Pembayaran</span></div>
        </div>
     </div>

     <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-12">
           <div className="space-y-8">
              <h3 className="text-xl font-black text-[#1A1A1A] uppercase tracking-tight flex items-center gap-3"><MapPin size={20} className="text-[#C5A059]" /> Alamat Pengiriman</h3>
              <form className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Nama Lengkap" className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 text-sm focus:ring-1 focus:ring-[#C5A059] outline-none" />
                    <input type="text" placeholder="Nomor WhatsApp" className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 text-sm focus:ring-1 focus:ring-[#C5A059] outline-none" />
                 </div>
                 <textarea placeholder="Alamat Lengkap (Jl, No Rumah, RT/RW, Kec)" rows={3} className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 text-sm focus:ring-1 focus:ring-[#C5A059] outline-none resize-none" />
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <select className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 text-sm outline-none"><option>Pilih Provinsi</option></select>
                    <input type="text" placeholder="Kota / Kabupaten" className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 text-sm outline-none" />
                 </div>
              </form>
           </div>
        </div>
        <div className="lg:col-span-4">
           <div className="bg-gray-50 p-10 rounded-[2.5rem] space-y-8">
              <h3 className="text-xl font-black text-[#1A1A1A] uppercase tracking-tight">Ringkasan Pesanan</h3>
              <div className="space-y-4 max-h-[300px] overflow-y-auto no-scrollbar pr-2">
                 {items.map((item, i) => (
                   <div key={i} className="flex gap-4 items-center border-b border-gray-100 pb-4 mb-4 last:mb-0 last:pb-0 last:border-0">
                      <img src={item.img} className="w-12 h-16 rounded-lg object-cover" />
                      <div className="flex-grow">
                         <h4 className="text-[10px] font-black uppercase tracking-tight line-clamp-1">{item.name}</h4>
                         <p className="text-[10px] text-gray-400">Qty: 1 • {item.price}</p>
                      </div>
                   </div>
                 ))}
              </div>
              <div className="space-y-4 pt-4">
                 <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
                    <span>Subtotal</span>
                    <span>Rp{items.length * 8750000}</span>
                 </div>
                 <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
                    <span>Ongkos Kirim</span>
                    <span>Rp150.000</span>
                 </div>
                 <hr className="border-gray-200" />
                 <div className="flex justify-between items-center pt-4">
                    <span className="text-xs font-black uppercase tracking-widest text-[#1A1A1A]">Total Tagihan</span>
                    <span className="text-2xl font-black text-[#1A1A1A]">Rp{items.length * 8750000 + 150000}</span>
                 </div>
              </div>
              <button 
                onClick={finishOrder}
                className="w-full bg-[#1A1A1A] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#C5A059] transition-all shadow-xl shadow-black/10"
              >
                 Bayar Sekarang
              </button>
           </div>
        </div>
     </div>
  </div>
);

const SuccessPage = ({ setPage }: { setPage: (p: PageType) => void }) => (
  <div className="pt-32 pb-24 px-6 text-center space-y-12">
     <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
        <ShieldCheck size={48} />
     </div>
     <div className="space-y-4">
        <h1 className="text-4xl font-black text-[#1A1A1A] uppercase tracking-tight">Pesanan Berhasil!</h1>
        <p className="text-gray-500 max-w-md mx-auto">Terima kasih telah ikut melestarikan warisan Nusantara. Konfirmasi pesanan telah dikirim ke WhatsApp Anda.</p>
     </div>
     <div className="pt-8">
        <button 
          onClick={() => setPage('Collection')}
          className="bg-[#1A1A1A] text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#C5A059] transition-all"
        >
           Kembali ke Koleksi
        </button>
     </div>
  </div>
);

// --- MAIN TEMPLATE COMPONENT ---

export default function KainNusantara() {
  const [activePage, setActivePage] = useState<PageType>('Collection');
  const [cart, setCart] = useState<any[]>([]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activePage]);

  const addToCart = () => {
    setCart([...cart, { ...mainProduct, img: mainProduct.gallery[0], price: mainProduct.price }]);
    setActivePage('Cart');
  };

  const removeItem = () => {
    setCart([]);
  };

  const finishOrder = () => {
    setCart([]);
    setActivePage('Success');
  };

  return (
    <div className="bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-[#C5A059]/20 selection:text-[#C5A059]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=Playfair+Display:wght@900&display=swap');
        .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <Navbar setPage={setActivePage} cartCount={cart.length} />
      
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {activePage === 'Collection' && <CollectionPage setPage={setActivePage} />}
            {activePage === 'Detail' && <DetailPage setPage={setActivePage} addToCart={addToCart} />}
            {activePage === 'Journal' && <JournalPage />}
            {activePage === 'Cart' && <CartPage setPage={setActivePage} items={cart} removeItem={removeItem} />}
            {activePage === 'Checkout' && <CheckoutPage setPage={setActivePage} items={cart} finishOrder={finishOrder} />}
            {activePage === 'Success' && <SuccessPage setPage={setActivePage} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Trust Badges Footer */}
      <section className="bg-gray-50 py-20 px-6 border-t border-gray-100">
         <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="space-y-4">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto text-[#C5A059] shadow-sm"><Star size={24} /></div>
               <p className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]">100% Asli</p>
               <p className="text-[8px] text-gray-400 uppercase tracking-widest">Dari pengrajin lokal terpilih</p>
            </div>
            <div className="space-y-4">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto text-[#C5A059] shadow-sm"><ShieldCheck size={24} /></div>
               <p className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]">Kualitas Premium</p>
               <p className="text-[8px] text-gray-400 uppercase tracking-widest">Bahan alami dan teknik tradisional</p>
            </div>
            <div className="space-y-4">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto text-[#C5A059] shadow-sm"><Truck size={24} /></div>
               <p className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]">Pengiriman Aman</p>
               <p className="text-[8px] text-gray-400 uppercase tracking-widest">Dikemas dengan standar museum</p>
            </div>
            <div className="space-y-4">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto text-[#C5A059] shadow-sm"><BookOpen size={24} /></div>
               <p className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]">Cerita & Provenance</p>
               <p className="text-[8px] text-gray-400 uppercase tracking-widest">Setiap kain memiliki kisahnya sendiri</p>
            </div>
         </div>
      </section>

      <footer className="bg-white py-20 px-6 md:px-12 border-t border-gray-100">
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-8">
               <div>
                  <h2 className="text-xl font-black tracking-[0.2em] text-[#1A1A1A] uppercase">Kain</h2>
                  <p className="text-[10px] font-bold tracking-[0.5em] text-[#C5A059] uppercase -mt-1">Nusantara</p>
               </div>
               <p className="text-gray-400 text-xs leading-relaxed max-w-xs">Pelestarian budaya melalui setiap helai benang. Menghubungkan Anda dengan warisan terbaik dari pengrajin Nusantara.</p>
               <div className="flex gap-6">
                  <Camera size={18} className="text-gray-400 hover:text-[#C5A059] cursor-pointer" />
                  <Globe size={18} className="text-gray-400 hover:text-[#C5A059] cursor-pointer" />
                  <MessageCircle size={18} className="text-gray-400 hover:text-[#C5A059] cursor-pointer" />
               </div>
            </div>
            <div>
               <h4 className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A] mb-8">Eksplorasi</h4>
               <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <li><button onClick={() => setActivePage('Collection')} className="hover:text-[#1A1A1A] transition-colors">Katalog Tenun</button></li>
                  <li><button onClick={() => setActivePage('Journal')} className="hover:text-[#1A1A1A] transition-colors">Jurnal Budaya</button></li>
                  <li><button className="hover:text-[#1A1A1A] transition-colors">Tentang Kami</button></li>
                  <li><button className="hover:text-[#1A1A1A] transition-colors">Kemitraan Pengrajin</button></li>
               </ul>
            </div>
            <div>
               <h4 className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A] mb-8">Bantuan</h4>
               <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <li><button className="hover:text-[#1A1A1A] transition-colors">Pengiriman</button></li>
                  <li><button className="hover:text-[#1A1A1A] transition-colors">Cara Merawat Kain</button></li>
                  <li><button className="hover:text-[#1A1A1A] transition-colors">FAQ</button></li>
                  <li><button className="hover:text-[#1A1A1A] transition-colors">Kontak</button></li>
               </ul>
            </div>
            <div className="space-y-8">
               <h4 className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A] mb-8">Berlangganan Jurnal</h4>
               <p className="text-gray-400 text-xs">Dapatkan cerita eksklusif dan pemberitahuan koleksi terbaru.</p>
               <div className="flex gap-2">
                  <input type="email" placeholder="Email Anda" className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-xs flex-grow outline-none focus:ring-1 focus:ring-[#C5A059]" />
                  <button className="bg-[#1A1A1A] text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#C5A059] transition-all">Daftar</button>
               </div>
            </div>
         </div>
         <div className="max-w-[1400px] mx-auto pt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-gray-50 mt-20">
            <p className="text-[8px] text-gray-400 uppercase tracking-[0.3em]">© 2024 Kain Nusantara. All rights reserved.</p>
            <div className="flex items-center gap-8">
               <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4 grayscale opacity-30" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6 grayscale opacity-30" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Logo_dana_blue.svg" className="h-4 grayscale opacity-30" />
            </div>
         </div>
      </footer>
    </div>
  );
}
