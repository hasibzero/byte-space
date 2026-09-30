/**
 * Copy and decoration placement for the creator call-to-action band.
 *
 * Decorations reuse the hero shape exports so both sections share a visual
 * language. Two rendering kinds are used:
 *
 *   image - placed as-is, because the shape carries a gradient a mask would
 *           flatten (the lime scribble) or is already the right colour.
 *   mask  - painted through a CSS mask so the shape can take an arbitrary
 *           colour. The source exports are flat white, but the design shows
 *           the ring and the lower squiggle in lime.
 *
 * Positions are percentages of the section box so the composition holds its
 * proportions at any width, and each shape is offset past its edge so it crops
 * at the boundary the way the design does.
 */

const H = "/assests/hero assests";

export const creatorCta = {
  title: "Unlock Your Potential as a Creator with ByteSpace",
  body: "Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.",
  action: "Join as Creator",
};

export const ctaDecorations = [
  {
    id: "scribble",
    kind: "image",
    src: `${H}/Frame.png`,
    position: "scribble",
  },
  {
    id: "squiggleTop",
    kind: "mask",
    src: `${H}/Mask Group.png`,
    color: "#ffffff",
    position: "squiggleTop",
  },
  {
    id: "greenCone",
    kind: "image",
    src: `${H}/Cone (1).png`,
    position: "greenCone",
  },
  {
    id: "coneRight",
    kind: "image",
    src: `${H}/Cone.png`,
    position: "coneRight",
  },
  {
    id: "coneLeft",
    kind: "image",
    src: `${H}/Cone.png`,
    position: "coneLeft",
  },
  {
    id: "ring",
    kind: "mask",
    src: `${H}/Mask Group (1).png`,
    color: "#cbf926",
    position: "ring",
  },
  {
    id: "squiggleBottom",
    kind: "mask",
    src: `${H}/Mask Group.png`,
    color: "#cbf926",
    position: "squiggleBottom",
  },
];
