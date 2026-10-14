import AstroHomepage from "@/components/AstroHomepage";
import { contactDetails } from "@/data/siteContent";
import { SITE_NAME, SITE_URL } from "@/lib/site";

// Organization + WebSite structured data: gives Google the company logo and site name
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/assets/brand/astro-logo.png`,
      email: contactDetails.emails[0],
      telephone: contactDetails.telephones[0],
      address: {
        "@type": "PostalAddress",
        streetAddress: "71 Abdel Hamid Badawi, Sheraton",
        addressLocality: "Heliopolis, Cairo",
        addressCountry: "EG"
      },
      sameAs: [
        contactDetails.social.linkedin,
        contactDetails.social.facebook,
        contactDetails.social.youtube,
        contactDetails.social.tiktok
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` }
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} type="application/ld+json" />
      <AstroHomepage />
    </>
  );
}
