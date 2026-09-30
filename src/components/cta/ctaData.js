/**
 * Copy for the creator call-to-action band.
 *
 * Decorations reuse the hero shape exports so the two sections share a visual
 * language. `mask` shapes are rendered as CSS masks so they can be recoloured;
 * `image` shapes are placed directly because they carry a gradient that a mask
 * would flatten.
 */

const H = "/assests/hero assests";

export const creatorCta = {
  title: "Unlock Your Potential as a Creator with ByteSpace",
  body: "Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.",
  action: "Join as Creator",
};

/** Positioned by edge so the shapes bleed off the section, as in the design. */
export const ctaDecorations = [
  { id: "scribble", kind: "image", src: `${H}/Frame.png`, alt: "", position: "topLeft" },
  { id: "squiggle", kind: "image", src: `${H}/Mask Group.png`, alt: "", position: "topLeftInner" },
  { id: "greenCone", kind: "image", src: `${H}/Cone (1).png`, alt: "", position: "topRight" },
  { id: "cone", kind: "image", src: `${H}/Cone.png`, alt: "", position: "leftMid" },
  /* Flat white ring, recoloured lime via a mask so it matches the design. */
  { id: "ring", kind: "mask", src: `${H}/Mask Group (1).png`, position: "bottomLeft" },
  { id: "squiggleRight", kind: "image", src: `${H}/Mask Group.png`, alt: "", position: "bottomRight" },
];
