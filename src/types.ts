export type CategoryType =
  | 'All'
  | 'Kidney Care'
  | 'Vitality & Immunity'
  | 'Respiratory Care'
  | "Women's Health"
  | 'Liver Care'
  | 'Digestive Care'
  | 'Pancreatic Care';


  export type PageView = 'home' | 'remedies' | 'spotlight' | 'wisdom' | 'contact' | 'privacy' | 'purity' | 'terms';
  
export interface Ingredient {
  name: string;
  sanskritName?: string;
  description: string;
}

export interface Product {
  id: string;
  title: string;
  category: CategoryType;
  form: string;
  image: string;
  volume: string;
  ingredients: Ingredient[];
  dosage?: string;
  indication?: string;
  disclaimer?: string;
}

export interface DoshaQuizAnswer {
  vataScore: number;
  pittaScore: number;
  kaphaScore: number;
}
