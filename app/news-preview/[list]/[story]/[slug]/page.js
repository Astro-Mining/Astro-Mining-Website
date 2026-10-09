import { notFound } from "next/navigation";
import StoryCinematic from "@/components/news-preview/StoryCinematic";
import StoryHighlights from "@/components/news-preview/StoryHighlights";
import StorySplit from "@/components/news-preview/StorySplit";
import PreviewSwitcher, { VARIANTS } from "@/components/news-preview/PreviewSwitcher";
import { getNewsItem, newsItems } from "@/data/news";

export const dynamicParams = false;

export function generateStaticParams() {
  return VARIANTS.flatMap((list) =>
    VARIANTS.flatMap((story) => newsItems.map(({ slug }) => ({ list, story, slug })))
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getNewsItem(slug);
  return {
    title: item ? `${item.en.title} (preview)` : "News design preview",
    robots: { index: false, follow: false }
  };
}

export default async function NewsPreviewStory({ params }) {
  const { list, story, slug } = await params;
  const item = getNewsItem(slug);
  if (!item) notFound();

  const basePath = `/news-preview/${list}/${story}`;
  const index = newsItems.indexOf(item);
  const related = newsItems.filter((other) => other !== item).slice(0, 3);
  const neighbours = { prev: newsItems[index - 1], next: newsItems[index + 1] };
  const shared = { item, basePath, listPath: basePath };

  return (
    <>
      {story === "a" && <StoryCinematic {...shared} related={related} />}
      {story === "b" && <StorySplit {...shared} related={related} />}
      {story === "c" && <StoryHighlights {...shared} neighbours={neighbours} />}
      <PreviewSwitcher list={list} slug={slug} story={story} />
    </>
  );
}
