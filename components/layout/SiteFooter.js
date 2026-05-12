import clsx from "clsx";
import Logo from "@/components/shared/Logo";
import Icon from "@/components/shared/Icon";
import styles from "@/components/layout/SiteFooter.module.css";

export default function SiteFooter({ navigation, contact }) {
  return (
    <footer className={styles.footer}>
      <div className={clsx("container", styles.grid)}>
        <div className={styles.brandBlock}>
          <Logo inverted />
          <p>
            Extracting treasures from the earth and providing high-quality industrial minerals for local and global industries.
          </p>
          <div className={styles.socials}>
            <a href={contact.social.youtube} rel="noreferrer" target="_blank">YouTube</a>
            <a href={contact.social.linkedin} rel="noreferrer" target="_blank">LinkedIn</a>
            <a href={contact.social.facebook} rel="noreferrer" target="_blank">Facebook</a>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <div className={styles.linkList}>
            {navigation.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3>Contact Info</h3>
          <div className={styles.infoList}>
            <p><Icon name="mapPin" size={18} /> {contact.address}</p>
            <p><Icon name="phone" size={18} /> {contact.phones.join(" / ")}</p>
            <p><Icon name="mail" size={18} /> {contact.email}</p>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className="container">Copyright 2026 Astro Mining & Industrial. All rights reserved.</div>
      </div>
    </footer>
  );
}
