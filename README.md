# ByteSpace

A front-end build of the **ByteSpace** course marketplace — landing page plus sign-in and create-account screens — implemented from the Figma design.

**Design:** [Figma — ByteSpace New](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0)
**Live:** https://byte-space-three.vercel.app/

---

## Tech Stack

| | |
|---|---|
| **Framework** | Next.js 16.3.7 — App Router, Turbopack |
| **UI** | React 19.2.8 (plain JavaScript, no TypeScript) |
| **Styling** | CSS Modules + CSS custom properties, fluid `clamp()` sizing |
| **Font** | Poppins 400–800 via `next/font/google` |
| **Images** | `next/image` with explicit dimensions |
| **Deploy** | Vercel (static prerender) |

No CSS framework, no component library, no state-management library — `package.json` depends only on `next`, `react`, and `react-dom`. Every style is hand-written per component.

---

## Getting Started

```bash
npm install
npm run dev     # http://localhost:3001
```

| Script | Does |
|---|---|
| `npm run dev` | Dev server on **port 3001** with Turbopack |
| `npm run build` | Production build |
| `npm start` | Serve the production build |

Path alias `@/*` → `./src/*` (set in `jsconfig.json`).

---

## Routes

| Route | Rendering | Contents |
|---|---|---|
| `/` | Static | Full landing page — 8 sections |
| `/signin` | Static | Sign-in: email, password, remember me, social providers |
| `/signup` | Static | Create-account: name, email, password, terms consent |

All three prerender to static HTML.

---

## Project Structure

```
src/
├── app/
│   ├── layout.js              # Root layout — Poppins, metadata, design tokens
│   ├── globals.css            # Custom properties, resets, global rules
│   ├── page.js                # Landing page composition
│   ├── page.module.css
│   ├── signin/page.js
│   └── signup/page.js
└── components/
    ├── hero/          # Header + nav, search, layered artwork scene
    ├── logos/         # Partner logo grid
    ├── skills/        # Course cards + filter tabs        (client)
    ├── categories/    # Learning category grid
    ├── banner/        # Learn / Teach blocks with stats
    ├── cta/           # "Join as Creator" band
    ├── testimonials/  # Three testimonial cards
    ├── footer/        # Link columns + newsletter          (client)
    ├── signin/        # Sign-in screen + form              (client)
    ├── signup/        # Create-account screen + form       (client)
    └── account/       # Shared shell, field control, artwork

public/assests/        # Supplied PNG exports (note: "assests" is intentional)
```

---

## Architecture

### Data-driven content

Copy, asset manifests and field configuration live in `*Data.js` files rather than in JSX. Adding a course, partner or form field is a data edit, not a markup edit.

```js
// skills/skillsData.js
export const courses = [
  {
    id: "ui-ux",
    title: "UI/UX Design Masterclass",
    image: "/assests/Skills card assests/Frame.png",
    alt: "…",
    rating: 4.8, studio: "…", level: "Beginner",
    students: 1200, price: 0, access: "…",
    avatarSet: [...], category: "uxui",
  },
];
```

### Only four client components

`SkillsSection` (filter state), `NewsletterForm` (email + submitted), `SigninForm` and `SignupForm` (validation, loading, password visibility, consent). Everything else renders on the server — the landing page ships close to zero JavaScript. Presentational children like `SkillFilter` receive handlers as props and inherit the client boundary from their parent; they carry no `"use client"` of their own.

### Shared account shell

`AccountShell` owns the blue grid surface, corner brand mark and content column for both account routes. `AccountField` owns the label-above-control pattern, password toggle, error display and focus ring. Both routes supply only their own copy and form.

### Responsive strategy

Desktop-first, using `max-width` media queries only — no `min-width`. Fluid sizing is handled with `clamp()` and `minmax(0, 1fr)` grid tracks so most resizing needs no new breakpoint.

Widths in use: `1200, 1024, 1000, 980, 900, 760, 720, 640, 620, 560, 520, 360` plus `max-height: 560, 520, 380` and one landscape query for short screens.

### Design tokens

```css
--hero-bg: #1142e8;        /* primary blue */
--hero-accent: #cbf926;    /* lime accent */
--hero-grid-line: rgba(255,255,255,.13);
--surface-subtle: #f5f5f6;
```

Defined once in `globals.css` and consumed by every module.

---

## Accessibility

- **Validation** — `role="alert"` errors, `aria-invalid`, `aria-describedby` wired to the message via `${field.name}-error`
- **Widget state** — `aria-pressed` on filter chips and the password toggle
- **Landmarks** — `aria-label` on `<nav>`, `aria-labelledby` on headed `<section>`s, semantic `<header>/<main>/<footer>/<figure>/<blockquote>`
- **Focus** — `:focus-visible` rings throughout, never bare `:focus`
- **Images** — descriptive `alt` on content images, `alt=""` on the ~10 decorative shapes, `aria-hidden` + `focusable="false"` on inline SVG icons
- **Touch** — 44px+ targets; 52px inputs at 16px font so iOS Safari does not zoom on focus
- **Motion** — hover transitions only, no autoplay

---

## Notes & Known Limitations

- **No backend.** Sign-in, sign-up and newsletter submit handlers simulate success inline (with a brief loading state). Social provider buttons are visual affordances — no OAuth flow is wired.
- **External avatars.** 27 portrait images load from `randomuser.me`, allow-listed in `next.config.mjs`. The site depends on that host being reachable; swap `avatarSets` / `testimonials` in the data files for local images to remove the dependency.
- **Asset paths.** `public/assests` is spelled as supplied by the design export and the paths are hardcoded in the data files, including the space in `hero assests`. Five unused `create-next-app` SVGs remain at `public/` root.
- **Hydration.** `<body>` carries `suppressHydrationWarning` to absorb attributes injected by browser extensions before React hydrates.

---

## Git Workflow

Work is on feature branches, merged to `main` through pull requests:

```
feature/hero-section … feature/footer-section   # one per landing section
feature/signin-page, feature/signup-page        # account screens
refactor/section-spacing                        # cross-section spacing pass
refactor/account-responsive                     # mobile + form polish
```

Conventional commit prefixes: `feat`, `fix`, `refactor`, `polish`, `chore`.

---

## Development Notes

Built with AI pair-programming (Kilo / Claude) to accelerate scaffolding, responsive logic and validation patterns. All generated output was reviewed, built, and checked against the Figma reference — `npm run build` passes clean.
