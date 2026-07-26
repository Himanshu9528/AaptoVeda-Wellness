import React, { useState } from 'react';
import { PageView } from '../types';
import { Logo } from './Logo';

interface FooterProps {
  setCurrentView: (view: PageView) => void;
  onOpenQuiz: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentView, onOpenQuiz }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleNav = (view: PageView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#012d1d] text-[#edeeef] pt-16 pb-12 border-t border-[#274e3d]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <button 
              onClick={() => handleNav('home')}
              className="text-left focus:outline-none"
              aria-label="AaptoVeda Home"
            >
              <Logo variant="light" size="lg" />
            </button>
            <p className="text-[#a5d0b9] text-sm leading-relaxed max-w-sm">
              Rooted in the 5,000-year classical tradition of Ayurvedic science. Honoring ancient botanical wisdom with verified modern quality standards.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="px-3 py-1 rounded-full text-[11px] bg-[#1b4332] text-[#c1ecd4] border border-[#274e3d] flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">eco</span>
                100% Organic Botanicals
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] bg-[#1b4332] text-[#c1ecd4] border border-[#274e3d] flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">verified</span>
                Heavy Metal Free
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-[#cba72f] uppercase tracking-wider text-xs">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#bfc9c3]">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('remedies')} className="hover:text-white transition-colors">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('spotlight')} className="hover:text-white transition-colors">
                  Spotlight
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('wisdom')} className="hover:text-white transition-colors">
                  Wisdom
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Philosophy & Experience */}
          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-[#cba72f] uppercase tracking-wider text-xs">
              Wisdom & Practice
            </h4>
            <ul className="space-y-2.5 text-sm text-[#bfc9c3]">
              <li>
                <button onClick={() => handleNav('wisdom')} className="hover:text-white transition-colors text-left">
                  5 Elements (Panchamahabhuta)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('wisdom')} className="hover:text-white transition-colors text-left">
                  Daily Rhythm (Dinacharya)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('wisdom')} className="hover:text-white transition-colors text-left">
                  Seasonal Guide (Ritucharya)
                </button>
              </li>
              <li>
                <button onClick={() => { onOpenQuiz(); }} className="hover:text-white transition-colors text-left flex items-center gap-1">
                  <span>Prakriti Dosha Quiz</span>
                  <span className="text-xs text-[#cba72f]">→</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors text-left">
                  General Inquiries & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-[#cba72f] uppercase tracking-wider text-xs">
              The Botanical Dispatch
            </h4>
            <p className="text-xs text-[#a5d0b9]">
              Receive lunar ritual guides and educational botanical insights.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#1b4332] rounded-xl text-xs text-[#c1ecd4] flex items-center gap-2">
                <span className="material-symbols-outlined text-base">check_circle</span>
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3.5 py-2 rounded-lg bg-[#1b4332]/80 text-white text-xs border border-[#274e3d] focus:outline-none focus:border-[#cba72f]"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-lg bg-[#cba72f] hover:bg-[#ffe088] text-[#241a00] font-semibold text-xs transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#274e3d]/60 flex flex-col sm:flex-row items-center justify-between text-xs text-[#73837a] gap-4">
          <p>© {new Date().getFullYear()} AaptoVeda Wellness Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:underline cursor-pointer">Purity Protocols</span>
            <span className="hover:underline cursor-pointer">Terms of Use</span>
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
