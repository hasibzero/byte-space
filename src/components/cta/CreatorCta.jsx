import Image from "next/image";
import { ctaDecorations, creatorCta } from "./ctaData";
import styles from "./CreatorCta.module.css";

/**
 * Creator call-to-action band.
 *
 * Sits on the same blue grid surface as the hero and reuses the hero shape
 * exports, so the two sections read as one visual language.
 */
export default function CreatorCta() {
  return (
    <section className={styles.section} aria-labelledby="creator-cta-heading">
      {ctaDecorations.map((shape) =>
        shape.kind === "mask" ? (
          <span
            key={shape.id}
            className={`${styles.decor} ${styles[shape.position]} ${styles.masked}`}
            style={{ "--shape": `url("${shape.src}")` }}
            aria-hidden="true"
          />
        ) : (
          <Image
            key={shape.id}
            className={`${styles.decor} ${styles[shape.position]}`}
            src={shape.src}
            alt=""
            width={267}
            height={387}
          />
        )
      )}

      <div className={styles.inner}>
        <h2 id="creator-cta-heading" className={styles.title}>
          {creatorCta.title}
        </h2>
        <p className={styles.body}>{creatorCta.body}</p>
        <a href="#" className={styles.action}>
          {creatorCta.action}
        </a>
      </div>
    </section>
  );
}
