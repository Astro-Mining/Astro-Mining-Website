"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animation";

export default function Reveal({ className = "", children }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      variants={fadeUp}
      viewport={{ once: true, amount: 0.25 }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}
