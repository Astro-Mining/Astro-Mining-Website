"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import { FilterChips, MetaLine, useNewsFilter } from "@/components/news-preview/parts";
import { useLang } from "@/context/LanguageContext";
import { newsUi } from "@/data/news";
import { formatNewsDate, getVideos, storyHref, textDir } from "@/lib/news";
import styles from "@/components/news-preview/ListTimeline.module.css";

const TYPE_ICON = { event: "calendar", tv: "tv", press: "newspaper" };

function groupByMonth(items, lang) {
  const groups = [];
  for (const item of items) {
    const label = formatNewsDate(item.date, lang);
    const last = groups.at(-1);
    if (last?.label === label) last.items.push(item);
    else groups.push({ label, items: [item] });
  }
  return groups;
}

export default function ListTimeline({ items, basePath }) {
  const { lang } = useLang();
  const t = newsUi[lang];
  const dir = textDir(lang);
  const { filter, setFilter, filtered } = useNewsFilter(items);
  // Newest first, regardless of the featured ordering in the data file
  const sorted = [...filtered].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <section className={styles.outlets}>
        <div className={clsx("container", styles.outletsInner)}>
          <span className={styles.outletsLabel}>{t.seenIn}</span>
          <div className={styles.outletList}>
            {items.map((item) => (
              <Link className={styles.outlet} href={storyHref(basePath, item.slug)} key={item.slug}>
                <Icon name={TYPE_ICON[item.type]} size={18} />
                {item.outlet[lang]}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={clsx("section", styles.section)}>
        <div className={clsx("container", styles.inner)}>
          <FilterChips className={styles.chips} labels={t.filters} onChange={setFilter} value={filter} />
          {sorted.length === 0 && <p className={styles.empty}>{t.noResults}</p>}

          <div className={styles.timeline}>
            {groupByMonth(sorted, lang).map((group) => (
              <div className={styles.group} key={group.label}>
                <div className={styles.month}>
                  <span className={styles.dot} aria-hidden="true" />
                  <h2>{group.label}</h2>
                </div>
                <div className={styles.entries}>
                  {group.items.map((item, i) => (
                    <Reveal delay={i * 0.05} direction="up" distance={24} key={item.slug}>
                      <Link className={clsx(styles.entry, item.featured && styles.entryFeatured)} href={storyHref(basePath, item.slug)}>
                        <div className={styles.media}>
                          <Image
                            alt={item.cover.alt}
                            className={styles.image}
                            fill
                            sizes="(max-width: 760px) 100vw, 360px"
                            src={item.cover.src}
                            style={item.cover.focus ? { objectPosition: item.cover.focus } : undefined}
                          />
                          {getVideos(item).length > 0 && (
                            <span className={styles.play}>
                              <Icon name="play" size={16} />
                            </span>
                          )}
                        </div>
                        <div className={styles.body} dir={dir}>
                          <MetaLine item={item} lang={lang} />
                          <h3 className={styles.title}>{item[lang].title}</h3>
                          <p className={styles.excerpt}>{item[lang].excerpt}</p>
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
