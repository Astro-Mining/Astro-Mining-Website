import clsx from "clsx";
import ButtonLink from "@/components/shared/ButtonLink";
import Reveal from "@/components/shared/Reveal";
import styles from "@/components/sections/HeroSection.module.css";

export default function HeroSection({ content }) {
  return (
    <section className={styles.hero} id="home">
      <video
        autoPlay
        className={styles.video}
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/assets/video/hero-loop.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay} />
      <div className={clsx("container", styles.grid)}>
        <Reveal className={styles.panel}>
          <span className="eyebrow">{content.eyebrow}</span>
          <h1 className={styles.title}>
            {content.titleTop} <span>{content.titleAccent}</span>
            <br />
            {content.titleBottom}
          </h1>
          <p className={styles.copy}>{content.copy}</p>
          <div className={styles.actions}>
            <ButtonLink href={content.primaryCta.href}>{content.primaryCta.label}</ButtonLink>
            <ButtonLink href={content.secondaryCta.href} variant="outline">
              {content.secondaryCta.label}
            </ButtonLink>
          </div>
        </Reveal>
        <div className={styles.details}>
          <div className={styles.metricCard}>
            <strong>Export Ready</strong>
            <span>Industrial minerals prepared for local and global supply chains.</span>
          </div>
          <div className={styles.metricCard}>
            <strong>Precise Processing</strong>
            <span>Exploration, treatment, upgrading, storage, and quality control in one workflow.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
