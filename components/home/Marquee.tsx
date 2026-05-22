"use client";

import { motion } from "motion/react";

const ITEMS = [
  "Regenerative Medicine",
  "Chiropractic Care",
  "Spinal Decompression",
  "Medical Weight Loss",
  "Nutritional IVs",
  "Joint Injections",
  "Hormone Therapy",
  "Physical Therapy",
  "Eugene, OR",
];

export default function Marquee() {
  // Duplicate to create seamless loop
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-black/5 bg-[#f0f4e8] py-4">
      {/* edge fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
        style={{ background: "linear-gradient(90deg, #f0f4e8, transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
        style={{ background: "linear-gradient(270deg, #f0f4e8, transparent)" }}
      />
      <motion.div
        className="flex w-max gap-3 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="inline-flex items-center gap-2 rounded-full border border-[#7E9146]/20 bg-white px-5 py-2 font-[family-name:var(--font-raleway)] text-sm font-bold uppercase tracking-[0.14em] text-gray-800 shadow-sm transition-colors hover:border-[#7E9146]/50 hover:text-[#5a6a30]"
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "#7E9146" }}
            />
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
