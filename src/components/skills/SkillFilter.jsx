import { skillFilters } from "./skillsData";
import styles from "./SkillFilter.module.css";

/**
 * Category filter chips.
 *
 * Fully controlled: the active id and change handler come from the parent, so
 * this component holds no state of its own.
 */
export default function SkillFilter({ active, onChange }) {
  return (
    <div className={styles.wrap}>
      <ul className={styles.list}>
        {skillFilters.map((filter) => {
          const isActive = filter.id === active;
          return (
            <li key={filter.id}>
              <button
                type="button"
                className={`${styles.chip} ${isActive ? styles.chipActive : ""}`}
                aria-pressed={isActive}
                onClick={() => onChange(filter.id)}
              >
                {filter.label}
              </button>
            </li>
          );
        })}
        <li>
          <a href="#" className={styles.more}>
            + More
          </a>
        </li>
      </ul>
    </div>
  );
}
