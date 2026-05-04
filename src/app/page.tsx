"use client";

import { useState, useEffect } from "react";
import { X, Search, Check, MessageCircle, LayoutTemplate, ArrowRight, XCircle, Eye, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

// Import Templates (Dynamic to prevent OOM during compilation)
const SavoriaElegance = dynamic(() => import("@/components/templates/SavoriaElegance"), { 
  loading: () => <div className="animate-pulse bg-gray-100 w-full h-full rounded-2xl" /> 
});
const TrustArchitect = dynamic(() => import("@/components/templates/TrustArchitect"), { 
  loading: () => <div className="animate-pulse bg-gray-100 w-full h-full rounded-2xl" /> 
});
const UrbanThreads = dynamic(() => import("@/components/templates/UrbanThreads"), { 
  loading: () => <div className="animate-pulse bg-gray-100 w-full h-full rounded-2xl" /> 
});
const BrewAndCo = dynamic(() => import("@/components/templates/BrewAndCo"), { 
  loading: () => <div className="animate-pulse bg-gray-100 w-full h-full rounded-2xl" /> 
});
const NeonStudio = dynamic(() => import("@/components/templates/NeonStudio"), { 
  loading: () => <div className="animate-pulse bg-gray-100 w-full h-full rounded-2xl" /> 
});
const DentalCare = dynamic(() => import("@/components/templates/DentalCare"), { 
  loading: () => <div className="animate-pulse bg-gray-100 w-full h-full rounded-2xl" /> 
});

// New Templates
const DressyRent = dynamic(() => import("@/components/templates/DressyRent"), { 
  loading: () => <div className="animate-pulse bg-gray-100 w-full h-full rounded-2xl" /> 
});
const ArshakaRent = dynamic(() => import("@/components/templates/ArshakaRent"), { 
  loading: () => <div className="animate-pulse bg-gray-100 w-full h-full rounded-2xl" /> 
});
const EmanLogistik = dynamic(() => import("@/components/templates/EmanLogistik"), { 
  loading: () => <div className="animate-pulse bg-gray-100 w-full h-full rounded-2xl" /> 
});
const TahuGoreng = dynamic(() => import("@/components/templates/TahuGoreng"), { 
  loading: () => <div className="animate-pulse bg-gray-100 w-full h-full rounded-2xl" /> 
});
const KainNusantara = dynamic(() => import("@/components/templates/KainNusantara"), { 
  loading: () => <div className="animate-pulse bg-gray-100 w-full h-full rounded-2xl" /> 
});
const SocksIndonesia = dynamic(() => import("@/components/templates/SocksIndonesia"), { 
  loading: () => <div className="animate-pulse bg-gray-100 w-full h-full rounded-2xl" /> 
});

const categories = ["Semua", "Kuliner", "Jasa Profesional", "Toko Online", "Kreatif & Agensi"];

const templatesData = [
  { id: "jas-3", category: "Jasa Profesional", name: "Dressy Rent", desc: "Digital experience kelas atas untuk persewaan gaun premium. Dilengkapi dengan katalog elegan dan sistem booking.", tag: "Rental Service", component: DressyRent, mockupImg: "/ChatGPT Image 23 Apr 2026, 23.08.16.png" },
  { id: "jas-4", category: "Jasa Profesional", name: "Arshaka Rent", desc: "Layanan rental mobil terpercaya dengan sistem manajemen armada yang modern dan responsif.", tag: "Rental Service", component: ArshakaRent, mockupImg: "/6294254360631907341.jpg" },
  { id: "jas-5", category: "Jasa Profesional", name: "Eman Logistik", desc: "Platform solusi logistik terintegrasi untuk bisnis, mencakup pengiriman laut, udara, dan darat.", tag: "Company Profile", component: EmanLogistik, mockupImg: "/ChatGPT Image 23 Apr 2026, 23.05.08.png" },
  { id: "kul-3", category: "Kuliner", name: "Tahu Goreng", desc: "Landing page F&B yang menggugah selera dengan sistem pemesanan online yang praktis dan efisien.", tag: "Landing Page", component: TahuGoreng, mockupImg: "/ChatGPT Image 23 Apr 2026, 23.10.14.png" },
  { id: "tok-2", category: "Toko Online", name: "Kain Nusantara", desc: "E-commerce tekstil tradisional multi-halaman dengan simulasi flow dari katalog hingga checkout.", tag: "Multi Page", component: KainNusantara, mockupImg: "/ChatGPT Image 23 Apr 2026, 23.14.02.png" },
  { id: "tok-3", category: "Toko Online", name: "Socks Indonesia", desc: "Platform konveksi kaos kaki kustom dengan galeri desain yang kaya dan katalog produk lengkap.", tag: "Company Profile", component: SocksIndonesia, mockupImg: "/ChatGPT Image 24 Apr 2026, 14.57.51.png" },
  { id: "kul-1", category: "Kuliner", name: "Savoria Elegance", desc: "Digital experience kelas atas untuk restoran fine-dining. Multi-halaman dengan estetika 'The Shadowed Salon'.", tag: "Multi Page", component: SavoriaElegance, mockupImg: "/Savoria-mockup.png" },
  { id: "jas-1", category: "Jasa Profesional", name: "Trust Architect", desc: "Firma arsitektur B2B dengan fokus pada kepercayaan dan presisi. Layout multi-halaman yang kokoh dan profesional.", tag: "Multi Page", component: TrustArchitect, mockupImg: "/trust-mockup.png" },
  { id: "tok-1", category: "Toko Online", name: "Urban Threads", desc: "Katalog e-commerce gaya minimalis untuk fashion. Fokus pada estetika bersih dan koleksi berkelanjutan.", tag: "E-Commerce", component: UrbanThreads, mockupImg: "/urbanThreads-mockup.png" },
  { id: "kul-2", category: "Kuliner", name: "Brew & Co", desc: "Nuansa hangat nan estetik untuk kedai kopi artisan. Dilengkapi bento-grid untuk storytelling brand.", tag: "Landing Page", component: BrewAndCo, mockupImg: "/Brew&Co-mock.png" },
  { id: "kre-1", category: "Kreatif & Agensi", name: "Neon Studio", desc: "Portofolio tebal warna gelap (Dark UI) yang mencolok dengan aksen neon vibrant.", tag: "Portofolio", component: NeonStudio, mockupImg: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" },
  { id: "jas-2", category: "Jasa Profesional", name: "Dental Care", desc: "Resik, terang, dan menenangkan untuk klinik kesehatan modern.", tag: "Company Profile", component: DentalCare, mockupImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" },
];

export default function ShowcasePage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<typeof templatesData[0] | null>(null);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  
  // Filter templates
  const filteredTemplates = templatesData.filter((t) => {
    const matchCat = activeCategory === "Semua" || t.category === activeCategory;
    const matchSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || t.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleOpenTemplate = (template: typeof templatesData[0]) => {
    setSelectedTemplate(template);
  };

  const closeSidebar = () => {
    setSelectedTemplate(null);
  };

  const buildWhatsAppMessage = () => {
    if (!selectedTemplate) return "#";
    const msg = `Halo Tim WUUS, saya tertarik dengan standar kualitas desain *${selectedTemplate.name}* dari Galeri Showcase Anda. Saya ingin konsultasikan pembuatan website untuk bisnis saya.`;
    return `https://wa.me/6281383521750?text=${encodeURIComponent(msg)}`;
  };

  // Prevent scroll when sidebar is open on mobile or in preview mode
  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    if ((selectedTemplate && isMobile) || isPreviewMode) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedTemplate, isPreviewMode]);

  const PreviewComponent = selectedTemplate?.component || null;

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#1C2733] overflow-x-hidden flex flex-col lg:flex-row w-full font-sans selection:bg-[#F59E0B]/20 selection:text-[#1C2733]">
      
      {/* --- MAIN CONTENT AREA --- */}
      <div className={`flex-grow transition-all duration-500 ease-in-out min-w-0 ${selectedTemplate ? 'lg:mr-[480px]' : ''}`}>
        
        {/* NAVBAR */}
        <nav className={`fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-40 transition-all duration-500 ${selectedTemplate ? 'lg:right-[480px]' : ''}`}>
          <div className="w-full px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 border-r border-gray-200 pr-3 sm:pr-4">
                <Image src="/full-logo.png" alt="WUUS Logo" width={110} height={36} className="h-8 sm:h-10 w-auto" />
              </div>
              <span className="text-[10px] font-bold text-[#F59E0B] tracking-[0.2em] uppercase hidden sm:block">
                Premium Showcase
              </span>
            </div>
            <a 
              href="https://webuntukusaha.com" 
              className="text-xs font-bold text-gray-400 hover:text-[#1C2733] transition-colors flex items-center gap-1.5 bg-gray-50 px-3 py-2 rounded-lg hover:bg-gray-100"
            >
              <ArrowRight size={13} />
              <span className="hidden sm:inline">Web Utama</span>
              <span className="sm:hidden">Utama</span>
            </a>
          </div>
        </nav>

        {/* HERO */}
        <header className="pt-28 sm:pt-36 pb-10 sm:pb-16 px-4 sm:px-6 text-center max-w-4xl mx-auto">
          <span className="text-[10px] sm:text-xs font-black tracking-[0.2em] text-[#F59E0B] uppercase bg-orange-50 px-4 py-1.5 rounded-full inline-block mb-5 sm:mb-6 border border-orange-100">
            Galeri Portofolio
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1C2733] mb-4 sm:mb-6 tracking-tight leading-[1.1]">
            Temukan Wajah{" "}
            <span className="italic font-light font-serif text-gray-400">Terbaik</span>{" "}
            <br className="hidden sm:block" />
            Bisnis Anda.
          </h1>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Eksplorasi koleksi desain web kelas atas kami. Jadikan standar kualitas ini sebagai website bisnis Anda.
          </p>
        </header>

        {/* FILTER & SEARCH */}
        <section className="px-4 sm:px-6 mb-8 sm:mb-10 sticky top-16 sm:top-20 z-30 pointer-events-none">
          <div className="bg-white/95 backdrop-blur-xl p-2 sm:p-2 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.07)] border border-gray-100 flex flex-col gap-2 pointer-events-auto max-w-5xl mx-auto">
            
            {/* Category Pills — horizontal scroll on mobile */}
            <div className="flex items-center gap-1 overflow-x-auto w-full no-scrollbar px-1 py-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-bold whitespace-nowrap transition-all duration-300 shrink-0
                    ${activeCategory === cat 
                      ? 'bg-[#1C2733] text-white shadow-md' 
                      : 'text-gray-500 hover:bg-gray-50 hover:text-[#1C2733]'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full px-1 pb-1">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
              <input 
                type="text" 
                placeholder="Cari desain..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 placeholder-gray-400 text-sm font-medium rounded-xl pl-10 pr-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/30 focus:border-[#F59E0B] transition-all"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <XCircle size={14} />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* GALLERY GRID */}
        <main className="px-4 sm:px-6 pb-28 sm:pb-32 min-h-[50vh] max-w-[1400px] mx-auto">
          {filteredTemplates.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1C2733] mb-2">Tidak ditemukan</h3>
              <p className="text-gray-400 text-sm">Coba kata kunci lain atau pilih kategori "Semua".</p>
            </div>
          ) : (
            <motion.div
              layout
              className={`grid gap-5 sm:gap-6 lg:gap-8 transition-all duration-500
                grid-cols-1 sm:grid-cols-2
                ${selectedTemplate ? 'xl:grid-cols-2' : 'xl:grid-cols-3'}
              `}
            >
              <AnimatePresence>
                {filteredTemplates.map((t, idx) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    key={t.id}
                    className={`group bg-white rounded-[1.5rem] sm:rounded-[2rem] p-3 sm:p-4 border transition-all duration-500 cursor-pointer flex flex-col relative
                      ${selectedTemplate?.id === t.id 
                        ? 'border-[#1C2733] ring-4 ring-gray-100 shadow-xl scale-[1.01] z-10' 
                        : 'border-gray-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(28,39,51,0.08)] hover:-translate-y-1 hover:border-gray-200'}
                    `}
                    onClick={() => handleOpenTemplate(t)}
                  >
                    {selectedTemplate?.id === t.id && (
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#1C2733] text-white rounded-full flex items-center justify-center shadow-lg z-20">
                        <Check size={16} strokeWidth={3} />
                      </div>
                    )}

                    {/* Card Image */}
                    <div className="aspect-[4/3] w-full rounded-[1rem] sm:rounded-[1.5rem] bg-[#F9FAFB] overflow-hidden relative border border-gray-50 mb-4 sm:mb-6 flex flex-col items-center justify-center">
                      {t.mockupImg ? (
                        <Image 
                          src={t.mockupImg} 
                          alt={t.name} 
                          fill 
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          priority={idx < 4}
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <>
                          <div className="absolute top-0 inset-x-0 h-6 bg-white/50 border-b border-gray-100 flex items-center px-4 gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-400/50" />
                            <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                            <div className="w-2 h-2 rounded-full bg-green-400/50" />
                          </div>
                          <LayoutTemplate size={40} strokeWidth={1} className="mb-3 text-gray-300 group-hover:text-gray-400 group-hover:scale-110 transition-all duration-500" />
                          <span className="text-gray-400 font-serif italic text-sm">{t.name}</span>
                        </>
                      )}
                      
                      {/* Hover Overlay */}
                      <div className={`absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 z-10
                        ${selectedTemplate?.id === t.id ? 'opacity-0' : 'opacity-0 group-hover:opacity-100 bg-[#1C2733]/10 backdrop-blur-[2px]'}
                      `}>
                        <div className="bg-white text-[#1C2733] font-bold text-[10px] uppercase tracking-widest px-5 py-2.5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          Pilih & Sesuaikan
                        </div>
                      </div>
                    </div>

                    {/* Card Info */}
                    <div className="px-1 sm:px-2 flex-grow flex flex-col">
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#F59E0B]">{t.tag}</span>
                        <span className="bg-gray-50 border border-gray-100 text-gray-500 px-2 py-1 rounded-md text-[9px] font-black uppercase tracking-wider">{t.category}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-[#1C2733] mb-1.5 sm:mb-2">{t.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-500 line-clamp-2 leading-relaxed">{t.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </main>
      </div>


      {/* --- RIGHT SIDEBAR --- */}
      <AnimatePresence>
        {selectedTemplate && (
          <>
            {/* Mobile Overlay */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#1C2733]/40 backdrop-blur-sm z-50 lg:hidden cursor-pointer"
              onClick={closeSidebar}
            />
            
            {/* Sidebar */}
            <motion.aside 
              initial={{ x: "100%" }} 
              animate={{ x: 0 }} 
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 bottom-0 right-0 w-[92vw] sm:w-[420px] lg:w-[480px] bg-white shadow-[-20px_0_50px_-20px_rgba(28,39,51,0.12)] z-50 flex flex-col border-l border-gray-100"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-5 sm:p-6 lg:p-8 border-b border-gray-100 bg-white z-10 shrink-0">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[9px] font-black text-white bg-[#F59E0B] px-2 py-0.5 rounded-full tracking-widest uppercase">Pilihan Anda</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1C2733] leading-none mb-1">{selectedTemplate.name}</h3>
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">{selectedTemplate.category} &bull; {selectedTemplate.tag}</p>
                </div>
                <button 
                  onClick={closeSidebar}
                  className="w-10 h-10 bg-gray-50 text-gray-400 hover:text-[#1C2733] hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors border border-gray-100 shrink-0"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Sidebar Body */}
              <div className="flex-grow overflow-y-auto px-5 py-5 sm:px-6 sm:py-6 lg:px-8 no-scrollbar bg-gray-50">
                
                {/* Visual + Preview */}
                <div className="bg-white p-2 rounded-[1.5rem] border border-gray-100 shadow-sm mb-6 pb-4">
                  <div 
                    onClick={() => selectedTemplate.component && setIsPreviewMode(true)}
                    className="aspect-[16/10] w-full bg-[#F9FAFB] rounded-[1rem] flex flex-col items-center justify-center shadow-inner relative overflow-hidden mb-4 group cursor-pointer border border-gray-50"
                  >
                    {selectedTemplate.mockupImg ? (
                      <Image 
                        src={selectedTemplate.mockupImg} 
                        alt={selectedTemplate.name} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 480px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <>
                        <LayoutTemplate size={40} strokeWidth={1} className="text-gray-300 mb-2 group-hover:scale-110 transition-transform duration-500" />
                        <span className="text-gray-400 text-xs font-serif italic">Pratinjau Layout</span>
                      </>
                    )}
                    
                    <div className="absolute inset-0 bg-[#F59E0B]/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 backdrop-blur-sm z-10">
                      <Eye size={28} className="text-white" />
                      <span className="text-white font-bold text-xs tracking-widest uppercase">Buka Mode Live</span>
                    </div>
                  </div>
                  
                  <p className="text-[11px] text-center text-gray-500 px-3 mb-4 leading-relaxed font-medium">
                    Didesain untuk menghasilkan pengalaman terbaik di semua perangkat.
                  </p>

                  <button 
                    disabled={!selectedTemplate.component}
                    onClick={() => setIsPreviewMode(true)}
                    className="flex items-center justify-center gap-2 mx-3 py-3 rounded-xl border border-gray-200 text-[#1C2733] font-black text-xs uppercase tracking-widest hover:border-[#1C2733] hover:bg-gray-50 transition-colors shadow-sm bg-white w-[calc(100%-24px)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Lihat Template Live <Maximize2 size={13} className="text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Sidebar Footer */}
              <div className="bg-white p-5 sm:p-6 lg:p-8 border-t border-gray-100 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] z-20 shrink-0">
                <div className="flex flex-col mb-4">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Butuh Kualitas Bintang 5?</span>
                  <span className="text-sm font-medium text-[#1C2733] leading-snug">Jadikan standar ini sebagai website bisnis Anda. Hubungi ahli kami.</span>
                </div>
                <a 
                  href={buildWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl flex items-center justify-center gap-3 font-black text-sm tracking-widest uppercase transition-all bg-[#F59E0B] text-white hover:bg-amber-400 shadow-[0_10px_30px_-10px_rgba(245,158,11,0.4)] hover:-translate-y-0.5"
                >
                  <MessageCircle size={18} />
                  Konsultasi di WhatsApp
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* --- FULLSCREEN PREVIEW MODAL --- */}
      <AnimatePresence>
        {isPreviewMode && PreviewComponent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-white overflow-y-auto"
          >
            {/* Close Button */}
            <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[110]">
              <button 
                onClick={() => setIsPreviewMode(false)}
                className="bg-[#1C2733] text-white px-4 sm:px-5 py-3 sm:py-3.5 rounded-full shadow-2xl hover:bg-[#F59E0B] transition-colors flex items-center gap-2 font-bold text-xs uppercase tracking-widest"
              >
                <X size={16} />
                <span className="hidden sm:inline">Tutup Preview</span>
                <span className="sm:hidden">Tutup</span>
              </button>
            </div>
            <div className="p-0">
              <PreviewComponent />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
