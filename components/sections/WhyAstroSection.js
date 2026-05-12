import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import styles from "@/components/sections/WhyAstroSection.module.css";

export default function WhyAstroSection({ stats }) {
  return (
    <section className={styles.section} id="why-astro">
      <div className={clsx("container", styles.grid)}>
        <Reveal className={styles.intro}>
          <span className="eyebrow">Why Astro</span>
          <h2 className="section-title">Commitment to quality and reliability</h2>
          <p className={styles.copy}>
            We are keen to keep up with everything new, take care of the quality of materials, and deliver the required quantities within the specified deadlines.
          </p>
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
