/**
 * Course catalogue and category filters for the skills section.
 *
 * Course records are plain data so the card grid can stay presentational and
 * new entries only require appending to the array.
 */

export const skillFilters = [
  { id: "featured", label: "Featured" },
  { id: "music", label: "Music" },
  { id: "drawing", label: "Drawing & Painting" },
  { id: "marketing", label: "Marketing" },
  { id: "animation", label: "Animation" },
  { id: "social", label: "Social Media" },
  { id: "uxui", label: "UI/UX Design" },
  { id: "creative", label: "Creative Marketing" },
  { id: "illustration", label: "Digital Illustration" },
  { id: "film", label: "Film & Video" },
  { id: "crafts", label: "Crafts" },
  { id: "freelance", label: "Freelance & Entrepreneurship" },
  { id: "graphic", label: "Graphic Design" },
  { id: "photography", label: "Photography" },
  { id: "productivity", label: "Productivity" },
  { id: "web", label: "Web Development" },
  { id: "data", label: "Data Science" },
  { id: "cooking", label: "Cooking" },
];

const A = "/assests/Skills card assests";

/**
 * The supplied card artwork already contains the photo plus its overlay pills
 * (lessons / duration / comments), so the card renders only the metadata row
 * below it in markup.
 *
 * `students` drives the avatar stack: the first four are shown as faces and
 * the remainder is summarised by the count bubble.
 */
export const courses = [
  {
    id: "figma",
    title: "Learn Figma from Basic",
    image: `${A}/Frame.png`,
    alt: "Designer sketching wireframe layouts for a mobile app",
    rating: 4.5,
    studio: "purepearl studio",
    level: "Beginner",
    students: 26,
    price: 25,
    access: "/lifetime",
    category: "uxui",
  },
  {
    id: "digital-assets",
    title: "Build Digital Asset",
    image: `${A}/Frame (1).png`,
    alt: "Grid of illustrated interface icons",
    rating: 4.5,
    studio: "purepearl studio",
    level: "Beginner",
    students: 26,
    price: 25,
    access: "/lifetime",
    category: "illustration",
  },
  {
    id: "big-data",
    title: "The Power of Big Data",
    image: `${A}/Frame (2).png`,
    alt: "Analytics dashboard with charts and graphs",
    rating: 4.5,
    studio: "purepearl studio",
    level: "Beginner",
    students: 26,
    price: 25,
    access: "/lifetime",
    category: "data",
  },
  {
    id: "productivity",
    title: "Balancing Productivity and Focus",
    image: `${A}/Frame (3).png`,
    alt: "Minimal desk setup with a monitor showing the words do more",
    rating: 4.5,
    studio: "purepearl studio",
    level: "Beginner",
    students: 26,
    price: 25,
    access: "/lifetime",
    category: "productivity",
  },
  {
    id: "money",
    title: "Mastering Money Management",
    image: `${A}/Frame (4).png`,
    alt: "Rising line graph on a laptop screen",
    rating: 4.5,
    studio: "purepearl studio",
    level: "Beginner",
    students: 26,
    price: 25,
    access: "/lifetime",
    category: "data",
  },
  {
    id: "startup",
    title: "From Idea to Startup Success",
    image: `${A}/Frame (5).png`,
    alt: "Team planning at a whiteboard covered in sticky notes",
    rating: 4.5,
    studio: "purepearl studio",
    level: "Beginner",
    students: 26,
    price: 25,
    access: "/lifetime",
    category: "marketing",
  },
];

/** Face colours cycled through for the avatar stack. */
export const avatarPalette = ["#f4a9b8", "#f7c948", "#8fd3f4", "#b9a7f0"];
