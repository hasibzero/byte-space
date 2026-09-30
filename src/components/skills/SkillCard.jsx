import Image from "next/image";
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

/** Initials taken from the instructor's name, used for the avatar. */
function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/**
 * A single course card: artwork, title, rating, instructor and price.
 *
 * The artwork is supplied pre-composed, so the overlay pills (lessons,
 * duration, comments) are already baked into the image.
 */
export default function SkillCard({ course }) {
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
            <StarIcon className={styles.star} />
            <span className={styles.ratingValue}>{course.rating}</span>
          </p>
        </div>

        <div className={styles.instructor}>
          <span className={styles.avatar} aria-hidden="true">
            {initials(course.instructor)}
          </span>
          <span className={styles.instructorName}>{course.instructor}</span>
          <span className={styles.pro}>Pro</span>
        </div>

        <p className={styles.priceRow}>
          <span className={styles.price}>${course.price}</span>
          <span className={styles.was}>${course.was}</span>
          <span className={styles.discount}>{course.discount}</span>
        </p>
      </div>
    </article>
  );
}
