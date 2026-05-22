import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Kept for API compatibility; CSS reveal uses a fixed offset. */
  y?: number;
  as?: "div" | "section" | "article" | "header";
};

// Server component: renders real HTML for SEO and animates in via CSS only.
// Replaces the previous client-only motion wrapper so SSR responses contain
// fully-visible content without depending on JS hydration.
export default function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: Props) {
  const style = delay > 0 ? { animationDelay: `${delay}s` } : undefined;
  return (
    <Tag
      className={`awc-reveal${className ? ` ${className}` : ""}`}
      style={style}
    >
      {children}
    </Tag>
  );
}

