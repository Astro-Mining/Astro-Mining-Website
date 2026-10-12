"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import { FilterChips, MetaLine, VideoDialog, useNewsFilter } from "@/components/shared/NewsParts";
import { useLang } from "@/context/LanguageContext";
import { newsUi } from "@/data/news";
import { getVideos, textDir } from "@/lib/news";
import styles from "@/components/sections/NewsHub.module.css";

// News page: filterable bento grid of stories plus a "Watch" strip of every video
export default function NewsHub({ items }) {
  const { lang } = useLang();
  const t = newsUi[lang];
  const dir = textDir(lang);
  const { filter, setFilter, filtered } = useNewsFilter(items);
  const [playing, setPlaying] = useState(null);
  const videos = items.flatMap((item) => getVideos(item));

  return (
    <>
      <section className={clsx("section", styles.section)}>
        <div className="container">
          <FilterChips className={styles.chips} labels={t.filters} onChange={setFilter} value={filter} />
          {filtered.length === 0 && <p className={styles.empty}>{t.noResults}</p>}
          <div className={styles.bento}>
            {filtered.map((item, i) => {
              const big = i === 0 && item.featured;
              return (
                <Reveal className={clsx(styles.cell, big && styles.big)} delay={i * 0.05} direction="up" distance={24} key={item.slug}>
                  <Link className={styles.tile} href={`/news/${item.slug}`}>
                    <Image
                      alt={item.cover.alt}
                      className={styles.tileImage}
                      fill
                      preload={big}
                      sizes={big ? "(max-width: 900px) 100vw, 50vw" : "(max-width: 900px) 100vw, 25vw"}
                      src={item.cover.src}
                      style={item.cover.focus ? { objectPosition: item.cover.focus } : undefined}
                    />
                    {getVideos(item).length > 0 && (
                      <span className={styles.play}>
                        <Icon name="play" size={big ? 22 : 16} />
                      </span>
                    )}
                    <span className={styles.tileBody} dir={dir}>
                      {big && <span className={styles.featured}>{t.featured}</span>}
                      <MetaLine className={styles.tileMeta} item={item} lang={lang} />
                      <span className={styles.tileTitle}>{item[lang].title}</span>
                      {big && <span className={styles.tileExcerpt}>{item[lang].excerpt}</span>}
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className={clsx("section", styles.watch)}>
        <div className="container">
          <div className={styles.watchHead}>
            <span className="eyebrow">{t.videos}</span>
            <h2 className={clsx("section-title", styles.watchTitle)}>{t.watch}</h2>
          </div>
          <div className={styles.videoGrid}>
            {videos.map((video) => (
              <button className={styles.videoTile} key={video.src} onClick={() => setPlaying(video)} type="button">
                <span className={styles.videoThumb}>
                  <Image alt="" className={styles.tileImage} fill sizes="(max-width: 700px) 100vw, 25vw" src={video.poster} />
                  <span className={styles.videoPlay} aria-hidden="true">
                    <Icon name="play" size={22} />
                  </span>
                  <span className={styles.duration}>{video.duration}</span>
                </span>
                <span className={styles.videoTitle} dir={dir}>
                  <span className="sr-only">{t.playVideo}: </span>
                  {video.title[lang]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <VideoDialog labels={t} lang={lang} onClose={() => setPlaying(null)} video={playing} />
    </>
  );
}
