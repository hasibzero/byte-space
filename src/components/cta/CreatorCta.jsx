import Image from "next/image";
import { ctaDecorations, creatorCta } from "./ctaData";
import styles from "./CreatorCta.module.css";

/** Intrinsic dimensions of the hero shape exports, keyed by file name. */
const DIMENSIONS = {
  "Frame.png": [267, 387],
  "Cone.png": [190, 189],
  "Cone (1).png": [213, 372],
  "Mask Group.png": [176, 176],
  "Mask Group (1).png": [344, 343],
};

function dimensionsFor(src) {
  const file = src.split("/").pop();
  return DIMENSIONS[file] ?? [200, 200];
}

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
            className={`${styles.decor} ${styles[shape.position]}`}
            style={{
              "--shape": `url("${shape.src}")`,
              "--shape-color": shape.color,
            }}
            aria-hidden="true"
          />
        ) : (
          <Image
            key={shape.id}
            className={`${styles.decor} ${styles[shape.position]}`}
            src={shape.src}
            alt=""
            width={dimensionsFor(shape.src)[0]}
            height={dimensionsFor(shape.src)[1]}
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
