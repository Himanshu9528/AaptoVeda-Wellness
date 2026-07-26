import React, { useState, useMemo } from 'react';
import { Product, CategoryType, PageView } from '../types';
import { ProductCard } from '../components/ProductCard';

interface RemediesViewProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  setCurrentView: (v: PageView) => void;
}

const CATEGORIES: CategoryType[] = [
  'All',
  'Vitality & Strength',
  'Detox & Digestion',
  'Memory & Clarity',
  'Hormonal Balance',
  'Stress Relief',
  'Skin & Blood',
  'Ojas Builder',
  'Inflammation Support'
];

export const RemediesView: React.FC<RemediesViewProps> = ({
  products,
  onSelectProduct,
  searchQuery,
  setSearchQuery
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesSearch = 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <div className="pt-24 pb-20 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 space-y-10 sm:space-y-12">
      
      {/* Educational Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#cba72f]/20 text-[#735c00] dark:text-[#ffe088] text-xs font-bold uppercase tracking-widest">
          <span className="material-symbols-outlined text-sm">local_pharmacy</span>
          <span>Botanical Apothecary Library</span>
        </span>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#012d1d] dark:text-[#c1ecd4] tracking-tight">
          Classical Herbology & Adaptogenic Profiles
        </h1>

        <p className="text-xs sm:text-base text-[#414844] dark:text-[#bfc9c3] leading-relaxed max-w-2xl mx-auto">
          Explore our reference index of classical Ayurvedic botanicals, active phytocompounds, energetic Dosha affinities, and traditional preparation rituals.
        </p>
      </div>

      {/* Category Pills & Search Bar */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#c1c8c2]/30 dark:border-[#274e3d]/40">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#012d1d] text-white dark:bg-[#c1ecd4] dark:text-[#012d1d] shadow-sm'
                  : 'bg-[#edeeef] dark:bg-[#1b4332]/40 text-[#414844] dark:text-[#bfc9c3] hover:bg-gray-200 dark:hover:bg-[#1b4332]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Active Filter Indicator */}
        {(selectedCategory !== 'All' || searchQuery) && (
          <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
            <div>
              Showing <strong>{filteredProducts.length}</strong> botanical profiles
              {selectedCategory !== 'All' && <span> in <em>{selectedCategory}</em></span>}
              {searchQuery && <span> matching "<em>{searchQuery}</em>"</span>}
            </div>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-[#cba72f] hover:underline font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-[#edeeef] dark:bg-[#1b4332]/20 rounded-3xl space-y-3">
          <span className="material-symbols-outlined text-4xl text-gray-400">search_off</span>
          <h3 className="font-serif text-xl font-bold text-[#012d1d] dark:text-[#c1ecd4]">No botanical profiles found</h3>
          <p className="text-xs text-gray-500">
            Try adjusting your search query or selecting a different category tab.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="py-2.5 px-6 rounded-full bg-[#012d1d] text-white text-xs font-bold mt-2 hover:bg-[#1b4332]"
          >
            Show All Profiles
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
            />
          ))}
        </div>
      )}

    </div>
  );
};
