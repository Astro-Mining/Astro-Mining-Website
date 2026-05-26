"use client";

import { useState } from "react";
import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import { useLang } from "@/context/LanguageContext";
import { ui as arUi } from "@/data/ar";
import styles from "@/components/sections/ContactSection.module.css";

const enStrings = {
  eyebrow: "Contact Us",
  title: "Let's discuss your material requirements",
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
  submit: "Send Inquiry",
  sending: "Sending…",
  successTitle: "Message sent!",
  successMsg: "We'll get back to you as soon as possible.",
  errorMsg: "Something went wrong. Please try again."
};

const arStrings = {
  ...arUi.contactSection,
  sending: "جاري الإرسال…",
  successTitle: "تم إرسال رسالتك!",
  successMsg: "سنتواصل معك في أقرب وقت ممكن.",
  errorMsg: "حدث خطأ ما. يرجى المحاولة مرة أخرى."
};

export default function ContactSection({ contact }) {
  const { lang } = useLang();
  const t = lang === "ar" ? arStrings : enStrings;

  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorText, setErrorText] = useState("");

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorText("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          message: form.message
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorText(data.error || t.errorMsg);
        setStatus("error");
      } else {
        setStatus("success");
        setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      }
    } catch {
      setErrorText(t.errorMsg);
      setStatus("error");
    }
  }

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
          {status === "success" ? (
            <div className={styles.successBox}>
              <div className={styles.successIcon}><Icon name="check" size={28} /></div>
              <h3>{t.successTitle}</h3>
              <p>{t.successMsg}</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.twoCol}>
                <label>
                  <span>{t.firstName}</span>
                  <input
                    name="firstName"
                    placeholder={t.firstNamePlaceholder}
                    type="text"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  <span>{t.lastName}</span>
                  <input
                    name="lastName"
                    placeholder={t.lastNamePlaceholder}
                    type="text"
                    value={form.lastName}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className={styles.twoCol}>
                <label>
                  <span>{t.email}</span>
                  <input
                    name="email"
                    placeholder={t.emailPlaceholder}
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  <span>{t.phone}</span>
                  <input
                    name="phone"
                    placeholder={t.phonePlaceholder}
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <label>
                <span>{t.projectDetails}</span>
                <textarea
                  name="message"
                  placeholder={t.projectPlaceholder}
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </label>
              {status === "error" && (
                <p className={styles.errorMsg}>{errorText}</p>
              )}
              <button type="submit" disabled={status === "sending"} className={status === "sending" ? styles.btnSending : ""}>
                {status === "sending" ? t.sending : t.submit}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
