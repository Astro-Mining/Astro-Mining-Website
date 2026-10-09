import clsx from "clsx";
import NewsCard from "@/components/shared/NewsCard";
import Reveal from "@/components/shared/Reveal";
import styles from "@/components/sections/NewsList.module.css";

export default function NewsList({ featured, items }) {
  return (
    <section className={clsx("section", styles.section)}>
      <div className="container">
        <Reveal direction="up" distance={30}>
          <NewsCard featured item={featured} />
        </Reveal>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <Reveal className={styles.cell} delay={i * 0.06} direction="up" distance={28} key={item.slug}>
              <NewsCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
