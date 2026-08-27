import React, { useState, useEffect } from 'react';
import { PRODUCTS } from './data/products';
import { Product, PageView } from './types';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { DoshaQuizModal } from './components/DoshaQuizModal';

import { HomeView } from './views/HomeView';
import { RemediesView } from './views/RemediesView';
import { SpotlightView } from './views/SpotlightView';
import { WisdomView } from './views/WisdomView';
import { ContactView } from './views/ContactView';

export function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');

  // Initialize dark mode from localStorage or default to false
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('aaptoveda_theme');
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quizOpen, setQuizOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Synchronize dark mode class on <html> element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    try {
      localStorage.setItem('aaptoveda_theme', JSON.stringify(darkMode));
    } catch {
      // Ignore storage errors
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen min-h-dvh w-full max-w-[100vw] overflow-x-hidden bg-[#f8f9fa] dark:bg-[#121614] text-[#191c1d] dark:text-[#f0f1f2] flex flex-col justify-between selection:bg-[#cba72f] selection:text-[#241a00] transition-colors duration-300">

      {/* Top Fixed Navbar */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenQuiz={() => setQuizOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Page View Content */}
      <main className="flex-grow w-full">
        {currentView === 'home' && (
          <HomeView
            products={PRODUCTS}
            setCurrentView={setCurrentView}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onOpenQuiz={() => setQuizOpen(true)}
          />
        )}

        {currentView === 'remedies' && (
          <RemediesView
            products={PRODUCTS}
            onSelectProduct={(p) => setSelectedProduct(p)}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setCurrentView={setCurrentView}
          />
        )}

        {currentView === 'spotlight' && (
          <SpotlightView
            products={PRODUCTS}
          />
        )}

        {currentView === 'wisdom' && (
          <WisdomView
            onOpenQuiz={() => setQuizOpen(true)}
            setCurrentView={setCurrentView}
          />
        )}

        {currentView === 'contact' && <ContactView />}
      </main>

      {/* Footer */}
      <Footer
        setCurrentView={setCurrentView}
        onOpenQuiz={() => setQuizOpen(true)}
      />

      {/* Product Detail Modal (Ingredients Only) */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Dosha Quiz Modal (Purely Educational, No Product Suggestions) */}
      <DoshaQuizModal
        isOpen={quizOpen}
        onClose={() => setQuizOpen(false)}
      />

    </div>
  );
}

export default App;
