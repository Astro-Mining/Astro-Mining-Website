import InnerPageHero from "@/components/shared/InnerPageHero";
import LocalizedAboutContent from "@/components/sections/LocalizedAboutContent";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Astro Mining and Industrial — a forward-thinking Egyptian mining company dedicated to the exploration, treatment, and upgrading of high-quality industrial minerals."
};

export default function AboutPage() {
  return (
    <>
      <InnerPageHero
        crumb="Who We Are"
        title="About Astro"
        subtitle="A forward-thinking Egyptian mining company delivering premium industrial minerals to local and global markets."
        ar={{ crumb: "من نحن", title: "عن أسترو", subtitle: "شركة تعدين مصرية تطلعية توفر معادن صناعية متميزة للأسواق المحلية والعالمية." }}
      />
      <LocalizedAboutContent />
    </>
  );
}
