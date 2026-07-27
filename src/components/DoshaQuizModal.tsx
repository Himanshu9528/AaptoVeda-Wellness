import React, { useState } from 'react';
import { Product } from '../types';

interface DoshaQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

interface Question {
  id: number;
  text: string;
  category: string;
  insight: string;
  options: {
    label: string;
    dosha: 'vata' | 'pitta' | 'kapha';
    description: string;
    fact: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'How does your physical body naturally respond to activity and rest?',
    category: 'Prakriti & Physical Constitution',
    insight: 'Classical Ayurveda identifies physical structure through Mahabhutas (5 Elements). Vata represents Ether & Air, Pitta represents Fire & Water, and Kapha represents Earth & Water.',
    options: [
      {
        label: 'Light, Agile & Slender Frame',
        dosha: 'vata',
        description: 'Naturally lean, fine bone structure, swift movements, variable energy.',
        fact: 'Air (Vayu) and Ether (Akasha) create mobility and lightness in tissue structure.'
      },
      {
        label: 'Medium, Athletic & Warm Build',
        dosha: 'pitta',
        description: 'Balanced muscle tone, naturally warm hands and skin, active metabolism.',
        fact: 'Fire (Agni) governs metabolic transformation, internal heat, and digestion.'
      },
      {
        label: 'Sturdy, Grounded & Strong Frame',
        dosha: 'kapha',
        description: 'Strong stamina, broad joints, excellent physical endurance and resilience.',
        fact: 'Earth (Prithvi) and Water (Jala) provide structural density, lubrication, and stability.'
      }
    ]
  },
  {
    id: 2,
    text: 'What best characterizes your mental processing and focus under pressure?',
    category: 'Manas & Mental Energy',
    insight: 'Ayurveda connects mental constitution with Prana (vital force). Different doshas balance mental creativity, sharp intellect, and emotional calm.',
    options: [
      {
        label: 'Creative, Imaginative & Quick-Thinking',
        dosha: 'vata',
        description: 'Grasps concepts quickly, highly creative, but mental focus can scatter when tired.',
        fact: 'Vata mind is like wind—swift, innovative, adaptable, and prone to rapid ideation.'
      },
      {
        label: 'Sharp, Methodical & Goal-Oriented',
        dosha: 'pitta',
        description: 'Highly organized, focused, articulate, driven to solve complex problems.',
        fact: 'Pitta mind is driven by Tejas (radiant glow and keen discernment) for sharp focus.'
      },
      {
        label: 'Calm, Patient & Methodical Memory',
        dosha: 'kapha',
        description: 'Takes time to absorb details, but retains knowledge permanently with great calm.',
        fact: 'Kapha mind is steady and compassionate, storing memory like stone carving.'
      }
    ]
  },
  {
    id: 3,
    text: 'How does your digestive fire (Agni) behave throughout the day?',
    category: 'Agni & Metabolic Intelligence',
    insight: 'Charaka Samhita states that Agni (digestive fire) is the root of health, immune strength, and longevity.',
    options: [
      {
        label: 'Variable Agni (Vishamagni)',
        dosha: 'vata',
        description: 'Appetite fluctuates unpredictably; digestion benefits from warm, cooked meals.',
        fact: 'Irregular digestive fire is stabilized by warm sesame oils and digestive spices like cumin.'
      },
      {
        label: 'Intense Agni (Tikshnagni)',
        dosha: 'pitta',
        description: 'Strong, regular hunger; feels irritable if meals are delayed; prefers cooling foods.',
        fact: 'Strong digestive fire converts food rapidly and benefits from cooling herbs like Shatavari.'
      },
      {
        label: 'Gentle Agni (Mandagni)',
        dosha: 'kapha',
        description: 'Steady, slow digestion; can easily skip meals without feeling weak; loves light spices.',
        fact: 'Slower digestive fire is enlivened by warming spices like ginger, black pepper, and cinnamon.'
      }
    ]
  },
  {
    id: 4,
    text: 'What are your natural sleep patterns and dream qualities (Nidra & Swapna)?',
    category: 'Nidra & Circadian Rest',
    insight: 'Nidra (sleep) is one of the three pillars of life in Ayurveda (Trayopastambha), critical for nervous system repair.',
    options: [
      {
        label: 'Light, Variable Sleep & Vivid Flying Dreams',
        dosha: 'vata',
        description: 'Awakens easily to faint sounds; dreams often involve movement, flying, or wind.',
        fact: 'Vata sleep responds wonderfully to nightly warm golden milk with nutmeg and foot oiling.'
      },
      {
        label: 'Moderate, Sound Sleep & Passionate Dreams',
        dosha: 'pitta',
        description: 'Sleeps soundly for 6–7 hours; dreams are vivid, colorful, and action-oriented.',
        fact: 'Pitta sleep quality improves when keeping the bedroom cool and avoiding late work.'
      },
      {
        label: 'Deep, Heavy Sleep & Peaceful Dreams',
        dosha: 'kapha',
        description: 'Sleeps deeply and easily for 8+ hours; dreams are calm, aquatic, or serene.',
        fact: 'Kapha benefits from rising before 6 AM to prevent morning inertia and heaviness.'
      }
    ]
  },
  {
    id: 5,
    text: 'How does your skin naturally react to climate and environmental changes?',
    category: 'Tvacha & Dermal Health',
    insight: 'Skin reflection in Ayurveda reveals systemic Rasa (plasma) and Rakta (blood) tissue balance.',
    options: [
      {
        label: 'Dry, Cool, Fine-Pored & Delicate',
        dosha: 'vata',
        description: 'Prone to dryness, fine lines, or chapping during cold or windy weather.',
        fact: 'Vata skin flourishes with daily Abhyanga massage using warm sesame oil or Shatavari.'
      },
      {
        label: 'Warm, Sensitive, Rosy or Flush-Prone',
        dosha: 'pitta',
        description: 'Prone to sunburn, warmth, redness, or sensitivity to harsh chemicals.',
        fact: 'Pitta skin is cooled and calmed by Rose water, Amla, and Coconut oil infusions.'
      },
      {
        label: 'Smooth, Soft, Moist & Resilient',
        dosha: 'kapha',
        description: 'Naturally thick, hydrated, cool to touch, with slow-aging elasticity.',
        fact: 'Kapha skin thrives with herbal dry brushing (Garshana) and astringent botanical washes.'
      }
    ]
  },
  {
    id: 6,
    text: 'Which seasonal environment feels most comforting to your body and mind?',
    category: 'Ritu & Climate Equilibrium',
    insight: 'Ayurvedic wisdom teaches Ritu Charya (seasonal routines) to harmonize bodily humors with external weather changes.',
    options: [
      {
        label: 'Warm, Humid & Sun-lit Climates',
        dosha: 'vata',
        description: 'Cold, drafty, or dry winds tend to deplete your energy and skin moisture.',
        fact: 'Warmth and moisture counter Vata coldness and dryness, restoring nervous calm.'
      },
      {
        label: 'Cool, Breezy & Temperate Climates',
        dosha: 'pitta',
        description: 'Excessive summer sun or humid heat makes you feel overheated or flushed.',
        fact: 'Shaded, breezy environments calm Pitta internal heat and soothe skin inflammation.'
      },
      {
        label: 'Warm, Dry & Crisp Mountain Climates',
        dosha: 'kapha',
        description: 'Damp, cold, overcast winter days make you feel heavy or lethargic.',
        fact: 'Warm, dry air mobilizes Kapha sluggishness and keeps circulation vibrant.'
      }
    ]
  },
  {
    id: 7,
    text: 'What is your typical emotional response when facing sudden stress or overload?',
    category: 'Manasika Bhavas & Resilience',
    insight: 'Mental resilience (Satva) is preserved by recognizing subtle emotional triggers before they affect physical tissues.',
    options: [
      {
        label: 'Anxiety, Worry or Overwhelmed Thoughts',
        dosha: 'vata',
        description: 'Mind races with possibilities; energy disperses and resting becomes difficult.',
        fact: 'Grounding adaptogens like Ashwagandha help calm Vata nervous system hyperactivity.'
      },
      {
        label: 'Impatience, Irritability or High Drive',
        dosha: 'pitta',
        description: 'Seeks quick resolution; frustration arises if progress or schedules are blocked.',
        fact: 'Cooling herbs like Brahmi and Shankhpushpi soothe Pitta intensity and mental heat.'
      },
      {
        label: 'Resistance to Change or Quiet Withdrawal',
        dosha: 'kapha',
        description: 'Prefers familiar routines; takes time to process change and seeks comfort.',
        fact: 'Stimulating herbs like Tulsi and Ginger ignite Kapha motivation and mental alertness.'
      }
    ]
  },
  {
    id: 8,
    text: 'What are your daily fluid and food flavor cravings?',
    category: 'Rasa & Taste Affinity',
    insight: 'The 6 Tastes (Shad Rasa) in Ayurveda naturally balance or aggravate internal doshas.',
    options: [
      {
        label: 'Warm Beverages & Comforting Rich Flavors',
        dosha: 'vata',
        description: 'Prefers warm herbal teas, cooked stews, and sweet/salty comforting nourishment.',
        fact: 'Sweet, sour, and salty tastes pacify Vata dryness and coldness.'
      },
      {
        label: 'Abundant Water & Refreshing Cooling Flavors',
        dosha: 'pitta',
        description: 'Frequent thirst; loves crisp salads, sweet fruits, and cool beverages.',
        fact: 'Sweet, bitter, and astringent tastes cool and balance Pitta internal fire.'
      },
      {
        label: 'Moderate Water & Pungent Spicy Flavors',
        dosha: 'kapha',
        description: 'Enjoys zesty spices, bitter greens, and warm digestive infusions.',
        fact: 'Pungent, bitter, and astringent tastes enliven Kapha metabolic energy.'
      }
    ]
  }
];

