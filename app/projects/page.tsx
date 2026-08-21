import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import ProjectTabs from "@/components/ProjectTabs";
import { PageIntro } from "@/components/ui";

export const metadata: Metadata = {
  title: "Projects | Energizese",
};

export default function ProjectsPage() {
  return (
    <main>
      <InnerHero src="/assets/images/img-hero-project.jpg" alt="Projects" />
      <PageIntro eyebrow="Our Projects" />
      <ProjectTabs />
    </main>
  );
}
