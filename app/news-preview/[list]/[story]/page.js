import InnerPageHero from "@/components/shared/InnerPageHero";
import ListHub from "@/components/news-preview/ListHub";
import ListMagazine from "@/components/news-preview/ListMagazine";
import ListTimeline from "@/components/news-preview/ListTimeline";
import PreviewSwitcher, { VARIANTS } from "@/components/news-preview/PreviewSwitcher";
import { featuredNews, newsItems, newsUi } from "@/data/news";

export const dynamicParams = false;

export const metadata = {
  title: "News design preview",
  robots: { index: false, follow: false }
};

export function generateStaticParams() {
  return VARIANTS.flatMap((list) => VARIANTS.map((story) => ({ list, story })));
}

export default async function NewsPreviewList({ params }) {
  const { list, story } = await params;
  const basePath = `/news-preview/${list}/${story}`;
  const { en, ar } = newsUi;
  const hero = (
    <InnerPageHero
      crumb={en.crumb}
      title={en.title}
      subtitle={en.subtitle}
      ar={{ crumb: ar.crumb, title: ar.title, subtitle: ar.subtitle }}
    />
  );

  return (
    <>
      {list === "a" && (
        <ListMagazine basePath={basePath} featured={featuredNews} items={newsItems.filter((item) => item !== featuredNews)} />
      )}
      {list === "b" && (
        <>
          {hero}
          <ListHub basePath={basePath} items={newsItems} />
        </>
      )}
      {list === "c" && (
        <>
          {hero}
          <ListTimeline basePath={basePath} items={newsItems} />
        </>
      )}
      <PreviewSwitcher list={list} story={story} />
    </>
  );
}
