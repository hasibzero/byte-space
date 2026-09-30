import Image from "next/image";
import styles from "./Logos.module.css";

/**
 * Partner logo strip.
 *
 * The five marks ship as a single pre-composed raster rather than separate
 * files, so the row scales as one unit and keeps the exact spacing from the
 * design. Because it is one image it cannot reflow across lines on narrow
 * screens — see the note in Logos.module.css.
 */
export default function Logos() {
  return (
    <section className={styles.logos} aria-label="Our partners">
      <Image
        className={styles.image}
        src="/assests/Logo_Partner.png"
        alt="Logoispsum, Solor, Ventex, Apex, Nimbus"
        width={1132}
        height={42}
      />
    </section>
  );
}
