"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import { textDir } from "@/lib/news";
import styles from "@/components/news-preview/MediaStage.module.css";

// Large viewer for a mixed list of videos and photos, with a thumbnail strip
export default function MediaStage({ media, lang, t, wide = false }) {
  const [index, setIndex] = useState(0);
  const [userPicked, setUserPicked] = useState(false);
  const current = media[index];
  const total = media.length;

  const select = (i) => {
    setIndex((i + total) % total);
    setUserPicked(true);
  };

  return (
    <div className={styles.stageWrap}>
      <div className={clsx(styles.stage, wide && styles.wide)}>
        {current.kind === "video" ? (
          <video autoPlay={userPicked} controls key={current.src} playsInline poster={current.poster} preload="none">
            <source src={current.src} type="video/mp4" />
          </video>
        ) : (
          <Image alt={current.alt} className={styles.stageImage} fill key={current.src} sizes="(max-width: 980px) 100vw, 55vw" src={current.src} />
        )}
        {total > 1 && (
          <>
            <button aria-label={t.previous} className={clsx(styles.nav, styles.prev)} onClick={() => select(index - 1)} type="button">
              <Icon name="arrowRight" size={18} />
            </button>
            <button aria-label={t.next} className={clsx(styles.nav, styles.next)} onClick={() => select(index + 1)} type="button">
              <Icon name="arrowRight" size={18} />
            </button>
          </>
        )}
      </div>
      <p className={styles.caption}>
        <span dir={textDir(lang)}>{current.kind === "video" ? current.title[lang] : current.alt}</span>
        <span className={styles.counter}>
          {index + 1} / {total}
        </span>
      </p>
      {total > 1 && (
        <div className={styles.thumbs}>
          {media.map((entry, i) => (
            <button
              aria-label={entry.kind === "video" ? `${t.playVideo}: ${entry.title[lang]}` : `${t.viewPhoto} ${i + 1}`}
              aria-pressed={i === index}
              className={clsx(styles.thumb, i === index && styles.thumbActive)}
              key={entry.src}
              onClick={() => select(i)}
              type="button"
            >
              <Image alt="" className={styles.thumbImage} fill sizes="96px" src={entry.kind === "video" ? entry.poster : entry.src} />
              {entry.kind === "video" && (
                <span className={styles.thumbPlay}>
                  <Icon name="play" size={12} />
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
