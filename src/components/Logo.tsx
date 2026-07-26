import React from 'react';
import logoImg from '../assets/images/aaptoveda-logo.jpg';

interface LogoProps {
  variant?: 'light' | 'dark' | 'auto';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'auto',
  size = 'md',
  showSubtitle = true,
  className = ''
}) => {
  // Height configurations
  const logoHeight = size === 'sm' ? 'h-8 sm:h-9' : size === 'lg' ? 'h-14 sm:h-16' : 'h-10 sm:h-11';
  const textTitleSize = size === 'sm' ? 'text-lg sm:text-xl' : size === 'lg' ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl';
  const textSubSize = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-xs tracking-[0.2em]' : 'text-[10px] tracking-[0.18em]';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {/* Brand Icon Image with crisp rounded framing */}
      <div className={`relative ${logoHeight} aspect-square rounded-xl overflow-hidden bg-white dark:bg-white/95 p-1 border border-[#c1c8c2]/40 shadow-sm shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
        <img
          src={logoImg}
          alt="AaptoVeda Wellness Logo"
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left justify-center">
        <span className={`font-serif font-bold tracking-tight leading-none ${textTitleSize} ${
          variant === 'light' 
            ? 'text-white' 
            : variant === 'dark' 
            ? 'text-[#012d1d]' 
            : 'text-[#012d1d] dark:text-[#c1ecd4]'
        }`}>
          AaptoVeda
        </span>
        
        {showSubtitle && (
          <span className={`font-sans font-semibold uppercase ${textSubSize} mt-0.5 ${
            variant === 'light'
              ? 'text-[#c1ecd4]'
              : variant === 'dark'
              ? 'text-[#735c00]'
              : 'text-[#735c00] dark:text-[#cba72f]'
          }`}>
            Wellness
          </span>
        )}
      </div>
    </div>
  );
};
