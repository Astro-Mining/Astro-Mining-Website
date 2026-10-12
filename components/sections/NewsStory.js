"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import NewsCard from "@/components/shared/NewsCard";
import {
  ArticleBody,
  FactsList,
  Highlight,
  MetaLine,
  NewsVideo,
  ShareLinks,
  SourceLink
} from "@/components/shared/NewsParts";
import PhotoCarousel from "@/components/shared/PhotoCarousel";
import { useLang } from "@/context/LanguageContext";
import { newsUi } from "@/data/news";
import { getVideos, textDir } from "@/lib/news";
import styles from "@/components/sections/NewsStory.module.css";

// Story page: photo header, article with an "at a glance" sidebar, videos, photo carousel
export default function NewsStory({ item, related }) {
  const { lang } = useLang();
  const t = newsUi[lang];
  const dir = textDir(lang);
  const copy = item[lang];
  const { cover } = item;
  const videoCount = getVideos(item).length;
  const photoCount = item.gallery?.length ?? 0;

  return (
    <article>
      <header className={styles.hero}>
        <Image
          alt={cover.alt}
          className={styles.heroImage}
          fill
          preload
          sizes="100vw"
          src={cover.src}
          style={cover.focus ? { objectPosition: cover.focus } : undefined}
        />
        <div className={clsx("container", styles.heroInner)}>
          <Link className={styles.back} href="/news">
            <Icon className={styles.backIcon} name="arrowRight" size={16} />
            {t.allNews}
          </Link>
          <div dir={dir}>
            <MetaLine className={styles.heroMeta} item={item} lang={lang} />
            <h1 className={styles.title}>{copy.title}</h1>
            <p className={styles.lead}>{copy.excerpt}</p>
          </div>
        </div>
      </header>

      <section className={styles.content}>
        <div className={clsx("container", styles.layout)}>
          <div className={styles.main}>
            {item.leadVideo && <NewsVideo className={styles.leadMedia} lang={lang} video={item.leadVideo} />}
            {!item.leadVideo && !photoCount && (
              <figure className={clsx(styles.leadMedia, styles.scan)}>
                <Image alt={cover.alt} height={cover.height} sizes="(max-width: 900px) 100vw, 640px" src={cover.src} width={cover.width} />
              </figure>
            )}
            <ArticleBody blocks={copy.body} dir={dir} />
            <Highlight highlight={item.highlight} lang={lang} />
            <SourceLink item={item} lang={lang} />
          </div>

          <aside className={styles.aside}>
            <div className={styles.glance}>
              <h2 className={styles.glanceTitle}>{t.atAGlance}</h2>
              <FactsList item={item} lang={lang} />
              {(videoCount > 0 || photoCount > 0) && (
                <div className={styles.counts}>
                  {videoCount > 0 && (
                    <span>
                      <Icon name="play" size={15} /> {videoCount} {t.videoCount}
                    </span>
                  )}
                  {photoCount > 0 && (
                    <span>
                      <Icon name="image" size={15} /> {photoCount} {t.photoCount}
                    </span>
                  )}
                </div>
              )}
            </div>
            <ShareLinks className={styles.share} item={item} labels={t} lang={lang} />
          </aside>
        </div>
      </section>

      {item.videos?.length > 0 && (
        <section className={clsx("section", styles.videosSection)}>
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

      {photoCount > 0 && (
        <section className="section">
          <div className={clsx("container", styles.galleryWrap)}>
            <h2 className={clsx("section-title", styles.sectionTitle)}>{t.photos}</h2>
            <PhotoCarousel images={item.gallery} labels={t} />
          </div>
        </section>
      )}

      <section className={clsx("section", styles.related)}>
        <div className="container">
          <h2 className={clsx("section-title", styles.sectionTitle)}>{t.moreNews}</h2>
          <div className={styles.relatedGrid}>
            {related.map((other) => (
              <NewsCard headingLevel={3} item={other} key={other.slug} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
