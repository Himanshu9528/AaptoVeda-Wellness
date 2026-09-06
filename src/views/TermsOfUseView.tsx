import React from 'react';
import { LegalPageLayout, LegalSection } from '../components/LegalPageLayout';

export const TermsOfUseView: React.FC = () => {
  return (
    <LegalPageLayout
      icon="gavel"
      eyebrow="Please Read Carefully"
      title="Terms of Use"
      intro="These terms govern your use of the AaptoVeda Wellness website. By using this site, you agree to the terms described below."
      lastUpdated="September 2026"
    >
      <LegalSection title="1. Acceptance of Terms">
        <p>
          By accessing or using this website, you agree to be bound by these Terms of Use. If you
          do not agree with any part of these terms, please do not use this website.
        </p>
      </LegalSection>

      <LegalSection title="2. Educational & Informational Purpose">
        <p>
          Content on this website, including botanical descriptions, the Prakriti Dosha Quiz, and
          Ayurvedic wisdom articles, is provided for general educational and informational
          purposes only. It is not intended to diagnose, treat, cure, or prevent any disease, and
          should not be treated as personalized medical advice.
        </p>
      </LegalSection>

      <LegalSection title="3. Product Information & Images">
        <p>
          Product compositions listed on this site reflect information provided on product
          packaging at the time of publication. Product images are for illustration purposes
          only; the actual product may differ in appearance. Always refer to the physical
          product label and consult your physician for dosage and usage guidance.
        </p>
      </LegalSection>

      <LegalSection title="4. No Doctor-Patient Relationship">
        <p>
          Use of this website, including the Dosha Quiz or contact form, does not create a
          doctor-patient relationship between you and AaptoVeda Wellness. Always consult a
          qualified physician before beginning, changing, or discontinuing any medication or
          formulation, especially if you are pregnant, nursing, have an existing health
          condition, or are taking other medicines.
        </p>
      </LegalSection>

      <LegalSection title="5. Intellectual Property">
        <p>
          All text, graphics, logos, and content on this website are the property of AaptoVeda
          Wellness Inc. or its licensors and are protected by applicable intellectual property
          laws. You may not reproduce, distribute, or create derivative works from this content
          without our prior written consent.
        </p>
      </LegalSection>

      <LegalSection title="6. User Conduct">
        <p>
          You agree to use this website only for lawful purposes and in a manner that does not
          infringe upon the rights of, or restrict, or inhibit anyone else's use of the site.
        </p>
      </LegalSection>

      <LegalSection title="7. Limitation of Liability">
        <p>
          AaptoVeda Wellness Inc. shall not be liable for any direct, indirect, incidental, or
          consequential damages arising from your use of, or inability to use, this website or
          any information contained on it.
        </p>
      </LegalSection>

      <LegalSection title="8. Changes to These Terms">
        <p>
          We may revise these Terms of Use from time to time. Continued use of the website after
          changes are posted constitutes your acceptance of the revised terms.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact">
        <p>
          Questions about these Terms of Use can be directed to us through our Contact page.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
};