import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import styles from "@/components/sections/WhyAstroSection.module.css";

export default function WhyAstroSection({ highlights, stats }) {
  return (
    <section className={styles.section} id="why-astro">
      <div className={clsx(styles.shell, styles.grid)}>
        <Reveal className={styles.intro}>
          <span className="eyebrow">Why Astro</span>
          <h2 className="section-title">Commitment to quality and reliability</h2>
          <p className={styles.copy}>
            Astro emphasizes laboratory-backed quality control, production precision, and dependable quantities delivered within agreed deadlines.
          </p>
          <a className={styles.cta} href="#contact">Learn More About Us</a>
          <ul className={styles.highlightList}>
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </Reveal>
        <div className={styles.stats}>
          {stats.map((stat) => (
            <Reveal key={stat.label} className={styles.statCard}>
              <div className={styles.statIcon}>
                <Icon name={stat.icon} size={28} />
              </div>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
