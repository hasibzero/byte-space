import Hero from "@/components/hero/Hero";
import Logos from "@/components/logos/Logos";
import SkillsSection from "@/components/skills/SkillsSection";
import CategoriesSection from "@/components/categories/CategoriesSection";
import BannerSection from "@/components/banner/BannerSection";
import CreatorCta from "@/components/cta/CreatorCta";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Logos />
      <SkillsSection />
      <CategoriesSection />
      <BannerSection />
      <CreatorCta />
    </div>
  );
}
