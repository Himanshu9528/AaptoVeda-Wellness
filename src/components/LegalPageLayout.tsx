import React from 'react';

interface LegalPageLayoutProps {
  icon: string;
  eyebrow: string;
  title: string;
  intro: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  icon,
  eyebrow,
  title,
  intro,
  lastUpdated,
  children
}) => {
  return (
    <div className="pt-24 pb-20 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 space-y-12">

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#cba72f]/20 text-[#735c00] dark:text-[#ffe088] text-xs font-bold uppercase tracking-widest">
          <span className="material-symbols-outlined text-sm">{icon}</span>
          <span>{eyebrow}</span>
        </span>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#012d1d] dark:text-[#c1ecd4]">
          {title}
        </h1>

        <p className="text-xs sm:text-base text-[#414844] dark:text-[#bfc9c3] leading-relaxed">
          {intro}
        </p>

        <p className="text-[11px] text-[#73837a] dark:text-[#8ea295] italic">
          Last updated: {lastUpdated}
        </p>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto bg-white dark:bg-[#1b4332]/40 p-6 sm:p-10 rounded-3xl border border-[#c1c8c2]/30 dark:border-[#274e3d] shadow-xl space-y-8">
        {children}
      </div>
    </div>
  );
};

interface LegalSectionProps {
  title: string;
  children: React.ReactNode;
}

export const LegalSection: React.FC<LegalSectionProps> = ({ title, children }) => (
  <div className="space-y-2">
    <h2 className="font-serif text-lg sm:text-xl font-bold text-[#012d1d] dark:text-[#c1ecd4]">
      {title}
    </h2>
    <div className="text-xs sm:text-sm text-[#414844] dark:text-[#bfc9c3] leading-relaxed space-y-3">
      {children}
    </div>
  </div>
);