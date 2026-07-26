import React, { useState } from 'react';
import { PageView } from '../types';

interface WisdomViewProps {
  onOpenQuiz: () => void;
  setCurrentView: (view: PageView) => void;
}

const ELEMENTS = [
  {
    name: 'Akasha (Ether)',
    symbol: '🌌',
    description: 'The vast expanse in which all creation unfolds. Associated with internal space, auditory perception, and mental openness.',
    dosha: 'Vata'
  },
  {
    name: 'Vayu (Air)',
    symbol: '💨',
    description: 'The dynamic force of movement. Governs breathing, nerve impulses, cellular circulation, and creative thought.',
    dosha: 'Vata'
  },
  {
    name: 'Agni (Fire)',
    symbol: '🔥',
    description: 'The transformative energy of digestion. Governs metabolic breakdown, intellectual discernment, and body temperature.',
    dosha: 'Pitta'
  },
  {
    name: 'Jala (Water)',
    symbol: '🌊',
    description: 'The cohesive principle of liquidity and moisture. Supports tissue hydration, joint lubrication, and emotional fluidity.',
    dosha: 'Pitta / Kapha'
  },
  {
    name: 'Prithvi (Earth)',
    symbol: '⛰️',
    description: 'The grounded foundation of physical structure. Gives shape to bones, muscle density, and emotional stability.',
    dosha: 'Kapha'
  }
];

const DAILY_RHYTHMS = [
  {
    time: '06:00 AM - 10:00 AM',
    phase: 'Morning Kapha Phase',
    title: 'Awakening, Cleansing & Movement',
    icon: 'wb_sunny',
    description: 'Kapha energy is heavy and cool. Counteract morning sluggishness by waking before 6 AM (Brahma Muhurta), scraping the tongue to remove Ama (metabolic waste), sipping warm water, and engaging in energizing movement.',
    rituals: ['Tongue Scraping (Jihva Nirlekhana)', 'Warm Water with Lemon & Honey', 'Brisk Movement or Sun Salutations']
  },
  {
    time: '10:00 AM - 02:00 PM',
    phase: 'Midday Pitta Phase',
    title: 'Peak Agni & Digestive Power',
    icon: 'light_mode',
    description: 'Solar heat peaks alongside your internal Agni (digestive fire). This is the optimal window to consume your largest, most nutrient-dense meal, as digestion is at its highest efficiency.',
    rituals: ['Substantial Nourishing Lunch', 'Post-Meal 100-Step Gentle Walk', 'Focused High-Priority Mental Execution']
  },
  {
    time: '02:00 PM - 06:00 PM',
    phase: 'Afternoon Vata Phase',
    title: 'Creative Agility & Mental Clarity',
    icon: 'air',
    description: 'Vata brings lightness and creative flow. Ideal for strategic planning, brainstorming, and artistic work. Enjoy a warm cup of herbal tea (Tulsi or Brahmi) to ground wind-like restlessness.',
    rituals: ['Warm Adaptogenic Herb Infusion', 'Creative Collaboration', 'Breathing Exercises (Nadi Shodhana)']
  },
  {
    time: '06:00 PM - 10:00 PM',
    phase: 'Evening Kapha Phase',
    title: 'Nourishing Wind-Down & Relaxation',
    icon: 'nights_stay',
    description: 'As dusk falls, heavy Kapha energy returns to prepare the body for rest. Eat a light dinner before 7 PM, dim artificial blue lights, and prepare a warm cup of spiced golden milk with Ashwagandha.',
    rituals: ['Light, Easily Digestible Dinner', 'Warm Abhyanga Oil Massage', 'Golden Milk with Ashwagandha & Nutmeg']
  },
  {
    time: '10:00 PM - 02:00 AM',
    phase: 'Night Pitta Phase',
    title: 'Cellular Cleanse & Liver Detox',
    icon: 'bedtime',
    description: 'While you sleep peacefully, internal Pitta fire works to cleanse the liver, process cellular waste, and repair tissue. Sleeping by 10 PM ensures maximum physiological restoration.',
    rituals: ['Uninterrupted Restful Sleep', 'Cool & Well-Ventilated Room', 'Complete Screen & Tech Fast']
  },
  {
    time: '02:00 AM - 06:00 AM',
    phase: 'Pre-Dawn Vata Phase',
    title: 'Brahma Muhurta & Spiritual Clarity',
    icon: 'self_improvement',
    description: 'The hours before dawn carry subtle, ethereal Vata vibration. The mind is naturally still and receptive, making this sacred window supreme for meditation, prayer, and deep self-reflection.',
    rituals: ['Silent Meditation & Prayer', 'Pranayama Breathwork', 'Setting Daily Intentions']
  }
];

