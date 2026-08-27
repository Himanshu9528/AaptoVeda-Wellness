import React from 'react';
import { HERO_IMAGE, ROOTS_IMAGE } from '../data/products';
import { Product, PageView } from '../types';
import { ProductCard } from '../components/ProductCard';
import { Tilt3DShowcase } from '../components/Tilt3DShowcase';

interface HomeViewProps {
  products: Product[];
  setCurrentView: (view: PageView) => void;
  onSelectProduct: (product: Product) => void;
  onOpenQuiz: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  products,
  setCurrentView,
  onSelectProduct,
  onOpenQuiz
}) => {
  const featuredProducts = products.slice(0, 3); // Ashwagandha, Triphala, Shatavari

  return (
<div className="space-y-16 sm:space-y-24 pb-20 pt-24">      
      {/* 1. Hero Section - Editorial Apothecary Label Layout */}
      <section className="w-full px-4 sm:px-6 md:px-12">
        <div className="max-w-[1320px] mx-auto border-t border-b border-[#cba72f]/30 dark:border-[#cba72f]/20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] min-h-[auto] sm:min-h-[calc(100dvh-13rem)] lg:min-h-[calc(100dvh-10rem)]">

            {/* Left: Text Column */}
            <div className="flex flex-col justify-center py-10 sm:py-14 lg:py-0 lg:pr-14 space-y-6">
              <span className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#735c00] dark:text-[#cba72f]">
                <span className="w-7 h-px bg-[#cba72f]"></span>
                Est. 5,000 BCE · Classical Ayurveda
              </span>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-[3.75rem] xl:text-[4.25rem] leading-[1.05] font-bold text-[#012d1d] dark:text-[#c1ecd4] tracking-tight">
                The Science of<br />
                <span className="italic font-normal text-[#735c00] dark:text-[#ffe088]">Sacred Botanical Harmony</span>
              </h1>

              <p className="text-sm sm:text-base text-[#414844] dark:text-[#bfc9c3] leading-relaxed max-w-md">
              Welcome to Aaptoveda Wellness, where ancient Ayurvedic wisdom meets modern pharmaceutical precision. Dedicated to authentic health and holistic healing, we formulate high-quality, standardized Ayurvedic medicines designed to restore balance and vitality. Every product we craft is rooted in classical texts, carefully processed, and thoroughly tested to ensure safety, purity, and efficacy for your family's well-being.
              </p>

              <div className="flex flex-wrap items-center gap-x-7 gap-y-4 pt-2">
                <button
                  onClick={() => {
                    setCurrentView('remedies');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="py-3.5 px-8 rounded-full bg-[#012d1d] hover:bg-[#1b4332] text-white font-bold text-xs sm:text-sm shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Explore Products </span>
                  <span className="material-symbols-outlined text-base text-[#ffe088]">arrow_forward</span>
                </button>

                <button
                  onClick={onOpenQuiz}
                  className="group text-xs sm:text-sm font-bold text-[#012d1d] dark:text-[#c1ecd4] flex items-center gap-1.5"
                >
                  <span>Discover Your Dosha</span>
                  <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Signature Divider: a slim gold rule, echoing the foil band on every label */}
            <div className="hidden lg:flex items-center justify-center px-2">
              <div className="w-px h-2/3 bg-gradient-to-b from-transparent via-[#cba72f]/60 to-transparent"></div>
            </div>

            {/* Right: Product Photography Column — Interactive 3D Tilt Showcase */}
            <div className="flex items-center justify-center py-8 lg:py-14 lg:pl-14 border-t lg:border-t-0 border-[#cba72f]/20">
              <Tilt3DShowcase
                image={HERO_IMAGE}
                alt="Aaptovit — Shilajit, Saffron & Pearl Tablets"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. Educational Section: Our Roots & Ayurvedic Science */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Image Container with Proper Aspect Ratio */}
          <div className="relative group">
            <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#c1c8c2]/40 dark:border-[#274e3d]">
              <img
                src={ROOTS_IMAGE}
                alt="Classical Ayurvedic Mortar and Herbal Preparation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-4 sm:p-5 rounded-2xl glass-card text-[#012d1d] dark:text-[#f0f1f2]">
                <p className="font-serif italic text-xs sm:text-sm md:text-base leading-snug">
                  "Health is not merely the absence of disease, but the dynamic expression of life in full harmony with nature."
                </p>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#735c00] dark:text-[#cba72f] block mt-2">
                  — Charaka Samhita, Vimana Sthana
                </span>
              </div>
            </div>
            
            {/* Badge */}
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#cba72f] text-[#241a00] p-2 flex flex-col items-center justify-center font-bold text-[9px] sm:text-[10px] uppercase text-center shadow-lg border-2 border-white dark:border-[#121614]">
              <span>5,000</span>
              <span className="text-[7px] sm:text-[8px] font-normal">Years Old</span>
            </div>
          </div>

          {/* Right Column: Educational Story */}
          <div className="space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#735c00] dark:text-[#cba72f] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#cba72f]"></span>
              Foundational Principles
            </span>

            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#012d1d] dark:text-[#c1ecd4] leading-tight">
              A Living Tradition of Mind-Body Physiology
            </h2>

            <p className="text-xs sm:text-base text-[#414844] dark:text-[#bfc9c3] leading-relaxed">
              Ayurveda translates to "The Science of Life." Rather than suppressing symptoms, Ayurvedic wisdom studies how the 5 Mahabhutas (Elements) combine inside human physiology to form three distinct bio-energetic forces: Vata, Pitta, and Kapha.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-[#191c1d] dark:text-[#f0f1f2]">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#cba72f] text-lg shrink-0 mt-0.5">nature</span>
                <span><strong>Wild-Crafted Sourcing:</strong> Botanicals harvested at lunar peak in traditional Deccan Plateau biomes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#cba72f] text-lg shrink-0 mt-0.5">science</span>
                <span><strong>Botanical Standardization:</strong> Verified active compounds without synthetic additives or heavy metal residues.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#cba72f] text-lg shrink-0 mt-0.5">balance</span>
                <span><strong>Tri-Dosha Balancing:</strong> Formulations crafted to harmonize metabolic fire (Agni) and cellular vitality (Ojas).</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => {
                  setCurrentView('wisdom');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="py-3 px-6 rounded-full bg-[#012d1d] hover:bg-[#1b4332] text-white font-semibold text-xs transition-all shadow-md flex items-center gap-2"
              >
                <span>Read About the 5 Elements & Daily Routines</span>
                <span className="material-symbols-outlined text-sm">east</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Botanical Library Section */}
      <section className="bg-[#edeeef] dark:bg-[#121614]/80 py-16 sm:py-20 border-y border-[#c1c8c2]/30 dark:border-[#274e3d]/40">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#735c00] dark:text-[#cba72f]">
                Classical Botanical Library
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#012d1d] dark:text-[#c1ecd4] mt-1">
                Featured Botanical Profiles
              </h2>
            </div>

            <button
              onClick={() => {
                setCurrentView('remedies');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-[#012d1d] dark:text-[#c1ecd4] hover:text-[#cba72f] flex items-center gap-1.5 transition-colors group"
            >
              <span>Explore All {products.length} Botanical Profiles</span>
              <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>

          {/* Grid of Featured Products (Educational Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Educational Bento Grid */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#735c00] dark:text-[#cba72f]">
            Ayurvedic Philosophy
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#012d1d] dark:text-[#c1ecd4]">
            Purity, Science & Synergy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Bento Card 1: Large */}
          <div className="md:col-span-2 p-6 sm:p-8 rounded-3xl bg-[#012d1d] text-white relative overflow-hidden flex flex-col justify-between min-h-[240px] shadow-lg">
            <div className="relative z-10 max-w-md space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#ffe088] bg-white/10 px-3 py-1 rounded-full">
                Cellular Wisdom
              </span>
              <h3 className="font-serif text-xl sm:text-3xl font-bold leading-tight">
                Preserving the Whole Plant Matrix
              </h3>
              <p className="text-xs sm:text-sm text-[#c1ecd4] leading-relaxed">
                Classical texts emphasize that plants contain synergistic co-factors. We utilize gentle traditional low-heat decoctions so your body recognizes the plant wisdom natively.
              </p>
            </div>
            <div className="relative z-10 pt-4">
              <span className="text-xs font-bold text-[#cba72f] flex items-center gap-1">
                <span>Verified Bio-Available</span>
                <span className="material-symbols-outlined text-sm">verified</span>
              </span>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-10 text-[160px] font-serif select-none pointer-events-none">
              ॐ
            </div>
          </div>

          {/* Bento Card 2: Purity Standard */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1b4332]/40 border border-[#c1c8c2]/40 dark:border-[#274e3d] flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <span className="material-symbols-outlined text-3xl text-[#cba72f]">verified_user</span>
              <h4 className="font-serif text-lg font-bold text-[#012d1d] dark:text-[#c1ecd4]">
                Rigorous Laboratory Testing
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                Every botanical batch undergoes ICP-MS heavy metal verification, microbial screening, and standardization testing.
              </p>
            </div>
          </div>

          {/* Bento Card 3: Educational Quiz Promo */}
          <div className="md:col-span-3 p-6 sm:p-8 rounded-3xl bg-[#cba72f]/15 border border-[#cba72f]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h4 className="font-serif text-xl font-bold text-[#735c00] dark:text-[#ffe088]">
                Interactive Dosha Knowledge & Assessment
              </h4>
              <p className="text-xs text-[#414844] dark:text-[#bfc9c3] max-w-xl">
                Test your understanding of Ayurvedic principles, explore how Vata, Pitta, and Kapha manifest in daily life, and discover tailored lifestyle facts.
              </p>
            </div>
            <button
              onClick={onOpenQuiz}
              className="py-3 px-6 rounded-full bg-[#012d1d] hover:bg-[#1b4332] text-white text-xs font-bold whitespace-nowrap transition-colors shadow-md flex items-center gap-2 shrink-0"
            >
              <span>Start Educational Quiz</span>
              <span className="material-symbols-outlined text-sm">spa</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};