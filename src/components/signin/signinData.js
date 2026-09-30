/**
 * Content for the sign-in page.
 *
 * Copy, field config and provider list are data rather than markup so the form
 * stays presentational, matching the signup route.
 */

/** Same corner mark as the create-account screen. */
export const signinLogo = {
  src: "/assests/jus-logo.png",
  alt: "ByteSpace",
  width: 29,
  height: 32,
};

export const signinCopy = {
  title: "Sign in with ease",
  body: "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
  eyebrow: "Sign In",
  heading: "Welcome Back",
  prompt: "New user?",
  signupHref: "/signup",
  signupLabel: "Create an account",
};

/**
 * The artwork is the same supplied export used by the create-account screen: it
 * is a single 552x586 PNG with transparent corners carrying both course cards,
 * the Happy Students card and the decorative shapes in their designed
 * positions.
 */
export const signinArtwork = {
  src: "/assests/Accoun create/Group 7.png",
  alt: "Course cards for Big Data and Build Digital Asset with a Happy Students panel",
  width: 552,
  height: 586,
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