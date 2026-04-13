"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  User, 
  ShoppingBag, 
  ArrowRight, 
  Heart, 
  ChevronDown,
  Menu as MenuIcon,
  X,
  Filter,
  Leaf,
  ShieldCheck,
  RefreshCcw
} from 'lucide-react';

// --- CONSTANTS ---

const COLORS = {
  primary: "#1A1A1A",
  secondary: "#706F6C",
  accent: "#B0926A", // Gold/Sand
  bg: "#F9F8F6",    // Bone white
  white: "#FFFFFF",
  gray: "#E2E2E2"
};

type ViewType = 'Home' | 'Shop' | 'Detail';

const PRODUCTS = [
  { id: 1, name: "Organic Cotton Overshirt", price: 200.000, category: "Apparel", img: "/urbanThreads-asset6.png", desc: "Crafted from 100% organic cotton, this overshirt combines durability with a soft, breathable feel." },
  { id: 2, name: "Minimalist Crewneck", price: 150.000, category: "Apparel", img: "/urbanThreads-asset2.png", desc: "The perfect everyday staple. Clean lines, relaxed fit, premium weight." },
  { id: 3, name: "Sustainable Knit Beanie", price: 100.000, category: "Accessories", img: "/urbanThreads-asset3.png", desc: "Temperature-regulating knit made from recycled wool blends." },
  { id: 4, name: "Eco-Friendly Hoodie", price: 250.000, category: "Apparel", img: "/urbanThreads-asset4.png", desc: "High-density french terry for maximum comfort and minimal environmental impact." },
];

// --- COMPONENTS ---

