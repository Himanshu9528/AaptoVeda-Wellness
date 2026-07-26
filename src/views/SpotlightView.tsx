import React from 'react';
import { Product, PageView } from '../types';

interface SpotlightViewProps {
  products: Product[];
  onOpenTimer: () => void;
  setCurrentView: (view: PageView) => void;
}

export const SpotlightView: React.FC<SpotlightViewProps> = ({
  products,
  onOpenTimer,
  setCurrentView
}) => {
  const ashwagandha = products.find((p) => p.id === 'ashwagandha') || products[0];

  return (
    <div className="pt-24 pb-20 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 space-y-12 sm:space-y-16">
      
      {/* 1. Educational Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#cba72f]/20 text-[#735c00] dark:text-[#ffe088] text-xs font-bold uppercase tracking-widest">
          <span className="material-symbols-outlined text-sm">spa</span>
          <span>Botanical Spotlight Series</span>
        </span>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#012d1d] dark:text-[#c1ecd4]">
          {ashwagandha.title}
        </h1>

        <p className="font-serif italic text-base sm:text-xl text-[#cba72f]">
          "{ashwagandha.tagline}"
        </p>

        <p className="text-xs sm:text-base text-[#414844] dark:text-[#bfc9c3] italic leading-relaxed max-w-2xl mx-auto border-y border-[#c1c8c2]/30 dark:border-[#274e3d]/40 py-4">
          "{ashwagandha.quote}"
        </p>
      </div>

      {/* 2. Main Product Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left: Botanical Showcase Gallery (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#1b4332] border border-[#c1c8c2]/30 dark:border-[#274e3d] shadow-xl group">
            <img
              src={ashwagandha.secondaryImage || ashwagandha.image}
              alt={ashwagandha.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row items-start sm:items-center justify-between text-white gap-2">
              <div>
                <span className="text-xs text-[#c1ecd4] font-bold uppercase tracking-wider block">
                  Wild-Harvested Deccan Plateau Root
                </span>
                <span className="font-serif text-lg sm:text-xl font-bold">Standardized 10% Withanolides</span>
              </div>
              <span className="bg-[#cba72f] text-[#241a00] font-bold text-xs px-3 py-1.5 rounded-full shrink-0">
                ★ 4.9 (142 Reviews)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white dark:bg-[#1b4332]/40 border border-[#c1c8c2]/30 flex items-center gap-3">
              <span className="material-symbols-outlined text-2xl text-[#cba72f]">auto_awesome</span>
              <div>
                <h5 className="font-serif text-xs font-bold text-[#012d1d] dark:text-[#c1ecd4]">Pippali Bio-Enhancer</h5>
                <p className="text-[10px] text-gray-500 dark:text-gray-400">Assists deep cellular absorption</p>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white dark:bg-[#1b4332]/40 border border-[#c1c8c2]/30 flex items-center gap-3">
              <span className="material-symbols-outlined text-2xl text-[#cba72f]">eco</span>
              <div>
                <h5 className="font-serif text-xs font-bold text-[#012d1d] dark:text-[#c1ecd4]">Deccan Harvest</h5>
                <p className="text-[10px] text-gray-500 dark:text-gray-400">Harvested at lunar peak</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Educational Overview & Ritual Guide (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1b4332]/40 border border-[#c1c8c2]/40 dark:border-[#274e3d] shadow-lg space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#735c00] dark:text-[#cba72f]">
                Botanical Profile & Dosage
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#012d1d] dark:text-[#c1ecd4]">
                Adaptogenic Science
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Specification: {ashwagandha.volume}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#edeeef] dark:bg-[#121614] border border-[#c1c8c2]/30 space-y-2 text-xs">
              <p className="text-[#414844] dark:text-[#bfc9c3]">
                <strong>Suggested Dosage:</strong> {ashwagandha.dosage}
              </p>
              <p className="text-[#414844] dark:text-[#bfc9c3]">
                <strong>Ritual Preparation:</strong> {ashwagandha.suggestedRitual}
              </p>
            </div>

            <button
              onClick={onOpenTimer}
              className="w-full py-3.5 rounded-full bg-[#012d1d] hover:bg-[#1b4332] text-white font-bold text-xs sm:text-sm shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base">timer</span>
              <span>Launch Evening Infusion Timer</span>
            </button>

            <div className="p-5 rounded-2xl bg-[#012d1d] text-white space-y-3">
              <h4 className="font-serif text-base font-bold text-[#ffe088] flex items-center gap-2">
                <span className="material-symbols-outlined text-base">history_edu</span>
                <span>The Sacred Heritage</span>
              </h4>
              <p className="text-xs text-[#c1ecd4] leading-relaxed">
                For over 5,000 years, Ashwagandha (Withania Somnifera) has been revered as a master adaptogen. In Sanskrit, "Ashwa" means horse, signifying strength and resilience. Modern clinical research confirms its ability to regulate the hypothalamic-pituitary-adrenal (HPA) axis and modulate cortisol.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 3. The Tri-Dosha Equilibrium Section */}
      <section className="p-6 sm:p-10 md:p-12 rounded-3xl bg-[#012d1d] text-white space-y-8 shadow-2xl">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ffe088]">
            Energetic Spectrum
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
            The Tri-Dosha Equilibrium
          </h2>
          <p className="text-xs text-[#c1ecd4]">
            How Ashwagandha harmonizes your body’s three primary energetic pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#cba72f]/20 text-[#ffe088] flex items-center justify-center text-xl">
              💨
            </div>
            <h3 className="font-serif text-lg font-bold text-[#ffe088]">Cortisol Mastery</h3>
            <span className="text-[10px] bg-[#c1ecd4]/20 text-[#c1ecd4] px-2.5 py-0.5 rounded-full font-bold">
              Vata: Balances
            </span>
            <p className="text-xs text-white/80 leading-relaxed">
              Quiet mental chatter, soothe nervous tension, and ground wind-like restlessness.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#cba72f]/20 text-[#ffe088] flex items-center justify-center text-xl">
              🌱
            </div>
            <h3 className="font-serif text-lg font-bold text-[#ffe088]">Primal Vitality</h3>
            <span className="text-[10px] bg-[#c1ecd4]/20 text-[#c1ecd4] px-2.5 py-0.5 rounded-full font-bold">
              Kapha: Balances
            </span>
            <p className="text-xs text-white/80 leading-relaxed">
              Builds Ojas (deep immune vigor) and sustains physical stamina without caffeine jitters.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#cba72f]/20 text-[#ffe088] flex items-center justify-center text-xl">
              🔥
            </div>
            <h3 className="font-serif text-lg font-bold text-[#ffe088]">Endocrine Harmony</h3>
            <span className="text-[10px] bg-white/20 text-white px-2.5 py-0.5 rounded-full font-bold">
              Pitta: Neutral
            </span>
            <p className="text-xs text-white/80 leading-relaxed">
              Supports thyroid balance and reproductive hormones without provoking internal heat.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Botanical Architecture */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#735c00] dark:text-[#cba72f]">
            Synergistic Formulation
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#012d1d] dark:text-[#c1ecd4]">
            Botanical Architecture
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ashwagandha.ingredients.map((ing, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-[#1b4332]/40 border border-[#c1c8c2]/30 dark:border-[#274e3d] space-y-3 shadow-sm">
              <span className="material-symbols-outlined text-3xl text-[#cba72f]">
                {ing.icon || 'spa'}
              </span>
              <h4 className="font-serif text-base font-bold text-[#012d1d] dark:text-[#c1ecd4]">
                {ing.name}
              </h4>
              {ing.sanskritName && (
                <span className="text-xs text-[#735c00] dark:text-[#cba72f] italic font-serif block">
                  ({ing.sanskritName})
                </span>
              )}
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {ing.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. The Evening Ritual Cards & Interactive Timer */}
      <section className="p-6 sm:p-10 rounded-3xl bg-[#edeeef] dark:bg-[#121614]/90 border border-[#c1c8c2]/40 dark:border-[#274e3d] space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#735c00] dark:text-[#cba72f]">
              Preparation Guide
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#012d1d] dark:text-[#c1ecd4]">
              The Evening Ritual
            </h2>
          </div>

          <button
            onClick={onOpenTimer}
            className="py-3 px-6 rounded-full bg-[#cba72f] text-[#241a00] hover:bg-[#ffe088] font-bold text-xs shadow-md transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-base">timer</span>
            <span>Launch Evening Infusion Timer</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ashwagandha.ritualSteps?.map((step) => (
            <div key={step.step} className="p-6 rounded-2xl bg-white dark:bg-[#1b4332]/50 border border-[#c1c8c2]/30 space-y-3">
              <span className="font-serif text-2xl font-bold text-[#cba72f] block">
                {step.step}
              </span>
              <h4 className="font-serif text-lg font-bold text-[#012d1d] dark:text-[#c1ecd4]">
                {step.title}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
