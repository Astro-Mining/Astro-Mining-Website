"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import styles from "@/components/shared/PhotoCarousel.module.css";

const SWIPE_DISTANCE = 40;

// Large photo viewer with prev/next, arrow keys, swipe, and a thumbnail filmstrip
export default function PhotoCarousel({ images, labels }) {
  const [index, setIndex] = useState(0);
  const stripRef = useRef(null);
  const touchX = useRef(null);
  const total = images.length;
  const current = images[index];

  // Functional update so rapid clicks/keys each move one step
  const step = (delta) => setIndex((i) => (i + delta + total) % total);

  // Keep the active thumbnail centred in the filmstrip (without scrolling the page)
  useEffect(() => {
    const strip = stripRef.current;
    const thumb = strip?.children[index];
    if (!thumb) return;
    strip.scrollTo({ left: thumb.offsetLeft - (strip.clientWidth - thumb.clientWidth) / 2, behavior: "smooth" });
  }, [index]);

  const onKeyDown = (event) => {
    if (event.key === "ArrowRight") step(1);
    if (event.key === "ArrowLeft") step(-1);
  };

  const onTouchEnd = (event) => {
    if (touchX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchX.current;
    if (Math.abs(delta) > SWIPE_DISTANCE) step(delta < 0 ? 1 : -1);
    touchX.current = null;
  };

  return (
    <div aria-label={labels.photos} aria-roledescription="carousel" className={styles.carousel} onKeyDown={onKeyDown} role="region">
      <div
        className={styles.stage}
        onTouchEnd={onTouchEnd}
        onTouchStart={(event) => {
          touchX.current = event.touches[0].clientX;
        }}
      >
        <Image alt={current.alt} className={styles.stageImage} fill key={current.src} sizes="(max-width: 1100px) 100vw, 1024px" src={current.src} />
        {total > 1 && (
          <>
            <button aria-label={labels.previous} className={clsx(styles.nav, styles.prev)} onClick={() => step(-1)} type="button">
              <Icon name="arrowRight" size={20} />
            </button>
            <button aria-label={labels.next} className={clsx(styles.nav, styles.next)} onClick={() => step(1)} type="button">
              <Icon name="arrowRight" size={20} />
            </button>
          </>
        )}
      </div>

      <p aria-live="polite" className={styles.caption}>
        <span>{current.alt}</span>
        <span className={styles.counter}>
          {index + 1} / {total}
        </span>
      </p>

      {total > 1 && (
        <div className={styles.thumbs} ref={stripRef}>
          {images.map((image, i) => (
            <button
              aria-label={`${labels.viewPhoto} ${i + 1}`}
              aria-pressed={i === index}
              className={clsx(styles.thumb, i === index && styles.thumbActive)}
              key={image.src}
              onClick={() => setIndex(i)}
              type="button"
            >
              <Image alt="" className={styles.thumbImage} fill sizes="100px" src={image.src} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
