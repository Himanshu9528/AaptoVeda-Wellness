import React from 'react';
import { LegalPageLayout, LegalSection } from '../components/LegalPageLayout';

export const PurityProtocolsView: React.FC = () => {
  return (
    <LegalPageLayout
      icon="eco"
      eyebrow="Quality & Integrity"
      title="Purity Protocols"
      intro="An overview of the sourcing, testing, and quality-assurance principles that guide how AaptoVeda formulations are made."
      lastUpdated="September 2026"
    >
      <LegalSection title="1. Sourcing of Botanicals">
        <p>
          Our herbal ingredients are sourced from suppliers selected for consistency in botanical
          identity and quality. Where possible, we favor sustainably harvested and organically
          grown raw materials, in keeping with classical Ayurvedic preparation principles.
        </p>
      </LegalSection>

      <LegalSection title="2. Identity & Authentication">
        <p>
          Raw materials are checked against their botanical (Latin) names and the specific plant
          part used (root, bark, leaf, seed, etc.) as referenced in classical texts, to help
          ensure the correct botanical is used in each formulation.
        </p>
      </LegalSection>

      <LegalSection title="3. Heavy Metal & Contaminant Screening">
        <p>
          Formulations are manufactured with attention to applicable limits for heavy metals,
          microbial contamination, and other quality parameters relevant to Ayurvedic medicines,
          as part of routine quality control practices.
        </p>
      </LegalSection>

      <LegalSection title="4. Manufacturing Standards">
        <p>
          Our products are prepared as Proprietary Ayurvedic Medicines, following standardized
          formulation and batch documentation practices intended to maintain consistency from
          batch to batch.
        </p>
      </LegalSection>

      <LegalSection title="5. Classical Preparations (Bhasmas & Rasayanas)">
        <p>
          Where classical mineral preparations (such as Bhasmas) are included in a formulation,
          these are processed according to traditional Ayurvedic pharmaceutical methods intended
          to render them suitable for internal use, and are included only in the quantities stated
          on the product label.
        </p>
      </LegalSection>

      <LegalSection title="6. Labeling Transparency">
        <p>
          Each product page on this website lists its composition as stated on the product
          packaging, including the botanical name, part used, and quantity per dose unit, so you
          can review exactly what a formulation contains.
        </p>
      </LegalSection>

      <LegalSection title="7. Not a Substitute for Medical Advice">
        <p>
          The information on this page describes our general approach to sourcing and quality and
          is provided for transparency. It is not a certification, warranty, or medical claim.
          Always use our products as directed by a qualified physician, and consult a healthcare
          professional before starting any new formulation, particularly if you are pregnant,
          nursing, managing a health condition, or taking other medications.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
};