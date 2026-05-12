import clsx from "clsx";
import Reveal from "@/components/shared/Reveal";
import styles from "@/components/sections/ProductsSection.module.css";

export default function ProductsSection({ products }) {
  return (
    <section className={styles.section} id="products">
      <div className="container">
        <Reveal className={styles.heading}>
          <span className="eyebrow">Our Products</span>
          <h2 className="section-title">Pure minerals. Powering industries.</h2>
          <p className="section-copy">
            Astro supplies a focused portfolio of industrial minerals for glass, ceramics, chemicals, construction, paints, plastics, and more.
          </p>
        </Reveal>
        <div className={styles.grid}>
          {products.map((product) => (
            <Reveal key={product.slug} className={styles.card}>
              <div className={clsx(styles.visual, styles[product.tone])}>
                <div className={styles.orb} />
                <span>{product.name}</span>
              </div>
              <div className={styles.body}>
                <h3>{product.name}</h3>
                <p>{product.uses}</p>
                <ul>
                  {product.specs.map((spec) => (
                    <li key={spec}>{spec}</li>
                  ))}
                </ul>
                <strong>{product.capacity}</strong>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
