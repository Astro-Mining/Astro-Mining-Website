import InnerPageHero from "@/components/shared/InnerPageHero";
import LocalizedGlobalReach from "@/components/sections/LocalizedGlobalReach";

export const metadata = {
  title: "Export Markets",
  description:
    "Astro Mining exports industrial minerals to 9 countries across the Gulf, Africa, and Asia — delivering Egyptian mineral excellence to global industries."
};

export default function ExportsPage() {
  return (
    <>
      <InnerPageHero
        crumb="Global Supply"
        title="Export Markets"
        subtitle="Delivering Egyptian mineral excellence to industries across the Gulf, Africa, and Asia."
        ar={{ crumb: "الإمداد العالمي", title: "أسواق التصدير", subtitle: "نوصل التميز المعدني المصري للصناعات في الخليج وأفريقيا وآسيا." }}
      />
      <LocalizedGlobalReach />
    </>
  );
}
