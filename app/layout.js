import { Manrope, Oswald } from "next/font/google";
import "@/app/globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const headingFont = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

export const metadata = {
  metadataBase: new URL("https://astromining-industrial.com"),
  title: {
    default: "Astro Mining & Industrial",
    template: "%s | Astro Mining & Industrial"
  },
  description:
    "Astro Mining & Industrial is an Egyptian mining company specializing in the exploration, treatment, and upgrading of high-quality industrial minerals.",
  keywords: [
    "Astro Mining",
    "Astro Industrial",
    "Egyptian mining company",
    "industrial minerals",
    "silica sand",
    "feldspar",
    "kaolin",
    "gypsum",
    "dolomite",
    "calcium carbonate"
  ],
  openGraph: {
    title: "Astro Mining & Industrial",
    description:
      "High-quality industrial minerals, export-ready production, and dependable supply from Egypt to global markets.",
    url: "https://astromining-industrial.com",
    siteName: "Astro Mining & Industrial",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Astro Mining & Industrial",
    description:
      "High-quality industrial minerals, export-ready production, and dependable supply from Egypt to global markets."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
