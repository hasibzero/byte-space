/**
 * Category icons.
 *
 * Inlined rather than loaded as image files so they inherit `currentColor`
 * from the lime circle behind them and stay crisp at any size. All share a
 * 24x24 viewBox and use stroke-based geometry for a consistent weight.
 */

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

/** Crossed pencil and ruler. */
function DesignIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 20 14.5 9.5" />
      <path d="m13 7 4 4" />
      <path d="m16 4 4 4-3 3-4-4 3-3Z" />
      <path d="m4 14 6 6" />
      <path d="M7 11 3 15" />
    </svg>
  );
}

/** Code brackets with a slash. */
function CodeIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="m8 6-5 6 5 6" />
      <path d="m16 6 5 6-5 6" />
      <path d="m13.5 4-3 16" />
    </svg>
  );
}

/** Laptop. */
function LaptopIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <rect x="4" y="5" width="16" height="10" rx="1.5" />
      <path d="M2 19h20" />
    </svg>
  );
}

/** Briefcase. */
function BriefcaseIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
      <path d="M3 12h18" />
    </svg>
  );
}

/** Megaphone. */
function MegaphoneIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 10v4a1 1 0 0 0 1 1h2l6 4V5L7 9H5a1 1 0 0 0-1 1Z" />
      <path d="M17 9.5a3.5 3.5 0 0 1 0 5" />
      <path d="M6 15v3a1.5 1.5 0 0 0 3 0v-2" />
    </svg>
  );
}

/** Camera. */
function CameraIcon({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2.2a1 1 0 0 0 .8-.4l1-1.2h6.9l1 1.2a1 1 0 0 0 .8.4h2.3A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-9Z" />
      <circle cx="12" cy="13" r="3.2" />
    </svg>
  );
}

const ICONS = {
  design: DesignIcon,
  code: CodeIcon,
  laptop: LaptopIcon,
  briefcase: BriefcaseIcon,
  megaphone: MegaphoneIcon,
  camera: CameraIcon,
};

/** Resolves a category icon name to its component. */
export default function CategoryIcon({ name, className }) {
  const Icon = ICONS[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}
