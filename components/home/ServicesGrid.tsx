"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import type { MouseEvent, ReactNode } from "react";
import { Icons } from "./ui";

const BRAND = "#7E9146";

type Service = {
  title: string;
  image: string;
  href: string;
  number: string;
  icon: ReactNode;
};

const SERVICES: Service[] = [
  { number: "01", title: "Medical Weight Loss", image: "/images/weight-loss-3-1.jpg", href: "/medical-weight-loss/", icon: Icons.scale("h-5 w-5 text-white") },
  { number: "02", title: "Spinal Decompression", image: "/images/spinaldecompression_img.jpg", href: "/spinal-decompression/", icon: Icons.spine("h-5 w-5 text-white") },
  { number: "03", title: "Chiropractic Care", image: "/images/chiropracticcare_img.jpg", href: "/chiropractic-care/", icon: Icons.hands("h-5 w-5 text-white") },
  { number: "04", title: "Therapeutic Exercise", image: "/images/correctiveexercises_img.jpg", href: "/physical-therapy/", icon: Icons.figure("h-5 w-5 text-white") },
  { number: "05", title: "Nutritional IV's", image: "/images/IV-Therapy-2.jpg", href: "/nutritional-ivs/", icon: Icons.drip("h-5 w-5 text-white") },
  { number: "06", title: "Joint Injections", image: "/images/medical-injections.jpg", href: "/joint-injections/", icon: Icons.syringe("h-5 w-5 text-white") },
];

function ServiceCard({ s, i }: { s: Service; i: number }) {
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const bg = useMotionTemplate`radial-gradient(240px circle at ${mx}% ${my}%, rgba(126,145,70,0.45), transparent 70%)`;

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: i * 0.07, ease: "easeOut" }}
      whileHover={{ y: -6 }}
    >
      <Link
        href={s.href}
        onMouseMove={onMove}
        className="group relative block h-72 overflow-hidden rounded-2xl ring-1 ring-white/10"
      >
        <Image
          src={s.image}
          alt={s.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

        <motion.div
          aria-hidden
          style={{ background: bg }}
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <span
          className="absolute left-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
          style={{ backgroundColor: BRAND }}
        >
          {s.icon}
        </span>

        <span className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 font-[family-name:var(--font-raleway)] text-sm font-bold text-white backdrop-blur">
          {s.number}
        </span>

        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
          <h3 className="font-[family-name:var(--font-raleway)] text-2xl font-bold text-white drop-shadow">
            {s.title}
          </h3>
          <span className="inline-flex translate-x-1 items-center gap-1 rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-semibold text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            Explore →
          </span>
        </div>

        <div
          className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
          style={{ backgroundColor: BRAND }}
        />
      </Link>
    </motion.div>
  );
}

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((s, i) => (
        <ServiceCard key={s.title} s={s} i={i} />
      ))}
    </div>
  );
}
