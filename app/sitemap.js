import { navigation } from "@/data/siteContent";
import { newsItems } from "@/data/news";
import { SITE_URL } from "@/lib/site";

export default function sitemap() {
  const now = new Date();
  return [
    ...navigation.map(({ href }) => ({
      url: href === "/" ? SITE_URL : `${SITE_URL}${href}`,
      lastModified: now
    })),
    ...newsItems.map((item) => ({
      url: `${SITE_URL}/news/${item.slug}`,
      lastModified: new Date(item.date)
    }))
  ];
}
