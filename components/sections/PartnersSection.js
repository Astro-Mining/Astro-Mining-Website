"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import styles from "@/components/sections/PartnersSection.module.css";

const AUTO_SCROLL_SPEED = 0.45;

export default function PartnersSection({ partners }) {
  const railRef = useRef(null);
  const dragStateRef = useRef({ active: false, startX: 0, startScrollLeft: 0 });
  const animationFrameRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const items = [...partners, ...partners];

  useEffect(() => {
    const rail = railRef.current;

    if (!rail) {
      return undefined;
    }

    const loopWidth = rail.scrollWidth / 2;
    rail.scrollLeft = loopWidth / 2;

    const step = () => {
      if (!dragStateRef.current.active && !isPaused) {
        rail.scrollLeft += AUTO_SCROLL_SPEED;

        if (rail.scrollLeft >= loopWidth) {
          rail.scrollLeft -= loopWidth;
        } else if (rail.scrollLeft <= 0) {
          rail.scrollLeft += loopWidth;
        }
      }

      animationFrameRef.current = window.requestAnimationFrame(step);
    };

    animationFrameRef.current = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused]);

  const handlePointerDown = (event) => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    dragStateRef.current = {
      active: true,
      startX: event.clientX,
      startScrollLeft: rail.scrollLeft
    };

    setIsPaused(true);
    setIsDragging(true);
    rail.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    const rail = railRef.current;
    const dragState = dragStateRef.current;

    if (!rail || !dragState.active) {
      return;
    }

    event.preventDefault();

    const loopWidth = rail.scrollWidth / 2;
    const delta = event.clientX - dragState.startX;
    let nextScrollLeft = dragState.startScrollLeft - delta;

    if (nextScrollLeft >= loopWidth) {
      nextScrollLeft -= loopWidth;
      dragStateRef.current.startScrollLeft -= loopWidth;
    } else if (nextScrollLeft <= 0) {
      nextScrollLeft += loopWidth;
      dragStateRef.current.startScrollLeft += loopWidth;
    }

    rail.scrollLeft = nextScrollLeft;
  };

  const endDrag = (event) => {
    const rail = railRef.current;

    if (!rail || !dragStateRef.current.active) {
      return;
    }

    dragStateRef.current.active = false;
    setIsDragging(false);
    setIsPaused(false);

    if (event.pointerId !== undefined && rail.hasPointerCapture(event.pointerId)) {
      rail.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section className={styles.section} id="partners">
      <div className="container">
        <span className="eyebrow">Our Partners</span>
      </div>
      <div className={styles.railWrap}>
        <div
          aria-label="Partner companies"
          className={clsx(styles.rail, isDragging && styles.dragging)}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onPointerCancel={endDrag}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          ref={railRef}
          role="list"
        >
          {items.map((partner, index) => (
            <article className={styles.partnerCard} key={`${partner.name}-${index}`} role="listitem">
              <div className={styles.logoFrame}>
                <Image
                  alt={partner.alt}
                  className={styles.logo}
                  fill
                  sizes="(max-width: 640px) 72vw, (max-width: 980px) 36vw, 24vw"
                  src={partner.logo}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
