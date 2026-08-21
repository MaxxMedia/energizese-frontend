import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JobApplyForm from "@/components/JobApplyForm";
import { getJob, jobs } from "@/lib/jobs";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  return {
    title: job ? `Apply ${job.title} | Energizese` : "Apply Job | Energizese",
  };
}

export default async function JobApplyPage({ params }: Props) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  return (
    <main>
      <JobApplyForm selectedJob={job.title} />
    </main>
  );
}
