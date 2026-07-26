import React from 'react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenTimer: () => void;
  onViewSpotlight?: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onOpenTimer,
  onViewSpotlight
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative bg-[#f8f9fa] dark:bg-[#121614] text-[#191c1d] dark:text-[#f0f1f2] w-full max-w-4xl rounded-3xl shadow-2xl border border-[#c1c8c2]/40 dark:border-[#274e3d] overflow-hidden my-auto max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Left Column: Image & Quick Stats */}
        <div className="w-full md:w-1/2 relative bg-[#1b4332] min-h-[300px] md:min-h-full flex flex-col justify-between p-6 md:p-8 text-white">
          <img
            src={product.secondaryImage || product.image}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#012d1d] via-[#012d1d]/40 to-transparent"></div>

          <div className="relative z-10 flex items-center justify-between">
            <span className="bg-[#cba72f] text-[#241a00] font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
              {product.category}
            </span>
            <span className="text-xs text-[#c1ecd4] font-medium">
              {product.volume}
            </span>
          </div>

          <div className="relative z-10 space-y-2 my-auto pt-16 pb-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
              {product.title}
            </h2>
            <p className="text-sm text-[#c1ecd4] font-medium italic">
              "{product.tagline}"
            </p>
            {product.quote && (
              <p className="text-xs text-white/80 italic border-l-2 border-[#cba72f] pl-3 py-1">
                {product.quote}
              </p>
            )}
          </div>

          {/* Tri-Dosha Equilibrium Card */}
          <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 space-y-2">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#ffe088]">
              Tri-Dosha Balance
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-black/20 rounded-lg p-2">
                <div className="font-bold text-white">Vata</div>
                <div className="text-[11px] text-[#c1ecd4]">{product.dosha.vata}</div>
              </div>
              <div className="bg-black/20 rounded-lg p-2">
                <div className="font-bold text-white">Pitta</div>
                <div className="text-[11px] text-[#c1ecd4]">{product.dosha.pitta}</div>
              </div>
              <div className="bg-black/20 rounded-lg p-2">
                <div className="font-bold text-white">Kapha</div>
                <div className="text-[11px] text-[#c1ecd4]">{product.dosha.kapha}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Info & Actions */}
        <div className="w-full md:w-1/2 p-6 md:p-8 space-y-6 overflow-y-auto">
          {/* Header Info */}
          <div className="flex items-center justify-between border-b border-[#c1c8c2]/30 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#735c00] dark:text-[#cba72f]">
                Botanical Specification
              </span>
              <span className="text-sm font-semibold text-[#012d1d] dark:text-[#c1ecd4] block mt-0.5">
                {product.volume}
              </span>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-[#cba72f]">
                {'★'.repeat(Math.floor(product.rating))}
                <span className="text-xs font-bold text-[#191c1d] dark:text-[#f0f1f2] ml-1">
                  {product.rating} ({product.reviewsCount} reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#735c00] dark:text-[#cba72f]">
              Sacred Heritage & Efficacy
            </h4>
            <p className="text-xs md:text-sm text-[#414844] dark:text-[#bfc9c3] leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          {/* Key Benefits */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#735c00] dark:text-[#cba72f]">
              Key Benefits
            </h4>
            <ul className="space-y-1.5 text-xs text-[#191c1d] dark:text-[#f0f1f2]">
              {product.benefits.map((b, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#cba72f] text-sm">✦</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dosage & Preparation */}
          <div className="p-4 rounded-2xl bg-[#edeeef] dark:bg-[#1b4332]/50 border border-[#c1c8c2]/30 space-y-2">
            <div className="flex items-center justify-between">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#012d1d] dark:text-[#c1ecd4] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">prescriptions</span>
                Dosage & Ritual Guide
              </h5>
              <button
                onClick={onOpenTimer}
                className="text-[11px] text-[#735c00] dark:text-[#ffe088] underline hover:text-[#012d1d] flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-xs">timer</span>
                Ritual Timer
              </button>
            </div>
            <p className="text-xs text-[#414844] dark:text-[#bfc9c3]">
              <strong>Dosage:</strong> {product.dosage}
            </p>
            <p className="text-xs text-[#414844] dark:text-[#bfc9c3]">
              <strong>Suggested Ritual:</strong> {product.suggestedRitual}
            </p>
          </div>

          {/* Key Ingredients */}
          {product.ingredients.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#735c00] dark:text-[#cba72f]">
                Active Botanical Architecture
              </h4>
              <div className="space-y-2">
                {product.ingredients.map((ing, i) => (
                  <div key={i} className="text-xs p-2.5 rounded-xl bg-white dark:bg-[#121614] border border-[#c1c8c2]/20">
                    <div className="font-bold text-[#012d1d] dark:text-[#c1ecd4] flex items-center justify-between">
                      <span>{ing.name}</span>
                      {ing.sanskritName && (
                        <span className="text-[10px] text-[#cba72f] italic font-serif">
                          ({ing.sanskritName})
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-gray-500 mt-0.5">{ing.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Educational Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onOpenTimer();
                onClose();
              }}
              className="w-full py-3.5 px-6 rounded-full bg-[#012d1d] hover:bg-[#1b4332] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base">timer</span>
              <span>Launch Evening Infusion Timer</span>
            </button>

            {product.id === 'ashwagandha' && onViewSpotlight ? (
              <button
                onClick={() => {
                  onClose();
                  onViewSpotlight();
                }}
                className="w-full sm:w-auto py-3.5 px-5 rounded-full border border-[#012d1d] dark:border-[#c1ecd4] text-[#012d1d] dark:text-[#c1ecd4] font-semibold text-xs whitespace-nowrap hover:bg-[#012d1d] hover:text-white transition-all"
              >
                View Botanical Spotlight
              </button>
            ) : (
              <button
                onClick={onClose}
                className="w-full sm:w-auto py-3.5 px-6 rounded-full border border-gray-300 dark:border-gray-700 text-xs font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Close Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
