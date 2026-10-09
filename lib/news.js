const dateFormats = {
  en: new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric", timeZone: "UTC" }),
  ar: new Intl.DateTimeFormat("ar-EG", { month: "long", year: "numeric", timeZone: "UTC" })
};

// News dates may be "YYYY-MM-DD" or "YYYY-MM"; both display as month + year.
export function formatNewsDate(date, lang) {
  return dateFormats[lang].format(new Date(date));
}

export function textDir(lang) {
  return lang === "ar" ? "rtl" : undefined;
}

// Every video attached to a story (lead video first)
export function getVideos(item) {
  return [item.leadVideo, ...(item.videos ?? [])].filter(Boolean);
}

// Videos then photos, as one ordered media list (falls back to the cover)
export function getMedia(item) {
  const photos = item.gallery?.length ? item.gallery : [item.cover];
  return [
    ...getVideos(item).map((video) => ({ kind: "video", ...video })),
    ...photos.map((photo) => ({ kind: "photo", ...photo }))
  ];
}

export function storyHref(basePath, slug) {
  return `${basePath}/${slug}`;
}
