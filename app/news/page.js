import InnerPageHero from "@/components/shared/InnerPageHero";
import NewsList from "@/components/sections/NewsList";
import { featuredNews, newsItems, newsUi } from "@/data/news";

export const metadata = {
  title: "News",
  description:
    "Latest news from Astro Mining & Industrial — Egypt Mining Forum 2026 highlights, TV coverage, and press interviews with our chairman."
};

export default function NewsPage() {
  const { en, ar } = newsUi;

  return (
    <>
      <InnerPageHero
        crumb={en.crumb}
        title={en.title}
        subtitle={en.subtitle}
        ar={{ crumb: ar.crumb, title: ar.title, subtitle: ar.subtitle }}
      />
      <NewsList featured={featuredNews} items={newsItems.filter((item) => item !== featuredNews)} />
    </>
  );
}
