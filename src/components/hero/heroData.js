/**
 * Central configuration for the hero section.
 *
 * Keeping copy, asset paths and intrinsic image dimensions in one place means
 * a design change (new headline, swapped asset, resized export) is a one-line
 * edit instead of a hunt through the component tree.
 */

const ASSETS = "/assests/hero assests";

/**
 * Intrinsic pixel dimensions of the source PNGs. `next/image` requires these
 * to reserve layout space and avoid layout shift while the image loads.
 */
export const heroAssets = {
  logo: { file: "Header_Logo.png", width: 171, height: 37 },
  person: { file: "Image.png", width: 722, height: 515 },
  glow: { file: "Ellipse 7.png", width: 1149, height: 442 },
  squiggle: { file: "Mask Group.png", width: 176, height: 176 },
  ring: { file: "Mask Group (1).png", width: 344, height: 343 },
  cone: { file: "Cone.png", width: 190, height: 189 },
  greenCone: { file: "Cone (1).png", width: 213, height: 372 },
  scribble: { file: "Frame.png", width: 267, height: 387 },
  uiuxCard: { file: "Auto Layout Vertical.png", width: 208, height: 70 },
  progressCard: { file: "Auto Layout Vertical (2).png", width: 232, height: 131 },
  studentsCard: { file: "Auto Layout Vertical (1).png", width: 258, height: 121 },
};

/** Builds a public path for a hero asset. */
export function asset(name) {
  const entry = heroAssets[name];
  if (!entry) {
    throw new Error(`Unknown hero asset: "${name}"`);
  }
  return `${ASSETS}/${entry.file}`;
}

export const heroNav = [
  { label: "Home", href: "#" },
  { label: "Courses", href: "#" },
  { label: "Creators", href: "#" },
];

export const heroActions = [
  { label: "Sign In", href: "#" },
  { label: "Join Us", href: "#" },
];

export const heroCopy = {
  title: "Get Access to Hundreds Courses Available",
  subtitle:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
  searchPlaceholder: "Course, topic, creator",
  searchLabel: "Search courses",
  searchButton: "Search",
};
