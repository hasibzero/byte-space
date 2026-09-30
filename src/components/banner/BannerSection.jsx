import Image from "next/image";
import { bannerBackground, bannerBlocks } from "./bannerData";
import styles from "./BannerSection.module.css";

function CheckIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path
        d="m7 12.5 3.2 3.2L17 9"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Promotional banner band: two alternating copy/artwork rows over a
 * full-bleed gradient.
 *
 * The artwork exports already contain their floating stat cards, so this
 * component only renders the headings, body copy, stats and checklist.
 */
export default function BannerSection() {
  return (
    <section className={styles.section} aria-label="Why ByteSpace">
      <Image
        className={styles.background}
        src={bannerBackground.src}
        alt=""
        fill
        sizes="100vw"
      />

      <div className={styles.inner}>
        {bannerBlocks.map((block) => (
          <div
            key={block.id}
            className={`${styles.block} ${block.reverse ? styles.reverse : ""}`}
          >
            <div className={styles.copy}>
              <h2 className={styles.title}>{block.title}</h2>

              {block.body && (
                <p className={styles.body}>
                  {block.lead && <strong className={styles.lead}>{block.lead} </strong>}
                  {block.body}
                </p>
              )}

              {block.stats && (
                <dl className={styles.stats}>
                  {block.stats.map((stat) => (
                    <div key={stat.label} className={styles.stat}>
                      <dd className={styles.statValue}>{stat.value}</dd>
                      <dt className={styles.statLabel}>{stat.label}</dt>
                    </div>
                  ))}
                </dl>
              )}

              {block.points && (
                <ul className={styles.points}>
                  {block.points.map((point) => (
                    <li key={point} className={styles.point}>
                      <CheckIcon className={styles.check} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className={styles.media}>
              <Image
                className={styles.artwork}
                src={block.media.src}
                alt={block.media.alt}
                width={block.media.width}
                height={block.media.height}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
