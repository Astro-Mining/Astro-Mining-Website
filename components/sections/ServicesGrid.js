import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import styles from "@/components/sections/ServicesGrid.module.css";

export default function ServicesGrid({ services }) {
  return (
    <section className={clsx("section", styles.section)}>
      <div className="container">
        <Reveal direction="up" distance={32}>
          <span className="eyebrow">What We Do</span>
          <h2 className="section-title">From quarry to industrial supply</h2>
          <p className={clsx("section-copy", styles.intro)}>
            Astro covers the complete mineral value chain with proven field expertise,
            precise treatment processes, and dependable raw material delivery.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <Reveal key={service.title} direction="up" distance={30} delay={i * 0.09}>
              <div className={clsx("surface-card", styles.card)}>
                <div className={styles.iconWrap}>
                  <Icon name={service.icon} size={30} />
                </div>
                <div className={styles.num}>{String(i + 1).padStart(2, "0")}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardCopy}>{service.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
