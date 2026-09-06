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

const DOSAGE_TEXT = 'As directed by the physician';
const INDICATION_TEXT = 'As directed by the Physician';
const DISCLAIMER_TEXT = '*Image are for illustration purpose only. Actual product may differ';

export const PRODUCTS: Product[] = [
  {
    id: 'aaptonorm',
    title: 'Aaptonorm',
    category: 'Pancreatic Care',
    form: 'Capsule',
    image: aaptonormImg,
    volume: '60 Capsules',
    ingredients: [
      { name: 'Composition', sanskritName: '', description: 'Each 450 mg Capsule Contains :' },
      { name: 'Gurmar Ext.', sanskritName: 'Gymnema sylvestre', description: 'Leaf - 150mg' },
      { name: 'Karela Ext.', sanskritName: 'Momordica charantia', description: 'Fruit - 50mg' },
      { name: 'Jamun Seed Ext.', sanskritName: 'Syzygium cumini', description: 'Seed - 50mg' },
      { name: 'Mango Seed Ext.', sanskritName: 'Mangifera indica', description: 'Seed Endocarp - 50mg' },
      { name: 'Vijay Saar Ext.', sanskritName: 'Pterocarpus marsupilam', description: 'Stem Wood - 50mg' },
      { name: 'Vat Jata Ext.', sanskritName: 'Ficus bengalensis', description: 'Arial Root - 50mg' },
      { name: 'Shudh Shilajit', sanskritName: 'Asphaltum punjabium', description: 'Stone Exudate - 50mg' }
    ],
    dosage: DOSAGE_TEXT,
    indication: INDICATION_TEXT,
    disclaimer: DISCLAIMER_TEXT
  },
  {
    id: 'aaptoliv-ds-syrup',
    title: 'Aaptoliv DS',
    category: 'Liver Care',
    form: 'Syrup',
    image: aaptolivSyrupImg,
    volume: '200ml Bottle',
    ingredients: [
      { name: 'Composition', sanskritName: '', description: 'Each 10 ml Contains Extracts Derived from :' },
      {name: 'Bhumiyamalaki', sanskritName: 'Phyllanthus niruri', description: 'Whole Plant - 1000mg' },
      { name: 'Punarnava', sanskritName: 'Boerhaavia diffusa', description: 'Root - 500mg' },
      { name: 'Bharingraj', sanskritName: 'Eclipta alba', description: 'Whole Plant - 300mg' },
      { name: 'Rohitak', sanskritName: 'Tecomella undulata', description: 'Bark - 300mg' },
      { name: 'Kasni', sanskritName: 'Cichorium intybus', description: 'Seed - 200mg' },
      { name: 'Parpat', sanskritName: 'Fumaria indica', description: 'Whole Plant - 200mg' },
      { name: 'Sarapunka', sanskritName: 'Tephrosia purpurea', description: 'Whole Plant - 100mg' },
      { name: 'Jhabuk', sanskritName: 'Tamarix gallica', description: 'Gall - 75mg' },
      { name: 'Kalmegh', sanskritName: 'Andrographis paniculata', description: 'Whole plant - 50mg' },
      { name: 'Guduchi', sanskritName: 'Tinospora cordifolia', description: 'Stem - 100mg' },
      { name: 'Daru Haridra', sanskritName: 'Berberis aristata', description: 'Root/Stem Wood - 100mg' },
      { name: 'Khadir', sanskritName: 'Acacia catechu', description: 'Bark - 100mg' },
      { name: 'Rewand Chini', sanskritName: 'Rheum emodi', description: 'Root - 100mg' },
      { name: 'Makoy', sanskritName: 'Solanum nigrum', description: 'Whole Plant - 100mg' },
      { name: 'Haritaki', sanskritName: 'Terminalia chebula', description: 'Fruit - 100mg' },
      { name: 'Sugar', sanskritName: 'Saccharum officinarum', description: 'Stem Juice (Ext.) - 2.5gm' }
    ],
    dosage: DOSAGE_TEXT,
    indication: INDICATION_TEXT,
    disclaimer: DISCLAIMER_TEXT
  },
  {
    id: 'aaptogyn',
    title: 'Aaptogyn',
    category: "Women's Health",
    form: 'Syrup',
    image: aaptogynImg,
    volume: '200ml Bottle',
    ingredients: [
      { name: 'Composition', sanskritName: '', description: 'Each 10 ml Contains Extracts Derived from :' },
      { name: 'Ashok Chhal', sanskritName: 'Saraca indica', description: 'Bark - 700mg' },
      { name: 'Lodhra Chhal', sanskritName: 'Symplocos racemosa', description: 'Bark - 200mg' },
      { name: 'Patranga', sanskritName: 'Caesalpinia sappan', description: 'Heart Wood - 100mg' },
      { name: 'Dashmool', sanskritName: 'Classical preparation', description: '200mg' },
      { name: 'Bala', sanskritName: 'Sida cordifolia', description: 'Whole Plant - 100mg' },
      { name: 'Shatawar', sanskritName: 'Asparagus racemosus', description: 'Root - 50mg' },
      { name: 'Ashwagandha', sanskritName: 'Withania somnifera', description: 'Root - 50mg' },
      { name: 'Daru Haldi', sanskritName: 'Berberis aristata', description: 'Root/Stem Wood - 100mg' },
      { name: 'Palashphool', sanskritName: 'Butea frondosa', description: 'Flower - 50mg' },
      { name: 'Vidarikand', sanskritName: 'Pueraria tuberosa', description: 'Tuberous root - 50mg' },
      { name: 'Gular', sanskritName: 'Ficus glomerata', description: 'Bark - 100mg' },
      { name: 'Khash', sanskritName: 'Andropogon muricatus', description: 'Root - 50mg' },
      { name: 'Anantmool', sanskritName: 'Hemidismus indicus', description: 'Root - 50mg' },
      { name: 'Punarnava', sanskritName: 'Boerhaavia diffusa', description: 'Root - 100mg' },
      { name: 'Sugar', sanskritName: 'Saccharum officinarum', description: 'Stem Juice ext. - 2.5gm' }
    ],
    dosage: DOSAGE_TEXT,
    indication: INDICATION_TEXT,
    disclaimer: DISCLAIMER_TEXT
  },
  {
    id: 'aaptokas-ex',
    title: 'Aaptokasa Ex',
    category: 'Respiratory Care',
    form: 'Tablet',
    image: aaptokasExImg,
    volume: '10 x 10 Tablets',
    ingredients: [
      { name: 'Composition', sanskritName: '', description: 'Each 10 ml Contains Extracts Derived from :' },
      { name: 'Vasaka', sanskritName: 'Adhatoda vasica', description: 'Leaf - 1000mg' },
      { name: 'Kantkari', sanskritName: 'Solanum xanthocarpum', description: 'Whole Plant - 400mg' },
      { name: 'Yastimadhu', sanskritName: 'Glycyrrhiza glabra', description: 'Root - 200mg' },
      { name: 'Tulsi', sanskritName: 'Ocimum sanctum', description: 'Whole Plant - 200mg' },
      { name: 'Bahera', sanskritName: 'Terminalia belerica', description: 'Fruit - 200mg' },
      { name: 'Khajur', sanskritName: 'Phoenix dactylifera', description: 'Fruit - 200mg' },
      { name: 'Bhuiamla', sanskritName: 'Phyllanthus niruri', description: 'Whole Plant - 100mg' },
      { name: 'Giloy', sanskritName: 'Tinospora cordifolia', description: 'Stem - 100mg' },
      { name: 'Haldi', sanskritName: 'Curcuma longa', description: 'Rhizome - 100mg' },
      { name: 'Lisoda', sanskritName: 'Cordia dichotoma', description: 'Fruit - 100mg' },
      { name: 'Haritaki', sanskritName: 'Terminalia chebula', description: 'Fruit - 100mg' },
      { name: 'Nagarmotha', sanskritName: 'Cyperus rotundus', description: 'Rhizome - 100mg' },
      { name: 'Daruhaldi', sanskritName: 'Berbaris aristata', description: 'Stem - 100mg' },
      { name: 'Khubkala', sanskritName: 'Sisymbrium irio', description: 'Seed - 50mg' },
      { name: 'Gazban', sanskritName: 'Onosma bracteatum', description: 'Leaf - 50mg' },
      { name: 'Bharangi', sanskritName: 'Clerodendron serratum', description: 'Root - 50mg' },
      { name: 'Kapoor Karchi', sanskritName: 'Hedychium spicatum', description: 'Rhizome - 50mg' },
      { name: 'Sanuf', sanskritName: 'Foeniculum vulgare', description: 'Fruit - 50mg' },
      { name: 'Trikatu', sanskritName: 'Classical preparation', description: '50mg' },
      { name: 'Dalchini', sanskritName: 'Cinnamomum zeylanicum', description: 'Tvak - 20mg' },
      { name: 'Talispatra', sanskritName: 'Taxus baccata', description: 'Leaf - 20mg' },
      { name: 'Sugar', sanskritName: 'Saccharum Officinarum', description: 'Stem juice (Ext.) - 2.5gm' }
    ],
    dosage: DOSAGE_TEXT,
    indication: INDICATION_TEXT,
    disclaimer: DISCLAIMER_TEXT
  },
  {
    id: 'aaptovit',
    title: 'Aaptovit',
    category: 'Vitality & Immunity',
    form: 'Tablet',
    image: aaptovitImg,
    volume: '10 x 10 Tablets',
    ingredients: [
      { name: 'Composition', sanskritName: '', description: 'Each 525 mg Tablet Contains Pdr. of:' },
      { name: 'Ashwagandha', sanskritName: 'Withania somnifera', description: 'Rt. Ext. B.P.N. - 100mg' },
      { name: 'Kounch Beej', sanskritName: 'Mucuna pruriens', description: 'Sd. Ext. B.P.N. - 100mg' },
      { name: 'Gokshur', sanskritName: 'Tribulus terestris', description: 'Fr. Ext. B.P.N. - 30mg' },
      { name: 'Safed Musli', sanskritName: 'Asparagus adscendens', description: 'Rt. Ext. B.P.N. - 20mg' },
      { name: 'Shatavari', sanskritName: 'Asparagus racemosus', description: 'Rt. Ext. B.P.N. - 20mg' },
      { name: 'Plash Pushpa', sanskritName: 'Butea frondosa', description: 'Fl. Ext. B.P.N. - 20mg' },
      { name: 'Akarkara', sanskritName: 'Anacyclus pyrethrum', description: 'Rt. Ext. A.P.I. - 20mg' },
      { name: 'Shudh Kuchla', sanskritName: 'Strychnos nux vomica', description: 'Sd. B.P.N. (Powder) - 15mg' },
      { name: 'Shudh Shilajit', sanskritName: 'Asphaltum punjabianum', description: 'Shila Niryas B.P.N. (Powder) - 50mg' },
      { name: 'Jaiphal', sanskritName: 'Myristica fragrans', description: 'Fr. B.P.N. (Powder) - 20mg' },
      { name: 'Javitri', sanskritName: 'Myristica fragrans', description: 'Aril B.P.N. (Powder) - 10mg' },
      { name: 'Dalchini', sanskritName: 'Cinnamomum zeylanicum', description: 'Bk. B.P.N. (Powder) - 10mg' },
      { name: 'Loh Bhasma', sanskritName: 'Classical preparation', description: 'A.S.S. (Powder) - 20mg' },
      { name: 'Yashad Bhasma', sanskritName: 'Classical preparation', description: 'A.S.S. (Powder) - 20mg' },
      { name: 'Mukta Pishti', sanskritName: 'Classical preparation', description: 'A.S.S. (Powder) - 20mg' },
      { name: 'Bang Bhasma', sanskritName: 'Classical preparation', description: 'A.S.S. (Powder) - 10mg' },
      { name: 'Swarn Bang', sanskritName: 'Classical preparation', description: 'A.S.S. (Powder) - 9.875mg' },
      { name: 'Keshar', sanskritName: 'Crocus sativus', description: 'Stigma B.P.N. (Powder) - 0.125mg' },
      { name: 'Babool Gond', sanskritName: 'Acacia arabica', description: 'Niryas B.P.N. (Powder) - 15mg' }
    ],
    dosage: DOSAGE_TEXT,
    indication: INDICATION_TEXT,
    disclaimer: DISCLAIMER_TEXT
  },
  {
    id: 'aaptokas',
    title: 'Aaptokasa',
    category: 'Respiratory Care',
    form: 'Syrup',
    image: aaptokasImg,
    volume: '200ml Bottle',
    ingredients: [
      { name: 'Composition', sanskritName: '', description: 'Each 10 ml Contains Dct. of :' },
      { name: 'Vasaka', sanskritName: 'Adhatoda vasica', description: 'Lf. B.P.N. - 800mg' },
      { name: 'Mulethi', sanskritName: 'Glycyrrhiza glabra', description: 'Rt. B.P.N. - 200mg' },
      { name: 'Tulsi', sanskritName: 'Ocimum sanctum', description: 'Lf. B.P.N. - 200mg' },
      { name: 'Lisoda', sanskritName: 'Cordia dichotoma', description: 'Fr. B.P.N. - 100mg' },
      { name: 'Gozihva', sanskritName: 'Elephantopus scaber', description: 'Panchang B.P.N. - 100mg' },
      { name: 'Kantkari', sanskritName: 'Solanum xanthocarpum', description: 'Panchang B.P.N. - 200mg' },
      { name: 'Haldi', sanskritName: 'Curcuma longa', description: 'Rz. B.P.N. - 50mg' },
      { name: 'Bahera', sanskritName: 'Terminalia bellirica', description: 'Fr. A.P.I. - 100mg' },
      { name: 'Gulbanafsha', sanskritName: 'Viola odorata', description: 'Fl. B.P.N. - 50mg' },
      { name: 'Lobhan', sanskritName: 'Styrax benzoin', description: 'Niryas B.P.N. - 50mg' },
      { name: 'Sodium Benzoate', sanskritName: 'Preservative', description: 'I.P. - 0.2%' },
      { name: 'Sugar', sanskritName: 'Saccharum officinarum', description: 'B.P.N. - 6gm' },
      { name: 'Menthol', sanskritName: 'Mentha piperita', description: 'P. I.P. - 2mg' }
    ],
    dosage: DOSAGE_TEXT,
    indication: INDICATION_TEXT,
    disclaimer: DISCLAIMER_TEXT
  },
  {
    id: 'aaptoliv-ds-tablet',
    title: 'Aaptoliv DS',
    category: 'Liver Care',
    form: 'Tablet',
    image: aaptolivTabletImg,
    volume: '10 x 10 Tablets',
    ingredients: [
      { name: 'Composition', sanskritName: '', description: 'Each 600mg tablet Contains Pdr of:' },
      { name: 'Kutki', sanskritName: 'Picrorhiza kurroa', description: 'Rz. B.P.N. - 100mg' },
      { name: 'Makoy', sanskritName: 'Solanum nigrum', description: 'Ext. Pl. B.P.N. - 50mg' },
      { name: 'Bhumi Amla', sanskritName: 'Phyllanthus niruri', description: 'Pl. B.P.N. - 50mg' },
      { name: 'Vidang', sanskritName: 'Embelia ribes', description: 'Ext. Fr. B.P.N. - 50mg' },
      { name: 'Rohitak', sanskritName: 'Tecomella undulata', description: 'Ext. Bk. B.P.N. - 50mg' },
      { name: 'Kalmegh', sanskritName: 'Andrographis paniculata', description: 'Ext. Pl. B.P.N. - 50mg' },
      { name: 'Bhringraj', sanskritName: 'Eclipta alba', description: 'Ext. Pl. B.P.N. - 50mg' },
      { name: 'Punarnava', sanskritName: 'Boerhaavia diffusa', description: 'Ext. Rt. B.P.N. - 30mg' },
      { name: 'Parpat', sanskritName: 'Mollugo stricta', description: 'Ext. Pl. B.P.N. - 15mg' },
      { name: 'Sharpunkha', sanskritName: 'Tephrosia purpurea', description: 'Ext. Pl. B.P.N. - 15mg' },
      { name: 'Jhabuk', sanskritName: 'Tamarix troupii', description: 'Ext. Pl. B.P.N. - 15mg' },
      { name: 'Kasni', sanskritName: 'Cichorium intybus', description: 'Ext. Sd. B.P.N. - 15mg' },
      { name: 'Babool Gond', sanskritName: 'Acacia arabica', description: 'Resin B.P.N. - 5mg' },
      { name: 'Mandoor Bhasma', sanskritName: 'Classical preparation', description: 'A.P.I. - 25mg' },
      { name: 'Triphala', sanskritName: 'Classical preparation', description: 'Fr. B.P.N. - 80mg' }
    ],
    dosage: DOSAGE_TEXT,
    indication: INDICATION_TEXT,
    disclaimer: DISCLAIMER_TEXT
  },
  {
    id: 'aaptocid',
    title: 'Aaptocid',
    category: 'Digestive Care',
    form: 'Tablet',
    image: aaptocidImg,
    volume: '10 x 10 Tablets',
    ingredients: [
      { name: 'Composition', sanskritName: '', description: 'Each 610mg tablet Contains:' },
      { name: 'Avipattikar Churna', sanskritName: 'Classical preparation', description: 'A.F.I. - 400mg' },
      { name: 'Amla', sanskritName: 'Emblica officinalis', description: 'Fr. A.P.I. - 100mg' },
      { name: 'Mulahthi', sanskritName: 'Glycyrrhiza glabra', description: 'St. A.P.I. - 100mg' },
      { name: 'Swarjikshar', sanskritName: 'Classical preparation', description: 'A.S.S. - 10mg' },
      { name: 'Patolpatra', sanskritName: 'Bhawana', description: 'Pl. B.P.N. - 20mg' },
      { name: 'Bhringraj', sanskritName: 'Bhawana', description: 'Pl. A.P.I. - 20mg' },
      { name: 'Harad', sanskritName: 'Bhawana', description: 'Fr. A.P.I. - 20mg' }
    ],
    dosage: DOSAGE_TEXT,
    indication: INDICATION_TEXT,
    disclaimer: DISCLAIMER_TEXT
  },
  {
    id: 'aaptoclear',
    title: 'Aaptoclear',
    category: 'Kidney Care',
    form: 'Syrup',
    image: aaptoclearImg,
    volume: '200ml Bottle',
    ingredients: [
      { name: 'Composition', sanskritName: '', description: 'Each 10 ml Contains Extracts Derived from :' },
      { name: 'Varun Chaal', sanskritName: 'Crataeva nurvala', description: 'Bk. B.P.N. - 650mg' },
      { name: 'Gokhru Chhota', sanskritName: 'Pedelium murex', description: 'Fr. B.P.N. - 650mg' },
      { name: 'Punarnava', sanskritName: 'Boerhaavia diffusa', description: 'Mool B.P.N. - 450mg' },
      { name: 'Apamarg', sanskritName: 'Achyranthes indica', description: 'Rt. B.P.N. - 200mg' },
      { name: 'Pashanbhed', sanskritName: 'Bergenia linguata', description: 'Rt. B.P.N. - 200mg' },
      { name: 'Palash', sanskritName: 'Butea frondosa', description: 'Fl. B.P.N. - 200mg' },
      { name: 'Shwet Parpati', sanskritName: 'Classical preparation', description: 'A.F.I. - 100mg' },
      { name: 'Daru Haridra', sanskritName: 'Berberis aristata', description: 'Rt./St. Kaasth B.P.N. - 100mg' },
      { name: 'Haritaki', sanskritName: 'Terminalia chebula', description: 'Fr. B.P.N. - 100mg' },
      { name: 'Dhania', sanskritName: 'Coriandrum sativum', description: 'Fr. B.P.N. - 100mg' },
      { name: 'Saindhav Lavan', sanskritName: 'Sodii chloridum', description: 'Mineral B.P.N. - 50mg' },
      { name: 'Kulthi', sanskritName: 'Dolichos biflorus', description: 'Sd. B.P.N. - 100mg' },
      { name: 'Sugar', sanskritName: 'Saccharum officinarum', description: 'St. J. Ext. I.P. - 2.5gm' }
    ],
    dosage: DOSAGE_TEXT,
    indication: INDICATION_TEXT,
    disclaimer: DISCLAIMER_TEXT
  }
];
