/**
 * Shared content for the account routes.
 *
 * Both the sign-in and create-account screens render the same blue grid surface
 * and the same corner glyph, so that shell lives in one place.
 */

/** The design shows the brand glyph alone in the corner, not the wordmark. */
export const accountLogo = {
  src: "/assests/jus-logo.png",
  alt: "ByteSpace",
  width: 29,
  height: 32,
};

/**
 * The artwork is the same supplied export on both screens: a single 552x586 PNG
 * with transparent corners carrying both course cards, the Happy Students card
 * and the decorative shapes in their designed positions.
 */
export const accountArtwork = {
  src: "/assests/Accoun create/Group 7.png",
  alt: "Course cards for Big Data and Build Digital Asset with a Happy Students panel",
  width: 552,
  height: 586,
};