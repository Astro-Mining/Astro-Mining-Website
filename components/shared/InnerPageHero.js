import styles from "@/components/shared/InnerPageHero.module.css";

export default function InnerPageHero({ title, subtitle, crumb }) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {crumb && <p className={styles.crumb}>{crumb}</p>}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}
