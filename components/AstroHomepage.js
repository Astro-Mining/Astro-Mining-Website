import { aboutContent, contactDetails, features, globalReach, heroContent, industries, navigation, partners, products, stats, values } from "@/data/siteContent";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
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
        <AboutSection content={aboutContent} values={values} />
        <ProductsSection products={products} />
        <IndustriesSection industries={industries} />
        <WhyAstroSection stats={stats} />
        <PartnersSection partners={partners} />
        <GlobalReachSection countries={globalReach} />
        <ContactSection contact={contactDetails} />
      </main>
      <SiteFooter navigation={navigation} contact={contactDetails} />
    </>
  );
}
