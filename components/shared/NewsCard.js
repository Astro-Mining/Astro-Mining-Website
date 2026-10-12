"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/shared/Icon";
import { useLang } from "@/context/LanguageContext";
import { newsUi } from "@/data/news";
import { formatNewsDate, textDir } from "@/lib/news";
import styles from "@/components/shared/NewsCard.module.css";

export default function NewsCard({ item, headingLevel = 2 }) {
  const { lang } = useLang();
  const t = newsUi[lang];
  const copy = item[lang];
  const Heading = `h${headingLevel}`;
  const hasVideo = Boolean(item.leadVideo || item.videos?.length);
  const photoCount = item.gallery?.length ?? 0;

  return (
    <Link className={styles.card} href={`/news/${item.slug}`}>
      <div className={styles.media}>
        <Image
          alt={item.cover.alt}
          className={styles.image}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
          src={item.cover.src}
          style={item.cover.focus ? { objectPosition: item.cover.focus } : undefined}
        />
        {(hasVideo || photoCount > 0) && (
          <div className={styles.badges}>
            {hasVideo && (
              <span className={styles.badge}>
                <Icon name="play" size={13} /> {t.video}
              </span>
            )}
            {photoCount > 0 && (
              <span className={styles.badge}>
                <Icon name="image" size={13} /> {photoCount} {t.photoCount}
              </span>
            )}
          </div>
        )}
      </div>
      <div className={styles.body} dir={textDir(lang)}>
        <p className={styles.meta}>
          <span>{copy.category}</span>
          <time dateTime={item.date}>{formatNewsDate(item.date, lang)}</time>
        </p>
        <Heading className={styles.title}>{copy.title}</Heading>
        <p className={styles.excerpt}>{copy.excerpt}</p>
        <span className={styles.more}>
          {t.readMore}
          <Icon className={styles.arrow} name="arrowRight" size={16} />
        </span>
      </div>
    </Link>
  );
}
