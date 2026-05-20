import { products } from "@/data/siteContent";
import InnerPageHero from "@/components/shared/InnerPageHero";
import ProductsSection from "@/components/sections/ProductsSection";

export const metadata = {
  title: "Our Products",
  description:
    "Explore Astro Mining's full range of industrial minerals — silica sand, feldspar, kaolin, gypsum, dolomite, calcium carbonate, iron oxides, and white feldspar."
};

export default function ProductsPage() {
  return (
    <>
      <InnerPageHero
        crumb="What We Supply"
        title="Our Products"
        subtitle="Eight industrial-grade mineral categories, each precision-processed and export-ready from Egypt."
      />
      <ProductsSection products={products} />
    </>
  );
}
