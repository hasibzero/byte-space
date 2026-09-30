import styles from "./AccountField.module.css";

/**
 * Labelled account field.
 *
 * Both account routes render the same label-above-control pattern, so the
 * markup and metrics live here and each form only supplies its field config.
 */
export default function AccountField({ field }) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={field.name}>
        {field.label}
      </label>
      <input
        id={field.name}
        className={styles.input}
        type={field.type}
        name={field.name}
        autoComplete={field.autoComplete}
        placeholder={field.placeholder}
        required
      />
    </div>
  );
}