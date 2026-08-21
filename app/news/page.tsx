import type { Metadata } from "next";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";
import { Container, PageIntro } from "@/components/ui";
import { newsArticles } from "@/lib/news";

export const metadata: Metadata = {
  title: "News | Energizese",
};

export default function NewsPage() {
  return (
    <main>
      <InnerHero src="/assets/images/img-hero-project.jpg" alt="News" />
      <PageIntro eyebrow="News & Events">
        Stay updated with the latest from Energizese, a specialized mechanical
        services firm delivering excellence across Industrial, Commercial, and
        Residential projects.
      </PageIntro>
      <section className="bg-white pb-20">
        <Container className="grid gap-8 md:grid-cols-2">
          {newsArticles.map((article) => (
            <article key={article.slug} className="overflow-hidden bg-sand">
              <span className="block bg-orange px-4 py-2 text-sm text-white">
                {article.date}
              </span>
              <img src={article.image} alt={article.title} className="h-64 w-full object-cover" />
              <h2 className="p-5 text-xl font-medium text-navy">
                <Link href={`/news/${article.slug}`} className="hover:text-orange">
                  {article.title}
                </Link>
              </h2>
            </article>
          ))}
        </Container>
      </section>
    </main>
  );
}
