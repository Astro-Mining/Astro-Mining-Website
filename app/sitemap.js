import { newsItems } from "@/data/news";

const SITE_URL = "https://astromining-industrial.com";

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date()
    },
    {
      url: `${SITE_URL}/news`,
      lastModified: new Date()
    },
    ...newsItems.map((item) => ({
      url: `${SITE_URL}/news/${item.slug}`,
      lastModified: new Date(item.date)
    }))
  ];
}
