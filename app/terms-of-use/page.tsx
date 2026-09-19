import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Use | Maxx Business Media",
};

export default function TermsOfUsePage() {
  return (
    <main>
      <InnerHero
        src="/assets/images/img-hero-project.jpg"
        alt="Terms of Use - Maxx Business Media"
      />

      <section className="bg-white py-16 md:py-24">
        <Container className="max-w-4xl space-y-5 text-base leading-8 text-muted">
          <h1 className="text-3xl font-semibold text-navy md:text-5xl">
            Terms of Use
          </h1>

          <h2 className="text-xl font-semibold text-navy">
            Maxx Business Media Pvt. Ltd.
          </h2>

          <p>
            By accessing or using the Maxx Business Media website, you agree to
            comply with and be bound by these Terms of Use. If you do not agree
            with these terms, please do not use this website.
          </p>

          <h3 className="font-semibold text-navy">
            Use of This Website
          </h3>

          <p>
            This website provides information about Maxx Business Media,
            including our exhibitions, trade fairs, conferences, publications,
            digital business platforms, industry initiatives, and related
            services. The information is provided for general business and
            informational purposes and may be updated from time to time.
          </p>

          <h3 className="font-semibold text-navy">
            Exhibition and Event Information
          </h3>

          <p>
            Dates, venues, programmes, exhibitors, speakers, participation
            details, and other event-related information published on this
            website may be subject to change. Maxx Business Media reserves the
            right to modify, postpone, reschedule, or cancel an event where
            circumstances require such changes.
          </p>

          <h3 className="font-semibold text-navy">
            Intellectual Property
          </h3>

          <p>
            All content available on this website, including text, graphics,
            photographs, logos, trademarks, event names, designs, videos,
            publications, and other materials, is owned by or licensed to Maxx
            Business Media Pvt. Ltd., unless otherwise stated.
          </p>

          <p>
            Content may not be copied, reproduced, modified, distributed,
            published, transmitted, or commercially used without prior written
            permission from Maxx Business Media.
          </p>

          <h3 className="font-semibold text-navy">
            User Responsibilities
          </h3>

          <p>
            Users must use this website only for lawful purposes. You must not
            attempt to interfere with the operation of the website, gain
            unauthorised access to systems or data, introduce malicious code,
            misuse website forms, or use the website in a manner that may
            negatively affect Maxx Business Media or other users.
          </p>

          <h3 className="font-semibold text-navy">
            Exhibition Registrations and Enquiries
          </h3>

          <p>
            Information submitted through exhibition registrations, conference
            registrations, enquiry forms, sponsorship requests, exhibitor
            enquiries, or other forms must be accurate and complete. Submission
            of an enquiry or registration does not automatically constitute
            acceptance, confirmation, or a contractual agreement unless
            expressly confirmed by Maxx Business Media.
          </p>

          <h3 className="font-semibold text-navy">
            Third-Party Links and Services
          </h3>

          <p>
            Our website may contain links to third-party websites, registration
            platforms, payment services, social media platforms, or other
            external services. These links are provided for convenience. Maxx
            Business Media does not control and is not responsible for the
            content, availability, security, or privacy practices of
            third-party websites.
          </p>

          <h3 className="font-semibold text-navy">
            Accuracy of Information
          </h3>

          <p>
            We make reasonable efforts to keep the information on our website
            accurate and current. However, we do not guarantee that all
            information will always be complete, accurate, current, or free from
            errors or omissions.
          </p>

          <h3 className="font-semibold text-navy">
            Limitation of Liability
          </h3>

          <p>
            To the extent permitted by applicable law, Maxx Business Media
            shall not be liable for any direct, indirect, incidental, special,
            or consequential loss arising from the use of, or inability to use,
            this website or reliance on information published on the website.
          </p>

          <h3 className="font-semibold text-navy">
            Privacy
          </h3>

          <p>
            Your use of this website is also subject to our{" "}
            <a
              href="/privacy-policy"
              className="font-medium text-orange hover:text-navy"
            >
              Privacy Policy
            </a>
            , which explains how we collect, use, and protect personal
            information.
          </p>

          <h3 className="font-semibold text-navy">
            Changes to These Terms
          </h3>

          <p>
            Maxx Business Media reserves the right to modify or update these
            Terms of Use at any time. Changes will become effective when
            published on this page. Your continued use of the website after
            changes are published constitutes acceptance of the updated terms.
          </p>

          <h3 className="font-semibold text-navy">
            Governing Law
          </h3>

          <p>
            These Terms of Use shall be governed by and interpreted in
            accordance with the applicable laws of India. Any disputes arising
            in connection with the use of this website shall be subject to the
            applicable jurisdiction in Bengaluru, Karnataka, India.
          </p>

          <h3 className="font-semibold text-navy">
            Contact Information
          </h3>

          <p>
            For questions regarding these Terms of Use, please contact:
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
            <br />
            Email:{" "}
            <a
              href="mailto:info@maxxmedia.in"
              className="font-medium text-orange hover:text-navy"
            >
              info@maxxmedia.in
            </a>
            <br />
            Phone:{" "}
            <a
              href="tel:+919148319993"
              className="font-medium text-orange hover:text-navy"
            >
              +91 91483 19993
            </a>
          </p>
        </Container>
      </section>
    </main>
  );
}