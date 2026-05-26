"use client";

import { useLang } from "@/context/LanguageContext";
import { globalReach as enReach, mapPins as enPins } from "@/data/siteContent";
import { globalReach as arReach, mapPins as arPins } from "@/data/ar";
import GlobalReachSection from "@/components/sections/GlobalReachSection";

export default function LocalizedGlobalReach() {
  const { lang } = useLang();
  return (
    <GlobalReachSection
      key={lang}
      countries={lang === "ar" ? arReach : enReach}
      pins={lang === "ar" ? arPins : enPins}
    />
  );
}
