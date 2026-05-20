import { contactDetails } from "@/data/siteContent";
import InnerPageHero from "@/components/shared/InnerPageHero";
import ContactSection from "@/components/sections/ContactSection";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Astro Mining and Industrial — discuss your material requirements, request a quote, or visit our Cairo office."
};

export default function ContactPage() {
  return (
    <>
      <InnerPageHero
        crumb="Get In Touch"
        title="Contact Us"
        subtitle="Discuss your material requirements, request a quote, or reach our team directly."
      />
      <ContactSection contact={contactDetails} />
      <div className={styles.mapWrap}>
        <iframe
          allowFullScreen
          className={styles.map}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=Astro+Mining+and+Industrial,+71+Abdel+Hamid+Badawi,+Sheraton,+Heliopolis,+Cairo,+Egypt&output=embed"
          title="Astro Mining and Industrial office location"
        />
      </div>
    </>
  );
}
