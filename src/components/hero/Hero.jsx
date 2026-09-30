import HeroHeader from "./HeroHeader";
import HeroScene from "./HeroScene";
import HeroSearch from "./HeroSearch";
import { heroCopy } from "./heroData";
import styles from "./Hero.module.css";

/**
 * Landing hero: header, headline copy, course search and the artwork scene.
 *
 * Composed from focused child components so each piece (header, search, scene)
 * can be reused or restyled independently.
 */
export default function Hero() {
  return (
    <section className={styles.hero}>
      <HeroHeader />

      <div className={styles.copy}>
        <h1 className={styles.title}>{heroCopy.title}</h1>
        <p className={styles.subtitle}>{heroCopy.subtitle}</p>
        <HeroSearch />
      </div>

      <div className={styles.visual}>
        <HeroScene />
      </div>
    </section>
  );
}
