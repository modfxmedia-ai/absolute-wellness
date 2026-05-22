import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/home/Reveal";
import { DotPattern } from "@/components/home/decor";

const BRAND = "#7E9146";

type Crumb = { label: string; href?: string };

type Props = {
  title: string;
  subtitle?: string;
  badge?: string;
  image: string;
  breadcrumbs?: Crumb[];
};

export default function PageHero({
  title,
  subtitle,
  badge,
  image,
  breadcrumbs,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] text-white">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/85 to-[#0a0a0a]/50" />
      </div>

      <DotPattern color="rgba(255,255,255,0.05)" />

      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/3 h-[360px] w-[360px] rounded-full opacity-25 blur-3xl"
        style={{ background: `radial-gradient(circle, ${BRAND} 0%, transparent 70%)` }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gray-400"
          >
            {breadcrumbs.map((c, i) => (
              <span key={`${c.label}-${i}`} className="flex items-center gap-2">
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <span aria-hidden className="text-gray-600">/</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {badge && (
          <Reveal>
            <span
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: BRAND }}
              />
              {badge}
            </span>
          </Reveal>
        )}

        <Reveal delay={0.08}>
          <h1 className="mt-5 font-[family-name:var(--font-raleway)] text-5xl font-black tracking-tight sm:text-6xl">
            {title}
          </h1>
        </Reveal>

        {subtitle && (
          <Reveal delay={0.14}>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-300">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
