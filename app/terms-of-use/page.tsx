import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Use | Energizese",
};

export default function TermsOfUsePage() {
  return (
    <main>
      <InnerHero src="/assets/images/img-hero-project.jpg" alt="Terms of Use" />
      <section className="bg-white py-16 md:py-24">
        <Container className="max-w-4xl space-y-5 text-base leading-8 text-muted">
          <h1 className="text-3xl font-semibold text-navy md:text-5xl">Terms of Use</h1>
          <p>By using this website, you agree to these Terms of Use.</p>
          <p>
            This website provides general information about our services in
            mechanical, industrial, commercial, residential installation,
            maintenance, and turnkey projects. We reserve the right to update or
            change content at any time without notice.
          </p>
          <p>
            All content on this website, including text, images, logos, and
            project information, is the property of Energize SE and may not be
            copied or used without permission.
          </p>
          <p>
            Users must use this website only for lawful purposes and must not
            attempt to misuse or damage the website or its systems.
          </p>
          <p>
            We are not responsible for any errors, omissions, or damages arising
            from the use of this website or reliance on its content. External
            links, if any, are provided for convenience and are not under our
            control.
          </p>
          <p>Use of this website is also subject to our Privacy Policy.</p>
          <p>
            We may update these Terms of Use at any time. Continued use of the
            website means acceptance of any changes.
          </p>
          <p>
            For any questions, please contact us through the details provided on
            our website.
          </p>
        </Container>
      </section>
    </main>
  );
}
