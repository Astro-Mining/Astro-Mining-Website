"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import Logo from "@/components/shared/Logo";
import Icon from "@/components/shared/Icon";
import ButtonLink from "@/components/shared/ButtonLink";
import { useLang } from "@/context/LanguageContext";
import * as en from "@/data/siteContent";
import * as ar from "@/data/ar";
import styles from "@/components/layout/SiteHeader.module.css";

export default function SiteHeader({ navigation: _nav }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLang();

  const nav = lang === "ar" ? ar.navigation : en.navigation;
  const getQuote = lang === "ar" ? ar.ui.header.getQuote : "Get A Quote";

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const homeAtTop = isHome && !scrolled;
  const logoVariant = (homeAtTop || isOpen) ? "default" : "footer";

  return (
    <header className={clsx(styles.header, { [styles.scrolled]: scrolled, [styles.homeAtTop]: homeAtTop })}>
      <div className={clsx("container", styles.inner)}>
        <div className={styles.logoWrap}>
          <Logo key={logoVariant} size="large" variant={logoVariant} />
        </div>
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              className={clsx(styles.link, {
                [styles.active]: pathname === item.href
              })}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <button
            aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
            className={styles.langToggle}
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            type="button"
          >
            {lang === "ar" ? "EN" : "عربي"}
          </button>
          <div className={styles.desktopCta}>
            <ButtonLink href="/contact">{getQuote}</ButtonLink>
          </div>
          <button
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className={clsx(styles.menuButton, { [styles.menuButtonOpen]: isOpen })}
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            <Icon name={isOpen ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>
      <button
        aria-hidden={!isOpen}
        className={clsx(styles.mobileBackdrop, {
          [styles.mobileBackdropOpen]: isOpen
        })}
        onClick={() => setIsOpen(false)}
        tabIndex={isOpen ? 0 : -1}
        type="button"
      />
      <div className={clsx(styles.mobilePanel, { [styles.mobilePanelOpen]: isOpen })}>
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(styles.mobileLink, {
                [styles.mobileLinkActive]: pathname === item.href
              })}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact">{getQuote}</ButtonLink>
          <button
            className={styles.mobileLangToggle}
            onClick={() => { setLang(lang === "ar" ? "en" : "ar"); setIsOpen(false); }}
            type="button"
          >
            {lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
          </button>
        </nav>
      </div>
    </header>
  );
}
