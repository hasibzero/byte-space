import { SearchIcon } from "./icons";
import { heroCopy } from "./heroData";
import styles from "./HeroSearch.module.css";

/**
 * Course search field.
 *
 * This is a Server Component, so no event handlers are attached here — the
 * form falls back to native browser submission via `action`. Wiring it to a
 * real search route later only requires changing `action`.
 */
export default function HeroSearch() {
  return (
    <form className={styles.form} action="#" role="search">
      <div className={styles.field}>
        <SearchIcon className={styles.icon} />
        <input
          className={styles.input}
          type="search"
          name="q"
          placeholder={heroCopy.searchPlaceholder}
          aria-label={heroCopy.searchLabel}
        />
      </div>
      <button type="submit" className={styles.button}>
        {heroCopy.searchButton}
      </button>
    </form>
  );
}
