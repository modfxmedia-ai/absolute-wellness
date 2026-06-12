"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "@/components/home/Reveal";
import { Icons, SectionPill } from "@/components/home/ui";
import { linkifyPhone } from "@/lib/linkify-phone";

const BRAND = "#7E9146";

export type FAQ = { q: string; a: string };

export default function ServiceFAQ({
  faqs,
  heading = "Frequently Asked",
  accent = "Questions",
  pill = "FAQ",
}: {
  faqs: FAQ[];
  heading?: string;
  accent?: string;
  pill?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-10 h-[420px] w-[420px] rounded-full opacity-[0.08] blur-3xl"
        style={{ background: `radial-gradient(circle, ${BRAND} 0%, transparent 70%)` }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${BRAND}33, transparent)`,
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="text-center">
          <Reveal>
            <SectionPill icon={Icons.spark("h-3.5 w-3.5")}>{pill}</SectionPill>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-[family-name:var(--font-raleway)] text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
              {heading} <span style={{ color: BRAND }}>{accent}</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div
                  className={`overflow-hidden rounded-2xl bg-white shadow-sm ring-1 transition-all ${
                    isOpen
                      ? "shadow-md ring-[#7E9146]/40"
                      : "ring-black/5 hover:ring-black/10"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-[family-name:var(--font-raleway)] text-base font-bold text-gray-900 sm:text-lg">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: BRAND }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="h-4 w-4"
                        aria-hidden
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 font-[family-name:var(--font-lato)] text-base leading-7 text-gray-600">
                          {linkifyPhone(f.a)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
