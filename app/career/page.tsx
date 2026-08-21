import type { Metadata } from "next";
import Link from "next/link";
import Accordion from "@/components/Accordion";
import InnerHero from "@/components/InnerHero";
import { Container, PageIntro } from "@/components/ui";
import { jobs } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Career | Energizese",
};

export default function CareerPage() {
  return (
    <main>
      <InnerHero src="/assets/images/career-banner.jpg" alt="Career" />
      <PageIntro eyebrow="Join Our Team">
        We deliver high-quality solutions across Industrial, Commercial, and
        Residential projects. We are looking skilled and dedicated professionals
        who are committed to excellence and innovation. Join us to contribute to
        challenging projects and advance your career in a supportive,
        growth-focused environment.
      </PageIntro>
      <section className="bg-sand py-16 md:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <img src="/uploads/07cb076f8aff197b.jpg" alt="Career" className="w-full" />
          <Accordion
            items={jobs.map((job) => ({
              title: job.title,
              content: (
                <>
                  <div dangerouslySetInnerHTML={{ __html: job.description }} />
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
