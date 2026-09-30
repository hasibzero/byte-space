import CategoryIcon from "./CategoryIcon";
import { learningCategories } from "./categoriesData";
import styles from "./CategoriesSection.module.css";

/**
 * "Explore Diverse Learning Paths" band: a row of category shortcuts.
 *
 * Presentational only, so it stays a Server Component. Each card links to the
 * matching course filter where one exists.
 */
export default function CategoriesSection() {
  return (
    <section className={styles.section} aria-labelledby="categories-heading">
      <h2 id="categories-heading" className={styles.title}>
        Explore Diverse Learning Paths at Bytespace
      </h2>
      <p className={styles.subtitle}>
        At Bytespace, we believe in empowering individuals through knowledge. Our
        diverse range of courses spans various fields, ensuring there&apos;s
        something for everyone. Unleash your potential and explore our carefully
        curated categories.
      </p>

      <ul className={styles.grid}>
        {learningCategories.map((category) => (
          <li key={category.id}>
            <a href="#" className={styles.card}>
              <span className={styles.badge}>
                <CategoryIcon name={category.icon} className={styles.icon} />
              </span>
              <span className={styles.label}>{category.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
