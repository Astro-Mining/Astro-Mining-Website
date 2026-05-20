import { companyStoryContent, qualityHighlights, stats } from "@/data/siteContent";
import InnerPageHero from "@/components/shared/InnerPageHero";
import CompanyStorySection from "@/components/sections/CompanyStorySection";
import WhyAstroSection from "@/components/sections/WhyAstroSection";

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
      />
      <CompanyStorySection content={companyStoryContent} />
      <WhyAstroSection highlights={qualityHighlights} stats={stats} />
    </>
  );
}
