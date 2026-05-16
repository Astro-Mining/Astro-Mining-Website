import Image from "next/image";
import styles from "@/components/sections/PartnersSection.module.css";

export default function PartnersSection({ partners }) {
  const items = [...partners, ...partners];

  return (
    <section className={styles.section} id="partners">
      <div className="container">
        <span className="eyebrow">Our Partners</span>
      </div>
      <div className={styles.railWrap}>
        <div className={styles.rail}>
          {items.map((partner, index) => (
            <article className={styles.partnerCard} key={partner.name}>
              <div className={styles.logoFrame}>
                <Image
                  alt={partner.alt}
                  className={styles.logo}
                  fill
                  sizes="(max-width: 640px) 72vw, (max-width: 980px) 36vw, 24vw"
                  src={partner.logo}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
