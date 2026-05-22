"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import Reveal from "./Reveal";
import { Icons, SectionPill } from "./ui";

const BRAND = "#7E9146";

const steps = [
  {
    n: "01",
    icon: Icons.scale("h-5 w-5"),
    title: "Efficient on-site diagnosis",
    body: "State-of-the-art digital X-ray equipment on-site means you're fully informed about your condition before treatment begins.",
  },
  {
    n: "02",
    icon: Icons.user("h-5 w-5"),
    title: "Individualized treatment plans",
    body: "Every patient has unique needs and concerns. We adapt each plan to address what makes your case different.",
  },
  {
    n: "03",
    icon: Icons.leaf("h-5 w-5"),
    title: "Hands-on, innovative care",
    body: "Effective hands-on care and innovative medicine services for patients who want to avoid taking medications or having surgery.",
  },
];

const vitals = [
  { label: "X-Ray", value: "On-site" },
  { label: "Cold Laser", value: "Therapy" },
  { label: "Chiropractic", value: "Hands-on" },
];

export default function Approach() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-28 text-white">
      {/* Animated mesh gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${BRAND} 0%, transparent 65%)`, opacity: 0.35 }}
          animate={reduce ? undefined : { x: [0, 60, -20, 0], y: [0, 40, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-120px] top-1/3 h-[460px] w-[460px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, #b8cd7a 0%, transparent 65%)", opacity: 0.22 }}
          animate={reduce ? undefined : { x: [0, -50, 30, 0], y: [0, -40, 20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-80px] left-1/3 h-[380px] w-[380px] rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${BRAND} 0%, transparent 70%)`, opacity: 0.18 }}
          animate={reduce ? undefined : { x: [0, 30, -40, 0], y: [0, -20, 30, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Subtle grid spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20">
          {/* LEFT — narrative + numbered process */}
          <div>
            <Reveal>
              <SectionPill icon={Icons.spark("h-3.5 w-3.5")} inverted>
                A Multidisciplinary Approach
              </SectionPill>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-[family-name:var(--font-raleway)] text-4xl font-black tracking-tight sm:text-5xl">
                Relieving pain.{" "}
                <span style={{ color: BRAND }}>Improving function.</span>{" "}
                Better well-being.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-xl text-base leading-7 text-gray-400">
                A welcoming, relaxed environment for innovative, multidisciplinary
                care — helping patients with sciatica, neuropathy, arthritis,
                whiplash, and musculoskeletal pain.
              </p>
            </Reveal>

            <ol className="mt-10 space-y-4">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={0.08 * i}>
                  <li className="group relative flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition-all hover:border-[#7E9146]/40 hover:bg-white/[0.06]">
                    <div className="flex flex-col items-center">
                      <span
                        className="font-[family-name:var(--font-raleway)] text-3xl font-black leading-none"
                        style={{ color: BRAND }}
                      >
                        {s.n}
                      </span>
                      {i < steps.length - 1 && (
                        <span
                          aria-hidden
                          className="mt-2 h-10 w-px bg-gradient-to-b from-[#7E9146]/40 to-transparent"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="inline-flex h-8 w-8 items-center justify-center rounded-lg transition-transform group-hover:scale-110"
                          style={{
                            backgroundColor: "rgba(126,145,70,0.18)",
                            color: BRAND,
                          }}
                        >
                          {s.icon}
                        </span>
                        <h3 className="font-[family-name:var(--font-raleway)] text-lg font-bold">
                          {s.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-gray-400">
                        {s.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* RIGHT — animated diagnostic monitor */}
          <Reveal delay={0.15}>
            <div className="relative">
              {/* Pulsing rings */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
              >
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="absolute h-72 w-72 rounded-full border"
                    style={{ borderColor: "rgba(126,145,70,0.25)" }}
                    animate={
                      reduce
                        ? undefined
                        : { scale: [1, 1.45], opacity: [0.5, 0] }
                    }
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: i * 1.3,
                    }}
                  />
                ))}
              </div>

              <div
                aria-hidden
                className="absolute -inset-2 rounded-[32px] opacity-30 blur-2xl"
                style={{
                  background: `linear-gradient(135deg, ${BRAND} 0%, transparent 70%)`,
                }}
              />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 shadow-2xl backdrop-blur-xl sm:p-10">
                {/* Top bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1">
                    <motion.span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: BRAND }}
                      animate={reduce ? undefined : { opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.6, repeat: Infinity }}
                    />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-300">
                      Live diagnostics
                    </span>
                  </div>
                </div>

                {/* Animated waveform */}
                <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-black/40 p-4">
                  <svg viewBox="0 0 400 80" className="h-20 w-full" aria-hidden>
                    <defs>
                      <linearGradient id="awc-pulse" x1="0" x2="1">
                        <stop offset="0%" stopColor={BRAND} stopOpacity="0" />
                        <stop offset="50%" stopColor={BRAND} stopOpacity="1" />
                        <stop offset="100%" stopColor={BRAND} stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M0 40 L80 40 L100 40 L110 20 L120 60 L130 10 L140 70 L150 40 L240 40 L260 40 L270 25 L280 55 L290 15 L300 65 L310 40 L400 40"
                      fill="none"
                      stroke="url(#awc-pulse)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ strokeDasharray: "400 400" }}
                      animate={
                        reduce ? undefined : { strokeDashoffset: [0, -800] }
                      }
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </svg>
                </div>

                {/* Vitals grid */}
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {vitals.map((v, i) => (
                    <motion.div
                      key={v.label}
                      className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center"
                      animate={reduce ? undefined : { y: [0, -3, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.4,
                      }}
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                        {v.label}
                      </p>
                      <p
                        className="mt-1 font-[family-name:var(--font-raleway)] text-sm font-bold"
                        style={{ color: BRAND }}
                      >
                        {v.value}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Status line */}
                <div className="mt-6 flex items-center justify-between rounded-xl border border-[#7E9146]/30 bg-[#7E9146]/10 px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor: "rgba(126,145,70,0.25)",
                        color: BRAND,
                      }}
                    >
                      {Icons.check("h-4 w-4")}
                    </span>
                    <p className="text-sm font-semibold text-white">
                      Fully informed before treatment begins.
                    </p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/appointments/"
                    className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3 font-[family-name:var(--font-raleway)] text-sm font-bold text-white transition-transform hover:scale-[1.02]"
                    style={{ backgroundColor: BRAND }}
                  >
                    Request an Appointment
                    <motion.span
                      className="inline-flex"
                      animate={reduce ? undefined : { x: [0, 4, 0] }}
                      transition={{ duration: 1.4, repeat: Infinity }}
                    >
                      {Icons.arrow("h-4 w-4")}
                    </motion.span>
                  </Link>
                  <a
                    href="tel:+15414845777"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-[family-name:var(--font-raleway)] text-sm font-bold text-white transition-colors hover:border-[#7E9146]"
                  >
                    {Icons.phone("h-4 w-4")}
                    (541) 484-5777
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
