import clsx from "clsx";
import Image from "next/image";
import styles from "@/components/shared/Logo.module.css";

export default function Logo({ inverted = false }) {
  return (
    <a
      className={clsx(styles.logo, {
        [styles.inverted]: inverted
      })}
      href="#home"
      aria-label="Astro Mining & Industrial home"
    >
      <div className={styles.mark}>
        <Image
          alt="Astro Mining & Industrial logo"
          height={58}
          priority
          src="/assets/brand/astro-logo.png"
          width={51}
        />
      </div>
      <div className={styles.text}>
        <strong>Astro</strong>
        <span>Mining & Industrial</span>
      </div>
    </a>
  );
}
