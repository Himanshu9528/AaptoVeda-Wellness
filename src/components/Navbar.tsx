import React, { useState } from 'react';
import { PageView } from '../types';
import { Logo } from './Logo';

interface NavbarProps {
  currentView: PageView;
  setCurrentView: (view: PageView) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenQuiz: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  darkMode,
  setDarkMode,
  onOpenQuiz,
  searchQuery,
  setSearchQuery
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleNavClick = (view: PageView) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#f8f9fa]/90 dark:bg-[#121614]/90 backdrop-blur-xl border-b border-[#c1c8c2]/30 dark:border-[#274e3d]/40 transition-colors duration-300">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 py-3.5 flex items-center justify-between gap-2">
        
        {/* Brand Logo (left zone, mirrors right zone width so center nav is truly centered) */}
        <div className="flex-1 flex items-center shrink-0">
          <button 
            onClick={() => handleNavClick('home')} 
            className="text-left focus:outline-none"
            aria-label="AaptoVeda Home"
          >
            <Logo size="md" />
          </button>
        </div>

        {/* Desktop Nav Links — centered between the two equal side zones */}
        <div className="hidden lg:flex items-center justify-center gap-4 xl:gap-7 text-sm font-semibold tracking-wide shrink-0">
          <button
            onClick={() => handleNavClick('home')}
            className={`pb-1 transition-all ${
              currentView === 'home'
                ? 'text-[#012d1d] dark:text-[#c1ecd4] border-b-2 border-[#cba72f]'
                : 'text-[#414844] dark:text-[#bfc9c3] hover:text-[#012d1d] dark:hover:text-white'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('remedies')}
            className={`pb-1 transition-all ${
              currentView === 'remedies'
                ? 'text-[#012d1d] dark:text-[#c1ecd4] border-b-2 border-[#cba72f]'
                : 'text-[#414844] dark:text-[#bfc9c3] hover:text-[#012d1d] dark:hover:text-white'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => handleNavClick('spotlight')}
            className={`pb-1 transition-all flex items-center gap-1.5 ${
              currentView === 'spotlight'
                ? 'text-[#012d1d] dark:text-[#c1ecd4] border-b-2 border-[#cba72f]'
                : 'text-[#414844] dark:text-[#bfc9c3] hover:text-[#012d1d] dark:hover:text-white'
            }`}
          >
            <span className="text-[#cba72f] text-xs">✨</span>
            Spotlight
          </button>
          <button
            onClick={() => handleNavClick('wisdom')}
            className={`pb-1 transition-all ${
              currentView === 'wisdom'
                ? 'text-[#012d1d] dark:text-[#c1ecd4] border-b-2 border-[#cba72f]'
                : 'text-[#414844] dark:text-[#bfc9c3] hover:text-[#012d1d] dark:hover:text-white'
            }`}
          >
            Wisdom
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`pb-1 transition-all ${
              currentView === 'contact'
                ? 'text-[#012d1d] dark:text-[#c1ecd4] border-b-2 border-[#cba72f]'
                : 'text-[#414844] dark:text-[#bfc9c3] hover:text-[#012d1d] dark:hover:text-white'
            }`}
          >
            Contact
          </button>
        </div>

