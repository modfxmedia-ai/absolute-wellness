import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/home/Reveal";
import { DotPattern } from "@/components/home/decor";
import { Icons } from "@/components/home/ui";
import { linkifyPhone } from "@/lib/linkify-phone";

const BRAND = "#7E9146";

type Crumb = { label: string; href?: string };

type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "outline" | "call";
};

type Props = {
  title: string;
  subtitle?: string;
  badge?: string;
  image: string;
  breadcrumbs?: Crumb[];
  ctas?: Cta[];
};

export default function PageHero({
  title,
  subtitle,
  badge,
  image,
  breadcrumbs,
  ctas,
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
              {linkifyPhone(subtitle)}
            </p>
          </Reveal>
        )}

        {ctas && ctas.length > 0 && (
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {ctas.map((c) => {
                const variant = c.variant ?? "primary";
                if (variant === "call") {
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      className="relative inline-flex items-center gap-2 rounded-full px-7 py-4 font-[family-name:var(--font-raleway)] text-sm font-black text-white shadow-[0_10px_30px_-12px_rgba(126,145,70,0.7)] transition-transform hover:scale-[1.03]"
                      style={{ backgroundColor: BRAND }}
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 -z-10 rounded-full opacity-50 motion-safe:animate-ping"
                        style={{ background: BRAND }}
                      />
                      {Icons.phone("h-4 w-4")}
                      {c.label}
                    </a>
                  );
                }
                if (variant === "outline") {
                  return (
                    <Link
                      key={c.label}
                      href={c.href}
                      className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-7 py-4 font-[family-name:var(--font-raleway)] text-sm font-black text-white transition-colors hover:bg-white hover:text-[#3d4a1f]"
                    >
                      {c.label}
                      {Icons.arrow("h-4 w-4")}
                    </Link>
                  );
                }
                return (
                  <Link
                    key={c.label}
                    href={c.href}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-[family-name:var(--font-raleway)] text-sm font-black text-[#3d4a1f] transition-transform hover:scale-[1.03]"
                  >
                    {Icons.calendar("h-4 w-4")}
                    {c.label}
                    {Icons.arrow("h-4 w-4")}
                  </Link>
                );
              })}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
