"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import ButtonLink from "@/components/shared/ButtonLink";
import Icon from "@/components/shared/Icon";
import MediaGallery from "@/components/shared/MediaGallery";
import NewsCard from "@/components/shared/NewsCard";
import Reveal from "@/components/shared/Reveal";
import { useLang } from "@/context/LanguageContext";
import { newsUi } from "@/data/news";
import { formatNewsDate, textDir } from "@/lib/news";
import styles from "@/components/sections/NewsArticle.module.css";

function NewsVideo({ video, lang }) {
  return (
    <figure className={styles.video}>
      <div className={styles.videoFrame}>
        <video aria-label={video.title[lang]} controls playsInline poster={video.poster} preload="none">
          <source src={video.src} type="video/mp4" />
        </video>
      </div>
      <figcaption dir={textDir(lang)}>{video.title[lang]}</figcaption>
    </figure>
  );
}

function BodyBlock({ block }) {
  if (typeof block === "string") return <p>{block}</p>;

  return (
    <ul className={styles.list}>
      {block.list.map((entry) => {
        const key = typeof entry === "string" ? entry : entry.term;
        return (
          <li key={key}>
            <Icon className={styles.check} name="check" size={18} />
            <span>
              {typeof entry === "string" ? entry : (
                <>
                  <strong>{entry.term}:</strong> {entry.text}
                </>
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default function NewsArticle({ item, related }) {
  const { lang } = useLang();
  const t = newsUi[lang];
  const copy = item[lang];
  const dir = textDir(lang);
  const { cover } = item;

  return (
    <article>
      <header className={styles.hero}>
        <div className={clsx("container", styles.narrow)}>
          <Link className={styles.back} href="/news">
            <Icon className={styles.backIcon} name="arrowRight" size={16} />
            {t.allNews}
          </Link>
          <div dir={dir}>
            <p className={styles.meta}>
              <span>{copy.category}</span>
              <time dateTime={item.date}>{formatNewsDate(item.date, lang)}</time>
            </p>
            <h1 className={styles.title}>{copy.title}</h1>
            <p className={styles.lead}>{copy.excerpt}</p>
          </div>
        </div>
      </header>

      <section className={styles.content}>
        <div className={clsx("container", styles.narrow)}>
          {item.leadVideo ? (
            <NewsVideo lang={lang} video={item.leadVideo} />
          ) : (
            <figure className={clsx(styles.cover, cover.height > cover.width && styles.coverPortrait)}>
              <Image
                alt={cover.alt}
                height={cover.height}
                preload
                sizes="(max-width: 900px) 100vw, 900px"
                src={cover.src}
                width={cover.width}
              />
            </figure>
          )}

          <div className={styles.prose} dir={dir}>
            {copy.body.map((block, i) => (
              <BodyBlock block={block} key={i} />
            ))}
          </div>

          {item.link && (
            <a className={styles.source} href={item.link.href} rel="noopener noreferrer" target="_blank">
              <span>{item.link.label[lang]}</span>
              <Icon name="arrowRight" size={16} />
            </a>
          )}
        </div>
      </section>

      {item.videos?.length > 0 && (
        <section className={clsx("section", styles.mediaSection)}>
          <div className="container">
            <h2 className={clsx("section-title", styles.sectionTitle)}>{t.videos}</h2>
            <div className={styles.videoGrid}>
              {item.videos.map((video) => (
                <NewsVideo key={video.src} lang={lang} video={video} />
              ))}
            </div>
          </div>
        </section>
      )}

      {item.gallery?.length > 0 && (
        <section className={clsx("section", styles.gallerySection)}>
          <div className="container">
            <h2 className={clsx("section-title", styles.sectionTitle)}>{t.photos}</h2>
            <MediaGallery images={item.gallery} labels={t} />
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className={clsx("section", styles.related)}>
          <div className="container">
            <div className={styles.relatedHead}>
              <h2 className="section-title">{t.moreNews}</h2>
              <ButtonLink href="/news" variant="outline">
                {t.allNews}
              </ButtonLink>
            </div>
            <div className={styles.relatedGrid}>
              {related.map((other, i) => (
                <Reveal className={styles.relatedCell} delay={i * 0.06} direction="up" distance={28} key={other.slug}>
                  <NewsCard headingLevel={3} item={other} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
