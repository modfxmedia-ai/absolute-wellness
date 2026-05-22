import type { ReactNode } from "react";

const BRAND = "#7E9146";

export function SectionPill({
  children,
  icon,
  inverted = false,
}: {
  children: ReactNode;
  icon?: ReactNode;
  inverted?: boolean;
}) {
  if (inverted) {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
        {icon}
        {children}
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]"
      style={{
        borderColor: "rgba(126,145,70,0.25)",
        backgroundColor: "rgba(126,145,70,0.08)",
        color: BRAND,
      }}
    >
      {icon}
      {children}
    </span>
  );
}

export function Dot({ className }: { className?: string }) {
  return <span className={`inline-block h-1.5 w-1.5 rounded-full ${className ?? ""}`} style={{ backgroundColor: BRAND }} />;
}

export const Icons = {
  arrow: (cls?: string) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cls} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  ),
  check: (cls?: string) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden>
      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
    </svg>
  ),
  leaf: (cls?: string) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden>
      <path d="M17 8C8 10 5 16 3 21l1.4 1c1.5-3.5 3.7-6 9.6-7v3l5-5-5-5v3Z" />
    </svg>
  ),
  cross: (cls?: string) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden>
      <path d="M14 4h-4v6H4v4h6v6h4v-6h6v-4h-6z" />
    </svg>
  ),
  shield: (cls?: string) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden>
      <path d="M12 2 4 5v6c0 5 3.4 9.5 8 11 4.6-1.5 8-6 8-11V5l-8-3Zm-1 14-4-4 1.4-1.4L11 13.2l5.6-5.6L18 9l-7 7Z" />
    </svg>
  ),
  calendar: (cls?: string) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cls} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 2v3M17 2v3M3 9h18M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
    </svg>
  ),
  phone: (cls?: string) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden>
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1l-2.22 2.2Z" />
    </svg>
  ),
  pin: (cls?: string) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  ),
  clock: (cls?: string) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cls} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 7v5l3 2" />
    </svg>
  ),
  stetho: (cls?: string) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cls} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v6a4 4 0 0 0 8 0V3M10 13v3a4 4 0 0 0 8 0v-2M18 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
  ),
  user: (cls?: string) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden>
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3 0-9 1.5-9 4.5V21h18v-2.5c0-3-6-4.5-9-4.5Z" />
    </svg>
  ),
  bag: (cls?: string) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden>
      <path d="M9 4h6a2 2 0 0 1 2 2v1h3v13H4V7h3V6a2 2 0 0 1 2-2Zm0 3h6V6H9v1Zm4 5h-2v2H9v2h2v2h2v-2h2v-2h-2v-2Z" />
    </svg>
  ),
  scale: (cls?: string) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden>
      <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm7 3a2 2 0 1 0 .001 4.001A2 2 0 0 0 12 6Zm0 5L8 17h8l-4-6Z" />
    </svg>
  ),
  spine: (cls?: string) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden>
      <path d="M12 2c-3 2-3 4 0 6s3 4 0 6 3 4 0 6 3 4 0 6h2c0-2 3-2 0-6s-3-2 0-6-3-2 0-6 3-2 0-6h-2Z" />
    </svg>
  ),
  hands: (cls?: string) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cls} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V5a1.5 1.5 0 0 1 3 0v6M11 11V4a1.5 1.5 0 0 1 3 0v7M14 11V5a1.5 1.5 0 0 1 3 0v8c0 4-2 7-6 7s-6-3-6-7v-2a1.5 1.5 0 0 1 3 0" />
    </svg>
  ),
  figure: (cls?: string) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden>
      <circle cx="12" cy="4" r="2" />
      <path d="M9 7h6l-1 5 3 8h-2l-2-6-2 6H9l3-8-1-5h-2V7Z" />
    </svg>
  ),
  drip: (cls?: string) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden>
      <path d="M12 2c-3 4-5 7-5 10a5 5 0 0 0 10 0c0-3-2-6-5-10Z" />
    </svg>
  ),
  syringe: (cls?: string) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cls} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="m17 3 4 4M14 6l4 4M5 21l3-3M3.5 19.5l9-9 1 1 2-2 1 1-2 2 1 1-9 9-3-3Z" />
    </svg>
  ),
  star: (cls?: string) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden>
      <path d="M12 2 14.9 8.6 22 9.3l-5.4 4.8 1.6 7L12 17.8 5.8 21l1.6-7L2 9.3l7.1-.7Z" />
    </svg>
  ),
  spark: (cls?: string) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden>
      <path d="M12 2 14 10l8 2-8 2-2 8-2-8-8-2 8-2Z" />
    </svg>
  ),
};
