export type CategoryType =
  | 'All'
  | 'Kidney Care'
  | 'Vitality & Immunity'
  | 'Respiratory Care'
  | "Women's Health"
  | 'Liver Care'
  | 'Digestive Care'
  | 'Pancreatic Care';

export type PageView = 'home' | 'remedies' | 'spotlight' | 'wisdom' | 'contact';

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
}

export interface DoshaQuizAnswer {
  vataScore: number;
  pittaScore: number;
  kaphaScore: number;
}
