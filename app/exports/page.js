import { globalReach, mapPins } from "@/data/siteContent";
import InnerPageHero from "@/components/shared/InnerPageHero";
import GlobalReachSection from "@/components/sections/GlobalReachSection";

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
      />
      <GlobalReachSection countries={globalReach} pins={mapPins} />
    </>
  );
}
