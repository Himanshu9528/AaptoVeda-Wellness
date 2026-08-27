import { Product } from '../types';
import heroBannerImg from '../assets/images/hero-banner.jpg';

import aaptoclearImg from '../assets/images/aaptoclear-syrup.jpg';
import aaptovitImg from '../assets/images/aaptovit-tablet.jpg';
import aaptokasExImg from '../assets/images/aaptokas-ex-syrup.jpg';
import aaptogynImg from '../assets/images/aaptogyn-syrup.jpg';
import aaptolivSyrupImg from '../assets/images/aaptoliv-ds-syrup.jpg';
import aaptokasImg from '../assets/images/aaptokas-syrup.jpg';
import aaptolivTabletImg from '../assets/images/aaptoliv-ds-tablet.jpg';
import aaptocidImg from '../assets/images/aaptocid-tablet.jpg';
import aaptonormImg from '../assets/images/aaptonorm-capsule.jpg';

export const HERO_IMAGE = heroBannerImg;

export const ROOTS_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuCh_J33_CmOb68d-Fe_7nz9PXr7AX9dy8TuDxVchodmCUKEU_H6X3ID3AEz1JUnlZFbc6vEGk5-vw1v_lbzNIYq3LXf9dHtfgZjl2eswvoPT1fl1IVSl_0PMTjehtubcynKmSFLhzwiwYL5KDqvpOt_S5oz7VWTjnfV_1phmikXaZzgGsp64m3XrjgPXs_NV23EvFfm0MwQHMgBL7zwIYkH0PJIj10kEhuhM-ZZctnAYcFezFmtlw1UY9b8RI76t1QP0sLXRgGyFeY";

