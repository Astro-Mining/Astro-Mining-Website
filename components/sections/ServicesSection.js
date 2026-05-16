import Image from "next/image";
import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import styles from "@/components/sections/ServicesSection.module.css";

export default function ServicesSection({ content, services }) {
  return (
    <section className={styles.section}>
      <div className={clsx("container", styles.grid)}>
        <div>
          <Reveal className={styles.heading}>
            <span className="eyebrow">{content.eyebrow}</span>
            <h2 className="section-title">{content.title}</h2>
            <p className="section-copy">{content.copy}</p>
          </Reveal>
          <div className={styles.cards}>
            {services.map((service) => (
              <Reveal className={styles.card} key={service.title}>
                <div className={styles.iconWrap}>
                  <Icon name={service.icon} size={24} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className={styles.visual}>
          <Image
            alt={content.visual.alt}
            className={styles.image}
            fill
            sizes="(max-width: 980px) 100vw, 34vw"
            src={content.visual.src}
          />
          <div className={styles.overlayCard}>
            <span>Astro Workflow</span>
            <strong>Exploration. Treatment. Upgrading. Supply.</strong>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
