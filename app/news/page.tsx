import type { Metadata } from "next";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";
import { Container, PageIntro } from "@/components/ui";
import { newsArticles } from "@/lib/news";

export const metadata: Metadata = {
  title: "News & Events | Maxx Business Media",
};

export default function NewsPage() {
  return (
    <main>
      <InnerHero
        src="/assets/images/img-hero-project.jpg"
        alt="Maxx Business Media News & Events"
      />

      <PageIntro eyebrow="News & Events">
        Stay updated with the latest news, exhibitions, conferences, industry
        developments, and business activities from Maxx Business Media.
        Explore our event updates, industry insights, announcements, and
        highlights from across the sectors we serve.
      </PageIntro>

      <section className="bg-white pb-20">
        <Container className="grid gap-8 md:grid-cols-2">
          {newsArticles.map((article) => (
            <article
              key={article.slug}
              className="overflow-hidden bg-sand"
            >
              <span className="block bg-orange px-4 py-2 text-sm text-white">
                {article.date}
              </span>

              <img
                src={article.image}
                alt={article.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-medium text-navy">
                  <Link
                    href={`/news/${article.slug}`}
                    className="hover:text-orange"
                  >
                    {article.title}
                  </Link>
                </h2>

                {article.excerpt && (
                  <p className="mt-3 leading-7 text-muted">
                    {article.excerpt}
                  </p>
                )}

                <Link
                  href={`/news/${article.slug}`}
                  className="mt-4 inline-block font-medium text-orange hover:text-navy"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </Container>
      </section>
    </main>
  );
}