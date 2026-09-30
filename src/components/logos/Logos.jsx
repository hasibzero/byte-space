import Image from "next/image";
import { partnerLogos } from "./logosData";
import styles from "./Logos.module.css";

/**
 * Partner logo strip.
 *
 * A wrapping flex row rather than a single pre-composed raster, so the marks
 * reflow across lines on narrow screens instead of shrinking to the point of
 * illegibility. Each item keeps its intrinsic aspect ratio.
 */
export default function Logos() {
  return (
    <section className={styles.logos} aria-label="Our partners">
      <ul className={styles.list}>
        {partnerLogos.map((logo) => (
          <li key={logo.id} className={styles.item}>
            <Image
              className={styles.image}
              src={logo.src}
              alt={logo.name}
              width={170}
              height={42}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
