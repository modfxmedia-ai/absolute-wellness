"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Icons, SectionPill } from "./ui";

const BRAND = "#7E9146";

type Condition = {
  name: string;
  href: string;
  icon: (cls?: string) => React.ReactNode;
};

const ROW_ONE: Condition[] = [
  { name: "Back Pain", href: "/back-pain/", icon: Icons.spine },
  { name: "Neck Pain", href: "/neck-pain/", icon: Icons.spine },
  { name: "Shoulder Pain", href: "/shoulder-pain/", icon: Icons.hands },
  { name: "Knee Pain", href: "/knee-pain/", icon: Icons.figure },
  { name: "Whiplash", href: "/whiplash/", icon: Icons.spine },
];

const ROW_TWO: Condition[] = [
  { name: "Joint Pain", href: "/joint-pain/", icon: Icons.scale },
  { name: "Pain Relief", href: "/pain-relief/", icon: Icons.shield },
  { name: "Neuropathy", href: "/neuropathy/", icon: Icons.drip },
  { name: "Auto Injury", href: "/auto-injury/", icon: Icons.figure },
  { name: "Hormonal Imbalance", href: "/hormonal-imbalance/", icon: Icons.leaf },
];

function ConditionCard({ c }: { c: Condition }) {
  return (
    <Link
      href={c.href}
      aria-label={`Learn more about ${c.name}`}
      className="group/card flex w-[320px] flex-shrink-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-[#7E9146]/40 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8cd7a] sm:w-[340px]"
    >
      <span
        className="inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl text-white shadow-lg transition-transform group-hover/card:scale-110 group-hover/card:rotate-3"
        style={{ backgroundColor: BRAND, boxShadow: "0 10px 24px -10px rgba(126,145,70,0.55)" }}
      >
        {c.icon("h-6 w-6")}
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-[family-name:var(--font-raleway)] text-lg font-bold text-white">
          {c.name}
        </p>
        <p className="mt-1 inline-flex items-center gap-1 text-sm text-gray-400 transition-colors group-hover/card:text-[#b8cd7a]">
          Learn more
          <svg className="h-3.5 w-3.5 transition-transform group-hover/card:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </p>
      </div>
    </Link>
  );
}

function ScrollRow({
  items,
  reverse = false,
  duration = 40,
}: {
  items: Condition[];
  reverse?: boolean;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  // Duplicate items so the loop appears seamless
  const loop = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <motion.div
        className="flex w-max gap-4"
        animate={
          reduce
            ? undefined
            : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }
        }
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {loop.map((c, i) => (
          <ConditionCard key={`${c.name}-${i}`} c={c} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Conditions() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white">
      {/* Decorative dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Motion blobs */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-20 left-1/4 h-72 w-72 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(126,145,70,0.4) 0%, transparent 70%)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-20 right-1/4 h-80 w-80 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(126,145,70,0.28) 0%, transparent 70%)",
        }}
      />

      <div className="relative">
        {/* Header — constrained width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-14 max-w-3xl px-6 text-center"
        >
          <SectionPill icon={Icons.shield("h-3.5 w-3.5")} inverted>
            Conditions We Treat
          </SectionPill>
          <h2 className="mt-5 font-[family-name:var(--font-raleway)] text-4xl font-black tracking-tight sm:text-5xl">
            Real relief for{" "}
            <span style={{ color: BRAND }}>real conditions</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-400">
            From everyday aches to chronic pain, our regenerative and
            chiropractic care helps patients get back to the life they love.
          </p>

          {/* Animated stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-7 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-2.5 text-sm text-gray-400 backdrop-blur"
          >
            <span className="inline-flex items-center gap-2">
              <span
                className="inline-block h-1.5 w-1.5 animate-pulse rounded-full"
                style={{ backgroundColor: BRAND }}
              />
              <span className="font-semibold text-white">10</span> conditions
              treated
            </span>
            <span className="hidden h-3 w-px bg-white/20 sm:inline-block" />
            <span>
              <span className="font-semibold text-white">Non-surgical</span>{" "}
              options
            </span>
            <span className="hidden h-3 w-px bg-white/20 sm:inline-block" />
            <span>
              <span className="font-semibold text-white">Drug-free</span>{" "}
              alternatives
            </span>
          </motion.div>
        </motion.div>

        {/* Scrolling rows — bleed full width for marquee effect */}
        <div className="space-y-4">
          <ScrollRow items={ROW_ONE} duration={45} />
          <ScrollRow items={ROW_TWO} reverse duration={55} />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mx-auto mt-14 max-w-3xl px-6 text-center"
        >
          <p className="text-base text-gray-400">
            Don&apos;t see your condition listed?
          </p>
          <Link
            href="/contact/"
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-[family-name:var(--font-raleway)] text-base font-bold text-gray-900 shadow-lg transition-all hover:gap-3 hover:bg-[#7E9146] hover:text-white"
          >
            Talk to our team
            <motion.span
              aria-hidden
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
