import Image from "next/image";
import { avatarPalette } from "./skillsData";
import styles from "./SkillCard.module.css";

function StarIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2Z" />
    </svg>
  );
}

/** Ascending bars used by the difficulty badge. */
function LevelIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="1" y="9" width="3" height="6" rx="1" />
      <rect x="6.5" y="5" width="3" height="10" rx="1" />
      <rect x="12" y="1" width="3" height="14" rx="1" />
    </svg>
  );
}

const MAX_FACES = 4;

/**
 * A single course card: artwork, title, rating, studio byline, difficulty
 * badge, student avatars and price.
 *
 * The artwork is supplied pre-composed, so the overlay pills (lessons,
 * duration, comments) are already baked into the image.
 */
export default function SkillCard({ course }) {
  const faces = Math.min(MAX_FACES, course.students);
  const overflow = course.students - faces;

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image
          className={styles.image}
          src={course.image}
          alt={course.alt}
          width={341}
          height={196}
        />
      </div>

      <div className={styles.body}>
        <div className={styles.heading}>
          <h3 className={styles.title}>{course.title}</h3>
          <p className={styles.rating}>
            <span className={styles.ratingValue}>{course.rating}</span>
            <StarIcon className={styles.star} />
          </p>
        </div>

        <p className={styles.byline}>
          by{" "}
          <a href="#" className={styles.studio}>
            {course.studio}
          </a>
        </p>

        <div className={styles.meta}>
          <span className={styles.level}>
            <LevelIcon className={styles.levelIcon} />
            {course.level}
          </span>

          <div className={styles.students}>
            <ul className={styles.faces}>
              {Array.from({ length: faces }, (_, i) => (
                <li
                  key={i}
                  className={styles.face}
                  style={{ backgroundColor: avatarPalette[i % avatarPalette.length] }}
                  aria-hidden="true"
                />
              ))}
            </ul>
            {overflow > 0 && (
              <span className={styles.overflow}>{overflow}+</span>
            )}
            <span className={styles.srOnly}>
              {course.students} students enrolled
            </span>
          </div>
        </div>

        <p className={styles.priceRow}>
          <span className={styles.price}>${course.price}</span>
          <span className={styles.access}>{course.access}</span>
        </p>
      </div>
    </article>
  );
}
