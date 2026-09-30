import Image from "next/image";
import { ctaFrame, creatorCta } from "./ctaData";
import styles from "./CreatorCta.module.css";

/**
 * Creator call-to-action band.
 *
 * The visual is a single pre-composed export carrying the grid and every
 * decorative shape in its designed position, so this component only lays the
 * copy over it. The CSS grid background is deliberately not repeated here,
 * since the export already contains one and layering both would misalign.
 */
export default function CreatorCta() {
  return (
    <section className={styles.section} aria-labelledby="creator-cta-heading">
      <Image
        className={styles.frame}
        src={ctaFrame.src}
        alt=""
        fill
        sizes="100vw"
      />

      <div className={styles.inner}>
        <h2 id="creator-cta-heading" className={styles.title}>
          {creatorCta.title}
        </h2>
        <p className={styles.body}>{creatorCta.body}</p>
        <a href={creatorCta.actionHref} className={styles.action}>
          {creatorCta.action}
        </a>
      </div>
    </section>
  );
}
