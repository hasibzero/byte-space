"use client";

import Link from "next/link";
import { useState } from "react";
import AccountField from "@/components/account/AccountField";
import { signupCopy, signupFields, signupSubmit } from "./signupData";
import styles from "./SignupForm.module.css";

/**
 * Create-account form.
 *
 * There is no authentication backend in this front-end assignment, so the
 * submit handler keeps the user on the page and reports the state inline
 * instead of navigating away.
 */
export default function SignupForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {signupFields.map((field) => (
        <AccountField key={field.name} field={field} />
      ))}

      <button className={styles.submit} type="submit">
        {submitted ? "Account created" : signupSubmit}
      </button>

      <p className={styles.prompt}>
        {signupCopy.prompt}{" "}
        <Link href={signupCopy.signinHref} className={styles.signinLink}>
          {signupCopy.signinLabel}
        </Link>
      </p>
    </form>
  );
}