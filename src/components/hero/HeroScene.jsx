import Image from "next/image";
import { asset, heroAssets } from "./heroData";
import styles from "./HeroScene.module.css";

/**
 * Decorative wall shapes. Purely presentational, so each is marked decorative
 * with an empty alt rather than given a description.
 *
 * Every entry carries an explicit `className` because the same artwork is
 * reused on both walls (the squiggle appears left and right) and needs
 * different placement on each side.
 */
const DECORATIONS = [
  { asset: "scribble", className: "scribble" },
  { asset: "squiggle", className: "squiggleLeft" },
  { asset: "ring", className: "ring" },
  { asset: "greenCone", className: "greenCone" },
  { asset: "cone", className: "cone" },
  { asset: "squiggle", className: "squiggleRight" },
];

/** Floating stat cards layered over the hero illustration. */
const CARDS = [
  {
    asset: "uiuxCard",
    className: "uiux",
    alt: "UI/UX Design: 200 courses, 1000+ students",
  },
  {
    asset: "progressCard",
    className: "progress",
    alt: "Learning progress: 55 percent",
  },
  {
    asset: "studentsCard",
    className: "students",
    alt: "Happy students rated 4.5 from 240 reviews",
  },
];

function sizes(name) {
  const { width, height } = heroAssets[name];
  return { width, height };
}

/**
 * The hero artwork: a student illustration over a lime arc, surrounded by
 * decorative shapes and floating stat cards.
 */
export default function HeroScene() {
  return (
    <div className={styles.scene}>
      {DECORATIONS.map((item) => (
        <Image
          key={item.className}
          className={`${styles.decor} ${styles[item.className]}`}
          src={asset(item.asset)}
          alt=""
          {...sizes(item.asset)}
        />
      ))}

      <Image
        className={styles.glow}
        src={asset("glow")}
        alt=""
        {...sizes("glow")}
      />

      <Image
        className={styles.person}
        src={asset("person")}
        alt="Student learning on a laptop"
        {...sizes("person")}
        preload
      />

      {CARDS.map((item) => (
        <Image
          key={item.className}
          className={`${styles.card} ${styles[item.className]}`}
          src={asset(item.asset)}
          alt={item.alt}
          {...sizes(item.asset)}
        />
      ))}
    </div>
  );
}
