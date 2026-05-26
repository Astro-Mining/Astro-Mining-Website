import InnerPageHero from "@/components/shared/InnerPageHero";
import ServicesGrid from "@/components/sections/ServicesGrid";

export const metadata = {
  title: "Our Services",
  description:
    "Astro Mining provides comprehensive mineral services — geological exploration, beneficiation treatment, value upgrading, and dependable raw material supply."
};

export default function ServicesPage() {
  return (
    <>
      <InnerPageHero
        crumb="What We Do"
        title="Our Services"
        subtitle="From geological exploration to refined, export-ready mineral supply — Astro handles the complete value chain."
        ar={{ crumb: "ما نقدمه", title: "خدماتنا", subtitle: "من الاستكشاف الجيولوجي إلى التوريد المعدني الجاهز للتصدير — تتولى أسترو سلسلة القيمة الكاملة." }}
      />
      <ServicesGrid />
    </>
  );
}