const SEASONAL_GUIDES = [
  {
    season: 'Spring (Vasanta Ritu)',
    months: 'March – May',
    doshaFocus: 'Kapha Liquefaction & Renewal',
    icon: 'local_florist',
    bgAccent: 'border-emerald-500/30 bg-emerald-500/5',
    overview: 'As winter ice thaws, accumulated Kapha in the body begins to liquefy, which can manifest as spring congestion, allergy flare-ups, or seasonal lethargy.',
    dietary: 'Prefer light, warm, dry foods with pungent, bitter, and astringent flavors (sprouted grains, radishes, spinach, ginger, black pepper). Limit heavy dairy and cold sweets.',
    lifestyle: 'Engage in dry skin brushing (Garshana), vigorous exercise, and morning sun exposure to stimulate lymphatic drainage.',
    herbs: 'Triphala Harmonizer for gentle gut detox, Guduchi (Tinospora) for immune balance, and Pippali for respiratory openness.'
  },
  {
    season: 'Summer (Greshma Ritu)',
    months: 'June – August',
    doshaFocus: 'Pitta Accumulation & Internal Heat',
    icon: 'sunny',
    bgAccent: 'border-amber-500/30 bg-amber-500/5',
    overview: 'Environmental heat increases Pitta in the body, which can lead to skin irritation, acidity, dehydration, and quickness to anger.',
    dietary: 'Favor cooling, sweet, bitter, and astringent foods (fresh coconut water, sweet melons, cucumber, ghee, mint, cilantro, and basmati rice). Avoid spicy, fried, or overly salty dishes.',
    lifestyle: 'Enjoy moonlit walks, sandalwood aromatherapy, cooling swimming sessions, and avoid direct midday sun during peak solar hours.',
    herbs: 'Shatavari Rejuvenator for deep hydration and tissue cooling, Amla for Pitta balancing, and Rose Hydromel.'
  },
  {
    season: 'Autumn (Sharad Ritu)',
    months: 'September – November',
    doshaFocus: 'Pitta Transition & Vata Ingress',
    icon: 'park',
    bgAccent: 'border-orange-500/30 bg-orange-500/5',
    overview: 'As summer heat fades into crisp, dry winds, residual Pitta heat meets rising Vata dry energy, making gentle blood and digestive soothing essential.',
    dietary: 'Consume sweet, bitter, and grounding warm meals (squash, apples, pomegranates, warm oatmeal, and ghee).',
    lifestyle: 'Maintain steady daily routines, practice relaxing yoga, apply warm sesame oil to soles of feet before sleep.',
    herbs: 'Brahmi Focus for nervous system balance, Manjistha for blood purifying, and Cardamom for digestive comfort.'
  },
  {
    season: 'Winter (Hemanta Ritu)',
    months: 'December – February',
    doshaFocus: 'Vata Balancing & Ojas Building',
    icon: 'ac_unit',
    bgAccent: 'border-blue-500/30 bg-blue-500/5',
    overview: 'Cold, dry winter air kindles strong internal digestive fire (Agni). Body energy draws inward to build deep cellular reserves and immune vigor (Ojas).',
    dietary: 'Emphasize rich, warm, cooked, stews, healthy fats (Cultured A2 Ghee), warming spices (cinnamon, clove, nutmeg), and root vegetables.',
    lifestyle: 'Daily full-body warm oil massage (Abhyanga), cozy sauna therapy, staying warm, and getting adequate rest.',
    herbs: 'Ashwagandha Rejuvenator for strength and stress resilience, Chyawanprash for immune vitality, and Shilajit.'
  }
];

