"use client";

import Image from "next/image";
import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import { useLang } from "@/context/LanguageContext";
import * as en from "@/data/siteContent";
import * as ar from "@/data/ar";
import styles from "@/components/layout/SiteFooter.module.css";

export default function SiteFooter({ navigation: _nav, contact }) {
  const { lang } = useLang();
  const nav = lang === "ar" ? ar.navigation : en.navigation;
  const t = lang === "ar" ? ar.ui.footer : {
    tagline: "Extracting treasures from the earth and providing high-quality minerals for local and international industrial demand.",
    quickLinks: "Quick Links",
    contactInfo: "Contact Info",
    download: "Download",
    companyProfile: "Company Profile",
    tel: "Tel:",
    whatsapp: "WhatsApp:",
    rights: "All Rights Reserved"
  };

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
          <p>{t.tagline}</p>
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
          <h3>{t.quickLinks}</h3>
          <div className={styles.linkList}>
            {nav.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.column}>
          <h3>{t.contactInfo}</h3>
          <div className={styles.infoList}>
            <a className={styles.infoLink} href={contact.mapsUrl} rel="noreferrer" target="_blank">
              <Icon name="mapPin" size={18} /> {contact.address}
            </a>
            <p><Icon name="phone" size={18} /> {t.tel} {contact.telephones.join(" / ")}</p>
            <a className={styles.infoLink} href={contact.whatsappUrl} rel="noreferrer" target="_blank">
              <Icon name="phone" size={18} /> {t.whatsapp} {contact.whatsapp}
            </a>
            <p><Icon name="mail" size={18} /> {contact.emails[0]}</p>
            <p><Icon name="mail" size={18} /> {contact.emails[1]}</p>
          </div>
        </div>
        <div className={styles.column}>
          <h3>{t.download}</h3>
          <a
            className={styles.downloadCard}
            href="/assets/docs/astro-company-profile.pdf"
            rel="noreferrer"
            target="_blank"
          >
            <span>
              {t.companyProfile}
              <br />
              (PDF)
            </span>
            <Icon className={styles.downloadIcon} name="download" size={20} />
          </a>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className="container">&copy; 2026 Astro Mining and Industrial. {t.rights}.</div>
      </div>
    </footer>
  );
}
