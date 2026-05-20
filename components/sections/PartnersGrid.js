import Image from "next/image";
import clsx from "clsx";
import ButtonLink from "@/components/shared/ButtonLink";
import Reveal from "@/components/shared/Reveal";
import styles from "@/components/sections/PartnersGrid.module.css";

export default function PartnersGrid({ partners, textPartners }) {
  const allPartners = [
    ...partners.map((p) => ({ ...p, isLogo: true })),
    ...(textPartners || []).map((p) => ({ ...p, isLogo: false }))
  ];

  return (
    <section className={clsx("section", styles.section)}>
      <div className="container">
        <Reveal direction="up" distance={30}>
          <span className="eyebrow">Key Clients</span>
          <h2 className="section-title">Trusted by industry leaders</h2>
          <p className={clsx("section-copy", styles.intro)}>
            Astro supplies premium industrial minerals to leading glass, ceramic, and
            manufacturing companies across the globe.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {allPartners.map((partner, i) => (
            <Reveal
              key={partner.name}
              direction="up"
              distance={28}
              delay={i * 0.05}
            >
              {partner.isLogo ? (
                <div className={clsx("surface-card", styles.logoCard)}>
                  <div className={styles.logoFrame}>
                    <Image
                      alt={partner.alt || partner.name}
                      className={styles.logo}
                      fill
                      sizes="(max-width: 640px) 42vw, (max-width: 980px) 28vw, 18vw"
                      src={partner.logo}
                    />
                  </div>
                </div>
              ) : (
                <div className={styles.textCard}>
                  <span className={styles.initial}>{partner.name[0]}</span>
                  <span className={styles.partnerName}>{partner.name}</span>
                </div>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" distance={24} delay={0.2}>
          <div className={styles.cta}>
            <ButtonLink href="/contact">Become a Partner</ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
