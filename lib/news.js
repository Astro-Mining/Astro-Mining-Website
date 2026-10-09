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
