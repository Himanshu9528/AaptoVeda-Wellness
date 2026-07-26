import { Product } from '../types';
import heroBannerImg from '../assets/images/hero-banner.jpg';

export const HERO_IMAGE = heroBannerImg;

export const ROOTS_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuCh_J33_CmOb68d-Fe_7nz9PXr7AX9dy8TuDxVchodmCUKEU_H6X3ID3AEz1JUnlZFbc6vEGk5-vw1v_lbzNIYq3LXf9dHtfgZjl2eswvoPT1fl1IVSl_0PMTjehtubcynKmSFLhzwiwYL5KDqvpOt_S5oz7VWTjnfV_1phmikXaZzgGsp64m3XrjgPXs_NV23EvFfm0MwQHMgBL7zwIYkH0PJIj10kEhuhM-ZZctnAYcFezFmtlw1UY9b8RI76t1QP0sLXRgGyFeY";

export const PRODUCTS: Product[] = [
  {
    id: 'ashwagandha',
    title: 'Ashwagandha Rejuvenator',
    category: 'Vitality & Strength',
    tagline: 'The Ancestral Adaptogen',
    quote: 'Find your center amidst the chaos. A grounded energy that rises from the earth to settle the soul.',
    description: 'Classical Ashwagandha root extract, wild-harvested at lunar peak and standardized for maximum natural withanolides.',
    fullDescription: 'For over five millennia, the Ashwagandha root (Withania Somnifera) has been revered in classical Charaka Samhita texts as a paramount Rasayana (rejuvenator). At AaptoVeda, our roots are wild-harvested during the lunar peak in the mineral-rich soils of the Deccan Plateau. Each formulation is prepared using traditional low-heat decoction to preserve the active adaptogenic matrix.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUkbEOeJZCIcVRRXBjkNGaHMUCrOStxDp0rISqk4QVkaXTlz0tqV-0OxZLbfMDvjM96MbK7Pl2Sbmv5Dbqd6xoXmYgUEfH-YoHYPJMITG0EA42eVI5-F-AMk3HZNmrSMVhnrdlyrxuimWvZcHPn0NUUXAhV5Of1fzMnGOkUb8tQP3p3l-b_pwc9FbrnrPBFxnBcka-yCXUueLGwOALP2OcYgGkMgg8Zd1pPlHqIiuwTqdyOWhRTshGm2Y0frVpLksMPYI2VsjvsNg',
    secondaryImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV3RAE3Z6T5gJIOuYPTA57InnOVfwUsVJK7mBWH-3EjIR5q91RYTrPe94466AsBdEhzgSvUlKPUUBghQQDU7-_D3R9i_sBqLeRCjPZ8H721zqUgDd6aXDWIbDWZcEybdJPBFPB2eY9TpQLWf6kcvoW6z8jH9gF4FM8DVDzjnGBpaVVEA8HNeDoeWTRMxysYC9h2mUYd22KGC0GFG5gRMJMiBtkrg-owncXSt5fxKu8BliMuWltMrow0EoyQh6EYYidWbiR0nMQsTI',
    price: 68,
    rating: 4.9,
    reviewsCount: 142,
    badge: 'Foundational',
    volume: '60 Vegan Capsules',
    dosha: {
      vata: 'Balances',
      pitta: 'Neutral',
      kapha: 'Balances',
    },
    benefits: [
      'Cortisol Mastery: Modulates stress response and quiets mind chatter.',
      'Primal Vitality: Builds Ojas for steady physical endurance without jittery fatigue.',
      'Endocrine Harmony: Supports thyroid and hormonal equilibrium naturally.'
    ],
    suggestedRitual: 'Stir one spoonful or capsule into warm, grass-fed milk or nut milk 30 minutes before sleep.',
    dosage: '1 to 2 capsules daily with warm milk or honey water',
    ingredients: [
      {
        name: 'Wild-Crafted Withania Somnifera',
        sanskritName: 'Ashwagandha Root',
        description: 'Standardized to 10% withanolides for maximum botanical potency and natural integrity.',
        icon: 'spa'
      },
      {
        name: 'Pippali & Pippali Mula',
        sanskritName: 'Long Pepper Catalyst',
        description: 'A traditional bio-enhancer that assists deep tissue absorption of adaptogenic roots.',
        icon: 'auto_awesome'
      },
      {
        name: 'Trikatu Bio-Enhancer',
        sanskritName: 'Black Pepper, Long Pepper, Ginger',
        description: 'A warming botanical blend that ignites Agni (digestive fire) for optimal cellular bioavailability.',
        icon: 'local_fire_department'
      }
    ],
    ritualSteps: [
      {
        step: '01',
        title: 'Infuse',
        description: 'Stir one spoonful into a cup of warm, grass-fed milk or almond nut alternative.'
      },
      {
        step: '02',
        title: 'Sweeten',
        description: 'Add a drop of raw honey and a pinch of cinnamon to activate the palate.'
      },
      {
        step: '03',
        title: 'Sip',
        description: 'Consume 30 minutes before sleep, breathing deeply into the present moment.'
      }
    ]
  },
  {
    id: 'triphala',
    title: 'Triphala Plus',
    category: 'Detox & Digestion',
    tagline: 'The Three-Fruit Harmonizer',
    quote: 'Purify the vessel so the light within may shine unimpeded.',
    description: 'A timeless Ayurvedic blend of Amalaki, Bibhitaki, and Haritaki for gentle detox and digestive strength.',
    fullDescription: 'Triphala Plus combines three sacred fruits harvested at peak potency. Amalaki cools and nourishes, Bibhitaki cleanses mucosal linings, and Haritaki gently sweeps the digestive tract, promoting gentle daily elimination and digestive intelligence without dependence.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAj91sAb32h4cAf39jpxj-Sew_RW02GmOZYQIBJNW9rhXX8I8GdqZCoEl8gWvdUQ-Z-6JTt6X8qpbaGq6TFJp8z2YrgUiPwNKHEm3cBFzeFXhyLakFMQfw2QsykpmIk9GzvLwhetI4Ok6lsFDkczYiwpymKJfx0WJfELI1vA4oN4WP1Pde-EKHgsSKHIxDhbo4o1_UnSeDZ-Ce-kCrHBniM7w33SHwrfL-GXyd4vnurvpwnQOqzSB5_oSRLIrbvHGp5ZgxwF7PHcFU',
    price: 48,
    rating: 4.8,
    reviewsCount: 98,
    badge: 'Essential',
    volume: '150g Net Wt.',
    dosha: {
      vata: 'Balances',
      pitta: 'Balances',
      kapha: 'Balances',
    },
    benefits: [
      'Gently purifies the gastrointestinal tract and digestive system.',
      'Rich in natural Vitamin C and antioxidant polyphenols.',
      'Promotes radiant skin through internal blood purification.'
    ],
    suggestedRitual: 'Mix 1/2 teaspoon in a cup of warm water right before bedtime.',
    dosage: '1/2 tsp (2g) at bedtime in warm water',
    ingredients: [
      {
        name: 'Amalaki',
        sanskritName: 'Emblica Officinalis',
        description: 'Cooling superfruit rich in antioxidants that rejuvenates stomach lining.'
      },
      {
        name: 'Bibhitaki',
        sanskritName: 'Terminalia Bellirica',
        description: 'Removes excess Kapha and mucosal buildup from digestive channels.'
      },
      {
        name: 'Haritaki',
        sanskritName: 'Terminalia Chebula',
        description: 'Known as the King of Medicines, sweeps and tonifies intestinal muscles.'
      }
    ]
  },
  {
    id: 'shatavari',
    title: 'Shatavari Nectar',
    category: 'Hormonal Balance',
    tagline: 'The Queen of Herbs',
    quote: 'Nourish the divine feminine within with nature’s restorative elixir.',
    description: 'Bio-available liquid elixir for female reproductive wellness, hormonal balance, and graceful vitality.',
    fullDescription: 'Shatavari translates to "she who possesses a hundred husbands," denoting its deep ability to restore stamina, moisture, and emotional balance. Our nectar is cold-extracted in copper vessels with organic cane and rose extract for peak bio-absorption.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4fEE3IPebDxzMXcPIRdI3DL812f4J_eZ2yDs7UI4FbbvCRiiHcQcFLjJ5oduSfJC5YnzwhVg-5l1zQlN-KbBM_8ueYFv4RxOOvhA1iBIH-3xPMEFjEosvR84Y4CM2oVwxredidln6TrbaGRMjlS2kPXk3xQZC_6j5FOpkx_4ifBajBdJctldoUJHxOAvdELRuhq3Iy-deVzqsOzCRfs4SEuTVlJ7EHnqAAijlthECUJetfsPk9J0wPT-smRAcYjR1-FWIZilzo4g',
    price: 54,
    rating: 4.9,
    reviewsCount: 112,
    badge: 'Popular',
    volume: '100ml Dropper Bottle',
    dosha: {
      vata: 'Balances',
      pitta: 'Balances',
      kapha: 'Increases',
    },
    benefits: [
      'Balances female hormones during all stages of adult life.',
      'Promotes natural collagen production and skin hydration.',
      'Calms hot flashes and internal heat build-up.'
    ],
    suggestedRitual: 'Take 1ml under the tongue twice daily or mix with lukewarm water.',
    dosage: '1ml (approx. 20 drops) twice daily',
    ingredients: [
      {
        name: 'Wild Shatavari Root Extract',
        sanskritName: 'Asparagus Racemosus',
        description: 'Phytoestrogen-rich root that quenches internal dryness.'
      },
      {
        name: 'Damask Rose Water',
        sanskritName: 'Satapatri',
        description: 'Soothes the mind and elevates mood through subtle aromatherapy.'
      }
    ]
  },
  {
    id: 'tulsi',
    title: 'Holy Tulsi Mist',
    category: 'Stress Relief',
    tagline: 'Aura & Spirit Purifier',
    quote: 'Clear the mental canopy and invite tranquil presence.',
    description: 'Distilled Holy Basil mist infused with organic rosewater for immediate calm, stress relief, and aura protection.',
    fullDescription: 'Tulsi (Holy Basil) is revered in ancient India as an earthly manifestation of the goddess of devotion. This aromatic mist uses steam-distilled Krishna and Rama Tulsi leaves to uplift the spirits and soothe the nervous system in seconds.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4pfZlACg3KzRXKc4MAIkfGzGmUb0JMlc4mLO-3qOfl0iVhBmVKcw5X17h4yVOEgO3bkBHc1arbujDpbyh7kdQVTHmy9q8q_ul_r-EglsLkLDZtHl-EnUVsRrbXSJ8fat0jXtJWnyZaIYol6SFzL3NNglcVa96iQ5Lmxzhx9LabC0Gt0oWmhYg3qp8q3lrI6uKyJuPxH6QOdPoXV05DHsz4dzs4UUKzclFRzhdntjnM3Fuzi1UPiE4SVM8fSPWOrewie1-fTJ6BpM',
    price: 42,
    rating: 4.7,
    reviewsCount: 76,
    volume: '120ml Glass Fine Mist',
    dosha: {
      vata: 'Balances',
      pitta: 'Neutral',
      kapha: 'Balances',
    },
    benefits: [
      'Instant mood elevation and stress relief.',
      'Shields skin from urban particulate environmental stressors.',
      'Perfect for yoga, meditation, and daily workplace reset.'
    ],
    suggestedRitual: 'Mist 3-4 spritzes overhead and inhale deeply with closed eyes.',
    dosage: 'Spritz liberally as needed throughout the day',
    ingredients: [
      {
        name: 'Krishna Tulsi Hydrosol',
        sanskritName: 'Ocimum Sanctum',
        description: 'Dark leaf Holy Basil known for profound adaptogenic relief.'
      },
      {
        name: 'Wild Himalayan Spring Water',
        sanskritName: 'Jala',
        description: 'Sourced directly from high-altitude glacier springs.'
      }
    ]
  },
  {
    id: 'brahmi',
    title: 'Brahmi Essence',
    category: 'Memory & Clarity',
    tagline: 'Cognitive Nectar',
    quote: 'Awaken the quiet intellect and sharpen focus without exhaustion.',
    description: 'Pure Brahmi (Bacopa Monnieri) herbal oil and tonic for deep focus, memory enhancement, and mental calm.',
    fullDescription: 'Named after Brahma, the creator, Brahmi is the premier Medhya Rasayana (mind rejuvenator) in Ayurveda. It enhances neuro-transmission, aids memory consolidation, and soothes racing thoughts during high-demand mental activity.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2GZk0t49qfVSiTPlZzPGDt7ixDzyfijWHihivf8iBT6MSq1mZxGLzwLgU-pwyUvNNzDwzeemGn9DdLBsvK5cqjerw1kvfDF_6EaNHgRugc1TLTrVWKQY3A0NBYCc2kepQ-6SSTcQSD_ZcUEb9KFOb0zNZ9H5fJnD3cKMi5oQ2CBsRCUVypzN1nZQaCTKR9tcSVx2jSsythA7xt7kJhS9ymOuHpMU-8A1Ovi_HQJBJX2c8dgXxBhSicL6mQNia9R9Jul3-QT9KW0w',
    secondaryImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRdJBxXlV9Dg4NUAlu6jSN6Sr4-cbN-ubCjdF54rTUpVQOP88vlhcmMAbeiHrCbWleyKdlrc1kPogj40IfPZ0JqbErY6EeKZqCpaMZFKm3MBEO_f8bxAORFl0bNgUpzNwaXjzi_dw9AV52M-x5tShzit7LGS08MjjY0YSqUir43iH5k8zxWXPrSW1iNO2ODr3M7DzYPsVcKM6FOJ4uN2Q13ppdAphiOVAuzm1MeasVzNM-5p55wtDbVHXgZv-bET5Sat9fgDe8Sqs',
    price: 58,
    rating: 4.9,
    reviewsCount: 88,
    badge: 'Best Seller',
    volume: '100ml Glass Flask',
    dosha: {
      vata: 'Balances',
      pitta: 'Balances',
      kapha: 'Balances',
    },
    benefits: [
      'Enhances memory retention, focus, and cognitive stamina.',
      'Cools the crown charka and relieves tension headaches.',
      'Soothes night anxiety for restorative, peaceful sleep.'
    ],
    suggestedRitual: 'Massage 5-10 drops onto temples and crown before meditation or work.',
    dosage: '10 drops topically or 1 dropper in warm milk',
    ingredients: [
      {
        name: 'Gotu Kola / Brahmi Leaf',
        sanskritName: 'Bacopa Monnieri',
        description: 'Potent triterpenoid saponins that stimulate synaptic health.'
      },
      {
        name: 'Cold-Pressed Sesame Oil Base',
        sanskritName: 'Tila Taila',
        description: 'Deep penetrating carrier oil that carries herbs through 7 tissue layers.'
      }
    ]
  },
  {
    id: 'ghee',
    title: 'Cultured Ghee',
    category: 'Ojas Builder',
    tagline: 'Liquid Gold of the Veda',
    quote: 'The ultimate vehicle of nourishment that carries botanical intelligence deep into the tissues.',
    description: 'Grass-fed A2 cultured butter slow-simmered in small copper cauldrons according to traditional Bilona method.',
    fullDescription: 'Real Ghee is considered one of the highest Sattvic foods in Ayurveda. Made strictly from the milk of grass-fed Gir cows, cultured naturally with curd and hand-churned before gentle copper boiling, it builds Ojas (vital vigor and immune immunity).',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtzuJMKNt21CFx32KUd77ppaaOYfyxXIlaIOyRfb-2JXvIN0w4R81BNEJEPtT63dLBv6m36wsSM1xpe4v2jxdPHWunE-wL0yGKGJI_jxLdNMWI1An3w7njB0foMWZyG6RS0A4KCxJlUa2MIOieOhY2IjkRTLqSQSJUmdO06bAbxl5Pf1tLS5615MWpqY6X6WGkr3owrcq8xBHcJ_ZmpP0UwCADRPtqXmoc48F_BE0n0mA0HnobsOBb9b-0aC1VcM4vJr9t49NFWiY',
    price: 46,
    rating: 5.0,
    reviewsCount: 165,
    volume: '250g Glass Jar',
    dosha: {
      vata: 'Balances',
      pitta: 'Balances',
      kapha: 'Increases',
    },
    benefits: [
      'Nourishes the intestinal lining and supports gut microbiome.',
      'Serves as an ideal Anupana (catalytic vehicle) for herbal remedies.',
      'High smoke point with rich caramel flavor profile.'
    ],
    suggestedRitual: 'Take 1 teaspoon warm in morning tea or drizzle over hot kitchari.',
    dosage: '1-2 teaspoons daily with meals',
    ingredients: [
      {
        name: '100% Grass-Fed Cultured A2 Butter',
        sanskritName: 'Go Ghrita',
        description: 'Free of lactose and casein with rich butyric acid content.'
      }
    ]
  },
  {
    id: 'neem',
    title: 'Neem Purify',
    category: 'Skin & Blood',
    tagline: 'Cellular Purifier',
    quote: 'Cool internal heat and reveal radiant skin from within.',
    description: 'High-potency Neem extract powder and salve for deep blood purification, clear skin, and liver support.',
    fullDescription: 'Neem is known as "Arishtha" in Sanskrit, meaning "that which relieves sickness." Its intense bitter taste rapidly cools excess Pitta heat in the liver and blood, clearing stubborn skin flare-ups.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6fayiISrSHB5ROrucW7qapaiVLLsCMelFagYpHT8ZHAjS5AQE9h-n6Ff540TH7MUAqpVzd6YoYbAn0bSNXoVKXWJ7vyqQEys9MXvNWcQoMlypF4kP9XlNC99-jwjYJFRdcwguYBM7cjrGbNqhOlFcjk4rhZDqMyDHxfKP9s1l_DqBIRWNRowK20HnsZCCUfr1aG5_yeF8NRBVjz4KoPra3sQZ-4vXA_m1cqInak29ll6nHfhrVhmg-XEm7yFoI1zGsoU6J5sGziI',
    price: 38,
    rating: 4.8,
    reviewsCount: 64,
    volume: '90 Capsules',
    dosha: {
      vata: 'Neutral',
      pitta: 'Balances',
      kapha: 'Balances',
    },
    benefits: [
      'Purifies blood and clears systemic inflammatory breakouts.',
      'Supports healthy liver enzyme function.',
      'Helps balance blood sugar levels naturally.'
    ],
    suggestedRitual: 'Take 1 capsule twice daily after meals with room temperature water.',
    dosage: '1 capsule twice daily after meals',
    ingredients: [
      {
        name: 'Organic Neem Leaf Extract',
        sanskritName: 'Nimba',
        description: 'Concentrated bitter limonoids for immune defense.'
      }
    ]
  },
  {
    id: 'turmeric',
    title: 'Nano-Turmeric',
    category: 'Inflammation Support',
    tagline: 'Bio-Activated Golden Elixir',
    quote: 'Cellular inflammation relief ignited with black pepper and ginger.',
    description: 'Advanced nano-emulsified Turmeric with 95% curcuminoids for maximum joint mobility and recovery.',
    fullDescription: 'Traditional turmeric powder has low bioavailability. Our Nano-Turmeric utilizes ultrasonic cavitation to break curcumin down into liposomal nanoparticles, yielding 27x higher cellular absorption than raw turmeric.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuZ-BCFAX0xy3tvOavIPPEQl6Ptw6rbfhM-BmUxVI76j20jAmzQqHz1ZoRN_gBTWxngoshOJyooB7GPCdwa3y9lRnibefjWJjOplKdkAgCniXIS814jWYs9bC0Zv-6W4VlQTtwQfwv5UTjnDqerKcVBgUP7prqUh5YEUS5CVYFrXlyigHCpKS5gfpyK7m-aBeHRL0v87TuWzUVFqnfLXU0rWG9oR5pJr1HJlKmqFw3wFU3Y0DqfmvTUhd2ywrdPKwv3Eye0jskvPw',
    secondaryImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBULBJU2iHti71ZVW0XO4K080zsq686jlA_KTlXikqi99Bes6XSOUo18nxESvU_qgVUC7gnEz2UCn7FVQnWs2yPz0mlLHOauDmskKgWZ2S2BFk56aNj0ckoW9-E-9vpPHVyqfegRV7V8CafRVykCOyMNs00VYEN5FyufGtGsPr89siSTFdtb916quzsOOAO0qX2xzvUThsHpaISzzivZz_g6oRGOu3WXk4XMQU6lUKR39O69_ouoBAZbnQWn5DsgWU01ej7afBzf1k',
    price: 52,
    rating: 4.9,
    reviewsCount: 130,
    volume: '100g Powder Tin',
    dosha: {
      vata: 'Balances',
      pitta: 'Balances',
      kapha: 'Balances',
    },
    benefits: [
      'Supports healthy joint flexibility and muscle recovery.',
      'Potent antioxidant protection against oxidative stress.',
      'Promotes digestive wellness and heart function.'
    ],
    suggestedRitual: 'Mix 1 scoop into warm golden milk or morning smoothie.',
    dosage: '1 scoop (3g) daily in warm beverage',
    ingredients: [
      {
        name: 'Nano-Curcumin Extract',
        sanskritName: 'Haridra',
        description: '95% standardized curcuminoids emulsified with natural phospholipids.'
      },
      {
        name: 'Piperine Black Pepper Extract',
        sanskritName: 'Maricha',
        description: 'Increases curcumin bioavailability by up to 2000%.'
      }
    ]
  }
];
