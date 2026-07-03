import clsx from "clsx";
import Reveal from "@/components/shared/Reveal";
import styles from "@/components/sections/EventBannerSection.module.css";

const REGISTRATION_URL =
  "https://visit.egyptminingforum.com/?utm_source=marketing-manual&utm_medium=&utm_campaign=Astro+Mining+And+Industrial+Company";

const BASE = "/assets/images/egypt-mining-forum";

export default function EventBannerSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal direction="up" distance={26}>
          <a
            className={styles.banner}
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Register for Egypt Mining Forum 2026"
          >
            <picture>
              {/* Desktop / tablet: leaderboard */}
              <source
                media="(min-width: 768px)"
                srcSet={`${BASE}/banner-leaderboard-728x90.jpg`}
              />
              {/* Mobile: compact banner */}
              <img
                className={styles.image}
                src={`${BASE}/banner-mobile-300x100.jpg`}
                alt="Egypt Mining Forum 2026 — Register now"
                width={300}
                height={100}
                loading="lazy"
              />
            </picture>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
