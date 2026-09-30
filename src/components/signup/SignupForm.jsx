"use client";

import { useState } from "react";
import { countries, signupConsent, signupCopy, signupFields, signupSubmit } from "./signupData";
import styles from "./SignupForm.module.css";

/**
 * Create-account form.
 *
 * There is no authentication backend in this front-end assignment, so the
 * submit handler keeps the user on the page and reports the state inline
 * instead of navigating away.
 */
export default function SignupForm() {
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.field}>
          <input
            className={styles.input}
            type={signupFields.fullName.type}
            name={signupFields.fullName.name}
            autoComplete={signupFields.fullName.autoComplete}
            placeholder={signupFields.fullName.placeholder}
            aria-label={signupFields.fullName.label}
            required
          />
        </div>

        <div className={styles.field}>
          <input
            className={styles.input}
            type={signupFields.email.type}
            name={signupFields.email.name}
            autoComplete={signupFields.email.autoComplete}
            placeholder={signupFields.email.placeholder}
            aria-label={signupFields.email.label}
            required
          />
        </div>
      </div>

      <div className={styles.field}>
        <input
          className={styles.input}
          type={signupFields.password.type}
          name={signupFields.password.name}
          autoComplete={signupFields.password.autoComplete}
          placeholder={signupFields.password.placeholder}
          aria-label={signupFields.password.label}
          required
        />
      </div>

      <div className={styles.field}>
        <select
          className={styles.input}
          name={signupFields.country.name}
          aria-label={signupFields.country.label}
          defaultValue=""
          required
        >
          {countries.map((country, index) => (
            <option key={country} value={index === 0 ? "" : country} disabled={index === 0}>
              {country}
            </option>
          ))}
        </select>

        <svg className={styles.chevron} viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
          <path
            d="m5 7.5 5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <label className={styles.consent}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          required
        />
        <span className={styles.consentText}>
          {signupCopy.consentBefore} <a href={signupConsent.terms.href}>{signupConsent.terms.label}</a>{" "}
          {signupCopy.consentAfter} <a href={signupConsent.privacy.href}>{signupConsent.privacy.label}</a>.
        </span>
      </label>

      <button className={styles.submit} type="submit">
        {submitted ? "Account created" : signupSubmit}
      </button>
    </form>
  );
}