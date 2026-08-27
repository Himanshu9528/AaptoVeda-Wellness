import React from 'react';
import { Product } from '../types';

interface SpotlightViewProps {
  products: Product[];
}

export const SpotlightView: React.FC<SpotlightViewProps> = ({
  products
}) => {
  const spotlight = products.find((p) => p.id === 'aaptovit') || products[0];

  if (!spotlight) return null;

  return (
    <div className="pt-24 pb-20 max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 space-y-12 sm:space-y-16">

      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#cba72f]/20 text-[#735c00] dark:text-[#ffe088] text-xs font-bold uppercase tracking-widest">
          <span className="material-symbols-outlined text-sm">spa</span>
          <span>Botanical Spotlight</span>
        </span>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#012d1d] dark:text-[#c1ecd4]">
          {spotlight.title}
        </h1>

        <span className="inline-block text-xs sm:text-sm font-semibold text-[#012d1d] dark:text-[#c1ecd4] bg-[#edeeef] dark:bg-[#1b4332]/50 px-4 py-1.5 rounded-full">
          {spotlight.category} · {spotlight.form} · {spotlight.volume}
        </span>
      </div>

      {/* 2. Image + Ingredients Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

        {/* Left: Product Image */}
        <div className="lg:col-span-5">
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#c1c8c2]/30 dark:border-[#274e3d] shadow-xl">
  <img
    src={spotlight.image}
    alt={spotlight.title}
    className="w-full h-full object-cover object-center"
  />
</div>
        </div>

        {/* Right: Ingredients Only */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="font-serif text-2xl font-bold text-[#012d1d] dark:text-[#c1ecd4]">
            Ingredients
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {spotlight.ingredients.map((ing, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-[#1b4332]/40 border border-[#c1c8c2]/30 dark:border-[#274e3d] space-y-1.5 shadow-sm">
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
        </div>
      </div>

    </div>
  );
};
