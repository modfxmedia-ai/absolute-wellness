import type { ReactNode } from "react";

const PHONE_DISPLAY = "(541) 484-5777";
const PHONE_HREF = "tel:+15414845777";

/**
 * Splits a string on the clinic phone number and returns React nodes with a
 * tappable tel: link in place of each occurrence. Inherits the surrounding
 * text color via `currentColor` so it works on any background.
 */
export function linkifyPhone(text: string): ReactNode {
  if (!text.includes(PHONE_DISPLAY)) return text;
  const parts = text.split(PHONE_DISPLAY);
  const out: ReactNode[] = [];
  parts.forEach((part, i) => {
    out.push(part);
    if (i < parts.length - 1) {
      out.push(
        <a
          key={`tel-${i}`}
          href={PHONE_HREF}
          className="font-bold underline decoration-2 underline-offset-2 transition-opacity hover:opacity-80"
          style={{ color: "currentColor" }}
        >
          {PHONE_DISPLAY}
        </a>
      );
    }
  });
  return out;
}
