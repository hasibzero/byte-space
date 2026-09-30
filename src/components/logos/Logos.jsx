import { partnerLogos } from "./logosData";
import styles from "./Logos.module.css";

/**
 * Horizontal strip of partner logos.
 *
 * Each mark is rendered as a CSS mask rather than an <img>. Two reasons:
 * masks let a single colour drive the whole strip, and they work no matter what
 * fill an individual SVG hardcodes. That second point matters here: the stock
 * Vercel mark is a white triangle, which is invisible as an <img> on this white
 * section but renders correctly as a mask.
 *
 * A plain wrapping row rather than a marquee, so it stays readable and needs no
 * duplicated content for screen readers.
 */
export default function Logos() {
  return (
    <section className={styles.logos} aria-label="Partner logos">
      <ul className={styles.list}>
        {partnerLogos.map((logo) => (
          <li
            key={logo.id}
            className={styles.item}
            style={{ "--logo": `url("${logo.src}")` }}
          >
            <span className={styles.mark} aria-hidden="true" />
            <span className={styles.label}>{logo.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
