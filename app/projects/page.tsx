import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import ExhibitionTabs from "@/components/ExhibitionTabs";
import { PageIntro } from "@/components/ui";

export const metadata: Metadata = {
  title: "Exhibitions & Trade Fairs | Maxx Business Media",
};

export default function ExhibitionsPage() {
  return (
    <main>
      <InnerHero
        src="/assets/images/img-hero-project.jpg"
        alt="Exhibitions & Trade Fairs - Maxx Business Media"
      />

      <PageIntro eyebrow="Our Exhibitions">
        Discover our industry-focused exhibitions and trade fairs that bring
        together manufacturers, technology providers, buyers, professionals,
        and industry leaders to create meaningful business opportunities.
      </PageIntro>

      <ExhibitionTabs />
    </main>
  );
}