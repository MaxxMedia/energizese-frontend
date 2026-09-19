import type { Metadata } from "next";
import Link from "next/link";
import Accordion from "@/components/Accordion";
import InnerHero from "@/components/InnerHero";
import { Container, PageIntro } from "@/components/ui";
import { jobs } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Careers | Maxx Business Media",
};

export default function CareerPage() {
  return (
    <main>
      <InnerHero
        src="/assets/images/career-banner.jpg"
        alt="Careers at Maxx Business Media"
      />

      <PageIntro eyebrow="Join Our Team">
        At Maxx Business Media, we bring industries, businesses, and
        professionals together through exhibitions, conferences, media, and
        digital platforms. We are looking for talented, passionate, and
        driven professionals who want to build their careers in the dynamic
        world of B2B events, media, marketing, and business development.
        Join us and be part of a team that creates opportunities and drives
        industry growth.
      </PageIntro>

      <section className="bg-sand py-16 md:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <img
            src="/uploads/07cb076f8aff197b.jpg"
            alt="Join Maxx Business Media"
            className="w-full"
          />

          <Accordion
            items={jobs.map((job) => ({
              title: job.title,
              content: (
                <>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: job.description,
                    }}
                  />

                  <Link
                    href={`/job/${job.slug}`}
                    className="mt-4 inline-block font-medium text-orange hover:text-navy"
                  >
                    Apply Now
                  </Link>
                </>
              ),
            }))}
          />
        </Container>
      </section>
    </main>
  );
}