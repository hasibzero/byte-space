"use client";

import { useState } from "react";
import SkillCard from "./SkillCard";
import SkillFilter from "./SkillFilter";
import { courses } from "./skillsData";
import styles from "./SkillsSection.module.css";

/**
 * "Discover Your Passion" course section: heading, category filters and the
 * course card grid.
 *
 * Client component because the active category drives which cards render.
 * Featured shows everything; any other category narrows to matching courses.
 */
export default function SkillsSection() {
  const [active, setActive] = useState("featured");

  const visible =
    active === "featured"
      ? courses
      : courses.filter((course) => course.category === active);

  return (
    <section className={styles.section} id="courses">
      <div className={styles.inner}>
        <h2 className={styles.title}>
          Discover Your Passion,
          <br className={styles.titleBreak} />
          Build Your Skills
        </h2>
        <p className={styles.subtitle}>
          At ByteSpace Courses, we bring you closer to the changing trends.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>

        <SkillFilter active={active} onChange={setActive} />

        <ul className={styles.grid}>
          {visible.map((course) => (
            <li key={course.id} className={styles.cell}>
              <SkillCard course={course} />
            </li>
          ))}
        </ul>

        {visible.length === 0 && (
          <p className={styles.empty}>
            No courses in this category yet. Try another filter.
          </p>
        )}
      </div>
    </section>
  );
}
