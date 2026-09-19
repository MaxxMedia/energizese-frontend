import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy | Maxx Business Media",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <InnerHero
        src="/assets/images/img-hero-project.jpg"
        alt="Privacy Policy - Maxx Business Media"
      />

      <section className="bg-white py-16 md:py-24">
        <Container className="max-w-4xl space-y-5 text-base leading-8 text-muted">
          <h1 className="text-3xl font-semibold text-navy md:text-5xl">
            Privacy Policy
          </h1>

          <h2 className="text-xl font-semibold text-navy">
            Maxx Business Media Pvt. Ltd.
          </h2>

          <p>Last Updated: 19/09/2026</p>

          <p>
            Maxx Business Media Pvt. Ltd. respects your privacy and is
            committed to protecting the personal information you share with us.
            This Privacy Policy explains how we collect, use, store, and
            protect information when you visit our website, register for our
            exhibitions or conferences, communicate with us, or use our
            digital platforms and services.
          </p>

          <h3 className="font-semibold text-navy">
            Information We Collect
          </h3>

          <p>
            We may collect information such as your name, designation, company
            name, email address, phone number, business address, industry
            information, registration details, and other information that you
            voluntarily provide through enquiry forms, exhibition registrations,
            contact forms, subscriptions, or other interactions with us.
          </p>

          <h3 className="font-semibold text-navy">
            How We Use Your Information
          </h3>

          <p>
            We may use the information collected to process enquiries and
            registrations, provide information about exhibitions and
            conferences, communicate with exhibitors, visitors, sponsors, and
            business partners, provide media and promotional services, improve
            our website and digital platforms, conduct business communications,
            and comply with applicable legal and regulatory requirements.
          </p>

          <h3 className="font-semibold text-navy">
            Exhibition & Event Registrations
          </h3>

          <p>
            Information submitted for exhibition, conference, visitor, or
            delegate registration may be used to manage participation,
            communicate event-related information, provide event services, and
            facilitate relevant business networking or engagement opportunities.
          </p>

          <h3 className="font-semibold text-navy">
            Cookies and Tracking Technologies
          </h3>

          <p>
            Our website may use cookies and similar technologies to improve
            website functionality, understand visitor behaviour, analyse
            traffic, remember preferences, and improve the overall user
            experience. You may manage or disable cookies through your browser
            settings, although certain website features may be affected.
          </p>

          <h3 className="font-semibold text-navy">
            Information Sharing and Third Parties
          </h3>

          <p>
            We may share relevant information with trusted service providers,
            technology partners, payment processors, registration platforms,
            analytics providers, event service providers, or business partners
            where necessary to provide our services or conduct our business.
            We may also disclose information where required by applicable law
            or a lawful request from an authorised authority.
          </p>

          <p>
            We do not sell personal information to third parties for their
            independent marketing purposes.
          </p>

          <h3 className="font-semibold text-navy">
            Data Security
          </h3>

          <p>
            We take reasonable technical and organisational measures to protect
            personal information against unauthorised access, loss, misuse,
            alteration, disclosure, or destruction. However, no method of
            electronic transmission or storage can be guaranteed to be
            completely secure.
          </p>

          <h3 className="font-semibold text-navy">
            Data Retention
          </h3>

          <p>
            We retain personal information only for as long as reasonably
            necessary for the purposes for which it was collected, including
            business, contractual, operational, accounting, legal, and
            regulatory requirements.
          </p>

          <h3 className="font-semibold text-navy">
            Your Rights
          </h3>

          <p>
            Subject to applicable law, you may request access to or correction
            of your personal information and may request deletion or withdrawal
            of consent where applicable. Certain information may need to be
            retained where required for legal, contractual, or legitimate
            business purposes.
          </p>

          <h3 className="font-semibold text-navy">
            Business Communications
          </h3>

          <p>
            If you provide your contact details to us, we may send you
            information relating to our exhibitions, conferences, publications,
            digital platforms, industry updates, business opportunities, or
            other relevant communications. You may request to stop receiving
            promotional communications at any time.
          </p>

          <h3 className="font-semibold text-navy">
            Third-Party Websites
          </h3>

          <p>
            Our website may contain links to third-party websites, platforms,
            registration systems, or services. We are not responsible for the
            privacy practices, content, or security of those third-party
            websites. We recommend reviewing their respective privacy policies
            before providing personal information.
          </p>

          <h3 className="font-semibold text-navy">
            Legal Compliance
          </h3>

          <p>
            Maxx Business Media may process and retain information as necessary
            to comply with applicable laws, regulations, contractual
            obligations, legal proceedings, or lawful requests from competent
            authorities.
          </p>

          <h3 className="font-semibold text-navy">
            Changes to This Privacy Policy
          </h3>

          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our business practices, technology, or applicable legal
            requirements. Any updated version will be published on this page
            together with the revised date.
          </p>

          <h3 className="font-semibold text-navy">
            Contact Information
          </h3>

          <p>
            If you have any questions, concerns, or requests relating to this
            Privacy Policy or the handling of your personal information, please
            contact Maxx Business Media Pvt. Ltd. at{" "}
            <a
              href="mailto:info@maxxmedia.in"
              className="font-medium text-orange hover:text-navy"
            >
              info@maxxmedia.in
            </a>{" "}
            or call{" "}
            <a
              href="tel:+919148319993"
              className="font-medium text-orange hover:text-navy"
            >
              +91 91483 19993
            </a>
            .
          </p>

          <p>
            <strong>Maxx Business Media Pvt. Ltd.</strong>
            <br />
            T9, Swastik Manandi Arcade,
            <br />
            SC Road, Seshadripuram,
            <br />
            Bengaluru - 560020,
            <br />
            Karnataka, India
          </p>
        </Container>
      </section>
    </main>
  );
}