/**
 * Content for the sign-in page.
 *
 * Copy, field config and provider list are data rather than markup so the form
 * stays presentational, matching the signup route. The shared shell surface,
 * corner mark and artwork live in `@/components/account`.
 */

export const signinCopy = {
  title: "Sign in with ease",
  body: "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
  eyebrow: "Sign In",
  heading: "Welcome Back",
  prompt: "New user?",
  signupHref: "/signup",
  signupLabel: "Create an account",
};

export const signinFields = {
  email: {
    label: "Email",
    placeholder: "designer@example.com",
    name: "email",
    type: "email",
    autoComplete: "email",
  },
  password: {
    label: "Password",
    placeholder: "********",
    name: "password",
    type: "password",
    autoComplete: "current-password",
  },
};

export const signinSubmit = "Sign In";

export const socialProviders = [
  { id: "facebook", label: "Continue with Facebook" },
  { id: "google", label: "Continue with Google" },
];