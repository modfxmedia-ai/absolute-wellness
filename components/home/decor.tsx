export function WaveDivider({
  flip = false,
  fill = "#ffffff",
  className = "",
}: {
  flip?: boolean;
  fill?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none w-full leading-[0] ${className}`}
      style={{ transform: flip ? "rotate(180deg)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-[60px] w-full sm:h-[80px]"
      >
        <path
          fill={fill}
          d="M0,40 C240,80 480,0 720,32 C960,64 1200,8 1440,40 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  );
}

export function DotPattern({
  className = "",
  color = "rgba(255,255,255,0.08)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
        backgroundSize: "22px 22px",
      }}
    />
  );
}

export function GridPattern({
  className = "",
  color = "rgba(0,0,0,0.05)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
        backgroundSize: "44px 44px",
      }}
    />
  );
}
