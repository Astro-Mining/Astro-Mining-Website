"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import MediaStage from "@/components/news-preview/MediaStage";
import { ArticleBody, Highlight, MetaLine, NewsVideo, ShareLinks, SourceLink } from "@/components/news-preview/parts";
import { useLang } from "@/context/LanguageContext";
import { newsUi } from "@/data/news";
import { getVideos, storyHref, textDir } from "@/lib/news";
import styles from "@/components/news-preview/StoryHighlights.module.css";

function StoryNav({ story, label, basePath, lang, direction }) {
  if (!story) return <span />;
  return (
    <Link className={clsx(styles.navCard, direction === "next" && styles.navNext)} href={storyHref(basePath, story.slug)}>
      <span className={styles.navThumb}>
        <Image
          alt=""
          className={styles.navImage}
          fill
          sizes="120px"
          src={story.cover.src}
          style={story.cover.focus ? { objectPosition: story.cover.focus } : undefined}
        />
      </span>
      <span className={styles.navText}>
        <span className={styles.navLabel}>
          {direction === "prev" && <Icon className={styles.flip} name="arrowRight" size={14} />}
          {label}
          {direction === "next" && <Icon name="arrowRight" size={14} />}
        </span>
        <span className={styles.navTitle} dir={textDir(lang)}>
          {story[lang].title}
        </span>
      </span>
    </Link>
  );
}

export default function StoryHighlights({ item, neighbours, basePath, listPath }) {
  const { lang } = useLang();
  const t = newsUi[lang];
  const dir = textDir(lang);
  const copy = item[lang];
  const { cover } = item;
  const videoCount = getVideos(item).length;
  const photoCount = item.gallery?.length ?? 0;
  const portrait = cover.height > cover.width;

  const stats = [
    ...item.facts.map((fact) => ({ value: fact.value[lang], label: fact.label[lang] })),
    ...(photoCount ? [{ value: photoCount, label: t.photos }] : []),
    ...(videoCount ? [{ value: videoCount, label: t.videos }] : [])
  ];

  return (
    <article>
      <header className={styles.hero}>
        <div className={clsx("container", styles.narrow)}>
          <Link className={styles.back} href={listPath}>
            <Icon className={styles.flip} name="arrowRight" size={16} />
            {t.allNews}
          </Link>
          <div dir={dir}>
            <MetaLine className={styles.heroMeta} item={item} lang={lang} />
            <h1 className={styles.title}>{copy.title}</h1>
            <p className={styles.lead}>{copy.excerpt}</p>
          </div>
        </div>
      </header>

      <div className={clsx("container", styles.statsWrap)}>
        <dl className={styles.stats}>
          {stats.map((stat) => (
            <div className={styles.stat} key={stat.label}>
              <dd>{stat.value}</dd>
              <dt>{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>

      <section className={styles.content}>
        <div className={clsx("container", styles.narrow)}>
          {item.leadVideo ? (
            <NewsVideo className={styles.leadMedia} lang={lang} video={item.leadVideo} />
          ) : (
            <figure className={clsx(styles.leadMedia, styles.cover, portrait && styles.coverPortrait)}>
              <Image alt={cover.alt} height={cover.height} sizes="(max-width: 900px) 100vw, 900px" src={cover.src} width={cover.width} />
            </figure>
          )}
          <ArticleBody blocks={copy.body} dir={dir} />
          <Highlight className={styles.quote} highlight={item.highlight} lang={lang} />
          <div className={styles.actions}>
            <SourceLink item={item} lang={lang} />
            <ShareLinks item={item} labels={t} lang={lang} />
          </div>
        </div>
      </section>

      {item.videos?.length > 0 && (
        <section className={clsx("section", styles.tinted)}>
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
            <MediaStage lang={lang} media={item.gallery.map((photo) => ({ kind: "photo", ...photo }))} t={t} wide />
          </div>
        </section>
      )}

      <section className={clsx("section", styles.tinted)}>
        <div className={clsx("container", styles.storyNav)}>
          <StoryNav basePath={basePath} direction="prev" label={t.previousStory} lang={lang} story={neighbours.prev} />
          <StoryNav basePath={basePath} direction="next" label={t.nextStory} lang={lang} story={neighbours.next} />
        </div>
      </section>
    </article>
  );
}
