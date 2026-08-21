export const jobs = [
  {
    slug: "technical-support-engineer",
    title: "Technical Support Engineer",
    description:
      "<p>We strive to provide excellent quality products and services to our customers. Our stringent quality check practices help us provide the best standards of goods and services.</p>",
  },
  {
    slug: "civil-engineer",
    title: "Civil Engineer",
    description: "<p><br /></p>",
  },
  {
    slug: "senior-planning-engineer",
    title: "Senior Planning Engineer",
    description:
      "<ul><li>Bachelor’s degree in Civil Engineering.</li><li>10–15 years of proven experience in infrastructure projects.</li><li>Strong ability to develop and manage baseline programmes.</li><li>Skilled in preparing and updating daily, weekly, and monthly progress reports.</li><li>Proficiency in creating professional presentations for management and stakeholders.</li><li>Extensive experience in preparing Extension of Time (EOT) claims.</li><li>Excellent communication, coordination, and organizational skills.</li></ul>",
  },
] as const;

export function getJob(slug: string) {
  return jobs.find((job) => job.slug === slug);
}
