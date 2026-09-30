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
  { id: "uxui", label: "UX/UI Design" },
  { id: "creative", label: "Creative Marketing" },
  { id: "illustration", label: "Digital Illustration" },
  { id: "film", label: "Film & Video" },
  { id: "code", label: "Code" },
  { id: "data", label: "Data Science & Entrepreneurship" },
  { id: "graphic", label: "Graphic Design" },
  { id: "photography", label: "Photography" },
  { id: "productivity", label: "Productivity" },
  { id: "web", label: "Web Development" },
  { id: "cooking", label: "Cooking" },
];

const A = "/assests/Skills card assests";

/**
 * The supplied card artwork already contains the photo plus its overlay pills
 * (lessons / duration / comments), so only the title, rating, instructor and
 * price are rendered in markup.
 */
export const courses = [
  {
    id: "figma",
    title: "Learn Figma from Basics",
    image: `${A}/Frame.png`,
    alt: "Designer sketching wireframe layouts for a mobile app",
    rating: 4.5,
    instructor: "Ava Rodriguez",
    price: 25,
    was: 35,
    discount: "30% off",
    category: "uxui",
  },
  {
    id: "digital-assets",
    title: "Build Digital Assets",
    image: `${A}/Frame (1).png`,
    alt: "Grid of illustrated interface icons",
    rating: 4.5,
    instructor: "Marcus Chen",
    price: 25,
    was: 35,
    discount: "30% off",
    category: "illustration",
  },
  {
    id: "big-data",
    title: "The Power of Big Data",
    image: `${A}/Frame (2).png`,
    alt: "Analytics dashboard with charts and graphs",
    rating: 4.5,
    instructor: "Priya Nair",
    price: 25,
    was: 35,
    discount: "30% off",
    category: "data",
  },
  {
    id: "productivity",
    title: "Balancing Productivity with Focus",
    image: `${A}/Frame (3).png`,
    alt: "Minimal desk setup with a monitor showing the words do more",
    rating: 4.5,
    instructor: "Daniel Okafor",
    price: 25,
    was: 35,
    discount: "30% off",
    category: "productivity",
  },
  {
    id: "money",
    title: "Mastering Money Management",
    image: `${A}/Frame (4).png`,
    alt: "Rising line graph on a laptop screen",
    rating: 4.5,
    instructor: "Sofia Marino",
    price: 25,
    was: 35,
    discount: "30% off",
    category: "data",
  },
  {
    id: "startup",
    title: "From Idea to Startup Success",
    image: `${A}/Frame (5).png`,
    alt: "Team planning at a whiteboard covered in sticky notes",
    rating: 4.5,
    instructor: "Lena Fischer",
    price: 25,
    was: 35,
    discount: "30% off",
    category: "marketing",
  },
];
