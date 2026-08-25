"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import styles from "@/components/sections/EventBannerSection.module.css";

const REGISTRATION_URL =
  "https://visit.egyptminingforum.com/?utm_source=marketing-manual&utm_medium=&utm_campaign=Astro+Mining+And+Industrial+Company";

const BASE = "/assets/images/egypt-mining-forum";

export default function EventBannerSection() {
  const [collapsed, setCollapsed] = useState(false);

  // Auto-collapse to a circle once the footer scrolls into view,
  // and auto-expand again when the footer leaves the viewport.
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setCollapsed(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={clsx(styles.wrap, collapsed && styles.hidden)}>
        <a
          className={styles.banner}
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Register for Egypt Mining Forum 2026"
        >
          <picture>
            {/* Desktop / tablet: vertical skyscraper, docked to the side */}
            <source
              media="(min-width: 768px)"
              srcSet={`${BASE}/banner-skyscraper-120x600.jpg`}
            />
            {/* Mobile: compact banner */}
            <img
              className={styles.image}
              src={`${BASE}/banner-mobile-300x100.jpg`}
              alt="Egypt Mining Forum 2026 — Register now"
              width={300}
              height={100}
            />
          </picture>
        </a>
        <button
          type="button"
          className={styles.close}
          onClick={() => setCollapsed(true)}
          aria-label="Hide Egypt Mining Forum banner"
        >
          <Icon name="close" size={16} />
        </button>
      </div>

      <button
        type="button"
        className={clsx(styles.reopen, !collapsed && styles.hidden)}
        onClick={() => setCollapsed(false)}
        aria-label="Show Egypt Mining Forum banner"
      >
        <Icon name="gem" size={24} />
      </button>
    </>
  );
}
