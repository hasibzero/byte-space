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
    avatarSet: 0,
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
    avatarSet: 1,
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
    avatarSet: 2,
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
    avatarSet: 3,
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
    avatarSet: 4,
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
    avatarSet: 5,
    category: "marketing",
  },
];

/**
 * Portrait photos used by the card avatar stacks.
 *
 * These are real people photos served by randomuser.me, so the site depends on
 * that host at runtime. If you would rather avoid the external request, drop
 * four small headshots into the project and point `faces` at local paths.
 */
const PORTRAITS = "https://randomuser.me/api/portraits";

/** Rotated across courses so neighbouring cards do not show the same people. */
export const avatarSets = [
  [`${PORTRAITS}/men/32.jpg`, `${PORTRAITS}/women/44.jpg`, `${PORTRAITS}/women/68.jpg`, `${PORTRAITS}/men/75.jpg`],
  [`${PORTRAITS}/women/21.jpg`, `${PORTRAITS}/men/52.jpg`, `${PORTRAITS}/women/65.jpg`, `${PORTRAITS}/men/11.jpg`],
  [`${PORTRAITS}/men/45.jpg`, `${PORTRAITS}/women/33.jpg`, `${PORTRAITS}/men/84.jpg`, `${PORTRAITS}/women/12.jpg`],
  [`${PORTRAITS}/women/57.jpg`, `${PORTRAITS}/men/62.jpg`, `${PORTRAITS}/women/29.jpg`, `${PORTRAITS}/men/19.jpg`],
  [`${PORTRAITS}/men/73.jpg`, `${PORTRAITS}/women/50.jpg`, `${PORTRAITS}/men/28.jpg`, `${PORTRAITS}/women/90.jpg`],
  [`${PORTRAITS}/women/41.jpg`, `${PORTRAITS}/men/56.jpg`, `${PORTRAITS}/women/17.jpg`, `${PORTRAITS}/men/91.jpg`],
];