export const DoshaQuizModal: React.FC<DoshaQuizModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState({ vata: 0, pitta: 0, kapha: 0 });
  const [resultDosha, setResultDosha] = useState<'vata' | 'pitta' | 'kapha' | null>(null);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleSelectOption = (dosha: 'vata' | 'pitta' | 'kapha', index: number) => {
    setSelectedOptionIndex(index);
    const updated = { ...scores, [dosha]: scores[dosha] + 1 };
    setScores(updated);

    setTimeout(() => {
      if (currentStep < QUESTIONS.length - 1) {
        setCurrentStep(currentStep + 1);
        setSelectedOptionIndex(null);
      } else {
        let winner: 'vata' | 'pitta' | 'kapha' = 'vata';
        if (updated.pitta > updated.vata && updated.pitta >= updated.kapha) winner = 'pitta';
        else if (updated.kapha > updated.vata && updated.kapha > updated.pitta) winner = 'kapha';
        setResultDosha(winner);
      }
    }, 350);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setScores({ vata: 0, pitta: 0, kapha: 0 });
    setResultDosha(null);
    setSelectedOptionIndex(null);
  };

  const getEducationalBotanicals = () => {
    if (!resultDosha) return [];
    if (resultDosha === 'vata') {
      return products.filter(p => p.dosha.vata === 'Balances').slice(0, 3);
    }
    if (resultDosha === 'pitta') {
      return products.filter(p => p.dosha.pitta === 'Balances').slice(0, 3);
    }
    return products.filter(p => p.dosha.kapha === 'Balances').slice(0, 3);
  };

  const currentQ = QUESTIONS[currentStep];
  const totalQuestions = QUESTIONS.length;
  const totalAnswers = scores.vata + scores.pitta + scores.kapha;
  const vataPct = totalAnswers > 0 ? Math.round((scores.vata / totalAnswers) * 100) : 0;
  const pittaPct = totalAnswers > 0 ? Math.round((scores.pitta / totalAnswers) * 100) : 0;
  const kaphaPct = totalAnswers > 0 ? Math.round((scores.kapha / totalAnswers) * 100) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative bg-[#f8f9fa] dark:bg-[#121614] text-[#191c1d] dark:text-[#f0f1f2] w-full max-w-2xl rounded-3xl shadow-2xl border border-[#c1c8c2]/40 dark:border-[#274e3d] p-5 sm:p-8 my-auto overflow-hidden max-h-[90vh] flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Close Button with fixed z-index and explicit positioning to prevent overlap */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/80 dark:bg-[#1b4332]/80 hover:bg-gray-200 dark:hover:bg-[#274e3d] transition-all text-gray-700 dark:text-gray-200 shadow-sm border border-gray-200 dark:border-[#274e3d] flex items-center justify-center"
          aria-label="Close Quiz"
          title="Close Quiz"
        >
          <span className="material-symbols-outlined text-lg font-bold">close</span>
        </button>

        {!resultDosha ? (
  <div className="space-y-5 overflow-y-auto pr-1 flex-1 min-h-0">
            {/* Step Header with pr-12 to reserve space for close button */}
            <div className="space-y-1.5 pr-12">
              <div className="flex flex-wrap items-center justify-between text-xs font-bold uppercase tracking-widest text-[#735c00] dark:text-[#ffe088] gap-2">
                <span>{currentQ.category}</span>
                <span className="bg-[#cba72f]/20 px-2.5 py-0.5 rounded-full text-[11px]">
                  Question {currentStep + 1} of {totalQuestions}
                </span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#012d1d] dark:text-[#c1ecd4] leading-tight pt-1">
                {currentQ.text}
              </h2>
            </div>

            {/* Ayurvedic Fact Banner */}
            <div className="p-3.5 rounded-2xl bg-[#cba72f]/10 border border-[#cba72f]/30 text-xs text-[#414844] dark:text-[#bfc9c3] flex items-start gap-2.5">
              <span className="material-symbols-outlined text-base text-[#cba72f] shrink-0 mt-0.5">lightbulb</span>
              <p className="leading-relaxed">
                <strong>Ayurvedic Principle:</strong> {currentQ.insight}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt.dosha, idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex flex-col gap-1.5 ${
                    selectedOptionIndex === idx
                      ? 'bg-[#012d1d] text-white border-[#cba72f] scale-[1.01] shadow-lg'
                      : 'bg-white dark:bg-[#1b4332]/40 border-[#c1c8c2]/30 dark:border-[#274e3d] hover:border-[#cba72f] hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-sm sm:text-base font-bold text-[#012d1d] dark:text-[#c1ecd4]">
                      {opt.label}
                    </h4>
                    <span className="material-symbols-outlined text-sm text-[#cba72f] shrink-0 ml-2">
                      {selectedOptionIndex === idx ? 'check_circle' : 'east'}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    {opt.description}
                  </p>
                  <span className="text-[11px] italic text-[#735c00] dark:text-[#cba72f] pt-0.5">
                    ✦ {opt.fact}
                  </span>
                </button>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="space-y-1 pt-1">
              <div className="w-full bg-gray-200 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-[#cba72f] h-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-[10px] text-gray-500 font-medium">
                <span>Select the response closest to your natural constitution</span>
                <span>{Math.round(((currentStep + 1) / totalQuestions) * 100)}% Complete</span>
              </div>
            </div>
          </div>
        ) : (
          /* Detailed Result State */
          /* Detailed Result State */
<div className="space-y-5 overflow-y-auto pr-1 flex-1 min-h-0">
            {/* Result Header with pr-12 to ensure close button never overlaps */}
            <div className="text-center space-y-2 pr-12 pt-1">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#cba72f]/20 text-3xl mx-auto shadow-inner">
                {resultDosha === 'vata' ? '💨' : resultDosha === 'pitta' ? '🔥' : '🌱'}
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#735c00] dark:text-[#ffe088] bg-[#cba72f]/20 px-3 py-1 rounded-full inline-block">
                  Prakriti Assessment Result
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#012d1d] dark:text-[#c1ecd4] capitalize mt-1.5">
                  Primary Constitution: {resultDosha}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-[#414844] dark:text-[#bfc9c3] max-w-lg mx-auto leading-relaxed border-y border-[#c1c8c2]/30 dark:border-[#274e3d] py-2.5">
                {resultDosha === 'vata' && 'Vata represents Air & Ether—the principles of movement, creativity, and adaptability. When balanced, Vata inspires bright artistic ideation and swift flexibility.'}
                {resultDosha === 'pitta' && 'Pitta represents Fire & Water—the principles of digestion, courage, and sharp intellect. When balanced, Pitta yields radiant clarity and passionate leadership.'}
                {resultDosha === 'kapha' && 'Kapha represents Earth & Water—the principles of physical structure, endurance, and deep calm. When balanced, Kapha brings loyalty, immunity, and stability.'}
              </p>
            </div>

            {/* Dosha Breakdown Score Bar */}
            <div className="p-4 rounded-2xl bg-white dark:bg-[#1b4332]/30 border border-[#c1c8c2]/30 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#012d1d] dark:text-[#c1ecd4] flex items-center justify-between">
                <span>Dosha Balance Breakdown</span>
                <span className="text-[11px] text-[#735c00] dark:text-[#cba72f] normal-case">Based on {totalQuestions} questions</span>
              </h4>

              <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
                {/* Vata Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-semibold text-[#012d1d] dark:text-[#c1ecd4]">
                    <span>Vata 💨</span>
                    <span>{vataPct}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-sky-500 h-full transition-all duration-500" style={{ width: `${vataPct}%` }}></div>
                  </div>
                </div>

                {/* Pitta Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-semibold text-[#012d1d] dark:text-[#c1ecd4]">
                    <span>Pitta 🔥</span>
                    <span>{pittaPct}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full transition-all duration-500" style={{ width: `${pittaPct}%` }}></div>
                  </div>
                </div>

                {/* Kapha Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-semibold text-[#012d1d] dark:text-[#c1ecd4]">
                    <span>Kapha 🌱</span>
                    <span>{kaphaPct}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full transition-all duration-500" style={{ width: `${kaphaPct}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommendations Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#1b4332]/40 border border-[#c1c8c2]/30 space-y-1.5">
                <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-[#012d1d] dark:text-[#c1ecd4] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-[#cba72f]">restaurant</span>
                  Dietary & Taste Harmony
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {resultDosha === 'vata' && 'Focus on warm, cooked, grounding foods with sweet, sour, and salty tastes. Enjoy healthy fats like cultured ghee and sesame oil.'}
                  {resultDosha === 'pitta' && 'Emphasize cooling, fresh foods with sweet, bitter, and astringent tastes. Enjoy cucumber, coconut water, mint, and rose infusions.'}
                  {resultDosha === 'kapha' && 'Favor light, warm, dry foods with pungent, bitter, and astringent tastes. Enjoy digestive spices like ginger, black pepper, and cinnamon.'}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#1b4332]/40 border border-[#c1c8c2]/30 space-y-1.5">
                <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-[#012d1d] dark:text-[#c1ecd4] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-[#cba72f]">schedule</span>
                  Recommended Dinacharya
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {resultDosha === 'vata' && 'Maintain a consistent daily sleep schedule. Warm oil self-massage (Abhyanga) before bath anchors erratic nervous energy.'}
                  {resultDosha === 'pitta' && 'Avoid overworking during midday heat (10 AM - 2 PM). Cool evening walks under moonlight balance internal warmth.'}
                  {resultDosha === 'kapha' && 'Rise early during Brahma Muhurta (before 6 AM). Brisk morning movement and dry skin brushing ignite sluggish metabolism.'}
                </p>
              </div>
            </div>

            {/* Key Classical Botanicals to Explore */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#735c00] dark:text-[#cba72f] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">eco</span>
                <span>Classical Botanicals for {resultDosha} Constitution</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {getEducationalBotanicals().map((p) => (
                  <div key={p.id} className="p-3 bg-white dark:bg-[#1b4332]/40 rounded-2xl border border-[#c1c8c2]/30 flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div>
                      <img src={p.image} alt={p.title} className="w-full h-20 object-cover rounded-xl mb-2" />
                      <h5 className="font-serif text-xs font-bold truncate text-[#012d1d] dark:text-[#c1ecd4]">{p.title}</h5>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-1">{p.category}</p>
                    </div>
                    <button
                      onClick={() => {
                        onSelectProduct(p);
                        onClose();
                      }}
                      className="mt-2 w-full py-1.5 rounded-xl bg-[#012d1d] text-white text-[11px] font-semibold hover:bg-[#1b4332] transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Read Profile</span>
                      <span className="material-symbols-outlined text-xs">east</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleReset}
                className="flex-1 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-xs font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Retake Assessment
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-full bg-[#012d1d] hover:bg-[#1b4332] text-white text-xs font-bold shadow-md transition-colors"
              >
                Close & Explore Products
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
