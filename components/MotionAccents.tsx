"use client";

import { motion, useReducedMotion } from "motion/react";

const BRAND = "#7E9146";

/** Soft drifting gradient orbs for ambient hero/section backgrounds. */
export function DriftingOrbs({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const base = (i: number) =>
    reduce
      ? {}
      : {
          animate: {
            x: [0, i % 2 ? 40 : -40, 0],
            y: [0, i % 2 ? -30 : 30, 0],
          },
          transition: {
            duration: 18 + i * 4,
            repeat: Infinity,
            ease: "easeInOut" as const,
          },
        };

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          {...base(i)}
          className="absolute rounded-full opacity-25 blur-3xl"
          style={{
            width: 360 + i * 60,
            height: 360 + i * 60,
            left: `${10 + i * 30}%`,
            top: `${5 + i * 25}%`,
            background: `radial-gradient(circle, ${BRAND} 0%, transparent 70%)`,
          }}
        />
      ))}
    </div>
  );
}

/** Concentric pulsing rings — calm/breath/meditation motif (About). */
export function BreathPulse({ size = 220 }: { size?: number }) {
  const reduce = useReducedMotion();
  return (
    <div
      aria-hidden
      className="pointer-events-none relative"
      style={{ width: size, height: size }}
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute inset-0 rounded-full border"
          style={{ borderColor: `${BRAND}66` }}
          animate={
            reduce
              ? undefined
              : { scale: [0.6, 1.05, 0.6], opacity: [0.6, 0, 0.6] }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1.1,
            ease: "easeInOut",
          }}
        />
      ))}
      <span
        className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: BRAND }}
      />
    </div>
  );
}

/** Animated stepper — sequence of tick marks (New Patients intake motif). */
export function AnimatedTickRow() {
  const reduce = useReducedMotion();
  return (
    <div className="flex items-center gap-3" aria-hidden>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="inline-flex h-7 w-7 items-center justify-center rounded-full text-white"
          style={{ background: BRAND }}
          initial={reduce ? false : { scale: 0, opacity: 0 }}
          whileInView={reduce ? undefined : { scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: i * 0.25, type: "spring", stiffness: 220 }}
        >
          <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3">
            <motion.path
              d="M4 10l4 4 8-8"
              initial={reduce ? false : { pathLength: 0 }}
              whileInView={reduce ? undefined : { pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.25, duration: 0.5 }}
            />
          </svg>
        </motion.span>
      ))}
    </div>
  );
}

/** Calendar tile with a sweeping highlight — Appointments motif. */
export function CalendarGlow({ size = 220 }: { size?: number }) {
  const reduce = useReducedMotion();
  const cells = Array.from({ length: 21 }, (_, i) => i);
  return (
    <div
      aria-hidden
      className="relative rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur"
      style={{ width: size }}
    >
      <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/60">
        <span>May</span>
        <span>2026</span>
      </div>
      <div className="grid grid-cols-7 gap-1.5">
        {cells.map((c) => {
          const highlight = c === 10;
          return (
            <motion.span
              key={c}
              className="aspect-square rounded text-center text-[10px] font-semibold text-white/70"
              style={{
                background: highlight ? BRAND : "rgba(255,255,255,0.06)",
                color: highlight ? "white" : undefined,
              }}
              animate={
                reduce || !highlight
                  ? undefined
                  : { boxShadow: [`0 0 0 0 ${BRAND}99`, `0 0 0 10px ${BRAND}00`] }
              }
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            >
              <span className="flex h-full items-center justify-center">
                {c + 4 > 30 ? "" : c + 4}
              </span>
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}

/** Floating service tiles drifting up-down — Services motif. */
export function FloatingTiles() {
  const reduce = useReducedMotion();
  const items = [
    { label: "Chiropractic", x: "10%", y: "20%" },
    { label: "IV Therapy", x: "65%", y: "15%" },
    { label: "Spinal Decompression", x: "20%", y: "65%" },
    { label: "Joint Injections", x: "60%", y: "60%" },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((it, i) => (
        <motion.div
          key={it.label}
          className="absolute rounded-full bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] shadow-md ring-1 ring-black/5 backdrop-blur"
          style={{
            left: it.x,
            top: it.y,
            color: "#5a6a30",
          }}
          animate={reduce ? undefined : { y: [0, -10, 0] }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        >
          {it.label}
        </motion.div>
      ))}
    </div>
  );
}

/** Body-region pings — Conditions motif. */
export function BodyPings({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const points = [
    { x: 50, y: 20 }, // neck
    { x: 50, y: 38 }, // shoulder
    { x: 50, y: 55 }, // back
    { x: 50, y: 75 }, // knee
  ];
  return (
    <svg
      viewBox="0 0 100 100"
      className={`pointer-events-none ${className}`}
      aria-hidden
    >
      {points.map((p, i) => (
        <g key={i}>
          <motion.circle
            cx={p.x}
            cy={p.y}
            r={2}
            fill={BRAND}
            animate={reduce ? undefined : { r: [2, 6, 2], opacity: [1, 0.3, 1] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            cx={p.x}
            cy={p.y}
            r={2}
            fill="none"
            stroke={BRAND}
            strokeOpacity={0.5}
            animate={reduce ? undefined : { r: [2, 14], opacity: [0.6, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeOut",
            }}
          />
        </g>
      ))}
    </svg>
  );
}

/** Map pin pulse — Contact motif. */
export function MapPinPulse({ size = 64 }: { size?: number }) {
  const reduce = useReducedMotion();
  return (
    <div
      aria-hidden
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {[0, 1].map((i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            width: size,
            height: size,
            background: `${BRAND}33`,
          }}
          animate={reduce ? undefined : { scale: [0.5, 1.4], opacity: [0.7, 0] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            delay: i * 1.1,
            ease: "easeOut",
          }}
        />
      ))}
      <span
        className="relative inline-flex h-8 w-8 items-center justify-center rounded-full text-white shadow-lg"
        style={{ background: BRAND }}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
        </svg>
      </span>
    </div>
  );
}
