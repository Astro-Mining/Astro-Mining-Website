import clsx from "clsx";
import Reveal from "@/components/shared/Reveal";
import styles from "@/components/sections/GlobalReachSection.module.css";

export default function GlobalReachSection({ countries }) {
  return (
    <section className={styles.section}>
      <div className={clsx("container", styles.grid)}>
        <Reveal>
          <span className="eyebrow">Our International Dealings</span>
          <h2 className="section-title">Exporting to many countries worldwide</h2>
          <p className="section-copy">
            Our team is dedicated to precision in every stage of production, storage, and quality control while serving both the Egyptian market and export partners abroad.
          </p>
        </Reveal>
        <Reveal className={styles.mapCard}>
          <div className={styles.mapFrame}>
            <div className={styles.ringOne} />
            <div className={styles.ringTwo} />
            <div className={styles.centerDot} />
          </div>
          <div className={styles.countryGrid}>
            {countries.map((country) => (
              <span key={country}>{country}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
