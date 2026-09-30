"use client";

import Link from "next/link";
import { useState } from "react";
import AccountField from "@/components/account/AccountField";
import { signinCopy, signinFields, signinSubmit, socialProviders } from "./signinData";
import styles from "./SigninForm.module.css";

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.25 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22C18.34 21.25 22 17.08 22 12.06Z"
      />
    </svg>
  );
}

function GoogleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="#4285F4"
        d="M21.6 12.23c0-.71-.06-1.4-.18-2.06H12v3.9h5.38a4.6 4.6 0 0 1-2 3.02v2.54h3.24c1.9-1.75 2.98-4.33 2.98-7.4Z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.7 0 4.97-.9 6.63-2.43l-3.24-2.54c-.9.6-2.05.96-3.39.96-2.6 0-4.8-1.76-5.59-4.12H3.06v2.62A10 10 0 0 0 12 22Z"
      />
      <path
        fill="#FBBC05"
        d="M6.41 13.87A6 6 0 0 1 6.1 12c0-.65.11-1.28.31-1.87V7.5H3.06A10 10 0 0 0 2 12c0 1.61.38 3.14 1.06 4.5l3.35-2.63Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.98c1.47 0 2.79.5 3.82 1.5l2.87-2.87C16.96 2.98 14.7 2 12 2A10 10 0 0 0 3.06 7.5l3.35 2.63C7.2 7.75 9.4 5.98 12 5.98Z"
      />
    </svg>
  );
}

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

const providerIcons = {
  facebook: FacebookIcon,
  google: GoogleIcon,
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SigninForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  function validateForm(formData) {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
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

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {Object.values(signinFields).map((field) => (
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

      <div className={styles.options}>
        <label className={styles.remember}>
          <input
            type="checkbox"
            name="remember"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <span>Remember me</span>
        </label>
        <Link href="/forgot-password" className={styles.forgotLink}>
          Forgot password?
        </Link>
      </div>

      <button className={styles.submit} type="submit" disabled={loading}>
        {loading ? "Signing in..." : submitted ? "Signed in" : signinSubmit}
      </button>

      <div className={styles.divider}>
        <span className={styles.rule} />
        <span className={styles.dividerText}>or</span>
        <span className={styles.rule} />
      </div>

      <ul className={styles.providers}>
        {socialProviders.map((provider) => {
          const Icon = providerIcons[provider.id];
          return (
            <li key={provider.id}>
              <button
                className={styles.provider}
                type="button"
                aria-label={provider.label}
                disabled={loading}
              >
                <Icon className={styles.providerIcon} />
              </button>
            </li>
          );
        })}
      </ul>

      <p className={styles.prompt}>
        {signinCopy.prompt}{" "}
        <Link href={signinCopy.signupHref} className={styles.signupLink}>
          {signinCopy.signupLabel}
        </Link>
      </p>
    </form>
  );
}