export const PRODUCTS: Product[] = [
  {
    id: 'aaptoclear',
    title: 'Aaptoclear',
    category: 'Kidney Care',
    form: 'Syrup',
    image: aaptoclearImg,
    volume: '200ml Bottle',
    ingredients: [
      {
        name: 'Punarnava',
        sanskritName: 'Boerhavia diffusa',
        description: 'Classical renal herb traditionally used to support healthy kidney and urinary function.'
      },
      {
        name: 'Gokshura',
        sanskritName: 'Tribulus terrestris',
        description: 'Traditional diuretic botanical associated with the urinary tract.'
      },
      {
        name: 'Varuna',
        sanskritName: 'Crataeva nurvala',
        description: 'Classical Ayurvedic herb traditionally used for renal and urinary tract wellness.'
      },
      {
        name: 'Pashanbheda',
        sanskritName: 'Bergenia ligulata',
        description: 'Literally "stone breaker" - a traditional botanical used in classical renal formulations.'
      }
    ]
  },
  {
    id: 'aaptovit',
    title: 'Aaptovit',
    category: 'Vitality & Immunity',
    form: 'Tablet',
    image: aaptovitImg,
    volume: '10 x 10 Tablets',
    ingredients: [
      {
        name: 'Shilajit',
        sanskritName: 'Asphaltum Punjabinum',
        description: 'Mineral-rich Himalayan exudate traditionally prized as a rejuvenating tonic.'
      },
      {
        name: 'Saffron',
        sanskritName: 'Kesar (Crocus sativus)',
        description: 'Prized aromatic stigma traditionally used in classical rejuvenative formulations.'
      },
      {
        name: 'Pearl',
        sanskritName: 'Mukta',
        description: 'Classical mineral ingredient traditionally processed for use in Rasayana preparations.'
      },
      {
        name: 'Ashwagandha',
        sanskritName: 'Withania somnifera',
        description: 'Foundational adaptogenic root revered in classical Ayurvedic texts.'
      }
    ]
  },
  {
    id: 'aaptokas-ex',
    title: 'Aaptokas Ex',
    category: 'Respiratory Care',
    form: 'Syrup',
    image: aaptokasExImg,
    volume: '200ml Bottle',
    ingredients: [
      {
        name: 'Vasaka',
        sanskritName: 'Adhatoda vasica',
        description: 'Classical respiratory herb traditionally used to support the bronchial passages.'
      },
      {
        name: 'Tulsi',
        sanskritName: 'Ocimum sanctum',
        description: 'Holy Basil, a revered adaptogen traditionally used for respiratory comfort.'
      },
      {
        name: 'Mulethi',
        sanskritName: 'Glycyrrhiza glabra',
        description: 'Liquorice root traditionally used in classical throat and respiratory formulations.'
      },
      {
        name: 'Pippali',
        sanskritName: 'Piper longum',
        description: 'Long pepper fruit traditionally used as a warming respiratory botanical.'
      }
    ]
  },
  {
    id: 'aaptogyn',
    title: 'Aaptogyn',
    category: "Women's Health",
    form: 'Syrup',
    image: aaptogynImg,
    volume: '200ml Bottle',
    ingredients: [
      {
        name: 'Shatavari',
        sanskritName: 'Asparagus racemosus',
        description: 'Classical female reproductive tonic, known as the "Queen of Herbs."'
      },
      {
        name: 'Ashoka',
        sanskritName: 'Saraca asoca',
        description: 'Traditional botanical long associated with women\'s reproductive wellness.'
      },
      {
        name: 'Lodhra',
        sanskritName: 'Symplocos racemosa',
        description: 'Classical Ayurvedic bark traditionally used in feminine wellness formulations.'
      },
      {
        name: 'Dashmool',
        sanskritName: 'Ten-Root Blend',
        description: 'A classical synergistic blend of ten roots used in traditional Ayurvedic preparations.'
      }
    ]
  },
  {
    id: 'aaptoliv-ds-syrup',
    title: 'Aaptoliv DS',
    category: 'Liver Care',
    form: 'Syrup',
    image: aaptolivSyrupImg,
    volume: '200ml Bottle',
    ingredients: [
      {
        name: 'Kalmegh',
        sanskritName: 'Andrographis paniculata',
        description: 'Classical bitter herb traditionally used to support healthy liver function.'
      },
      {
        name: 'Bhumyamalaki',
        sanskritName: 'Phyllanthus niruri',
        description: 'Traditional hepatic botanical widely referenced in classical liver formulations.'
      },
      {
        name: 'Kutki',
        sanskritName: 'Picrorhiza kurroa',
        description: 'Classical bitter rhizome traditionally used for liver and digestive support.'
      },
      {
        name: 'Punarnava',
        sanskritName: 'Boerhavia diffusa',
        description: 'Classical herb traditionally used alongside liver-supportive formulations.'
      }
    ]
  },
  {
    id: 'aaptokas',
    title: 'Aaptokas',
    category: 'Respiratory Care',
    form: 'Syrup',
    image: aaptokasImg,
    volume: '200ml Bottle',
    ingredients: [
      {
        name: 'Tulsi',
        sanskritName: 'Ocimum sanctum',
        description: 'Holy Basil, a revered adaptogen traditionally used for respiratory comfort.'
      },
      {
        name: 'Vasaka',
        sanskritName: 'Adhatoda vasica',
        description: 'Classical respiratory herb traditionally used to support the bronchial passages.'
      },
      {
        name: 'Sonth',
        sanskritName: 'Zingiber officinale',
        description: 'Dried ginger rhizome traditionally used as a warming respiratory botanical.'
      },
      {
        name: 'Kantakari',
        sanskritName: 'Solanum xanthocarpum',
        description: 'Classical botanical traditionally referenced in respiratory formulations.'
      }
    ]
  },
  {
    id: 'aaptoliv-ds-tablet',
    title: 'Aaptoliv DS',
    category: 'Liver Care',
    form: 'Tablet',
    image: aaptolivTabletImg,
    volume: '10 x 10 Tablets',
    ingredients: [
      {
        name: 'Kalmegh',
        sanskritName: 'Andrographis paniculata',
        description: 'Classical bitter herb traditionally used to support healthy liver function.'
      },
      {
        name: 'Bhumyamalaki',
        sanskritName: 'Phyllanthus niruri',
        description: 'Traditional hepatic botanical widely referenced in classical liver formulations.'
      },
      {
        name: 'Makoy',
        sanskritName: 'Solanum nigrum',
        description: 'Classical botanical traditionally used in Ayurvedic liver preparations.'
      },
      {
        name: 'Kasni',
        sanskritName: 'Cichorium intybus',
        description: 'Chicory root traditionally used to support digestive and hepatic wellness.'
      }
    ]
  },
  {
    id: 'aaptocid',
    title: 'Aaptocid',
    category: 'Digestive Care',
    form: 'Tablet',
    image: aaptocidImg,
    volume: '10 x 10 Tablets',
    ingredients: [
      {
        name: 'Mulethi',
        sanskritName: 'Glycyrrhiza glabra',
        description: 'Liquorice root traditionally used to soothe the digestive tract.'
      },
      {
        name: 'Amla',
        sanskritName: 'Emblica officinalis',
        description: 'Classical superfruit traditionally used to support digestive balance.'
      },
      {
        name: 'Shankh Bhasma',
        sanskritName: 'Processed Conch Calcium',
        description: 'Classical calcined mineral preparation traditionally used in acidity formulations.'
      },
      {
        name: 'Pudina',
        sanskritName: 'Mentha piperita',
        description: 'Peppermint leaf traditionally used to ease digestive discomfort.'
      }
    ]
  },
  {
    id: 'aaptonorm',
    title: 'Aaptonorm',
    category: 'Pancreatic Care',
    form: 'Capsule',
    image: aaptonormImg,
    volume: '60 Capsules',
    ingredients: [
      {
        name: 'Gudmar',
        sanskritName: 'Gymnema sylvestre',
        description: 'Classical botanical known as the "sugar destroyer," traditionally used for metabolic support.'
      },
      {
        name: 'Jamun Seed',
        sanskritName: 'Syzygium cumini',
        description: 'Traditional seed extract widely referenced in classical metabolic formulations.'
      },
      {
        name: 'Karela',
        sanskritName: 'Momordica charantia',
        description: 'Bitter melon, a classical botanical traditionally used to support healthy metabolism.'
      },
      {
        name: 'Vijaysar',
        sanskritName: 'Pterocarpus marsupium',
        description: 'Classical heartwood traditionally used in Ayurvedic metabolic preparations.'
      }
    ]
  }
];
