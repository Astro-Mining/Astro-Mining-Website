"use client";

import { useLang } from "@/context/LanguageContext";
import styles from "@/components/shared/InnerPageHero.module.css";

export default function InnerPageHero({ title, subtitle, crumb, ar }) {
  const { lang } = useLang();
  const display = (lang === "ar" && ar) ? ar : { title, subtitle, crumb };

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {display.crumb && <p className={styles.crumb}>{display.crumb}</p>}
        <h1 className={styles.title}>{display.title}</h1>
        {display.subtitle && <p className={styles.subtitle}>{display.subtitle}</p>}
      </div>
    </section>
  );
}
