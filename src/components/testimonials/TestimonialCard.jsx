import Image from "next/image";
import styles from "./TestimonialCard.module.css";

/**
 * A single community testimonial.
 *
 * Quotes are rendered as regular text wrapped in typographic quotes, matching the
 * reference where the quotation marks sit inline with the text block.
 */
export default function TestimonialCard({ name, role, avatar, alt, quote }) {
  return (
    <figure className={styles.card}>
      <Image className={styles.avatar} src={avatar} alt={alt} width={72} height={72} />

      <figcaption className={styles.identity}>
        <p className={styles.name}>{name}</p>
        <p className={styles.role}>{role}</p>
      </figcaption>

      <blockquote className={styles.quote}>{quote}</blockquote>
    </figure>
  );
}