export const WisdomView: React.FC<WisdomViewProps> = ({ onOpenQuiz }) => {
  const [activeTab, setActiveTab] = useState<'elements' | 'dinacharya' | 'ritucharya'>('dinacharya');

  return (
    <div className="pt-24 pb-20 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 space-y-12 sm:space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#cba72f]/20 text-[#735c00] dark:text-[#ffe088] text-xs font-bold uppercase tracking-widest">
          <span className="material-symbols-outlined text-sm">auto_stories</span>
          <span>Ayurvedic Wisdom & Science</span>
        </span>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#012d1d] dark:text-[#c1ecd4] tracking-tight">
          The Sacred Science of Balance
        </h1>

        <p className="text-xs sm:text-base text-[#414844] dark:text-[#bfc9c3] leading-relaxed max-w-2xl mx-auto">
          Ayurveda translates to "The Knowledge of Life." Explore elemental physiology, 24-hour circadian rhythms (Dinacharya), and seasonal wellness practices (Ritucharya).
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center border-b border-[#c1c8c2]/30 dark:border-[#274e3d] gap-2 sm:gap-8 text-xs sm:text-sm">
        <button
          onClick={() => setActiveTab('dinacharya')}
          className={`pb-3.5 px-3 font-serif font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'dinacharya'
              ? 'text-[#012d1d] dark:text-[#c1ecd4] border-b-2 border-[#cba72f]'
              : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
          }`}
        >
          <span className="material-symbols-outlined text-base">schedule</span>
          <span>Daily Rhythm (Dinacharya)</span>
        </button>

        <button
          onClick={() => setActiveTab('ritucharya')}
          className={`pb-3.5 px-3 font-serif font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'ritucharya'
              ? 'text-[#012d1d] dark:text-[#c1ecd4] border-b-2 border-[#cba72f]'
              : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
          }`}
        >
          <span className="material-symbols-outlined text-base">thermostat</span>
          <span>Seasonal Guide (Ritucharya)</span>
        </button>

        <button
          onClick={() => setActiveTab('elements')}
          className={`pb-3.5 px-3 font-serif font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'elements'
              ? 'text-[#012d1d] dark:text-[#c1ecd4] border-b-2 border-[#cba72f]'
              : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
          }`}
        >
          <span className="material-symbols-outlined text-base">spa</span>
          <span>5 Elements (Panchamahabhuta)</span>
        </button>
      </div>

      {/* Tab 1: Dinacharya (Daily Routine) */}
      {activeTab === 'dinacharya' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#012d1d] dark:text-[#c1ecd4]">
              Circadian Alignment: The 24-Hour Clock
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              In Ayurveda, the 24-hour day is divided into two 12-hour cycles, each governed by Vata, Pitta, and Kapha energies. Aligning your daily activities with these bio-rhythms optimizes vitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DAILY_RHYTHMS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-[#1b4332]/40 border border-[#c1c8c2]/30 dark:border-[#274e3d] space-y-4 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#735c00] dark:text-[#cba72f] bg-[#cba72f]/15 px-3 py-1 rounded-full">
                      {item.time}
                    </span>
                    <span className="material-symbols-outlined text-2xl text-[#cba72f]">
                      {item.icon}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] text-gray-400 dark:text-gray-400 font-semibold uppercase block">
                      {item.phase}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#012d1d] dark:text-[#c1ecd4]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#c1c8c2]/20 dark:border-[#274e3d]/40">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#012d1d] dark:text-[#c1ecd4] block mb-1.5">
                    Recommended Rituals:
                  </span>
                  <ul className="space-y-1 text-xs text-[#414844] dark:text-[#bfc9c3]">
                    {item.rituals.map((r, rIdx) => (
                      <li key={rIdx} className="flex items-center gap-1.5">
                        <span className="text-[#cba72f] text-xs">✦</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Ritucharya (Seasonal Routines Guide) */}
      {activeTab === 'ritucharya' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#012d1d] dark:text-[#c1ecd4]">
              Ritucharya: Seasonal Harmony & Adaptogenic Guide
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              As external seasons shift, internal physiology adapts. Adjusting diet, lifestyle, and herbal adaptogens prevents seasonal illness and maintains year-round equilibrium.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {SEASONAL_GUIDES.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1b4332]/40 border ${item.bgAccent} space-y-5 shadow-md`}
              >
                {/* Header */}
                <div className="flex items-start justify-between border-b border-[#c1c8c2]/30 dark:border-[#274e3d] pb-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#735c00] dark:text-[#cba72f]">
                      {item.months}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#012d1d] dark:text-[#c1ecd4]">
                      {item.season}
                    </h3>
                    <span className="inline-block text-[11px] font-semibold text-[#012d1d] dark:text-[#c1ecd4] bg-[#cba72f]/20 px-2.5 py-0.5 rounded-full">
                      Dosha Focus: {item.doshaFocus}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-[#cba72f]">
                    {item.icon}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 leading-relaxed italic">
                  "{item.overview}"
                </p>

                {/* Grid Details */}
                <div className="space-y-3 text-xs">
                  <div className="p-3.5 rounded-2xl bg-[#f8f9fa] dark:bg-[#121614] border border-[#c1c8c2]/30 space-y-1">
                    <h5 className="font-serif font-bold text-[#012d1d] dark:text-[#c1ecd4] flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-[#cba72f]">restaurant</span>
                      <span>Dietary & Flavor Recommendations:</span>
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.dietary}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#f8f9fa] dark:bg-[#121614] border border-[#c1c8c2]/30 space-y-1">
                    <h5 className="font-serif font-bold text-[#012d1d] dark:text-[#c1ecd4] flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-[#cba72f]">self_improvement</span>
                      <span>Lifestyle Practices:</span>
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.lifestyle}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#012d1d] text-white space-y-1">
                    <h5 className="font-serif font-bold text-[#ffe088] flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-[#ffe088]">spa</span>
                      <span>Key Herbal Adaptogens:</span>
                    </h5>
                    <p className="text-[#c1ecd4] leading-relaxed">
                      {item.herbs}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Panchamahabhuta (5 Elements) */}
      {activeTab === 'elements' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {ELEMENTS.map((elem) => (
              <div
                key={elem.name}
                className="p-6 rounded-3xl bg-white dark:bg-[#1b4332]/40 border border-[#c1c8c2]/30 dark:border-[#274e3d] space-y-3 text-center hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-2">{elem.symbol}</div>
                <h3 className="font-serif text-lg font-bold text-[#012d1d] dark:text-[#c1ecd4]">
                  {elem.name}
                </h3>
                <span className="text-[10px] bg-[#cba72f]/20 text-[#735c00] dark:text-[#ffe088] px-2.5 py-0.5 rounded-full font-bold inline-block">
                  {elem.dosha}
                </span>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {elem.description}
                </p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-[#012d1d] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 max-w-xl">
              <h3 className="font-serif text-2xl font-bold text-[#ffe088]">
                Discover Which Elements Dominate Your Body
              </h3>
              <p className="text-xs text-[#c1ecd4]">
                Take our 2-minute Prakriti assessment to identify your primary Dosha constitution and explore tailored lifestyle facts.
              </p>
            </div>
            <button
              onClick={onOpenQuiz}
              className="py-3.5 px-8 rounded-full bg-[#cba72f] text-[#241a00] font-bold text-xs whitespace-nowrap hover:bg-[#ffe088] transition-colors shadow-lg"
            >
              Take Dosha Quiz →
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
