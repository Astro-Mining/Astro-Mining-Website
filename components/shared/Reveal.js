"use client";

import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animation";

export default function Reveal({ className = "", children }) {
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!isClient) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={false}
      transition={fadeUp.visible.transition}
      variants={fadeUp}
      viewport={{ once: true, amount: 0.25 }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}
