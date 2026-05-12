import clsx from "clsx";
import Image from "next/image";
import styles from "@/components/shared/Logo.module.css";

export default function Logo({ inverted = false, size = "default" }) {
  return (
    <a
      className={clsx(styles.logo, {
        [styles.inverted]: inverted,
        [styles.large]: size === "large"
      })}
      href="#home"
      aria-label="Astro Mining & Industrial home"
    >
      <div className={styles.mark}>
        <Image
          alt="Astro Mining & Industrial logo"
          height={size === "large" ? 110 : 86}
          priority
          src="/assets/brand/astro-logo.png"
          width={size === "large" ? 96 : 74}
        />
      </div>
    </a>
  );
}