        {/* Action Controls & Utilities (right zone, mirrors left zone width) */}
        <div className="flex-1 flex items-center justify-end gap-1.5 sm:gap-2 xl:gap-4">
          {/* Search Input Bar (full input only at xl+, where there's room) */}
          <div className="relative hidden xl:block">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (currentView !== 'remedies' && e.target.value.trim() !== '') {
                  setCurrentView('remedies');
                }
              }}
              placeholder="Search products..."
              className="bg-[#edeeef] dark:bg-[#1b4332]/60 text-[#191c1d] dark:text-[#f0f1f2] text-xs font-medium rounded-full px-4 py-2 pl-4 pr-9 w-40 2xl:w-52 focus:outline-none focus:ring-2 focus:ring-[#012d1d] dark:focus:ring-[#c1ecd4] transition-all"
            />
            <span className="material-symbols-outlined absolute right-3 top-2 text-lg text-[#414844] dark:text-[#a5d0b9] pointer-events-none">
              search
            </span>
          </div>

          {/* Compact Search Toggle (below xl, including tablet/small-desktop) */}
          <button
            onClick={() => setShowSearchInput(!showSearchInput)}
            className="xl:hidden p-2 rounded-full text-[#012d1d] dark:text-[#c1ecd4] hover:bg-gray-200 dark:hover:bg-[#1b4332]"
            aria-label="Search"
          >
            <span className="material-symbols-outlined text-xl">search</span>
          </button>

          {/* Dosha Quiz Button */}
          <button
            onClick={onOpenQuiz}
            className="hidden md:flex items-center gap-1.5 text-xs font-semibold px-3 lg:px-3.5 py-1.5 rounded-full bg-[#cba72f]/15 text-[#735c00] dark:text-[#ffe088] border border-[#cba72f]/40 hover:bg-[#cba72f]/25 transition-all whitespace-nowrap"
            title="Interactive Dosha Knowledge Assessment"
          >
            <span className="material-symbols-outlined text-sm">spa</span>
            <span>Dosha Quiz</span>
          </button>

          {/* Day / Night Theme Toggle (Icon Only) */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="p-2 rounded-full bg-[#edeeef] dark:bg-[#1b4332] text-[#012d1d] dark:text-[#c1ecd4] hover:bg-[#e0e2e4] dark:hover:bg-[#274e3d] transition-all active:scale-95 border border-[#c1c8c2]/30 dark:border-[#274e3d] flex items-center justify-center"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Light/Dark Theme"
          >
            <span className="material-symbols-outlined text-xl">
              {darkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#012d1d] dark:text-[#c1ecd4] hover:bg-gray-200 dark:hover:bg-[#1b4332]"
            aria-label="Toggle Mobile Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Compact Search Overlay (shown below xl when search icon is tapped) */}
      {showSearchInput && (
        <div className="xl:hidden px-4 sm:px-6 pb-3 pt-1 border-t border-[#c1c8c2]/20">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (currentView !== 'remedies') setCurrentView('remedies');
              }}
              placeholder="Search products..."
              className="w-full bg-[#edeeef] dark:bg-[#1b4332] text-xs px-4 py-2.5 rounded-full focus:outline-none text-[#191c1d] dark:text-white"
              autoFocus
            />
            <span className="material-symbols-outlined absolute right-3 top-2.5 text-lg text-gray-500">
              search
            </span>
          </div>
        </div>
      )}

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f8f9fa] dark:bg-[#121614] border-b border-[#c1c8c2]/30 px-6 py-6 space-y-4">
          <div className="flex flex-col gap-3 font-semibold text-base">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left py-2 border-b border-gray-100 dark:border-gray-800 ${
                currentView === 'home' ? 'text-[#cba72f]' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('remedies')}
              className={`text-left py-2 border-b border-gray-100 dark:border-gray-800 ${
                currentView === 'remedies' ? 'text-[#cba72f]' : ''
              }`}
            >
              Products
            </button>
            <button
              onClick={() => handleNavClick('spotlight')}
              className={`text-left py-2 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between ${
                currentView === 'spotlight' ? 'text-[#cba72f]' : ''
              }`}
            >
              <span>Spotlight</span>
              <span className="text-xs bg-[#cba72f] text-black px-2 py-0.5 rounded-full font-bold">Featured</span>
            </button>
            <button
              onClick={() => handleNavClick('wisdom')}
              className={`text-left py-2 border-b border-gray-100 dark:border-gray-800 ${
                currentView === 'wisdom' ? 'text-[#cba72f]' : ''
              }`}
            >
              Wisdom
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`text-left py-2 ${
                currentView === 'contact' ? 'text-[#cba72f]' : ''
              }`}
            >
              Contact
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                onOpenQuiz();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-full bg-[#012d1d] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md"
            >
              <span className="material-symbols-outlined text-sm">spa</span>
              <span>Take Educational Dosha Quiz</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
