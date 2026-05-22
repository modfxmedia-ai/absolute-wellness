"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Icons, SectionPill } from "./ui";

const BRAND = "#7E9146";

const PANELS = [
  {
    num: "01",
    img: "/images/dog-forest4.jpg",
    alt: "Patient walking a dog through a forest",
    title: "New Patients",
    body:
      "We strive to give our patients the very best care available. We work hard to offer the most up-to-date services so you walk out feeling better every visit.",
    tags: ["Same-Week Appts", "Accepting New Patients", "All Ages Welcome"],
    cta: { label: "Learn More", href: "/new-patients/" },
    icon: Icons.user("h-5 w-5 text-white"),
    pill: "For You",
  },
  {
    num: "02",
    img: "/images/young-couple-running.jpg",
    alt: "Active couple running outdoors",
    title: "Our Services",
    body:
      "Friendly, knowledgeable staff and compassionate care across regenerative medicine, chiropractic, and IV therapy — all under one roof.",
    tags: ["Regenerative Medicine", "Chiropractic", "IV Therapy"],
    cta: { label: "Explore Services", href: "/services/" },
    icon: Icons.bag("h-5 w-5 text-white"),
    pill: "What We Do",
  },
];

export default function FeaturePanels() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9f2] py-24">
      {/* Decorative motion blobs */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(126,145,70,0.25) 0%, transparent 70%)" }}
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -30, 0], y: [0, 22, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(126,145,70,0.18) 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <SectionPill icon={Icons.spark("h-3.5 w-3.5")}>Get Started</SectionPill>
          <h2 className="mt-5 font-[family-name:var(--font-raleway)] text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
            Your path to <span style={{ color: BRAND }}>feeling better</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Whether you&apos;re a new patient or exploring our services, we&apos;re ready
            to help you take the next step.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {PANELS.map((p, i) => (
            <motion.article
              key={p.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden sm:h-80">
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>
                {/* Gradient veil */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.55) 100%)",
                  }}
                />

                {/* Top pill */}
                <div className="absolute left-5 top-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-gray-900 shadow-md backdrop-blur">
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: BRAND }}
                    />
                    {p.pill}
                  </span>
                </div>

                {/* Floating number badge with subtle motion */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute right-5 top-5"
                >
                  <span
                    className="font-[family-name:var(--font-raleway)] text-5xl font-black leading-none text-white/90 drop-shadow-lg"
                    style={{ WebkitTextStroke: "1px rgba(126,145,70,0.6)" }}
                  >
                    {p.num}
                  </span>
                </motion.div>

                {/* Title overlaid on image bottom */}
                <div className="absolute inset-x-0 bottom-0 flex items-end gap-4 p-6">
                  <motion.span
                    whileHover={{ rotate: 6, scale: 1.08 }}
                    className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl shadow-lg"
                    style={{ backgroundColor: BRAND }}
                  >
                    {p.icon}
                  </motion.span>
                  <h3 className="font-[family-name:var(--font-raleway)] text-3xl font-black tracking-tight text-white drop-shadow-md sm:text-4xl">
                    {p.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="relative p-7 sm:p-8">
                {/* Animated top accent line */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"
                  style={{ backgroundColor: BRAND }}
                />
                <p className="text-base leading-7 text-gray-600">{p.body}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-[#f7f9f2] px-3 py-1.5 text-xs font-semibold text-[#5a6a30] ring-1 ring-[#7E9146]/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={p.cta.href}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 font-[family-name:var(--font-raleway)] text-base font-bold text-white shadow-md transition-all hover:gap-3 hover:shadow-lg"
                  style={{ boxShadow: "0 14px 30px -10px rgba(0,0,0,0.35)" }}
                >
                  {p.cta.label}
                  <motion.span
                    aria-hidden
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
