import Reveal from "@/components/shared/Reveal";
import styles from "@/components/sections/IndustriesSection.module.css";

export default function IndustriesSection({ industries }) {
  return (
    <section className={styles.section} id="industries">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Industries We Serve</span>
          <h2 className="section-title">Products that move across many sectors</h2>
        </Reveal>
        <div className={styles.grid}>
          {industries.map((industry) => (
            <Reveal key={industry} className={styles.card}>
              <span>{industry}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
