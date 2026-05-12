import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import styles from "@/components/sections/AboutSection.module.css";

export default function AboutSection({ content, values }) {
  return (
    <section className={styles.section} id="about">
      <div className={clsx("container", styles.grid)}>
        <Reveal>
          <span className="eyebrow">{content.eyebrow}</span>
          <h2 className="section-title">{content.title}</h2>
          <p className="section-copy">{content.copy}</p>
          <p className={styles.overview}>{content.overview}</p>
          <div className={styles.statementGrid}>
            <div className={styles.statementCard}>
              <h3>Mission</h3>
              <p>{content.mission}</p>
            </div>
            <div className={styles.statementCard}>
              <h3>Vision</h3>
              <p>{content.vision}</p>
            </div>
          </div>
          <ul className={styles.advantages}>
            {content.advantages.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <div className={styles.valueGrid}>
          {values.map((value) => (
            <Reveal key={value.title} className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <Icon name={value.icon} size={28} />
              </div>
              <h3>{value.title}</h3>
              <p>{value.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
