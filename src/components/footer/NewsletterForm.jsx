"use client";

import { useState } from "react";
import styles from "./NewsletterForm.module.css";

/**
 * Newsletter sign-up form.
 *
 * The endpoint is not part of this front-end assignment, so submitting the form
 * only confirms locally instead of navigating away from the landing page.
 */
export default function NewsletterForm({
  placeholder,
  label,
  button,
  consentBefore,
  policyLabel,
  consentAfter,
  policyHref,
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <input
          className={styles.input}
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={placeholder}
          aria-label={label}
          required
        />
        <button className={styles.button} type="submit">
          {submitted ? "Subscribed" : button}
        </button>
      </div>

      <p className={styles.consent}>
        {consentBefore} <a href={policyHref}>{policyLabel}</a> {consentAfter}
      </p>
    </form>
  );
}