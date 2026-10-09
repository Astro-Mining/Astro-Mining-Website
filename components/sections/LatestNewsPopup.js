"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import { useLang } from "@/context/LanguageContext";
import { featuredNews, newsUi } from "@/data/news";
import { textDir } from "@/lib/news";
import styles from "@/components/sections/LatestNewsPopup.module.css";

export default function LatestNewsPopup() {
  const pathname = usePathname();
  const { lang } = useLang();
  const t = newsUi[lang];
  const [collapsed, setCollapsed] = useState(false);

  // Auto-collapse to a circle once the footer scrolls into view,
  // and auto-expand again when the footer leaves the viewport.
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setCollapsed(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  // The News section already shows this story.
  if (pathname.startsWith("/news")) return null;

  return (
    <>
      <div className={clsx(styles.wrap, collapsed && styles.hidden)} inert={collapsed}>
        <Link className={styles.card} href="/news">
          <span className={styles.media}>
            <Image alt="" className={styles.image} fill sizes="(max-width: 768px) 96px, 210px" src={featuredNews.cover.src} />
          </span>
          <span className={styles.body} dir={textDir(lang)}>
            <span className={styles.eyebrow}>
              <span className={styles.pulse} aria-hidden="true" />
              {t.popupEyebrow}
            </span>
            <span className={styles.title}>{t.popupTitle}</span>
            <span className={styles.cta}>
              {t.popupCta}
              <Icon className={styles.arrow} name="arrowRight" size={14} />
            </span>
          </span>
        </Link>
        <button
          type="button"
          className={styles.close}
          onClick={() => setCollapsed(true)}
          aria-label={t.popupHide}
        >
          <Icon name="close" size={16} />
        </button>
      </div>

      <button
        type="button"
        className={clsx(styles.reopen, !collapsed && styles.hidden)}
        inert={!collapsed}
        onClick={() => setCollapsed(false)}
        aria-label={t.popupShow}
      >
        <Icon name="newspaper" size={24} />
      </button>
    </>
  );
}
