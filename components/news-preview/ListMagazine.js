"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import { FilterChips, MetaLine, useNewsFilter } from "@/components/news-preview/parts";
import { useLang } from "@/context/LanguageContext";
import { newsUi } from "@/data/news";
import { getVideos, storyHref, textDir } from "@/lib/news";
import styles from "@/components/news-preview/ListMagazine.module.css";

const TYPE_ICON = { event: "calendar", tv: "tv", press: "newspaper" };

export default function ListMagazine({ featured, items, basePath }) {
  const { lang } = useLang();
  const t = newsUi[lang];
  const dir = textDir(lang);
  const { filter, setFilter, filtered } = useNewsFilter(items);
  const all = [featured, ...items];
  const videos = all.flatMap((item) => getVideos(item).map((video) => ({ ...video, slug: item.slug })));
  const photoCount = featured.gallery?.length ?? 0;

  return (
    <>
      <section className={styles.hero}>
        <Image alt={featured.cover.alt} className={styles.heroImage} fill preload sizes="100vw" src={featured.cover.src} />
        <div className={clsx("container", styles.heroInner)} dir={dir}>
          <MetaLine className={styles.heroMeta} item={featured} lang={lang} />
          <h1 className={styles.heroTitle}>{featured[lang].title}</h1>
          <p className={styles.heroExcerpt}>{featured[lang].excerpt}</p>
          <div className={styles.heroActions}>
            <Link className={styles.heroButton} href={storyHref(basePath, featured.slug)}>
              {t.readStory}
              <Icon className={styles.arrow} name="arrowRight" size={16} />
            </Link>
            <span className={styles.heroStat}>
              <Icon name="play" size={15} /> {getVideos(featured).length} {t.videoCount}
            </span>
            <span className={styles.heroStat}>
              <Icon name="image" size={15} /> {photoCount} {t.photoCount}
            </span>
          </div>
        </div>
      </section>

      <section className={clsx("section", styles.body)}>
        <div className={clsx("container", styles.layout)}>
          <div>
            <FilterChips className={styles.chips} labels={t.filters} onChange={setFilter} value={filter} />
            <div className={styles.list}>
              {filtered.length === 0 && <p className={styles.empty}>{t.noResults}</p>}
              {filtered.map((item, i) => (
                <Reveal delay={i * 0.05} direction="up" distance={24} key={item.slug}>
                  <Link className={styles.row} href={storyHref(basePath, item.slug)}>
                    <div className={styles.rowMedia}>
                      <Image
                        alt={item.cover.alt}
                        className={styles.rowImage}
                        fill
                        sizes="(max-width: 700px) 100vw, 280px"
                        src={item.cover.src}
                        style={item.cover.focus ? { objectPosition: item.cover.focus } : undefined}
                      />
                      {getVideos(item).length > 0 && (
                        <span className={styles.play}>
                          <Icon name="play" size={18} />
                        </span>
                      )}
                    </div>
                    <div className={styles.rowBody} dir={dir}>
                      <MetaLine item={item} lang={lang} />
                      <h2 className={styles.rowTitle}>{item[lang].title}</h2>
                      <p className={styles.rowExcerpt}>{item[lang].excerpt}</p>
                      <span className={styles.more}>
                        {t.readMore}
                        <Icon className={styles.arrow} name="arrowRight" size={15} />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <aside className={styles.aside}>
            <div className={styles.panel}>
              <h2 className={styles.panelTitle}>{t.watch}</h2>
              <div className={styles.videoList}>
                {videos.map((video) => (
                  <Link className={styles.videoItem} href={storyHref(basePath, video.slug)} key={video.src}>
                    <span className={styles.videoThumb}>
                      <Image alt="" className={styles.rowImage} fill sizes="120px" src={video.poster} />
                      <span className={styles.videoPlay}>
                        <Icon name="play" size={14} />
                      </span>
                    </span>
                    <span className={styles.videoText} dir={dir}>
                      <span className={styles.videoTitle}>{video.title[lang]}</span>
                      <span className={styles.videoDuration}>{video.duration}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.panel}>
              <h2 className={styles.panelTitle}>{t.seenIn}</h2>
              <ul className={styles.outlets}>
                {all.map((item) => (
                  <li key={item.slug}>
                    <Link href={storyHref(basePath, item.slug)}>
                      <Icon name={TYPE_ICON[item.type]} size={16} />
                      <span>{item.outlet[lang]}</span>
                      <Icon className={styles.arrow} name="arrowRight" size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
