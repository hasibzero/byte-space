/**
 * Content for the create-account page.
 *
 * Fields are data rather than markup so adding or renaming an input stays a
 * one-line edit, matching the pattern used by the rest of the site. The shared
 * shell surface, corner mark and artwork live in `@/components/account`.
 */

export const signupCopy = {
  title: "Sign up and come in",
  body: "Discover a world of knowledge at ByteSpace, where you can learn, create, and grow. Sign up today and take your first step towards a brighter future.",
  consentBefore: "By creating an account, you agree to our",
  consentAfter: "and",
};

export const signupFields = {
  fullName: {
    label: "Full name",
    placeholder: "John Doe",
    name: "name",
    type: "text",
    autoComplete: "name",
  },
  email: {
    label: "Email address",
    placeholder: "you@company.com",
    name: "email",
    type: "email",
    autoComplete: "email",
  },
  password: {
    label: "Password",
    placeholder: "Enter your password",
    name: "password",
    type: "password",
    autoComplete: "new-password",
  },
  country: {
    label: "Country",
    name: "country",
  },
};

/** First entry doubles as the visible placeholder of the select. */
export const countries = [
  "Country",
  "Australia",
  "Brazil",
  "Canada",
  "Germany",
  "India",
  "Indonesia",
  "Japan",
  "Mexico",
  "Netherlands",
  "Nigeria",
  "Singapore",
  "United Kingdom",
  "United States",
];

export const signupConsent = {
  terms: { label: "Terms of Service", href: "#" },
  privacy: { label: "Privacy Policy", href: "#" },
};

export const signupSubmit = "Create Account";