export type CategoryType = 
  | 'All' 
  | 'Detox & Digestion' 
  | 'Hormonal Balance' 
  | 'Stress Relief' 
  | 'Vitality & Strength' 
  | 'Memory & Clarity' 
  | 'Ojas Builder' 
  | 'Skin & Blood' 
  | 'Inflammation Support';

export type PageView = 'home' | 'remedies' | 'spotlight' | 'wisdom' | 'contact';

export interface Ingredient {
  name: string;
  sanskritName?: string;
  description: string;
  icon?: string;
}

export interface RitualStep {
  step: string;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  title: string;
  category: CategoryType;
  tagline: string;
  description: string;
  fullDescription: string;
  quote?: string;
  image: string;
  secondaryImage?: string;
  price: number;
  rating: number;
  reviewsCount: number;
  badge?: string;
  dosha: {
    vata: 'Balances' | 'Neutral' | 'Increases';
    pitta: 'Balances' | 'Neutral' | 'Increases';
    kapha: 'Balances' | 'Neutral' | 'Increases';
  };
  benefits: string[];
  suggestedRitual: string;
  dosage: string;
  ingredients: Ingredient[];
  ritualSteps?: RitualStep[];
  volume: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface DoshaQuizAnswer {
  vataScore: number;
  pittaScore: number;
  kaphaScore: number;
}
