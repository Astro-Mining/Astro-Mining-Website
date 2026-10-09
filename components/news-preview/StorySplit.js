"use client";

import Link from "next/link";
import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import NewsCard from "@/components/shared/NewsCard";
import MediaStage from "@/components/news-preview/MediaStage";
import { ArticleBody, FactsList, Highlight, MetaLine, ShareLinks, SourceLink } from "@/components/news-preview/parts";
import { useLang } from "@/context/LanguageContext";
import { newsUi } from "@/data/news";
import { getMedia, storyHref, textDir } from "@/lib/news";
import styles from "@/components/news-preview/StorySplit.module.css";

export default function StorySplit({ item, related, basePath, listPath }) {
  const { lang } = useLang();
  const t = newsUi[lang];
  const dir = textDir(lang);
  const copy = item[lang];

  return (
    <article>
      <div className={styles.band}>
        <div className="container">
          <Link className={styles.back} href={listPath}>
            <Icon className={styles.backIcon} name="arrowRight" size={16} />
            {t.allNews}
          </Link>
        </div>
      </div>

      <section className={styles.split}>
        <div className={clsx("container", styles.layout)}>
          <div className={styles.mediaCol}>
            <MediaStage lang={lang} media={getMedia(item)} t={t} />
          </div>

          <div className={styles.textCol} dir={dir}>
            <MetaLine item={item} lang={lang} />
            <h1 className={styles.title}>{copy.title}</h1>
            <p className={styles.lead}>{copy.excerpt}</p>
            <FactsList className={styles.facts} item={item} lang={lang} />
            <ArticleBody blocks={copy.body} dir={dir} />
            <Highlight highlight={item.highlight} lang={lang} />
            <div className={styles.actions}>
              <SourceLink item={item} lang={lang} />
              <ShareLinks item={item} labels={t} lang={lang} />
            </div>
          </div>
        </div>
      </section>

      <section className={clsx("section", styles.related)}>
        <div className="container">
          <h2 className={clsx("section-title", styles.sectionTitle)}>{t.moreNews}</h2>
          <div className={styles.relatedGrid}>
            {related.map((other) => (
              <NewsCard headingLevel={3} href={storyHref(basePath, other.slug)} item={other} key={other.slug} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
