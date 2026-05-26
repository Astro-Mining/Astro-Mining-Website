"use client";

import { useLang } from "@/context/LanguageContext";
import * as en from "@/data/siteContent";
import * as ar from "@/data/ar";
import CompanyStorySection from "@/components/sections/CompanyStorySection";
import WhyAstroSection from "@/components/sections/WhyAstroSection";

export default function LocalizedAboutContent() {
  const { lang } = useLang();
  const d = lang === "ar" ? ar : en;
  return (
    <>
      <CompanyStorySection content={d.companyStoryContent} />
      <WhyAstroSection highlights={d.qualityHighlights} stats={d.stats} />
    </>
  );
}
