"use client";

import { useState } from "react";
import clsx from "clsx";
import Logo from "@/components/shared/Logo";
import Icon from "@/components/shared/Icon";
import ButtonLink from "@/components/shared/ButtonLink";
import styles from "@/components/layout/SiteHeader.module.css";

export default function SiteHeader({ navigation }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={clsx("container", styles.inner)}>
        <Logo />
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navigation.map((item, index) => (
            <a
              key={item.label}
              className={clsx(styles.link, {
                [styles.active]: index === 0
              })}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className={styles.actions}>
          <div className={styles.desktopCta}>
            <ButtonLink href="#contact">Get A Quote</ButtonLink>
          </div>
          <button
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className={styles.menuButton}
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            <Icon name={isOpen ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>
      <div className={clsx(styles.mobilePanel, { [styles.mobilePanelOpen]: isOpen })}>
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
          <ButtonLink href="#contact">Get A Quote</ButtonLink>
        </nav>
      </div>
    </header>
  );
}
