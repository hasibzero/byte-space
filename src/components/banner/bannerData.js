/**
 * Content for the promotional banner band.
 *
 * Each block pairs a copy column with a pre-composed artwork export. The
 * artwork already contains its floating stat cards, so only the heading, body
 * copy and supporting lists are rendered in markup.
 */

const B = "/assests/banners";

export const bannerBlocks = [
  {
    id: "learn",
    title: "Your Path to Professional Growth Starts Here!",
    body: "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.",
    media: {
      src: `${B}/Frame 11.png`,
      alt: "Student with headphones and a laptop, next to a course card and a learning progress panel",
      width: 703,
      height: 697,
    },
    stats: [
      { value: "12K", label: "Students" },
      { value: "70+", label: "Courses" },
      { value: "16", label: "Creators" },
    ],
    /* Media sits to the right of the copy. */
    reverse: false,
  },
  {
    id: "teach",
    title: "Create & Manage Courses Easily.",
    lead: "ByteSpace",
    body: "supports individuals or entities in the creation, publication, and administration of educational courses.",
    media: {
      src: `${B}/Frame 12.png`,
      alt: "Creator with a tablet, next to revenue panels and a happy students card",
      width: 587,
      height: 719,
    },
    points: [
      "Share Your Expertise",
      "Monetize Your Passion",
      "Flexibility and Autonomy",
      "Build a Community",
    ],
    /* Artwork flips to the left of the copy. */
    reverse: true,
  },
];

/**
 * Full-bleed gradient behind the whole band. Rendered with `fill`, so it
 * needs no intrinsic dimensions.
 */
export const bannerBackground = {
  src: `${B}/Frame 15.png`,
};
