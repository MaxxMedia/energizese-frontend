import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JobApplyForm from "@/components/JobApplyForm";
import { getJob, jobs } from "@/lib/jobs";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);

  if (!job) {
    return {
      title: "Job Not Found | Maxx Business Media",
    };
  }

  return {
    title: `${job.title} | Careers | Maxx Business Media`,
  };
}

export default async function JobPage({ params }: Props) {
  const { slug } = await params;
  const job = getJob(slug);

  if (!job) {
    notFound();
  }

  return (
    <main>
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <h1 className="text-3xl font-semibold text-navy md:text-5xl">
            {job.title}
          </h1>

          <div
            className="prose mt-8 max-w-none"
            dangerouslySetInnerHTML={{ __html: job.description }}
          />

          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-semibold text-navy">
              Apply for this Position
            </h2>

            <JobApplyForm jobTitle={job.title} />
          </div>
        </div>
      </section>
    </main>
  );
}