"use client";

import Link from "next/link";
import { useState } from "react";
import AccountField from "@/components/account/AccountField";
import { signupCopy, signupFields, signupSubmit } from "./signupData";
import styles from "./SignupForm.module.css";

function EyeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SignupForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  function validateForm(formData) {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (!agreedToTerms) {
      newErrors.terms = "You must agree to the Terms and Privacy Policy";
    }
    return newErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const newErrors = validateForm(data);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);
    setSubmitted(true);
  }

  function handleChange(name, value) {
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  }

  function handleTermsChange(checked) {
    setAgreedToTerms(checked);
    if (checked && errors.terms) {
      setErrors((prev) => ({ ...prev, terms: null }));
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {signupFields.map((field) => (
        <AccountField
          key={field.name}
          field={field}
          error={errors[field.name]}
          onChange={(value) => handleChange(field.name, value)}
          showToggle={field.name === "password"}
          showPassword={showPassword}
          onToggleShowPassword={() => setShowPassword((prev) => !prev)}
        />
      ))}

      <div className={styles.terms}>
        <label className={styles.termsLabel}>
          <input
            type="checkbox"
            name="terms"
            checked={agreedToTerms}
            onChange={(e) => handleTermsChange(e.target.checked)}
            required
          />
          <span>
            I agree to the{" "}
            <a href="/terms" className={styles.termsLink}>Terms of Service</a>{" "}
            and{" "}
            <a href="/privacy" className={styles.termsLink}>Privacy Policy</a>
          </span>
        </label>
        {errors.terms && <span className={styles.error} role="alert">{errors.terms}</span>}
      </div>

      <button className={styles.submit} type="submit" disabled={loading || !agreedToTerms}>
        {loading ? "Creating account..." : submitted ? "Account created" : signupSubmit}
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