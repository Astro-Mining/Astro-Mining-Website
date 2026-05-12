import styles from "@/components/sections/PartnersSection.module.css";

export default function PartnersSection({ partners }) {
  const items = [...partners, ...partners];

  return (
    <section className={styles.section} id="partners">
      <div className="container">
        <span className="eyebrow">Our Partners</span>
        <h2 className="section-title">Trusted by established industrial buyers</h2>
      </div>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {items.map((partner, index) => (
            <div key={`${partner}-${index}`} className={styles.logoChip}>
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
