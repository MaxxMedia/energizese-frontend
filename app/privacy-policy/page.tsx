import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy | Energizese",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <InnerHero src="/assets/images/img-hero-project.jpg" alt="Privacy Policy" />
      <section className="bg-white py-16 md:py-24">
        <Container className="max-w-4xl space-y-5 text-base leading-8 text-muted">
          <h1 className="text-3xl font-semibold text-navy md:text-5xl">Privacy Policy</h1>
          <h2 className="text-xl font-semibold text-navy">Energizese Contractors</h2>
          <p>Last Updated: 06/06/2026</p>
          <p>
            We are committed to protecting your privacy and ensuring that your
            personal information is handled securely and responsibly. This
            Privacy Policy explains how we collect, use, store, and protect
            information collected through our website.
          </p>
          <h3 className="font-semibold text-navy">Information We Collect</h3>
          <p>
            We may collect personal information such as your name, email
            address, phone number, company details, payment information (if
            applicable), and other details voluntarily provided through forms or
            inquiries.
          </p>
          <h3 className="font-semibold text-navy">How We Use Your Information</h3>
          <p>
            The information collected may be used to provide services, respond
            to inquiries, process transactions, improve website performance,
            communicate updates, provide customer support, and comply with legal
            obligations.
          </p>
          <h3 className="font-semibold text-navy">Cookies and Tracking Technologies</h3>
          <p>
            Our website may use cookies and similar technologies to enhance user
            experience, analyze website traffic, and improve functionality.
            Users may manage cookie preferences through browser settings.
          </p>
          <h3 className="font-semibold text-navy">Information Sharing and Third Parties</h3>
          <p>
            We may share information with trusted third-party service providers,
            payment processors, analytics providers, or business partners when
            necessary to provide services or comply with legal requirements. We
            do not sell personal information to third parties.
          </p>
          <h3 className="font-semibold text-navy">Data Security</h3>
          <p>
            We implement reasonable technical and organizational measures to
            protect personal information against unauthorized access, misuse,
            alteration, or disclosure.
          </p>
          <h3 className="font-semibold text-navy">Data Retention</h3>
          <p>
            Personal information will be retained only for as long as necessary
            to fulfill business, legal, or operational requirements and will be
            securely deleted when no longer required.
          </p>
          <h3 className="font-semibold text-navy">Your Rights</h3>
          <p>
            Users may request access to their personal information, request
            corrections, request deletion where applicable, or withdraw consent
            for certain data processing activities.
          </p>
          <h3 className="font-semibold text-navy">Legal Compliance</h3>
          <p>
            We comply with applicable privacy laws and regulations and may
            update our practices to remain aligned with legal requirements.
          </p>
          <h3 className="font-semibold text-navy">Changes to This Privacy Policy</h3>
          <p>
            We reserve the right to modify or update this Privacy Policy at any
            time. Any changes will be published on this page with an updated
            revision date.
          </p>
          <h3 className="font-semibold text-navy">Contact Information</h3>
          <p>
            For any questions, concerns, or requests regarding this Privacy
            Policy or your personal information, please contact us through the
            contact details provided on our website.
          </p>
        </Container>
      </section>
    </main>
  );
}
