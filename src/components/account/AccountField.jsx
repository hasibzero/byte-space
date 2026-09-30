import styles from "./AccountField.module.css";

/**
 * Labelled account field.
 *
 * Both account routes render the same label-above-control pattern, so the
 * markup and metrics live here and each form only supplies its field config.
 */
export default function AccountField({ field, error, onChange, showToggle, showPassword, onToggleShowPassword }) {
  const inputType = showToggle ? (showPassword ? "text" : field.type) : field.type;

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={field.name}>
        {field.label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          id={field.name}
          className={styles.input}
          type={inputType}
          name={field.name}
          autoComplete={field.autoComplete}
          placeholder={field.placeholder}
          required
          onChange={(e) => onChange?.(e.target.value)}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${field.name}-error` : undefined}
        />
        {showToggle && (
          <button
            type="button"
            className={styles.toggle}
            onClick={onToggleShowPassword}
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-pressed={showPassword}
          >
            {showPassword ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        )}
      </div>
      {error && <span id={`${field.name}-error`} className={styles.error} role="alert">{error}</span>}
    </div>
  );
}