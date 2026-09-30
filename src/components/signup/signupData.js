/**
 * Content for the create-account page.
 *
 * Fields are data rather than markup so adding or renaming an input stays a
 * one-line edit, matching the pattern used by the rest of the site. The shared
 * shell surface, corner mark, artwork and field control live in
 * `@/components/account`.
 */

export const signupCopy = {
  title: "Sign up and come in",
  body: "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost",
  eyebrow: "Create an Account",
  heading: "Welcome to ByteSpace",
  prompt: "Already have an account?",
  signinHref: "/signin",
  signinLabel: "Login",
};

export const signupFields = [
  {
    label: "Full Name",
    placeholder: "Jamie Davis",
    name: "name",
    type: "text",
    autoComplete: "name",
  },
  {
    label: "Email",
    placeholder: "designer@example.com",
    name: "email",
    type: "email",
    autoComplete: "email",
  },
  {
    label: "Password",
    placeholder: "********",
    name: "password",
    type: "password",
    autoComplete: "new-password",
  },
];

export const signupSubmit = "Continue";