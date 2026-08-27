import React from 'react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="relative bg-[#f8f9fa] dark:bg-[#121614] text-[#191c1d] dark:text-[#f0f1f2] w-full max-w-3xl rounded-3xl shadow-2xl border border-[#c1c8c2]/40 dark:border-[#274e3d] overflow-hidden my-auto max-h-[90vh] flex flex-col md:flex-row"
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

        {/* Left Column: Image */}
        <div className="w-full md:w-2/5 relative bg-[#1b4332] min-h-[280px] md:min-h-full flex flex-col justify-end p-6 md:p-8 text-white shrink-0">
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <img
              src={product.image}
              alt={product.title}
              className="max-w-full max-h-full w-auto h-auto object-contain"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#012d1d] via-transparent to-transparent pointer-events-none"></div>

          <div className="relative z-10 space-y-1.5">
            <span className="bg-[#cba72f] text-[#241a00] font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full inline-block">
              {product.category}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold leading-tight">
              {product.title}
            </h2>
            <span className="text-xs text-[#c1ecd4] font-medium block">
              {product.form} · {product.volume}
            </span>
          </div>
        </div>

        {/* Right Column: Ingredients Only */}
        <div className="w-full md:w-3/5 p-6 md:p-8 space-y-4 overflow-y-auto">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#735c00] dark:text-[#cba72f]">
            Ingredients
          </h4>
          <div className="space-y-2">
            {product.ingredients.map((ing, i) => (
              <div key={i} className="text-xs p-3 rounded-xl bg-white dark:bg-[#1b4332]/40 border border-[#c1c8c2]/30">
                <div className="font-bold text-[#012d1d] dark:text-[#c1ecd4] flex items-center justify-between flex-wrap gap-1">
                  <span>{ing.name}</span>
                  {ing.sanskritName && (
                    <span className="text-[10px] text-[#cba72f] italic font-serif">
                      ({ing.sanskritName})
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">{ing.description}</p>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={onClose}
              className="w-full sm:w-auto py-3 px-6 rounded-full border border-gray-300 dark:border-gray-700 text-xs font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
