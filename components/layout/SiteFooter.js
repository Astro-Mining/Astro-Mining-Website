import clsx from "clsx";
import Logo from "@/components/shared/Logo";
import Icon from "@/components/shared/Icon";
import styles from "@/components/layout/SiteFooter.module.css";

export default function SiteFooter({ navigation, contact }) {
  return (
    <footer className={styles.footer} id="contact">
      <div className={clsx("container", styles.grid)}>
        <div className={styles.brandBlock}>
          <div className={styles.logoPlate}>
            <Logo size="large" />
          </div>
          <p>
            Extracting treasures from the earth and providing high-quality minerals for local and international industrial demand.
          </p>
          <div className={styles.socials}>
            <a href={contact.social.linkedin} rel="noreferrer" target="_blank" aria-label="LinkedIn">
              <Icon name="linkedin" size={18} />
            </a>
            <a href={contact.social.facebook} rel="noreferrer" target="_blank" aria-label="Facebook">
              <Icon name="facebook" size={18} />
            </a>
            <a href={contact.social.instagram} rel="noreferrer" target="_blank" aria-label="Instagram">
              <Icon name="instagram" size={18} />
            </a>
          </div>
        </div>
        <div className={styles.column}>
          <h3>Quick Links</h3>
          <div className={styles.linkList}>
            {navigation.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.column}>
          <h3>Contact Info</h3>
          <div className={styles.infoList}>
            <p><Icon name="mapPin" size={18} /> {contact.address}</p>
            <p><Icon name="phone" size={18} /> Tel: {contact.telephones.join(" / ")}</p>
            <p><Icon name="phone" size={18} /> WhatsApp: {contact.whatsapp}</p>
            <p><Icon name="mail" size={18} /> {contact.emails[0]}</p>
            <p><Icon name="mail" size={18} /> {contact.emails[1]}</p>
            <p><Icon name="globe" size={18} /> {contact.website}</p>
          </div>
        </div>
        <div className={styles.column}>
          <h3>Download</h3>
          <a
            className={styles.downloadCard}
            href="/assets/docs/astro-company-profile.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              Company Profile
              <br />
              (PDF)
            </span>
            <Icon name="download" className={styles.downloadIcon} size={20} />
          </a>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className="container">© 2024 Astro Mining and Industrial. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
