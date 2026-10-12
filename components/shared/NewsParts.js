"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import { formatNewsDate } from "@/lib/news";
import styles from "@/components/shared/NewsParts.module.css";

const SITE_URL = "https://astromining-industrial.com";

export function ArticleBody({ blocks, dir, className }) {
  return (
    <div className={clsx(styles.prose, className)} dir={dir}>
      {blocks.map((block, i) =>
        typeof block === "string" ? (
          <p key={i}>{block}</p>
        ) : (
          <ul className={styles.list} key={i}>
            {block.list.map((entry) => (
              <li key={typeof entry === "string" ? entry : entry.term}>
                <Icon className={styles.check} name="check" size={18} />
                <span>
                  {typeof entry === "string" ? entry : (
                    <>
                      <strong>{entry.term}:</strong> {entry.text}
                    </>
                  )}
                </span>
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
}

export function MetaLine({ item, lang, className }) {
  return (
    <p className={clsx(styles.meta, className)}>
      <span className={styles.category}>{item[lang].category}</span>
      <time dateTime={item.date}>{formatNewsDate(item.date, lang)}</time>
    </p>
  );
}

export function Highlight({ highlight, lang, className }) {
  if (!highlight) return null;
  return (
    <figure className={clsx(styles.highlight, className)} dir={lang === "ar" ? "rtl" : undefined}>
      <blockquote>{highlight.by ? `“${highlight[lang]}”` : highlight[lang]}</blockquote>
      {highlight.by && <figcaption>{highlight.by[lang]}</figcaption>}
    </figure>
  );
}

export function FactsList({ item, lang, className }) {
  return (
    <dl className={clsx(styles.facts, className)}>
      {item.facts.map((fact) => (
        <div key={fact.label.en}>
          <dt>{fact.label[lang]}</dt>
          <dd>{fact.value[lang]}</dd>
        </div>
      ))}
    </dl>
  );
}

export function useNewsFilter(items) {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? items : items.filter((item) => item.type === filter);
  return { filter, setFilter, filtered };
}

export function FilterChips({ value, onChange, labels, className }) {
  return (
    <div className={clsx(styles.chips, className)} role="group">
      {Object.entries(labels).map(([key, label]) => (
        <button
          aria-pressed={value === key}
          className={clsx(styles.chip, value === key && styles.chipActive)}
          key={key}
          onClick={() => onChange(key)}
          type="button"
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function NewsVideo({ video, lang, className, caption = true }) {
  return (
    <figure className={clsx(styles.video, className)}>
      <div className={styles.videoFrame}>
        <video aria-label={video.title[lang]} controls playsInline poster={video.poster} preload="none">
          <source src={video.src} type="video/mp4" />
        </video>
      </div>
      {caption && (
        <figcaption dir={lang === "ar" ? "rtl" : undefined}>
          {video.title[lang]}
          {video.duration && <span className={styles.duration}>{video.duration}</span>}
        </figcaption>
      )}
    </figure>
  );
}

// Modal player: opens when `video` is set, calls onClose when dismissed
export function VideoDialog({ video, lang, labels, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    if (video && ref.current && !ref.current.open) ref.current.showModal();
  }, [video]);

  return (
    <dialog
      aria-label={labels.watch}
      className={styles.videoDialog}
      onClick={(event) => event.target === event.currentTarget && ref.current.close()}
      onClose={onClose}
      ref={ref}
    >
      {video && (
        <div className={styles.videoDialogInner}>
          <button aria-label={labels.close} className={styles.dialogClose} onClick={() => ref.current.close()} type="button">
            <Icon name="close" size={22} />
          </button>
          <video autoPlay controls key={video.src} playsInline poster={video.poster}>
            <source src={video.src} type="video/mp4" />
          </video>
          <p dir={lang === "ar" ? "rtl" : undefined}>{video.title[lang]}</p>
        </div>
      )}
    </dialog>
  );
}

export function ShareLinks({ item, lang, labels, className }) {
  const [copied, setCopied] = useState(false);
  const url = `${SITE_URL}/news/${item.slug}`;
  const text = encodeURIComponent(`${item[lang].title} ${url}`);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className={clsx(styles.share, className)}>
      <span className={styles.shareLabel}>{labels.share}</span>
      <a aria-label="WhatsApp" href={`https://wa.me/?text=${text}`} rel="noopener noreferrer" target="_blank">
        <Icon name="message" size={17} />
      </a>
      <a aria-label="LinkedIn" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} rel="noopener noreferrer" target="_blank">
        <Icon name="linkedin" size={17} />
      </a>
      <a aria-label="Facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} rel="noopener noreferrer" target="_blank">
        <Icon name="facebook" size={17} />
      </a>
      <button aria-label={labels.copyLink} onClick={copy} type="button">
        <Icon name={copied ? "check" : "link"} size={17} />
      </button>
      {copied && <span className={styles.copied}>{labels.copied}</span>}
    </div>
  );
}

export function SourceLink({ item, lang, className }) {
  if (!item.link) return null;
  return (
    <a className={clsx(styles.source, className)} href={item.link.href} rel="noopener noreferrer" target="_blank">
      <span>{item.link.label[lang]}</span>
      <Icon name="arrowRight" size={16} />
    </a>
  );
}
