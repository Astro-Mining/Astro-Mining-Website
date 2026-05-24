import Image from "next/image";
import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import styles from "@/components/layout/SiteFooter.module.css";

export default function SiteFooter({ navigation, contact }) {
  return (
    <footer className={styles.footer} id="contact">
      <div className={clsx("container", styles.grid)}>
        <div className={styles.brandBlock}>
          <Image
            alt="Astro Mining and Industrial logo"
            className={styles.footerLogo}
            height={118}
            src="/assets/brand/astro-footer-logo.png"
            width={104}
          />
          <p>
            Extracting treasures from the earth and providing high-quality minerals for local and international industrial demand.
          </p>
          <div className={styles.socials}>
            <a aria-label="LinkedIn" href={contact.social.linkedin} rel="noreferrer" target="_blank">
              <Icon name="linkedin" size={18} />
            </a>
            <a aria-label="Facebook" href={contact.social.facebook} rel="noreferrer" target="_blank">
              <Icon name="facebook" size={18} />
            </a>
            <a aria-label="Instagram" href={contact.social.instagram} rel="noreferrer" target="_blank">
              <Icon name="instagram" size={18} />
            </a>
            <a aria-label="YouTube" href={contact.social.youtube} rel="noreferrer" target="_blank">
              <Icon name="youtube" size={18} />
            </a>
            <a aria-label="TikTok" href={contact.social.tiktok} rel="noreferrer" target="_blank">
              <Icon name="tiktok" size={18} />
            </a>
          </div>
        </div>
        <div className={styles.column}>
          <h3>Quick Links</h3>
          <div className={styles.linkList}>
            {navigation.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.column}>
          <h3>Contact Info</h3>
          <div className={styles.infoList}>
            <a className={styles.infoLink} href={contact.mapsUrl} rel="noreferrer" target="_blank">
              <Icon name="mapPin" size={18} /> {contact.address}
            </a>
            <p><Icon name="phone" size={18} /> Tel: {contact.telephones.join(" / ")}</p>
            <a className={styles.infoLink} href={contact.whatsappUrl} rel="noreferrer" target="_blank">
              <Icon name="phone" size={18} /> WhatsApp: {contact.whatsapp}
            </a>
            <p><Icon name="mail" size={18} /> {contact.emails[0]}</p>
            <p><Icon name="mail" size={18} /> {contact.emails[1]}</p>
          </div>
        </div>
        <div className={styles.column}>
          <h3>Download</h3>
          <a
            className={styles.downloadCard}
            href="/assets/docs/astro-company-profile.pdf"
            rel="noreferrer"
            target="_blank"
          >
            <span>
              Company Profile
              <br />
              (PDF)
            </span>
            <Icon className={styles.downloadIcon} name="download" size={20} />
          </a>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className="container">&copy; 2026 Astro Mining and Industrial. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
