"use client";

import clsx from "clsx";
import AnimatedStatValue from "@/components/shared/AnimatedStatValue";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import { useLang } from "@/context/LanguageContext";
import { ui as arUi } from "@/data/ar";
import styles from "@/components/sections/WhyAstroSection.module.css";

export default function WhyAstroSection({ stats, highlights }) {
  const { lang } = useLang();
  const t = lang === "ar" ? arUi.whyAstro : {
    eyebrow: "Why Astro",
    title: "Commitment to quality and reliability",
    copy: "Astro emphasizes laboratory-backed quality control, production precision, and dependable quantities delivered within agreed deadlines.",
    cta: "Learn More About Us"
  };

  return (
    <section className={styles.section} id="why-astro">
      <div className={clsx(styles.shell, styles.grid)}>
        <Reveal className={styles.intro} direction="left" distance={42}>
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className={styles.copy}>{t.copy}</p>
          {highlights && highlights.length > 0 && (
            <ul className={styles.highlights}>
              {highlights.map((item) => (
                <li key={item} className={styles.highlightItem}>
                  <Icon name="check" size={15} className={styles.highlightIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          <a className={styles.cta} href="/contact">{t.cta}</a>
        </Reveal>
        <div className={styles.stats}>
          {stats.map((stat, index) => (
            <Reveal className={styles.statCard} direction="up" distance={30} key={stat.label} delay={index * 0.06}>
              <div className={styles.statIcon}>
                <Icon name={stat.icon} size={28} />
              </div>
              <AnimatedStatValue value={stat.value} />
              <span>{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
