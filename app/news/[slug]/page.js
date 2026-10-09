import { notFound } from "next/navigation";
import NewsArticle from "@/components/sections/NewsArticle";
import { getNewsItem, newsItems } from "@/data/news";

const SITE_URL = "https://astromining-industrial.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return newsItems.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item) return {};

  const { title, excerpt } = item.en;
  return {
    title,
    description: excerpt,
    openGraph: {
      type: "article",
      title,
      description: excerpt,
      images: [{ url: item.cover.src, width: item.cover.width, height: item.cover.height, alt: item.cover.alt }]
    }
  };
}

export default async function NewsArticlePage({ params }) {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item) notFound();

  const related = newsItems.filter((other) => other !== item).slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.en.title,
    description: item.en.excerpt,
    image: [`${SITE_URL}${item.cover.src}`],
    datePublished: item.date,
    inLanguage: ["en", "ar"],
    publisher: { "@type": "Organization", name: "Astro Mining & Industrial", url: SITE_URL }
  };

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} type="application/ld+json" />
      <NewsArticle item={item} related={related} />
    </>
  );
}
