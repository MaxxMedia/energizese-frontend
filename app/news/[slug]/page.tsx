import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InnerHero from "@/components/InnerHero";
import { Container } from "@/components/ui";
import { getArticle, newsArticles } from "@/lib/news";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  return { title: article ? `${article.title} | Energizese` : "News | Energizese" };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <main>
      <InnerHero src={article.image} alt={article.title} />
      <section className="bg-white py-16 md:py-24">
        <Container className="max-w-4xl">
          <h1 className="mb-4 text-3xl font-semibold text-navy md:text-5xl">
            {article.title}
          </h1>
          <p className="mb-8 text-muted">{article.date}</p>
          <div
            className="space-y-4 text-base leading-8 text-muted"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </Container>
      </section>
    </main>
  );
}
