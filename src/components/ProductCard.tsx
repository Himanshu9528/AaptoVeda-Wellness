import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect
}) => {
  return (
    <div
      onClick={() => onSelect(product)}
      className="group relative bg-white dark:bg-[#1b4332]/40 rounded-2xl overflow-hidden border border-[#edeeef] dark:border-[#274e3d]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
    >
      {/* Product Image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#f3f4f5] dark:bg-[#0d100e] flex items-center justify-center p-5">
        <img
          src={product.image}
          alt={product.title}
          className="max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Hover overlay button */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <span className="bg-white/95 dark:bg-[#012d1d] text-[#012d1d] dark:text-[#c1ecd4] font-semibold text-xs px-5 py-2.5 rounded-full shadow-lg border border-[#cba72f]/40 flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <span>View Ingredients</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </span>
        </div>
      </div>

      {/* Card Info */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#735c00] dark:text-[#cba72f] mb-1">
            {product.category}
          </div>
          <h3 className="font-serif text-lg font-bold text-[#191c1d] dark:text-[#f0f1f2] group-hover:text-[#012d1d] dark:group-hover:text-[#c1ecd4] transition-colors line-clamp-1">
            {product.title}
          </h3>
        </div>

        {/* Footer Row */}
        <div className="pt-3 border-t border-[#f3f4f5] dark:border-[#274e3d]/40 flex items-center justify-between text-xs">
          <span className="text-[11px] font-medium text-[#57615c] dark:text-[#a5d0b9] bg-[#f3f4f5] dark:bg-[#121614] px-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-800">
            {product.form} · {product.volume}
          </span>

          <span className="font-semibold text-[#012d1d] dark:text-[#c1ecd4] group-hover:text-[#cba72f] transition-colors flex items-center gap-1">
            <span>Ingredients</span>
            <span className="material-symbols-outlined text-sm">east</span>
          </span>
        </div>
      </div>
    </div>
  );
};
