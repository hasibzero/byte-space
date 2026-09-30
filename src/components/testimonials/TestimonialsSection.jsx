import TestimonialCard from "./TestimonialCard";
import { testimonials, testimonialsIntro } from "./testimonialsData";
import styles from "./TestimonialsSection.module.css";

/**
 * Community testimonials.
 *
 * The wash behind the cards is drawn with CSS radial gradients instead of a
 * raster export: the source artwork is a static pastel blur whose corners are
 * easy to crop away, and percentage-based gradients hold the same composition at
 * any viewport width.
 */
export default function TestimonialsSection() {
  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 id="testimonials-heading" className={styles.title}>
            {testimonialsIntro.title}
          </h2>
          <p className={styles.body}>{testimonialsIntro.body}</p>
        </div>

        <ul className={styles.grid}>
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className={styles.cell}>
              <TestimonialCard {...testimonial} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}