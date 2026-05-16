import { companyStoryContent, contactDetails, features, globalReach, heroContent, mapPins, navigation, partners, previewIndustries, products, qualityHighlights, stats } from "@/data/siteContent";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import CompanyStorySection from "@/components/sections/CompanyStorySection";
import FeatureStrip from "@/components/sections/FeatureStrip";
import GlobalReachSection from "@/components/sections/GlobalReachSection";
import HeroSection from "@/components/sections/HeroSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ProductsSection from "@/components/sections/ProductsSection";
import WhyAstroSection from "@/components/sections/WhyAstroSection";

export default function AstroHomepage() {
  return (
    <>
      <SiteHeader navigation={navigation} />
      <main>
        <HeroSection content={heroContent} />
        <FeatureStrip items={features} />
        <CompanyStorySection content={companyStoryContent} />
        <ProductsSection products={products} />
        <IndustriesSection industries={previewIndustries} />
        <WhyAstroSection highlights={qualityHighlights} stats={stats} />
        <PartnersSection partners={partners} />
        <GlobalReachSection countries={globalReach} pins={mapPins} />
      </main>
      <SiteFooter navigation={navigation} contact={contactDetails} />
    </>
  );
}
