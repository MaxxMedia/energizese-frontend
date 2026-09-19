import type { Metadata } from "next";
import Accordion from "@/components/Accordion";
import InnerHero from "@/components/InnerHero";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "FAQs | Maxx Business Media",
};

export default function FaqsPage() {
  return (
    <main>
      <InnerHero
        src="/assets/images/faq-banner.jpg"
        alt="Frequently Asked Questions - Maxx Business Media"
      />

      <section className="bg-white py-16 md:py-24">
        <Container className="max-w-4xl">
          <h1 className="mb-4 text-center text-3xl font-semibold text-navy md:text-5xl">
            Frequently Asked Questions
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-center text-lg leading-8 text-muted">
            Find answers to common questions about our exhibitions,
            conferences, media platforms, partnerships, and business
            opportunities.
          </p>

          <Accordion
            items={[
              {
                title: "What does Maxx Business Media do?",
                content: (
                  <p>
                    Maxx Business Media Pvt. Ltd. is a B2B media and business
                    events company focused on exhibitions, conferences, trade
                    publications, digital business platforms, and industry
                    networking initiatives.
                  </p>
                ),
              },

              {
                title: "What types of exhibitions do you organise?",
                content: (
                  <p>
                    We organise industry-focused B2B exhibitions covering
                    sectors such as manufacturing, engineering, tooling,
                    metrology, automotive, plastics, and other specialised
                    industrial segments.
                  </p>
                ),
              },

              {
                title: "How can my company participate in an exhibition?",
                content: (
                  <p>
                    Companies can participate as exhibitors, sponsors,
                    supporting partners, or technology partners. Contact our
                    team to receive the relevant event information, participation
                    options, and commercial details.
                  </p>
                ),
              },

              {
                title: "Can companies become sponsors or partners?",
                content: (
                  <p>
                    Yes. We offer sponsorship and partnership opportunities for
                    companies, industry associations, institutions, and
                    technology providers looking to increase their visibility
                    and connect with relevant business audiences.
                  </p>
                ),
              },

              {
                title: "How can I attend your exhibitions and conferences?",
                content: (
                  <p>
                    Visitors and delegates can register through the respective
                    event websites or registration platforms. Registration
                    details are announced for each exhibition and conference.
                  </p>
                ),
              },

              {
                title: "Does Maxx Business Media provide media and advertising opportunities?",
                content: (
                  <p>
                    Yes. We provide industry-focused media and promotional
                    opportunities through trade publications, websites, digital
                    platforms, social media, email campaigns, and event
                    promotions.
                  </p>
                ),
              },

              {
                title: "Can you help companies with industry promotion?",
                content: (
                  <p>
                    Yes. We provide targeted B2B marketing and promotional
                    solutions designed to help companies improve industry
                    visibility, reach relevant decision-makers, generate
                    business leads, and build stronger market connections.
                  </p>
                ),
              },

              {
                title: "How can I partner with Maxx Business Media?",
                content: (
                  <p>
                    We welcome partnerships with manufacturers, technology
                    companies, industry associations, institutions, media
                    organisations, and other business stakeholders. Contact us
                    to discuss collaboration opportunities.
                  </p>
                ),
              },

              {
                title: "How can I contact Maxx Business Media?",
                content: (
                  <p>
                    You can contact our team at{" "}
                    <a
                      href="mailto:info@maxxmedia.in"
                      className="font-medium text-orange hover:text-navy"
                    >
                      info@maxxmedia.in
                    </a>{" "}
                    or call us at{" "}
                    <a
                      href="tel:+919148319993"
                      className="font-medium text-orange hover:text-navy"
                    >
                      +91 91483 19993
                    </a>
                    . Our team will be happy to assist you with exhibitions,
                    conferences, media, partnerships, and other business
                    enquiries.
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