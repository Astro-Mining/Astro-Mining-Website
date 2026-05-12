"use client";

import clsx from "clsx";
import { useState } from "react";
import Icon from "@/components/shared/Icon";
import styles from "@/components/sections/GlobalReachSection.module.css";

export default function GlobalReachSection({ countries, pins }) {
  const [activePin, setActivePin] = useState(pins[0]);

  return (
    <section className={styles.section}>
      <div className={clsx("container", styles.grid)}>
        <div>
          <span className="eyebrow">Our Global Reach</span>
          <h2 className="section-title">Exporting to many countries worldwide</h2>
          <div className={styles.countryGrid}>
            {countries.map((country) => (
              <button
                key={country}
                className={clsx(styles.countryButton, {
                  [styles.countryButtonActive]: activePin.country === country
                })}
                onMouseEnter={() => setActivePin(pins.find((pin) => pin.country === country) ?? pins[0])}
                type="button"
              >
                • {country}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.mapCard}>
          <div className={styles.mapTexture} />
          <svg
            viewBox="0 0 900 420"
            className={styles.mapShape}
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M61 175c45-61 120-88 199-70 64 14 76 68 136 62 67-7 85-82 172-74 79 7 132 75 194 63 36-7 59-38 87-22 24 14 25 53 4 76-38 42-104 17-151 60-42 39-24 93-79 111-43 14-81-13-126-32-88-37-175 8-246-30-65-34-58-103-112-107-32-2-52 20-78-1-14-12-15-25 0-36Z" />
            <path d="M364 221c37-25 88-21 127 2 28 17 37 44 29 72-12 42-59 51-102 38-49-15-86-74-54-112Z" />
          </svg>
          {pins.map((pin) => (
            <button
              key={pin.country}
              className={styles.pin}
              onMouseEnter={() => setActivePin(pin)}
              style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              type="button"
            >
              <span className={styles.pinMarker}>
                <Icon name="mapPin" size={16} />
              </span>
              <span className={styles.pinPreview}>
                <span className={styles.pinSwatch} style={{ background: pin.tone }} />
                <strong>{pin.project}</strong>
                <span>{pin.country}</span>
              </span>
            </button>
          ))}
          <div className={styles.activeCard}>
            <div className={styles.activeSwatch} style={{ background: activePin.tone }} />
            <div>
              <p>Hover Preview</p>
              <h3>{activePin.project}</h3>
              <span>{activePin.country}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
