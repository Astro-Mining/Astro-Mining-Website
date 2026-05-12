import Reveal from "@/components/shared/Reveal";
import styles from "@/components/sections/ServicesSection.module.css";

export default function ServicesSection({ services }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal className={styles.heading}>
          <span className="eyebrow">Services</span>
          <h2 className="section-title">What Astro Mining & Industrial specializes in</h2>
          <p className="section-copy">
            The company profile highlights Astro as more than a supplier. It operates across exploration, treatment, upgrading, and raw material supply with an emphasis on quality and production efficiency.
          </p>
        </Reveal>
        <div className={styles.grid}>
          {services.map((service) => (
            <Reveal className={styles.card} key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
