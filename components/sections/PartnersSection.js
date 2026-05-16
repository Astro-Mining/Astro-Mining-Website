"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/shared/Icon";
import styles from "@/components/sections/PartnersSection.module.css";

export default function PartnersSection({ partners }) {
  const railRef = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || !railRef.current) {
      return undefined;
    }

    const rail = railRef.current;
    const interval = window.setInterval(() => {
      const step = Math.max(rail.clientWidth * 0.48, 260);
      const nextLeft = rail.scrollLeft + step;
      const maxLeft = rail.scrollWidth - rail.clientWidth;

      rail.scrollTo({
        left: nextLeft >= maxLeft - 4 ? 0 : nextLeft,
        behavior: "smooth"
      });
    }, 3400);

    return () => window.clearInterval(interval);
  }, [isAutoPlaying]);

  function scrollByDirection(direction) {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const step = Math.max(rail.clientWidth * 0.62, 320);
    rail.scrollBy({
      left: direction * step,
      behavior: "smooth"
    });
  }

  return (
    <section className={styles.section} id="partners">
      <div className={styles.headerRow}>
        <div className="container">
          <div className={styles.headerInner}>
            <span className="eyebrow">Our Partners</span>
            <div className={styles.controls}>
              <button
                aria-label="Previous partners"
                className={styles.controlButton}
                onClick={() => {
                  setIsAutoPlaying(false);
                  scrollByDirection(-1);
                }}
                type="button"
              >
                <Icon name="arrowRight" className={styles.arrowBack} size={18} />
              </button>
              <button
                aria-label={isAutoPlaying ? "Pause partner slider" : "Play partner slider"}
                className={styles.controlButton}
                onClick={() => setIsAutoPlaying((current) => !current)}
                type="button"
              >
                <Icon name={isAutoPlaying ? "pause" : "play"} size={18} />
              </button>
              <button
                aria-label="Next partners"
                className={styles.controlButton}
                onClick={() => {
                  setIsAutoPlaying(false);
                  scrollByDirection(1);
                }}
                type="button"
              >
                <Icon name="arrowRight" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.railWrap}>
        <div
          className={styles.rail}
          onMouseEnter={() => setIsAutoPlaying(false)}
          ref={railRef}
        >
          {partners.map((partner) => (
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
