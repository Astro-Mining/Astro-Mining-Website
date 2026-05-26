import { partners } from "@/data/siteContent";
import InnerPageHero from "@/components/shared/InnerPageHero";
import PartnersGrid from "@/components/sections/PartnersGrid";

export const metadata = {
  title: "Our Partners",
  description:
    "Astro Mining's trusted industrial partners — leading glass, ceramic, and manufacturing companies across the Gulf, Africa, Asia, and Europe."
};

export default function PartnersPage() {
  return (
    <>
      <InnerPageHero
        crumb="Key Clients"
        title="Our Partners"
        subtitle="Trusted by leading glass, ceramic, and industrial manufacturers across the globe."
        ar={{ crumb: "عملاؤنا الرئيسيون", title: "شركاؤنا", subtitle: "موثوق به من قِبل كبار مصنّعي الزجاج والسيراميك والصناعات المختلفة حول العالم." }}
      />
      <PartnersGrid partners={partners} />
    </>
  );
}
