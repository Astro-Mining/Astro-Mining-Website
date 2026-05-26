"use client";

import { useLang } from "@/context/LanguageContext";
import * as en from "@/data/siteContent";
import * as ar from "@/data/ar";
import CompanyStorySection from "@/components/sections/CompanyStorySection";
import FeatureStrip from "@/components/sections/FeatureStrip";
import GlobalReachSection from "@/components/sections/GlobalReachSection";
import HeroSection from "@/components/sections/HeroSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ProductsSection from "@/components/sections/ProductsSection";
import WhyAstroSection from "@/components/sections/WhyAstroSection";

export default function AstroHomepage() {
  const { lang } = useLang();
  const d = lang === "ar" ? ar : en;

  return (
    <>
      <HeroSection content={d.heroContent} />
      <FeatureStrip items={d.features} />
      <CompanyStorySection content={d.companyStoryContent} />
      <ProductsSection products={d.products} />
      <IndustriesSection industries={d.previewIndustries} />
      <WhyAstroSection highlights={d.qualityHighlights} stats={d.stats} />
      <PartnersSection partners={en.partners} />
      <GlobalReachSection countries={d.globalReach} pins={d.mapPins} />
    </>
  );
}
