"use client";

import { useLang } from "@/context/LanguageContext";
import { products as enProducts } from "@/data/siteContent";
import { products as arProducts } from "@/data/ar";
import ProductsSection from "@/components/sections/ProductsSection";

export default function LocalizedProductsSection() {
  const { lang } = useLang();
  return <ProductsSection products={lang === "ar" ? arProducts : enProducts} />;
}
