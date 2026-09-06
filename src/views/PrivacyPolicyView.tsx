import React from 'react';
import { LegalPageLayout, LegalSection } from '../components/LegalPageLayout';

export const PrivacyPolicyView: React.FC = () => {
  return (
    <LegalPageLayout
      icon="privacy_tip"
      eyebrow="Your Data, Respected"
      title="Privacy Policy"
      intro="This policy explains what information AaptoVeda Wellness collects through this website, how it is used, and the choices you have."
      lastUpdated="September 2026"
    >
      <LegalSection title="1. Information We Collect">
        <p>
          We collect information you voluntarily provide to us, such as your name and email
          address when you subscribe to our newsletter, submit a contact or inquiry form, or take
          the Prakriti Dosha Quiz on this site.
        </p>
        <p>
          We may also collect limited technical information automatically, such as browser type,
          device type, and pages visited, to help us understand how the site is used and to
          improve its performance.
        </p>
      </LegalSection>

      <LegalSection title="2. How We Use Your Information">
        <p>
          Information you share with us is used to respond to your inquiries, send newsletters or
          educational content you have opted into, and improve our website and product
          information. We do not use the Dosha Quiz results to sell or recommend specific
          products; it is provided purely for educational purposes.
        </p>
      </LegalSection>

      <LegalSection title="3. Sharing of Information">
        <p>
          We do not sell, rent, or trade your personal information to third parties. We may share
          information with trusted service providers who help us operate this website (such as
          email delivery or hosting services), solely for the purpose of providing that service,
          and only to the extent necessary.
        </p>
      </LegalSection>

      <LegalSection title="4. Cookies & Local Storage">
        <p>
          This site may use local browser storage to remember your preferences, such as your
          selected theme (light or dark mode). This information stays on your device and is not
          transmitted to our servers.
        </p>
      </LegalSection>

      <LegalSection title="5. Your Choices">
        <p>
          You may unsubscribe from our newsletter at any time using the link provided in any email
          we send. You may also contact us directly to request that we delete personal
          information you have shared with us.
        </p>
      </LegalSection>

      <LegalSection title="6. Children's Privacy">
        <p>
          This website is not directed at children, and we do not knowingly collect personal
          information from children.
        </p>
      </LegalSection>

      <LegalSection title="7. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices.
          Any updates will be posted on this page along with a revised "Last updated" date.
        </p>
      </LegalSection>

      <LegalSection title="8. Contact Us">
        <p>
          If you have any questions about this Privacy Policy or how your information is handled,
          please reach out to us through our Contact page.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
};