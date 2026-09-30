/**
 * Site footer content.
 *
 * Every link is plain data so the footer stays presentational and adding a new
 * column or link only requires appending to an existing array.
 */

const LOGO = {
  // The header logo is white, so the footer uses the black variant instead.
  // Both exports share the same 171x37 canvas.
  file: "blacklogo.png",
  width: 171,
  height: 37,
  alt: "ByteSpace",
};

export const footerBrand = {
  logo: `/assests/${LOGO.file}`,
  logoWidth: LOGO.width,
  logoHeight: LOGO.height,
  logoAlt: LOGO.alt,
};

export const newsletter = {
  body: "Stay Up to date with our latest features and releases by joining our newsletter.",
  placeholder: "Enter your email",
  label: "Email address",
  button: "Search",
  consentBefore: "By subscribing, you agree to our",
  policyLabel: "Privacy Policy",
  consentAfter: "and consent to receive updates from our company.",
  policyHref: "#",
};

/** Three link columns, rendered left to right as they appear in the design. */
export const footerColumns = [
  {
    id: "featured",
    links: [
      { label: "Featured Courses", href: "#" },
      { label: "Featured Categories", href: "#" },
      { label: "Business", href: "#" },
      { label: "IT", href: "#" },
      { label: "Design", href: "#" },
    ],
  },
  {
    id: "topics",
    links: [
      { label: "Development", href: "#" },
      { label: "Marketing", href: "#" },
      { label: "Photography", href: "#" },
      { label: "Finance", href: "#" },
      { label: "Sport", href: "#" },
    ],
  },
  {
    id: "company",
    links: [
      { label: "Become a Creator", href: "#" },
      { label: "Affiliate Program", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Help", href: "#" },
      { label: "About", href: "#" },
    ],
  },
];

export const footerLegal = {
  copyright: "© 2023 ByteSpace. All rights reserved.",
  links: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookies Settings", href: "#" },
  ],
};