import Link from "next/link";
import clsx from "clsx";
import styles from "@/components/news-preview/PreviewSwitcher.module.css";

export const VARIANTS = ["a", "b", "c"];

const NAMES = {
  list: { a: "Magazine", b: "Media hub", c: "Timeline" },
  story: { a: "Cinematic", b: "Split", c: "Highlights" }
};

const SAMPLE_STORY = "egypt-mining-forum-2026";

export default function PreviewSwitcher({ list, story, slug }) {
  const href = (l, s) => `/news-preview/${l}/${s}${slug ? `/${slug}` : ""}`;

  const group = (kind, current, makeHref) => (
    <div className={styles.group}>
      <span className={styles.groupLabel}>{kind === "list" ? "News" : "Story"}</span>
      {VARIANTS.map((v) => (
        <Link className={clsx(styles.option, v === current && styles.active)} href={makeHref(v)} key={v}>
          <b>{v.toUpperCase()}</b>
          <span>{NAMES[kind][v]}</span>
        </Link>
      ))}
    </div>
  );

  return (
    <nav aria-label="Design preview" className={styles.bar}>
      {group("list", list, (v) => href(v, story))}
      {group("story", story, (v) => href(list, v))}
      <Link
        aria-label={slug ? "Back to list" : "Open a story"}
        className={styles.jump}
        href={slug ? `/news-preview/${list}/${story}` : `/news-preview/${list}/${story}/${SAMPLE_STORY}`}
      >
        <span className={styles.long}>{slug ? "← Back to list" : "Open a story →"}</span>
        <span className={styles.short}>{slug ? "← List" : "Story →"}</span>
      </Link>
    </nav>
  );
}