const Navbar = ({ setView }: { setView: (v: ViewType) => void }) => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <div 
          className="text-xl font-bold tracking-[0.2em] cursor-pointer"
          onClick={() => setView('Home')}
        >
          URBAN THREADS
        </div>
        
        <div className="hidden lg:flex items-center gap-10">
          {['New Arrivals', 'Men', 'Women', 'Essentials', 'Sustainability'].map((item) => (
            <button key={item} onClick={() => setView('Shop')} className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-500 hover:text-black transition-colors">
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="text-gray-500 hover:text-black transition-colors"><Search size={20} /></button>
          <button className="text-gray-500 hover:text-black transition-colors"><User size={20} /></button>
          <button className="text-gray-500 hover:text-black transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#B0926A] text-white text-[8px] flex items-center justify-center rounded-full font-bold">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="space-y-6">
          <h4 className="text-lg font-bold tracking-[0.1em]">URBAN THREADS</h4>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Refining the modern wardrobe with responsible choices and timeless, minimalist aesthetics.
          </p>
          <div className="flex gap-6">
             <a href="#" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Instagram</a>
             <a href="#" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Facebook</a>
          </div>
        </div>
        
        <div className="space-y-6">
          <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold">Shop</h5>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="hover:text-black cursor-pointer">Men's Collection</li>
            <li className="hover:text-black cursor-pointer">Women's Collection</li>
            <li className="hover:text-black cursor-pointer">The Essentials</li>
            <li className="hover:text-black cursor-pointer">New Arrivals</li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold">Company</h5>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="hover:text-black cursor-pointer">Our Story</li>
            <li className="hover:text-black cursor-pointer">Sustainability</li>
            <li className="hover:text-black cursor-pointer">Careers</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold">Newsletter</h5>
          <p className="text-sm text-gray-400">Subscribe for early access and collection updates.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Your email" className="bg-gray-50 border-none px-4 py-3 rounded-sm text-sm flex-1 focus:ring-1 focus:ring-black" />
            <button className="bg-black text-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest">Join</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-400 uppercase tracking-widest font-medium">
        <span>© 2024 Urban Threads. All Rights Reserved.</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-black transition-colors">Privacy</a>
          <a href="#" className="hover:text-black transition-colors">Terms</a>
          <a href="#" className="hover:text-black transition-colors">Shipping</a>
        </div>
      </div>
    </footer>
  );
};

// --- VIEWS ---

const HomeView = ({ setView, onProductClick }: { setView: (v: ViewType) => void, onProductClick: (p: any) => void }) => {
  return (
    <div className="bg-[#F9F8F6]">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6 md:px-24 overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
           <img 
             src="/urbanThreads-asset.png" 
             className="w-full h-full object-cover" 
             alt="Fashion background" 
           />
           <div className="absolute inset-0 bg-white/40 z-10" />
           <div className="absolute inset-0 bg-gradient-to-r from-[#F9F8F6] via-[#F9F8F6]/60 to-transparent z-10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 w-full max-w-[1400px] mx-auto relative z-20 pt-20">
           <div className="space-y-8">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gray-500 text-[10px] uppercase tracking-[0.4em] font-bold block"
              >
                Autumn/Winter 2024
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black text-black leading-[1.1] tracking-tight"
              >
                Urban Threads:<br/>
                <span className="text-[#B0926A] italic font-serif font-light">Minimalist Fashion Collective.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 text-sm md:text-base max-w-lg leading-relaxed font-medium"
              >
                Timeless Design. Responsible Choices. Effortless Style.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-4"
              >
                <button 
                  onClick={() => setView('Shop')}
                  className="bg-[#B0926A] text-white px-12 py-5 rounded-sm text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#8d7555] transition-all shadow-xl shadow-[#B0926A]/20"
                >
                  Shop New Arrivals
                </button>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex justify-between items-end">
            <h2 className="text-3xl font-black tracking-tighter">Featured Products</h2>
            <button onClick={() => setView('Shop')} className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all flex items-center gap-2">
              View All Products <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => onProductClick(product)}
              >
                <div className="aspect-[3/4] bg-[#F9F8F6] rounded-xl overflow-hidden relative mb-6">
                   <img src={product.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={product.name} />
                   <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-sm hover:bg-white">
                      <Heart size={18} />
                   </button>
                </div>
                <div className="space-y-1 text-center lg:text-left">
                  <h3 className="font-bold text-gray-900 group-hover:text-[#B0926A] transition-colors">{product.name}</h3>
                  <p className="text-sm font-light text-gray-400">Rp {product.price.toFixed(3)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="pb-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "New Collections", desc: "Explore the Latest Drops", img: "/urbanThreads-asset5.png", link: "Shop Collection" },
             { title: "Sustainable Apparel", desc: "Better for People & Planet", img: "/urbanThreads-asset6.png", link: "Learn More" },
             { title: "Timeless Essentials", desc: "Built to Last. Designed to Live In.", img: "/urbanThreads-asset7.png", link: "Discover Essentials" }
           ].map((item, i) => (
             <div key={i} className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer">
                <img src={item.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-20" alt={item.title} />
                <div className="absolute inset-0 bg-[#F9F8F6] -z-10" />
                <div className="relative h-full p-10 flex flex-col justify-end space-y-2">
                   <h3 className="text-xl font-bold">{item.title}</h3>
                   <p className="text-xs text-gray-400 mb-4">{item.desc}</p>
                   <span className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                      {item.link} <ArrowRight size={12} />
                   </span>
                </div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

const ShopView = ({ onProductClick }: { onProductClick: (p: any) => void }) => {
  return (
    <div className="bg-white min-h-screen pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
           <div className="space-y-4">
              <h1 className="text-5xl font-black tracking-tighter">The Catalog</h1>
              <p className="text-gray-400 text-sm max-w-xs">Curated minimalist essentials for the modern, conscious lifestyle.</p>
           </div>
           <div className="flex gap-4">
              <button className="flex items-center gap-3 px-6 py-3 border border-gray-100 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-all">
                <Filter size={14} /> Filters
              </button>
              <button className="flex items-center gap-3 px-6 py-3 border border-gray-100 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-all">
                Price: Low to High <ChevronDown size={14} />
              </button>
           </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
           {[...PRODUCTS, ...PRODUCTS].map((product, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group cursor-pointer"
                onClick={() => onProductClick(product)}
              >
                <div className="aspect-[3/4] bg-[#F9F8F6] rounded-2xl overflow-hidden mb-6">
                   <img src={product.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-1">
                   <h3 className="font-bold text-sm tracking-tight">{product.name}</h3>
                   <p className="text-xs text-gray-400">Rp {product.price.toFixed(3)}</p>
                </div>
              </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};

const DetailView = ({ product, setView }: { product: any, setView: (v: ViewType) => void }) => {
  return (
    <div className="bg-white min-h-screen pt-40 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
           <div className="grid grid-cols-1 gap-6">
              <div className="aspect-[4/5] bg-[#F9F8F6] rounded-3xl overflow-hidden">
                 <img src={product.img} className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                 <div className="aspect-square bg-[#F9F8F6] rounded-2xl overflow-hidden shadow-sm">
                    <img src="/urbanThreads-asset5.png" className="w-full h-full object-cover opacity-60" />
                 </div>
                 <div className="aspect-square bg-[#F9F8F6] rounded-2xl overflow-hidden shadow-sm">
                    <img src="/urbanThreads-asset9.png" className="w-full h-full object-cover opacity-80" />
                 </div>
              </div>
           </div>

           <div className="space-y-10 py-10">
              <div className="space-y-4">
                 <button onClick={() => setView('Shop')} className="text-[10px] uppercase font-bold text-gray-400 tracking-widest hover:text-black transition-colors flex items-center gap-2 mb-6">
                   <ArrowRight size={12} className="rotate-180" /> Back to Catalog
                 </button>
                 <h1 className="text-4xl md:text-5xl font-black tracking-tighter">{product.name}</h1>
                 <p className="text-2xl text-[#B0926A]">Rp {product.price.toFixed(3)}</p>
              </div>

              <p className="text-gray-500 leading-relaxed font-light">{product.desc}</p>

              <div className="space-y-6">
                 <div className="space-y-3">
                    <span className="text-[10px] uppercase font-bold tracking-widest">Select Size</span>
                    <div className="flex gap-3">
                       {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                         <button key={size} className="w-12 h-12 border border-gray-100 rounded-lg flex items-center justify-center text-xs font-bold hover:border-black transition-all">
                           {size}
                         </button>
                       ))}
                    </div>
                 </div>

                 <div className="flex gap-4 pt-4">
                    <button className="flex-1 bg-black text-white py-5 rounded-lg text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-900 transition-all shadow-xl shadow-black/10">
                      Add to Bag
                    </button>
                    <button className="w-16 h-16 border border-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-50 transition-all">
                       <Heart size={20} />
                    </button>
                 </div>
              </div>

              <div className="pt-10 border-t border-gray-100 space-y-6">
                 {[
                   { icon: <Leaf size={18} />, title: "Sustainable", desc: "Eco-friendly materials only." },
                   { icon: <ShieldCheck size={18} />, title: "Premium Quality", desc: "Built to last across seasons." },
                   { icon: <RefreshCcw size={18} />, title: "Free Exchanges", desc: "30-day effortless return policy." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4">
                      <div className="text-[#B0926A]">{item.icon}</div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-tight">{item.title}</h4>
                        <p className="text-[10px] text-gray-400">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN TEMPLATE ---

export default function UrbanThreads() {
  const [activeView, setActiveView] = useState<ViewType>('Home');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView, selectedProduct]);

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setActiveView('Detail');
  };

  return (
    <div className="bg-[#F9F8F6] text-[#1A1A1A] font-sans selection:bg-[#B0926A]/20 selection:text-[#B0926A]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&family=Work+Sans:wght@300;400;500;600;700&display=swap');
        .font-sans { font-family: 'Work Sans', sans-serif; }
        h1, h2, h3, h4, h5, .font-heading { font-family: 'Manrope', sans-serif; }
      `}</style>

      <Navbar setView={setActiveView} />

      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView + (selectedProduct?.id || '')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeView === 'Home' && <HomeView setView={setActiveView} onProductClick={handleProductClick} />}
            {activeView === 'Shop' && <ShopView onProductClick={handleProductClick} />}
            {activeView === 'Detail' && selectedProduct && <DetailView product={selectedProduct} setView={setActiveView} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
