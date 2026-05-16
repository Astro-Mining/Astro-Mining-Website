import Image from "next/image";
import clsx from "clsx";
import Reveal from "@/components/shared/Reveal";
import styles from "@/components/sections/AboutSection.module.css";

export default function AboutSection({ content }) {
  return (
    <section className={styles.section} id="about">
      <div className={clsx("container", styles.grid)}>
        <Reveal className={styles.copyColumn}>
          <span className="eyebrow">{content.eyebrow}</span>
          <h2 className="section-title">{content.title}</h2>
          <p className="section-copy">{content.copy}</p>
          <p className={styles.overview}>{content.overview}</p>
          <p className={styles.story}>{content.story}</p>
          <div className={styles.mineralList}>
            {content.minerals.map((mineral) => (
              <span key={mineral} className={styles.mineralChip}>
                {mineral}
              </span>
            ))}
          </div>
          <ul className={styles.highlightList}>
            {content.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <div className={styles.visualColumn}>
          <Reveal className={styles.primaryVisual}>
            <Image
              alt={content.visuals[0].alt}
              className={styles.image}
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              src={content.visuals[0].src}
            />
          </Reveal>
          <div className={styles.secondaryRow}>
            <Reveal className={styles.factPanel}>
              {content.factCards.map((item) => (
                <div key={item.label} className={styles.factCard}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </Reveal>
            <Reveal className={styles.secondaryVisual}>
              <Image
                alt={content.visuals[1].alt}
                className={styles.image}
                fill
                sizes="(max-width: 900px) 100vw, 20vw"
                src={content.visuals[1].src}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
