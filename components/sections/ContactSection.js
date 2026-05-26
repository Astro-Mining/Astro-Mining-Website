"use client";

import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import { useLang } from "@/context/LanguageContext";
import { ui as arUi } from "@/data/ar";
import styles from "@/components/sections/ContactSection.module.css";

export default function ContactSection({ contact }) {
  const { lang } = useLang();
  const t = lang === "ar" ? arUi.contactSection : {
    eyebrow: "Contact Us",
    title: "Let’s discuss your material requirements",
    copy: "We are here to provide more information, answer questions, and support sourcing for your next project.",
    whatsapp: "WhatsApp:",
    firstName: "First Name",
    firstNamePlaceholder: "First Name",
    lastName: "Last Name",
    lastNamePlaceholder: "Last Name",
    email: "Email",
    emailPlaceholder: "Email Address",
    phone: "Phone Number",
    phonePlaceholder: "Phone Number",
    projectDetails: "Project Details",
    projectPlaceholder: "Tell us about the product, quantity, and target industry.",
    submit: "Send Inquiry"
  };

  return (
    <section className={clsx("section", styles.section)} id="contact">
      <div className={clsx("container", styles.grid)}>
        <Reveal className={styles.infoCard} direction="left" distance={38}>
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className={styles.copy}>{t.copy}</p>
          <div className={styles.infoList}>
            <a className={styles.infoLink} href={contact.mapsUrl} rel="noreferrer" target="_blank">
              <Icon name="mapPin" size={18} /> {contact.address}
            </a>
            <p><Icon name="phone" size={18} /> {contact.telephones.join(" / ")}</p>
            <a className={styles.infoLink} href={contact.whatsappUrl} rel="noreferrer" target="_blank">
              <Icon name="phone" size={18} /> {t.whatsapp} {contact.whatsapp}
            </a>
            <p><Icon name="mail" size={18} /> {contact.emails.join(" / ")}</p>
          </div>
        </Reveal>
        <Reveal className={styles.formCard} direction="up" distance={34}>
          <form className={styles.form}>
            <div className={styles.twoCol}>
              <label>
                <span>{t.firstName}</span>
                <input name="firstName" placeholder={t.firstNamePlaceholder} type="text" />
              </label>
              <label>
                <span>{t.lastName}</span>
                <input name="lastName" placeholder={t.lastNamePlaceholder} type="text" />
              </label>
            </div>
            <div className={styles.twoCol}>
              <label>
                <span>{t.email}</span>
                <input name="email" placeholder={t.emailPlaceholder} type="email" />
              </label>
              <label>
                <span>{t.phone}</span>
                <input name="phone" placeholder={t.phonePlaceholder} type="tel" />
              </label>
            </div>
            <label>
              <span>{t.projectDetails}</span>
              <textarea
                name="message"
                placeholder={t.projectPlaceholder}
                rows="5"
              />
            </label>
            <button type="submit">{t.submit}</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
