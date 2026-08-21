import type { Metadata } from "next";
import Accordion from "@/components/Accordion";
import InnerHero from "@/components/InnerHero";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Faq | Energizese",
};

export default function FaqsPage() {
  return (
    <main>
      <InnerHero src="/assets/images/faq-banner.jpg" alt="FAQ" />
      <section className="bg-white py-16 md:py-24">
        <Container className="max-w-4xl">
          <h1 className="mb-8 text-center text-3xl font-semibold text-navy md:text-5xl">
            FAQ&apos;s
          </h1>
          <Accordion
            items={[
              {
                title: "Quality",
                content: (
                  <p>
                    We strive to provide excellent quality products and services
                    to our customers. Our stringent quality check practices help
                    us provide the best standards of goods and services.
                  </p>
                ),
              },
              {
                title: "Commitment",
                content: (
                  <>
                    <p>We are committed to:</p>
                    <ul className="mt-3 list-disc space-y-1 pl-5">
                      <li>
                        Growing our business to higher level with ultimate aim
                        of safeguarding our planet for future generations.
                      </li>
                      <li>
                        Winning through creativity, research, commitment and
                        innovation.
                      </li>
                      <li>
                        Providing unmatched customer service throughout the
                        relationship.
                      </li>
                    </ul>
                  </>
                ),
              },
              {
                title: "Quality ",
                content: (
                  <p>
                    We strive to provide excellent quality products and services
                    to our customers. Our stringent quality check practices help
                    us provide the best standards of goods and services.
                  </p>
                ),
              },
              {
                title: "Nurture",
                content: (
                  <p>
                    We nurture the talent of our people as well as our
                    stakeholders to achieve greater heights in the industry at
                    the same time focusing sustainable development, our efforts
                    help us uplift the local economy, talent and culture.
                  </p>
                ),
              },
            ]}
          />
        </Container>
      </section>
    </main>
  );
}
