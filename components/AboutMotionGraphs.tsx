"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const BRAND = "#7E9146";
const BRAND_DARK = "#5a6a30";
const BRAND_LIGHT = "#b8cd7a";

function Counter({
  to,
  suffix = "",
  duration = 1.6,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

/** Animated SVG area chart — "Healing Progress" over 8 weeks. */
function HealingChart() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  // Smooth, rising progress curve (Y inverted: lower = better)
  const w = 320;
  const h = 140;
  const pad = { l: 8, r: 8, t: 12, b: 18 };
  const points = [82, 74, 68, 55, 42, 33, 24, 16];
  const stepX = (w - pad.l - pad.r) / (points.length - 1);
  const toY = (v: number) => pad.t + (v / 100) * (h - pad.t - pad.b);
  const coords = points.map((p, i) => [pad.l + i * stepX, toY(p)] as const);
  const linePath = coords
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ");
  const areaPath = `${linePath} L${coords[coords.length - 1][0].toFixed(1)},${h - pad.b} L${coords[0][0].toFixed(1)},${h - pad.b} Z`;

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${w} ${h}`}
      className="block h-auto w-full"
      role="img"
      aria-label="Healing progress trend over eight weeks"
    >
      <defs>
        <linearGradient id="awc-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={BRAND} stopOpacity={0.35} />
          <stop offset="100%" stopColor={BRAND} stopOpacity={0} />
        </linearGradient>
        <linearGradient id="awc-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={BRAND_DARK} />
          <stop offset="100%" stopColor={BRAND_LIGHT} />
        </linearGradient>
      </defs>

      {/* gridlines */}
      {[0.25, 0.5, 0.75].map((g) => (
        <line
          key={g}
          x1={pad.l}
          x2={w - pad.r}
          y1={pad.t + g * (h - pad.t - pad.b)}
          y2={pad.t + g * (h - pad.t - pad.b)}
          stroke="#e5e7eb"
          strokeDasharray="2 4"
        />
      ))}

      {/* area fill — fade in */}
      <motion.path
        d={areaPath}
        fill="url(#awc-area)"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.0 }}
      />

      {/* animated line stroke */}
      <motion.path
        d={linePath}
        fill="none"
        stroke="url(#awc-line)"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={inView && !reduce ? { pathLength: 1 } : { pathLength: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      />

      {/* points */}
      {coords.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r={3.5}
          fill="white"
          stroke={BRAND}
          strokeWidth={2}
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.35, delay: 0.35 + i * 0.12 }}
          style={{ transformOrigin: `${x}px ${y}px` }}
        />
      ))}

      {/* x labels */}
      {["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"].map((l, i) => (
        <text
          key={l}
          x={pad.l + i * stepX}
          y={h - 4}
          textAnchor="middle"
          fontSize="9"
          fill="#9ca3af"
          fontFamily="ui-sans-serif, system-ui"
        >
          {l}
        </text>
      ))}
    </svg>
  );
}

/** Circular progress ring. */
function Ring({
  value,
  label,
  delay = 0,
}: {
  value: number;
  label: string;
  delay?: number;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const size = 88;
  const stroke = 8;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - value / 100);

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg ref={ref} width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke="#eef0e6"
            strokeWidth={stroke}
            fill="none"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke={BRAND}
            strokeWidth={stroke}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            animate={inView ? { strokeDashoffset: reduce ? offset : offset } : {}}
            transition={{ duration: 1.4, delay, ease: "easeOut" }}
          />
        </svg>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center font-[family-name:var(--font-raleway)] text-lg font-black text-gray-900">
          <Counter to={value} suffix="%" duration={1.4} />
        </div>
      </div>
      <div className="mt-2 text-center text-[11px] font-semibold uppercase tracking-wide text-gray-500">
        {label}
      </div>
    </div>
  );
}

export default function AboutMotionGraphs() {
  return (
    <div className="mt-6 flex flex-col gap-5">
      {/* Stat strip */}
      <div className="grid grid-cols-3 overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5">
        {[
          { value: 9, suffix: "+", label: "Years in Eugene" },
          { value: 22, suffix: "", label: "Services" },
          { value: 4980, suffix: "+", label: "Patients Helped" },
        ].map((s, i) => (
          <div
            key={s.label}
            className={`px-3 py-4 text-center ${i > 0 ? "border-l border-gray-100" : ""}`}
          >
            <div
              className="font-[family-name:var(--font-raleway)] text-2xl font-black"
              style={{ color: BRAND_DARK }}
            >
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-gray-500">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Chart card */}
      <div className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-black/5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
              Avg. Patient Recovery
            </div>
            <div className="font-[family-name:var(--font-raleway)] text-lg font-black text-gray-900">
              Pain &amp; Symptom Decline
            </div>
          </div>
          <div
            className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
            style={{ backgroundColor: BRAND }}
          >
            8 Weeks
          </div>
        </div>
        <div className="mt-3">
          <HealingChart />
        </div>
        <div className="mt-2 flex items-center justify-between text-[11px] text-gray-500">
          <span>Start of care</span>
          <span
            className="font-bold"
            style={{ color: BRAND_DARK }}
          >
            <Counter to={84} suffix="% improvement" />
          </span>
        </div>
      </div>

      {/* Rings */}
      <div className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-black/5">
        <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
          Patient Outcomes
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <Ring value={96} label="Satisfaction" delay={0.0} />
          <Ring value={89} label="Returned" delay={0.15} />
          <Ring value={92} label="Referred" delay={0.3} />
        </div>
      </div>
    </div>
  );
}
