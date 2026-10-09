"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import styles from "@/components/shared/MediaGallery.module.css";

// Photo grid with a native <dialog> lightbox (Esc, arrow keys, backdrop click).
export default function MediaGallery({ images, labels }) {
  const dialogRef = useRef(null);
  const [index, setIndex] = useState(null);
  const total = images.length;
  const current = index === null ? null : images[index];

  const open = (i) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = (delta) => setIndex((i) => (i + delta + total) % total);

  const onKeyDown = (event) => {
    if (event.key === "ArrowRight") step(1);
    if (event.key === "ArrowLeft") step(-1);
  };

  return (
    <>
      <div className={styles.grid}>
        {images.map((image, i) => (
          <button
            aria-label={`${labels.viewPhoto} ${i + 1}: ${image.alt}`}
            className={styles.thumb}
            key={image.src}
            onClick={() => open(i)}
            type="button"
          >
            <Image
              alt=""
              className={styles.thumbImage}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 20vw"
              src={image.src}
            />
          </button>
        ))}
      </div>

      <dialog
        aria-label={labels.photos}
        className={styles.lightbox}
        onClick={(event) => event.target === event.currentTarget && close()}
        onClose={() => setIndex(null)}
        onKeyDown={onKeyDown}
        ref={dialogRef}
      >
        {current && (
          <>
            <figure className={styles.stage}>
              <div className={styles.frame}>
                <Image alt={current.alt} className={styles.fullImage} fill sizes="100vw" src={current.src} />
              </div>
              <figcaption className={styles.caption}>
                <span>{current.alt}</span>
                <span className={styles.counter}>
                  {index + 1} / {total}
                </span>
              </figcaption>
            </figure>
            <button aria-label={labels.close} className={styles.closeButton} onClick={close} type="button">
              <Icon name="close" size={22} />
            </button>
            {total > 1 && (
              <>
                <button
                  aria-label={labels.previous}
                  className={clsx(styles.navButton, styles.prev)}
                  onClick={() => step(-1)}
                  type="button"
                >
                  <Icon name="arrowRight" size={22} />
                </button>
                <button
                  aria-label={labels.next}
                  className={clsx(styles.navButton, styles.next)}
                  onClick={() => step(1)}
                  type="button"
                >
                  <Icon name="arrowRight" size={22} />
                </button>
              </>
            )}
          </>
        )}
      </dialog>
    </>
  );
}
